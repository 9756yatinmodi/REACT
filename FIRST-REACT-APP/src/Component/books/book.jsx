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
const [index, setIndex] = useState(0);

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
     <button
        onClick={() => {
          const temp = [...BooksList];
          temp[index].Title =Title;
          temp[index].Author =Author;
          SetBooksList(temp);
        }}
      >
        Update Book
      </button>



     {
        BooksList.map((Bk,i)=>{
          return(
              <p key={i}>
             {Bk.Title} - {Bk.Author}
             <button className='RemoveBook' onClick={()=>{
                const temp=[...BooksList];
                temp.splice(i,1);
                SetBooksList(temp);
             }}>
                 Remove
             </button>
             <button onClick={()=>{
              setIndex(i);
    SetTitle(Bk[index].Title);
    SetAuthor(Bk [index].Author);
             }}> EDIT</button>
            </p>
          )
        })
     }
    </>
    
)



}


export default Books;