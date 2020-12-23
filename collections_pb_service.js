// package: sygma_pb
// file: collections.proto

var collections_pb = require("./collections_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CollectionsManager = (function () {
  function CollectionsManager() {}
  CollectionsManager.serviceName = "sygma_pb.CollectionsManager";
  return CollectionsManager;
}());

CollectionsManager.NewCollection = {
  methodName: "NewCollection",
  service: CollectionsManager,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.NewCollectionReq,
  responseType: collections_pb.NewCollectionRes
};

CollectionsManager.GetCollectionsByUser = {
  methodName: "GetCollectionsByUser",
  service: CollectionsManager,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetCollectionsReq,
  responseType: collections_pb.GetCollectionsRes
};

CollectionsManager.GetCollection = {
  methodName: "GetCollection",
  service: CollectionsManager,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.GetCollectionReq,
  responseType: collections_pb.GetCollectionRes
};

CollectionsManager.UpdateCollection = {
  methodName: "UpdateCollection",
  service: CollectionsManager,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.UpdateCollectionReq,
  responseType: collections_pb.UpdateCollectionRes
};

CollectionsManager.DeleteCollection = {
  methodName: "DeleteCollection",
  service: CollectionsManager,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.DeleteCollectionReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsManager.ShareWithUser = {
  methodName: "ShareWithUser",
  service: CollectionsManager,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.ShareWithUserReq,
  responseType: google_protobuf_empty_pb.Empty
};

CollectionsManager.AddDocument = {
  methodName: "AddDocument",
  service: CollectionsManager,
  requestStream: false,
  responseStream: false,
  requestType: collections_pb.AddDocumentReq,
  responseType: google_protobuf_empty_pb.Empty
};

exports.CollectionsManager = CollectionsManager;

function CollectionsManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CollectionsManagerClient.prototype.newCollection = function newCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsManager.NewCollection, {
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

CollectionsManagerClient.prototype.getCollectionsByUser = function getCollectionsByUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsManager.GetCollectionsByUser, {
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

CollectionsManagerClient.prototype.getCollection = function getCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsManager.GetCollection, {
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

CollectionsManagerClient.prototype.updateCollection = function updateCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsManager.UpdateCollection, {
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

CollectionsManagerClient.prototype.deleteCollection = function deleteCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsManager.DeleteCollection, {
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

CollectionsManagerClient.prototype.shareWithUser = function shareWithUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsManager.ShareWithUser, {
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

CollectionsManagerClient.prototype.addDocument = function addDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsManager.AddDocument, {
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

exports.CollectionsManagerClient = CollectionsManagerClient;

