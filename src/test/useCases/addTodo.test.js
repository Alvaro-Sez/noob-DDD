import makeAddTodo from "../../useCases/addTodo.useCase";

describe("add new todo",()=>{
    
    const todoDbMock = {
        findTodoById: jest.fn(),
        addTodo: jest.fn() 
    }
    
    afterEach(()=> jest.clearAllMocks())

    const addTodoMock = makeAddTodo({ todoDb: todoDbMock })
    const todoData = {
        descriptionTask:"jsafdiajfg"
    }

    it("should save new todo if not alredy exist", async ()=>{
        const exist = false
        
        todoDbMock.findTodoById.mockReturnValue(exist)
        
        await addTodoMock(todoData);
        expect(todoDbMock.findTodoById).toBeCalledTimes(1);
        expect(todoDbMock.addTodo).toBeCalledTimes(1);
    })

    it("should error when todo alredy exist", async () => {
        const exist = true
        todoDbMock.findTodoById.mockReturnValue(exist)
        await (expect(addTodoMock(todoData))).rejects.toThrowError("todo alredy exist")
    })


})