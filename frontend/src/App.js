import { useEffect, useState } from "react";
import Topics from "./components/Topics";
import TopicForm from "./components/TopicForm";
import topicsList from "./data/topics";

function App() {
  useEffect(() => console.log("use effect"));
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <header className="my-4">
        <h1 className="text-center">
          <i className="fa fa-anchor"></i>
        </h1>
        <h1 className="text-center">Mind Manager</h1>
        <h1 className="text-center">
          <button
            onClick={() => setShow(!show)}
            className="btn btn-secondary btn-large"
          >
            {show ? (
              <i className="fa fa-eye"></i>
            ) : (
              <i className="fa fa-low-vision"></i>
            )}
          </button>
        </h1>
      </header>
      <TopicForm show={show} />

      <Topics topicsList={topicsList} />
    </div>
  );
}

export default App;
