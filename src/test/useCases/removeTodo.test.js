import makeRemoveTodo from "../../useCases/removeTodo.useCase";


describe("delete todo",() => {
    const todoDbMock = {
        findTodoById: jest.fn(),
        deleteTodo: jest.fn()
    }

    afterEach(()=> jest.clearAllMocks())

    const removeTodoMock = makeRemoveTodo({todoDb:todoDbMock})

    it("should delete todo by id", async () => {
        
        const id = 'id';
        const todoFound = { todofound: "todo"}
        todoDbMock.findTodoById.mockReturnValue(todoFound)

        await removeTodoMock({_id:id})

        expect(todoDbMock.findTodoById).toHaveBeenCalledTimes(1)
        expect(todoDbMock.findTodoById).toBeCalledWith(id)
        expect(todoDbMock.deleteTodo).toHaveBeenCalledTimes(1)
        expect(todoDbMock.deleteTodo).toBeCalledWith(todoFound)
    })

    it("should error when id is not provided", async () => {

        const id = null;
        
        await expect(removeTodoMock({_id:id})).rejects.toThrow("you must introduce a todo id")
    })

    it("should error when todo does not exist", async () => {

        const id = 'id'
        todoDbMock.findTodoById.mockReturnValue(null)

        
        await expect( removeTodoMock({_id:id})).rejects.toThrow("todo does not exist")
        expect(todoDbMock.findTodoById).toHaveBeenCalledTimes(1)
        expect(todoDbMock.findTodoById).toBeCalledWith(id)
        expect(todoDbMock.deleteTodo).toHaveBeenCalledTimes(0)
    })

})