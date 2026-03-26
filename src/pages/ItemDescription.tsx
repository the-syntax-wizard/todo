import { useNavigate, useParams } from "react-router-dom";
import { Todo } from "../models/todo-item";
import { useEffect, useState } from "react";

interface ComponentProps {
    todos: Todo[],
}

export const ItemDescription = ({ todos }: ComponentProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<Todo>();

    useEffect(() => {
        const searchTodo = todos.find((todo) => String(todo.id) === id);

        if (searchTodo) {
            setTodo(searchTodo);
        } else {
            navigate('/404');
        }
    }, [todos, id, navigate]);

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    );
};
