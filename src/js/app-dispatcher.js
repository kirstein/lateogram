var Dispatcher = require('flux').Dispatcher;
var _ = require('lodash');

var Dispatcher = require('flux').Dispatcher;
var ImageDispatcher = _.extend(new Dispatcher(), {
  handleViewAction: function(action) {
    console.log('view action', action);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = ImageDispatcher;
