const Todo = ({onClicked, completed, text}) => (
    <div
        className="todo-item"
        onClick={onClicked}
        style={{ color: completed ? "gray" : "red" }}
        >{text}
    </div>
);

Todo.propTypes = {
    onClicked: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;
