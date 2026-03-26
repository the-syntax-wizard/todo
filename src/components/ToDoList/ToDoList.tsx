import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss';
import { Todo } from "../../models/todo-item";

export const ToDoList = ({ todos, updateTodo, deleteTodo }: { todos: Todo[], updateTodo: Function, deleteTodo: Function }) => {
    const checkedList = () => {
        return todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                );
            })
    }

    const uncheckedList = () => {
        return todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                );
            })
    }

    return (
       <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}
            </ul>
            <ul className="todo-list completed">
                {uncheckedList()}
            </ul>
        </div>
    );
};
