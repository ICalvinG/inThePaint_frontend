var React = require('react');

var CommentFormView = React.createClass({
  render: function () {
    return (
    	<div className="form-group col-lg-12 text-center">
	      <form onSubmit={ this.props.onSubmit }>
	        <textarea className="form-control new-comment" rows="5" name="comment[body]" placeholder="leave a comment" onChange={ this.props.onUpdatePostComment } value={ this.props.postComment }></textarea>
	        <input type="submit" className="btn btn-default" value="submit comment" />
	      </form>
      </div>
    )
  }
});

module.exports = CommentFormView;