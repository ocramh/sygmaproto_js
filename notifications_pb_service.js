// package: sygma_pb
// file: notifications.proto

var notifications_pb = require("./notifications_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NotificationsService = (function () {
  function NotificationsService() {}
  NotificationsService.serviceName = "sygma_pb.NotificationsService";
  return NotificationsService;
}());

NotificationsService.GetSocialNotifications = {
  methodName: "GetSocialNotifications",
  service: NotificationsService,
  requestStream: false,
  responseStream: false,
  requestType: notifications_pb.SocialNotificationsReq,
  responseType: notifications_pb.SocialNotificationsRes
};

NotificationsService.MarkAsRead = {
  methodName: "MarkAsRead",
  service: NotificationsService,
  requestStream: false,
  responseStream: false,
  requestType: notifications_pb.MarkAsReadReq,
  responseType: google_protobuf_empty_pb.Empty
};

exports.NotificationsService = NotificationsService;

function NotificationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NotificationsServiceClient.prototype.getSocialNotifications = function getSocialNotifications(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NotificationsService.GetSocialNotifications, {
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

NotificationsServiceClient.prototype.markAsRead = function markAsRead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NotificationsService.MarkAsRead, {
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

exports.NotificationsServiceClient = NotificationsServiceClient;

