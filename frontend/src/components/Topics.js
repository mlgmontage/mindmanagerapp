import { Remarkable } from "remarkable";
import moment from "moment";
import { Link } from "react-router-dom";
import hljs from "highlight.js";

const md = new Remarkable({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return ""; // use external default escaping
  },
});

function Topics(props) {
  return (
    <div className="col-md-9 m-auto py-3">
      <div className="list-group">
        {props.topicsList.map((topic) => (
          <div className="list-group-item" key={topic._id}>
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(topic.markdown),
              }}
              className="py-3"
            ></div>
            <Link
              className="btn btn-light btn-small"
              to={`/${topic._id}`}
              onClick={props.fetchTopics}
            >
              more
            </Link>{" "}
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
