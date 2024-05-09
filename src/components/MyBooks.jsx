import React from 'react'

function MyBooks() {
const myBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
  return (
    <div>
     { myBooks.map((item)=>{
         return <p>{item.title}</p>
      })}
    </div>
  )
}

export default MyBooks
