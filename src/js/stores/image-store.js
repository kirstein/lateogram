var EventEmitter = require('events').EventEmitter;

var ImageConstants  = require('../constants/image-constants');
var ImageDispatcher = require('../dispatchers/image-dispatcher');

var _ = require('lodash');

var CHANGE_EVENT = "change";

var images = [];

function addImage (image) {
  images.push(image);
}

function removeImage (index) {
  images.slice(index, 1);
}

function createImage (url) {
  return {
    url: url,
    id: images.length
  };
}

var ImageStore = _.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getImages: function() {
    return images;
  },

  dispatcherIndex: ImageDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
      case ImageConstants.ADD_IMAGE:
        addImage(payload.action.image);
        break;
      case ImageConstants.REMOVE_IMAGE:
        removeImage(payload.action.index);
        break;
      case ImageConstants.ADD_IMAGE_URL:
        addImage(createImage(payload.action.url));
        break;
      default:
        throw new Error("Invalid event");
    }

    ImageStore.emitChange();
    return true;
  })

});

module.exports = ImageStore;
