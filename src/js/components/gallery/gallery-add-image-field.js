var React = require('react');

var ImageActions = require('../../actions/image-actions');
  
var GalleryAddImageField = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" placeholder="image url here" ref="imageUrlInput" />
        <button onClick={this.onClick}>Add image</button>
      </div>
    );
  },

  onClick: function() {
    var val = this.refs.imageUrlInput.getDOMNode().value;
    ImageActions.addImageByUrl(val);
  }
});

module.exports = GalleryAddImageField;
