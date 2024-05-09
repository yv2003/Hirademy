import React from 'react'

function Add({book,addbooks}) {
    function handleClick() {
        addbooks(book)
    }
  return (
     <button onClick={handleClick} className="bg-[#366674] hover:bg-[#1d343b] text-white font-bold py-2 px-4 rounded">
      Add to My Books
    </button>
  )
}

export default Add
