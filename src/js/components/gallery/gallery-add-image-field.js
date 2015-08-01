var React = require('react');

var ImageActions = require('../../actions/image-actions');
  
var GalleryAddImageField = React.createClass({
  getInitialState: function() {
    return {
      inputValue: null
    };
  },
  render: function() {
    return (
      <div>
        <input type="text" placeholder="image url here" onChange={this.onChange} value={this.state.inputValue} />
        <button onClick={this.onClick}>Add image</button>
      </div>
    );
  },

  onChange: function (evt) {
    this.setState({ inputValue: evt.target.value });
  },

  onClick: function() {
    ImageActions.addImageByUrl(this.state.inputValue);
    this.setState({ inputValue: null });
  }
});

module.exports = GalleryAddImageField;
