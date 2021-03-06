var React = require('react');

var ImageStore      = require('../../stores/image-store');
var GalleryAddImage = require('./gallery-add-image');
var GalleryImage    = require('./gallery-image');

var ImageStoreWatchMixin = require('../../mixins/image-store-watch-mixin');

function getImages () {
  return { images: ImageStore.getImages() };
}
  
var Gallery = React.createClass({
  mixins: [ ImageStoreWatchMixin(getImages) ],

  render: function() {
    var images = this.state.images.map(function(image) {
      return <GalleryImage key={image.id} image={image} />;
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
