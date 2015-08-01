var ImageConstants  = require('../constants/image-constants');
var ImageDispatcher = require('../dispatchers/image-dispatcher');

var ImageActions = {
  addImageByUrl: function(url) {
    ImageDispatcher.handleViewAction({
      actionType: ImageConstants.ADD_IMAGE_URL,
      url: url
    });
  },
  
  addImage: function(image) {
    ImageDispatcher.handleViewAction({
      actionType: ImageConstants.ADD_IMAGE,
      image: image
    });
  },

  removeImage: function(image) {
    ImageDispatcher.handleViewAction({
      actionType: ImageConstants.REMOVE_IMAGE,
      index: image.index
    });
  }
};

module.exports = ImageActions;
