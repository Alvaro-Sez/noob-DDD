import makeListTodos from "../../useCases/listTodos.useCase";

describe("list todos", ()=>{
    const todoDbMock = { findTodos: jest.fn() }
    const listTodosMock = makeListTodos(todoDbMock)

    it("should list all todos", async ()=>{
        await listTodosMock();
        expect(todoDbMock.findTodos).toBeCalledTimes(1);
    })
})