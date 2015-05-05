var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
      </div>
    );
  }
});

/*React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);*/