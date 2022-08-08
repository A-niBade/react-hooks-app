const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-reducer/TodoApp");
const { useTodo } = require("../../src/hooks");

jest.mock("../../src/hooks/useTodo");

describe("Pruebas en TodoApp", () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Todo 1",
        donde: false,
        id: 2,
        description: "Todo 2",
        donde: true,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
  });

  test("Debe de mostrar el componente", () => {
    render(<TodoApp />);

    expect(screen.getByText("Todo 1")).toBeTruthy();
    expect(screen.getByText("Todo 2")).toBeTruthy();
    expect(screen.getByText("textbox")).toBeTruthy();
  });
});
