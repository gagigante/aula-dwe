export function Todo({ id, name, isChecked, handleUpdateTask, handleDeleteTask }) {
  return (
    <div className="todo">
      <input 
        type="checkbox" 
        name="check" 
        id="check" 
        defaultChecked={isChecked} 
        onClick={() => handleUpdateTask(id)}
      />

      <strong>{name}</strong>
      <span>{isChecked}</span>

      <button onClick={() => handleDeleteTask(id)}>remove task</button>
    </div>
  );
}