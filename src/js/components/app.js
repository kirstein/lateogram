var React  = require('react');
var Router = require('react-router-component');

var Layout  = require('./layout');
var Gallery = require('./gallery/gallery');

var Locations = Router.Locations;
var Location  = Router.Location;

var App = React.createClass({
  render: function() {
    return (
      <Layout>
        <Locations>
          <Location path="/" handler={Gallery} />
        </Locations>
      </Layout>
    );
  }
});

module.exports = App;
