import { useEffect, useState } from "react";
import Topics from "./components/Topics";
import TopicForm from "./components/TopicForm";
import host from "./host";

function App() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const [topics, setTopics] = useState([]);

  const submitTopic = async () => {
    const hash = window.location.hash.slice(1);
    const response = await fetch(`${host}api/topics/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        markdown: text,
        parent: hash,
      }),
    });
    if (response.status === 200) {
      const created = await response.json();
      setTopics([created, ...topics]);
      console.log(created);
    } else {
      const body = await response.json();
      console.log(body);
    }
    console.log(text);
  };

  const fetchTopics = async () => {
    const hash = window.location.hash.slice(1);
    const response = await fetch(`${host}api/topics/${hash}`);
    const data = await response.json();
    setTopics(() => data);
    console.log(data);
  };

  useEffect(() => {
    fetchTopics();
  }, []);

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
      <TopicForm
        text={text}
        setText={setText}
        show={show}
        submitTopic={submitTopic}
      />

      <Topics topicsList={topics} fetchTopics={fetchTopics} />
    </div>
  );
}

export default App;
