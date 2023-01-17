import { Component } from "react";
import AppHeader from "./components/app-header/index";
import ItemAddForm from "./components/item-add-form";
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
import SearchPanel from "./components/search-panel/index";
import TodoList from "./components/todo-list/index";
import "./app.css";

export default class App extends Component {
  maxId = 1;
  state = {
    todoItems: [
      this.createTodoItem("Drink Cofffee"),
      this.createTodoItem("Make Awsome App "),
      this.createTodoItem("Have a lunch"),
      this.createTodoItem("A im Home Work"),
    ],
    term: "",
    filter: "all",
  };
  updatedArray(index, oldArr, opsNews) {
    if (opsNews) {
      return [...oldArr.slice(0, index), opsNews, ...oldArr.slice(index + 1)];
    } else {
      return [...oldArr.slice(0, index), ...oldArr.slice(index + 1)];
    }
  }
  findIndex(id) {
    return this.state.todoItems.findIndex((el) => el.id === id);
  }
  toggleProperty(arr, id, propName) {
    const index = this.findIndex(id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArr = this.updatedArray(index, arr, newItem);
    return newArr;
  }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  deleteItem = (id) => {
    this.setState(({ todoItems }) => {
      // const newArr =  todoItems.filter((item) => item.id !== id)
      //   const index = todoItems.findIndex((item) => item.id === id);
      // todoItems.splice(index, 1)
      const newArr = this.updatedArray(this.findIndex(id), todoItems);
      console.log(newArr);
      return {
        todoItems: newArr,
      };
    });
  };
  addItem = (label) => {
    this.setState(({ todoItems }) => {
      const newArr = [...todoItems, this.createTodoItem(label)];
      return {
        todoItems: newArr,
      };
    });
  };
  onToggleDone = (id) => {
    this.setState(({ todoItems }) => {
      return {
        todoItems: this.toggleProperty(todoItems, id, "done"),
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ todoItems }) => {
      return {
        todoItems: this.toggleProperty(todoItems, id, "important"),
      };
    });
  };
  onSearchChange = (term) => {
    this.setState({ term });
  };
  search(items, term) {
    if (!term) return items;
    return items.filter(
      (item) => item.label.toLowerCase().indexOf(term?.toLowerCase()) > -1
    );
  }
  filter(items, filter) {
    switch (filter) {
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { todoItems, term, filter } = this.state;
    const visibleitems = this.filter(this.search(todoItems, term), filter);
    const doneCount = todoItems.filter((i) => i.done).length;
    const todoCount = todoItems.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          items={visibleitems}
          onDeletedItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
