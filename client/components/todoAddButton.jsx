
const TodoAddButton = ({onAddClick}) => (
    <div className="todo-add">
        <input className="todo_add-input"/>
        <button
            className="todo_add-button"
            onClick={onAddClick} >Add Todo</button>
    </div>
);

TodoAddButton.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

export default TodoAddButton;
