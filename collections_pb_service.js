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

exports.CollectionsServiceClient = CollectionsServiceClient;

