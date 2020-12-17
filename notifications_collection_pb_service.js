// package: sygma_pb
// file: notifications_collection.proto

var notifications_collection_pb = require("./notifications_collection_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CollectionsNotificationsService = (function () {
  function CollectionsNotificationsService() {}
  CollectionsNotificationsService.serviceName = "sygma_pb.CollectionsNotificationsService";
  return CollectionsNotificationsService;
}());

CollectionsNotificationsService.GetCollectionsNotifications = {
  methodName: "GetCollectionsNotifications",
  service: CollectionsNotificationsService,
  requestStream: false,
  responseStream: false,
  requestType: notifications_collection_pb.CollectionsNotificationsReq,
  responseType: notifications_collection_pb.CollectionNotificationsRes
};

CollectionsNotificationsService.MarkAsRead = {
  methodName: "MarkAsRead",
  service: CollectionsNotificationsService,
  requestStream: false,
  responseStream: false,
  requestType: notifications_collection_pb.MarkCollNotifAsReadReq,
  responseType: google_protobuf_empty_pb.Empty
};

exports.CollectionsNotificationsService = CollectionsNotificationsService;

function CollectionsNotificationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CollectionsNotificationsServiceClient.prototype.getCollectionsNotifications = function getCollectionsNotifications(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsNotificationsService.GetCollectionsNotifications, {
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

CollectionsNotificationsServiceClient.prototype.markAsRead = function markAsRead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CollectionsNotificationsService.MarkAsRead, {
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

exports.CollectionsNotificationsServiceClient = CollectionsNotificationsServiceClient;

