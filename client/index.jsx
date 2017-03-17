import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducer';
import { addTodo, toggleTodo } from './actions';

let store = createStore(todoApp);
console.log(store);



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

const FooterFilter = ({onCompletedFilter, onUndoneFilter}) => (
    <div className="footer">
        <button
            className="footer-filter"
            onClick={onCompletedFilter}>show completed</button>
        <button
            className="footer-filter"
            onClick={onUndoneFilter}>show undone</button>
    </div>
);

FooterFilter.propTypes = {
    onUndoneFilter: PropTypes.func.isRequired,
    onCompletedFilter: PropTypes.func.isRequired
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">Reactjs Todo</h1>
                <TodoList
                    todos={[{id:1, completed:false, text:'wo men shi yi ge zhong guo ren.'}]}
                    onTodoClick={toggleTodo}/>
                <TodoAddButton onAddClick={addTodo}/>
                <FooterFilter onCompletedFilter={() => {}} onUndoneFilter={() => {}} />
            </div>
        );
    }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
