export default function makeDeleteTodo( {removeTodo} ) {
    return async function deleteTodo(httpRequest) {
        try{
            const body = httpRequest.body;
            const deleted = await removeTodo(body.params)

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: deleted === null ? 200 : 404,
                body: { deleted }
            }
        } catch (e) {
            console.log(e)

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
        
    }
}