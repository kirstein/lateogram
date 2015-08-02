var React  = require('react');
var Router = require('react-router-component');

var Layout              = require('./layout');
var Gallery             = require('./gallery/gallery');
var GalleryImageDetails = require('./gallery/gallery-image-details');

var Locations = Router.Locations;
var Location  = Router.Location;

var App = React.createClass({
  render: function() {
    return (
      <Layout>
        <Locations>
          <Location path="/" handler={Gallery} />
          <Location path="/image/:imageId" handler={GalleryImageDetails} />
        </Locations>
      </Layout>
    );
  }
});

module.exports = App;
