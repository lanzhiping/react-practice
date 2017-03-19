import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './components/todo.jsx';
import TodoList from './components/todoList.jsx';
import TodoAddButton from './components/todoAddButton.jsx';
import FooterFilter from './components/footerFilter.jsx';

import { createStore } from 'redux';
import todoApp from './reducer';
import { addTodo, toggleTodo } from './actions';

let store = createStore(todoApp);
console.log(store);

mockTodos = [
    { id:1, completed:false, text:'wo men shi yi ge zhong guo ren' }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">Reactjs Todo</h1>
                <TodoList
                    todos={mockTodos}
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
