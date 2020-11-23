import SimpleMDE from "react-simplemde-editor";

function TopicForm(props) {
  return (
    <form
      style={{ display: props.show ? "block" : "none" }}
      className="col-md-10 m-auto py-4"
      onSubmit={props.submitTopic}
    >
      <div className="mb-3">
        <SimpleMDE
          value={props.text}
          onChange={(value) => props.setText(value)}
        />
      </div>
      <div className="text-center">
        <div
          onClick={props.submitTopic}
          className="btn btn-secondary btn-large px-5"
        >
          Anchor! <i className="fa fa-anchor"></i>
        </div>
      </div>
    </form>
  );
}

export default TopicForm;
