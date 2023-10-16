import TodoLists from "./components/todoLists";
// import EditButton from "./components/editButton"

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="my-5 text-2xl underline underline-offset-8">ToDOs</h2>

        <TodoLists />
      </div>
    </>
  );
}

export default App;
