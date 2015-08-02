var React = require('react');

var ImageActions = require('../../actions/image-actions');
  
var GalleryImage = React.createClass({
  render: function() {
    return (
      <section>
        <img src={this.props.image.url} alt="img" />
        <button onClick={this.onClick}>X</button>
      </section>
    );
  },

  onClick: function() {
    ImageActions.removeImage(this.props.image);
  }
});

module.exports = GalleryImage;
