import React from 'react';
import ReactDOM from 'react-dom';


let bookList=[
  {"title":"good Book", "author":"Sirshree", "pages":290},
  {"title":"good Book2", "author":"Sirshree", "pages":20},
  {"title":"12good Book", "author":"Sirshree", "pages":490}

]

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
  <p>by: {author}</p>
  <p>Pages: {pages}</p>
      </section>
  )
}
const NotHiring=() =>
<div>
  Library is Not Hiring for now
  </div>
const Hiring=() =>
<div>
  Library is Hiring
  </div>

//to have state we need es6 classs

class Library extends React.Component{

state= {
open:false,
hiring: true
}

toggleMaState=() => {

  this.setState(prevState=>({
    open:!prevState.open
  }))
}

render(){
  
const {books}= this.props 
return(
<div>
  <button onClick={this.toggleMaState}>Click Me</button>
  {this.state.hiring? <Hiring/>: <NotHiring />}
<h1>The library is {this.state.open ?  'open':'closed'}</h1>
 {books.map(
(book,i) =>
<Book
key={i} 
title={book.title}
author={book.author}
pages={book.pages}
/>

 )}
</div>
)
}

}




ReactDOM.render(
 
    <Library books={bookList}/>
  ,
  document.getElementById('root')
);

