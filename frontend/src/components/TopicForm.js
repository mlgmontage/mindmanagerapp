function TopicForm(props) {
  return (
    <form
      style={{ display: props.show ? "block" : "none" }}
      className="col-md-10 m-auto py-4"
    >
      <div className="mb-3">
        <label className="form-label" htmlFor="MarkDownText">
          Markdown text
        </label>
        <textarea
          className="form-control"
          rows="10"
          id="MarkDownText"
        ></textarea>
      </div>
      <div className="btn btn-secondary btn-large">
        Anchor! <i className="fa fa-anchor"></i>
      </div>
    </form>
  );
}

export default TopicForm;
