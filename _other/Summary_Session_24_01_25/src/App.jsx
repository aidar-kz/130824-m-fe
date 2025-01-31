import "./App.css";
import Todo from "./components/TOdo";
const Todos = [
  {
    title: "pomit pol",
    description: "pomit poli vezde",
    id: "1",
    flag: false,
  },
  {
    title: "vinesti musor",
    description: "kagdiy den",
    id: "2",
    flag: true,
  },
  {
    title: "pokupatsa",
    description: "kagdiy den",
    id: "3",
    flag: true,
  },
];

function App() {
  return (
    <>
      <Todo todo={Todos[0]} />
      <Todo todo={Todos[1]} />
      <Todo todo={Todos[2]} />
    </>
  );
}

export default App;
