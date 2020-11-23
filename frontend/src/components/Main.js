import { useEffect, useState } from "react";
import Topics from "./Topics";
import TopicForm from "./TopicForm";
import host from "../host";
import { Link, useParams } from "react-router-dom";

function Main() {
  const parent = useParams().parent || "";
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const [topics, setTopics] = useState([]);

  const submitTopic = async () => {
    const response = await fetch(`${host}api/topics/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        markdown: text,
        parent: parent,
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
  };

  const fetchTopics = async () => {
    const response = await fetch(`${host}api/topics/${parent}`);
    const data = await response.json();
    setTopics(() => data);
  };

  useEffect(() => {
    fetchTopics();
    return () => setTopics([]);
  }, [parent]);

  return (
    <div className="container">
      <header className="my-4">
        <Link to="/" className="text-dark text-decoration-none">
          <h1 className="text-center">
            <i className="fa fa-anchor"></i>
          </h1>
          <h1 className="text-center">Mind Manager</h1>
        </Link>
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

export default Main;
