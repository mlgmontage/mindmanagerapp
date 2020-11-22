function Topics() {
  return (
    <div className="col-md-9 m-auto">
      <h3 className="py-3">Topics</h3>
      <div className="list-group">
        <div className="list-group-item">
          <a className="text-dark text-decoration-none p-3" href="#">
            <h1>Hello world</h1>
            <p>Mind manager</p>
          </a>
          <small className="text-right text-muted">2 minutes ago</small>
        </div>
        <div className="list-group-item">
          <a className="text-dark text-decoration-none p-3 " href="#">
            <h1>Title</h1>
            <p>Content</p>
          </a>
          <small className="text-right text-muted">2 minutes ago</small>
        </div>
      </div>
    </div>
  );
}

export default Topics;
