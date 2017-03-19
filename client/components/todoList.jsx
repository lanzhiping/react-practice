const TodoList = ({todos, onTodoClick}) => (
    <div className="todo-list">
        <div className="todo-list_title">Todo List Title</div>
        {
            todos.map(todo => <Todo key={todo.id} onClicked={onTodoClick} completed={todo.completed} text={todo.text}/>)
        }
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;