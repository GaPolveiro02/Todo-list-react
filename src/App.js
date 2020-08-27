import React from 'react';
// import Form from './Form';

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
    this.setState({ todos: [...this.state.todos, this.state.todo] });
    this.setState({ todo: '' })
  }

  render() {
    return(
      <div>
        <h1>Todo List</h1>
        <form type="submit">
          <input
            type="text"
            onChange={e => this.handleTodo(e)}
            value={this.state.todo}
          />
          <button onClick={e => this.handleAddTodo(e)}>Add</button>
        </form>
        <h1>{this.state.todo}</h1>
        <ul>
          {
            this.state.todos.map(item => <li key={item}><h2>{item}</h2></li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
