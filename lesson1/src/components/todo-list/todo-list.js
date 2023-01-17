import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({
  items,
  onDeletedItem,
  onToggleDone,
  onToggleImportant,
}) => {
  console.log(items);
  const elements = items.map((val) => {
    const { id, ...item } = val;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...item}
          onDeletedItem={() => onDeletedItem(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
