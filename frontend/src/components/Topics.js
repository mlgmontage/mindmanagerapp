import marked from "marked";
import moment from "moment";
import { Link } from "react-router-dom";

function Topics(props) {
  return (
    <div className="col-md-9 m-auto py-3">
      <div className="list-group">
        {props.topicsList.map((topic) => (
          <div className="list-group-item" key={topic._id}>
            <Link
              className="text-dark text-decoration-none p-3"
              to={`/${topic._id}`}
              onClick={props.fetchTopics}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(topic.markdown),
                }}
              ></div>
            </Link>
            <small className="text-right text-muted">
              {moment(topic.Date).fromNow()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;
