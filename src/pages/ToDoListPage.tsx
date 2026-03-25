import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { Todo } from "../models/todo-item";
import { ToastContainer, toast } from "react-toastify";


export const ToDoListPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const createNewTodo = (text: string) => {
        const newTodo: Todo = {
            id: todos.length,
            text: text,
            isDone: false,
        };

        setTodos([...todos, newTodo]);
        toast('Добавлен новый элемент!');
    };

    const updateTodo = (toDoItem: Todo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        setTodos(newTodos);
        toast(`Задача "${toDoItem.text}" обновлена!`);
    };

    const deleteTodo = (toDoItem: Todo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
        setTodos(newTodos);
        toast(`Задача "${toDoItem.text}" удалена`);
    };

    return (
        <>
            <Header />

            <Form createNewTodo={createNewTodo}  />
            
            <ToDoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                theme="light"
                pauseOnHover={false}
            />
        </>
    );
};
