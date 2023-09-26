import AddToDo from "./component/AddTodo"
import Navbar from "./component/navbar"
import Todos from "./component/Todos"
import "./App.css"

const App = () => {
  return (
   <main>
      <h1>TODO REACT + TYPESCRIPT </h1>
      <Navbar />
      <AddToDo />
      <Todos />
   </main>
  )
}

export default App