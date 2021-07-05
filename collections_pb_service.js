// package: sygma_pb
// file: collections.proto

var collections_pb = require("./collections_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CollectionsService = (function () {
  function CollectionsService() {}
  CollectionsService.serviceName = "sygma_pb.CollectionsService";
  return CollectionsService;
}());

CollectionsService.NewCollection = {
  methodName: "NewCollection",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.NewCollectionReq,
  responseType: collections_pb.NewCollectionRes
};

CollectionsService.GetCollectionsByUser = {
  methodName: "GetCollectionsByUser",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetCollectionsReq,
  responseType: collections_pb.GetCollectionsRes
};

CollectionsService.GetCollectionsByGenre = {
  methodName: "GetCollectionsByGenre",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.CollectionsByGenreReq,
  responseType: collections_pb.CollectionsByGenreRes
};

CollectionsService.GetDocumentsByGenre = {
  methodName: "GetDocumentsByGenre",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.DocsByGenreReq,
  responseType: collections_pb.DocsByGenreRes
};

CollectionsService.GetCollection = {
  methodName: "GetCollection",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetCollectionReq,
  responseType: collections_pb.GetCollectionRes
};

CollectionsService.UpdateCollection = {
  methodName: "UpdateCollection",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.UpdateCollectionReq,
  responseType: collections_pb.UpdateCollectionRes
};

CollectionsService.DeleteCollection = {
  methodName: "DeleteCollection",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.DeleteCollectionReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsService.FollowCollection = {
  methodName: "FollowCollection",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.FollowCollectionReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsService.UnfollowCollection = {
  methodName: "UnfollowCollection",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.UnfollowCollectionReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsService.ShareWithUser = {
  methodName: "ShareWithUser",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.ShareWithUserReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsService.AddDocument = {
  methodName: "AddDocument",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.AddDocumentReq,
  responseType: collections_pb.AddDocumentRes
};

CollectionsService.DeleteDocument = {
  methodName: "DeleteDocument",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.DeleteDocumentReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsService.GetAlbumInfo = {
  methodName: "GetAlbumInfo",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetAlbumInfoReq,
  responseType: collections_pb.GetAlbumInfoRes
};

CollectionsService.GetUserInfo = {
  methodName: "GetUserInfo",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetUserInfoReq,
  responseType: collections_pb.GetUserInfoRes
};

CollectionsService.GetAlbumsByUser = {
  methodName: "GetAlbumsByUser",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetAlbumsByUserReq,
  responseType: collections_pb.GetAlbumsByUserRes
};

CollectionsService.GetGenres = {
  methodName: "GetGenres",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetGenresReq,
  responseType: collections_pb.GetGenresRes
};

CollectionsService.LikeDocument = {
  methodName: "LikeDocument",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.LikeDocumentReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsService.GetUserLikes = {
  methodName: "GetUserLikes",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetUserLikesReq,
  responseType: collections_pb.GetUserLikesRes
};

CollectionsService.GetDocumentLikes = {
  methodName: "GetDocumentLikes",
  service: CollectionsService,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetDocumentLikesReq,
  responseType: collections_pb.GetDocuemntLikesRes
};

exports.CollectionsService = CollectionsService;

function CollectionsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CollectionsServiceClient.prototype.newCollection = function newCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.NewCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getCollectionsByUser = function getCollectionsByUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetCollectionsByUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getCollectionsByGenre = function getCollectionsByGenre(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetCollectionsByGenre, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getDocumentsByGenre = function getDocumentsByGenre(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetDocumentsByGenre, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getCollection = function getCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.updateCollection = function updateCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.UpdateCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.deleteCollection = function deleteCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.DeleteCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.followCollection = function followCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.FollowCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.unfollowCollection = function unfollowCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.UnfollowCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.shareWithUser = function shareWithUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.ShareWithUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.addDocument = function addDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.AddDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.deleteDocument = function deleteDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.DeleteDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getAlbumInfo = function getAlbumInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetAlbumInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getUserInfo = function getUserInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetUserInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getAlbumsByUser = function getAlbumsByUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetAlbumsByUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getGenres = function getGenres(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetGenres, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.likeDocument = function likeDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.LikeDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getUserLikes = function getUserLikes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetUserLikes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CollectionsServiceClient.prototype.getDocumentLikes = function getDocumentLikes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsService.GetDocumentLikes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CollectionsServiceClient = CollectionsServiceClient;

