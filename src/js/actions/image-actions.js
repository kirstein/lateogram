var ImageConstants = require('../constants/image-constants');
var AppDispatcher  = require('../app-dispatcher');

var ImageActions = {
  addImageByUrl: function(url) {
    AppDispatcher.handleViewAction({
      actionType: ImageConstants.ADD_IMAGE_URL,
      url: url
    });
  },
  
  addImage: function(image) {
    AppDispatcher.handleViewAction({
      actionType: ImageConstants.ADD_IMAGE,
      image: image
    });
  },

  removeImage: function(image) {
    AppDispatcher.handleViewAction({
      actionType: ImageConstants.REMOVE_IMAGE,
      index: image.index
    });
  }
};

module.exports = ImageActions;
