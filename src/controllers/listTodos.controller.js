export default function makeListTodos({ listTodos }) {
    return async function listTodos(httpRequest) {
        try {
            const todos = await listTodos();
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode:200,
                body: { todos }
            }                    
        } catch (e) {
            console.log(e)

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 404,
                body: {
                    error: e.message
                }
            }
        }
    }
}