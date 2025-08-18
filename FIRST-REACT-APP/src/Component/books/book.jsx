import './book.css';
import { useState } from 'react';

const Books=()=>{
    const [BooksList,SetBooksList]= useState([{
    
    id:1,
    Title:"The secrate",
    Author:"jksji"
}]);

const [Title,SetTitle]=useState("");
const [Author,SetAuthor]=useState("");

    return(
    <>
     <input className='input' type="text" placeholder='Enter Book name...' value={Title}
     onChange={(e)=>SetTitle(e.target.value)} />

     <input className='input' type="text" placeholder='Enter Author name...' value={Author}
     onChange={(e)=>SetAuthor(e.target.value)}/>


     <button className='AddBtn' onClick={()=>{
      const Book={
        id:Date.now(),
        Title:Title,
        Author:Author
      };
      SetBooksList([...BooksList,Book])
     }}
     >Add Book</button>



     {
        BooksList.map((Bk,index)=>{
          return(
              <p key={index}>
             {Bk.Title} - {Bk.Author}
             <button className='RemoveBook' onClick={()=>{
                const temp=[...BooksList];
                temp.splice(index,1);
                SetBooksList(temp);
             }}>
                 Remove
             </button>
            </p>
          )
        })
     }
    </>
    
)



}

export default Books;