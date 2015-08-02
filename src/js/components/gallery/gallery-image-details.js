var React = require('react');

var ImageStore           = require('../../stores/image-store');
var ImageStoreWatchMixin = require('../../mixins/image-store-watch-mixin');

function getImage (component) {
  var img = ImageStore.getImageById(component.props.imageId);
  return {
    image: img
  };
}
  
var GalleryImageDetails = React.createClass({
  mixins: [ ImageStoreWatchMixin(getImage) ],
  render: function() {
    return (
      <div>hello there</div>
    );
  }
});

module.exports = GalleryImageDetails;
