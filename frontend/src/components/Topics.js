import topicsList from "../data/topics";
import marked from "marked";
import moment from "moment";

function Topics() {
  return (
    <div className="col-md-9 m-auto">
      <h3 className="py-3">Topics</h3>
      <div className="list-group">
        {topicsList.map((topic) => (
          <div className="list-group-item" key={topic._id}>
            <a className="text-dark text-decoration-none p-3" href="#">
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(topic.markdown),
                }}
              ></div>
            </a>
            <small className="text-right text-muted">
              {moment(topic.date).fromNow()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;
