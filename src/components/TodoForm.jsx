import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!inputText.trim()) return; 

    onAdd(inputText);
    setInputText(''); 
  };

  return (
    <div className='flex gap-2 mb-4 justify-center'>
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Tambahkan tugas baru..."
        className='px-15 py-2.5 rounded-md text-sm font-medium bg-white text-gray-600 shadow-md'
        />
      <button type="submit" className='bg-blue-700 hover:bg-blue-900 px-3.5 py-2 m-1 rounded-md text-white shadow-md'>Tambah</button>
    </form>
    </div>
  );
}

export default TodoForm;