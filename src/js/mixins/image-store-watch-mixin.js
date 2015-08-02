var React = require('react');

var ImageStore = require('../stores/image-store');

module.exports = function (cb) {
  return {
    getInitialState: function() {
      return cb(); 
    },
    componentWillMount: function() {
      ImageStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
      ImageStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState(this);
    }
  };
};
