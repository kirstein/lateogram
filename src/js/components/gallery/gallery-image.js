var React = require('react');
  
var GalleryImage = React.createClass({
  render: function() {
    return (
      <img src={this.props.url} alt="img" />
    );
  }
});

module.exports = GalleryImage;
