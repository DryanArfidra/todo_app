import React from 'react';

function TodoFilter({ filter, onSetFilter }) {
    
  return (
    <div className='filter === active'>
      <button
        className={`bg-white hover:bg-gray-400 px-5 py-1.5 m-2 rounded-md cursor-pointer ${filter === 'active' ? 'active' : ''}`}
        onClick={() => onSetFilter('all')}
      >
        Semua
      </button>
      <button
        className={`bg-white hover:bg-gray-400 px-7 py-1.5 m-2 rounded-md cursor-pointer${filter === 'active' ? 'active' : ''}`}
        onClick={() => onSetFilter('active')}
        
      >
        Aktif
      </button>
      <button
        className={`bg-blue-700 hover:bg-blue-900 px-15.5 py-1.5 m-2 rounded-md text-white cursor-pointer ${filter === 'active' ? 'active' : ''}`}
        onClick={() => onSetFilter('completed')}
      >
        Selesai
      </button>
    </div>
  );
}

export default TodoFilter;