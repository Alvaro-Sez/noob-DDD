import makeListTodos from "../../useCases/listTodos.useCase";


describe("todo list", ()=> {
    const todos = ["some todos..."]
    const todoDbMock = { findTodos: jest.fn() }
    const listTodosMock = makeListTodos({todoDb:todoDbMock})
    
    afterEach(()=> jest.clearAllMocks() )
    
    it("should list all todos", async ()=>{
        todoDbMock.findTodos.mockReturnValue(todos)
        await listTodosMock();
        expect(todoDbMock.findTodos).toBeCalledTimes(1);
    })

    it("should error when no todos retrieved", async ()=> {
        todoDbMock.findTodos.mockReturnValue(null)
        await expect(listTodosMock()).rejects.toThrowError("there are no todos in the db")
    })

})




