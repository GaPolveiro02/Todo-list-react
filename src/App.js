import React from 'react';
import Form from './Form';
import Button from './Button';

// statefull component
class App extends React.Component {
  state = {
    todo: '',
    todos: []
  };

  handleTodo(e) {
    this.setState({ todo: e.target.value });
  }

  handleAddTodo(e){
    e.preventDefault();
    if (this.state.todo !== '') {
      this.setState({ todos: [...this.state.todos, this.state.todo] });
      this.setState({ todo: '' });
    }
  }

  handleRemoveTodo(item){
    this.setState(prevState => ({
        todos: [...prevState.todos.slice(0, item), ...prevState.todos.slice(item + 1)]
    }));
  }

  render() {
    return(
      <div>
        <h1>Todo List</h1>
        <Form
           onClick={e => this.handleAddTodo(e)}
           onChange={e => this.handleTodo(e)}
           value={this.state.todo}
        />
        <h1>{this.state.todo}</h1>
        <ul>
          {
            this.state.todos.map((item, index) => (
                <div>
                  <li key={item}>
                    <h2>{item}</h2>
                    <Button onClick={(e)=>{this.handleRemoveTodo(index)}} text="Remove" />
                  </li>
                </div>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
