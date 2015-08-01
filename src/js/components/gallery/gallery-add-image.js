var React = require('react');

var GalleryAddImageField = require('./gallery-add-image-field');
  
var GalleryAddImage = React.createClass({
  getInitialState: function() {
    return {
      showField: false,
      imageUrl: null
    };
  },

  render: function() {
    var classNames = "btn ";

    if (this.state.showField) {
      classNames += "btn-danger";
    } else {
      classNames += "btn-success";
    }

    return (
      <div>
        <button onClick={this.onClick} className={classNames}>{ this.state.showField? "-" : "+" }</button>
        { this.state.showField? <GalleryAddImageField /> : null}
      </div>
    );
  },

  onClick: function() {
    var showField = this.state.showField;
    this.setState({ showField: !showField });
  }
});

module.exports = GalleryAddImage;
