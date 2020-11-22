import Topics from "./components/Topics";
import TopicForm from "./components/TopicForm";

function App() {
  return (
    <div className="container">
      <header className="my-4">
        <h1 className="text-center">
          <i className="fa fa-anchor"></i>
        </h1>
        <h1 className="text-center">Mind Manager</h1>
      </header>
      <TopicForm />
      <Topics />
    </div>
  );
}

export default App;
