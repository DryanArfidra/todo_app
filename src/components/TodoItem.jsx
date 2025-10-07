function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`
        flex items-center justify-between
        p-2.5 bg-white mx-2 mr-3
        border-b border-gray-200
        transition-all duration-200
        rounded-md
      `}
    >
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="
            h-5 w-5
            text-blue-600
            border-gray-300 rounded
            focus:ring-blue-500 focus:ring-2
            mr-3
            cursor-pointer
          "
        />
        <span
          className={`
            flex-1 select-none
            ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}
          `}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="
          ml-4 px-3 py-1
          text-sm font-semibold text-red-600
          border border-red-600 rounded-md
          hover:bg-red-600 hover:text-white
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          transition-colors duration-200
        "
      >
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;