var React = require('react');
var EditArticleForm = require('../components/EditArticleForm');
var CancelEditArticleButton = require('../components/CancelEditArticleButton');

var EditArticleFormContainer = React.createClass({
  handleUpdateInput: function ( e ) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.props.onUpdateArticle( obj );
  },
  render: function () {
    return (
      <div>
        <EditArticleForm
            articleBody={ this.props.articleBody }
            onSubmitArticleEdit={ this.props.onSubmitArticleEdit }
            onUpdateInput={ this.handleUpdateInput } />

        <CancelEditArticleButton
            onToggleEditArticleForm={ this.props.onToggleEditArticleForm } />
      </div>
    )
  }
});

module.exports = EditArticleFormContainer;