var React = require('react');

var GalleryAddImage = require('./gallery-add-image');
  
var Gallery = React.createClass({
  render: function() {
    return (
      <div>
        <div>hello there</div>
        <GalleryAddImage />
      </div>
    );
  }
});

module.exports = Gallery;
