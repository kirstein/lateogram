var React = require('react');

var ImageStore      = require('../../stores/image-store');
var GalleryAddImage = require('./gallery-add-image');
var GalleryImage    = require('./gallery-image');
  
var Gallery = React.createClass({
  componentWillMount:function() {
    ImageStore.addChangeListener(this._onChange);

  },
  componentWillUnmount:function() {
    ImageStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
      images: ImageStore.getImages()
    };
  },

  _onChange: function() {
    this.setState(this);
  },

  render: function() {
    var images = this.state.images.map(function(image) {
      return <GalleryImage key={image.id} url={image.url} />;
    });
    return (
      <div>
        <div>hello there</div>
        <GalleryAddImage />
        <section>
          { images }
        </section>
      </div>
    );
  }
});

module.exports = Gallery;
