export default function makePostTodo({ addTodo }) {
    return async function postTodo(httpRequest) {
        try{
            const body = httpRequest.body;
            const posted = await addTodo(body);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted }
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