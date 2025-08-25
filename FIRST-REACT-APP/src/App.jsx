
import './App.css'
// import Counter from './Component/hooks';
import Books from './Component/books/book';
import User from "./Component/props/display";  
import Data from "./assets/data" 

const App = () => {
    return (
        <>
            {/* {
                Data.map((detail) => {
                     return<User key={detail.id}  name={detail.name} email={detail.email} />
                })
            }
            */}
            <Books/>
        </>
    )
}
export default App;

  