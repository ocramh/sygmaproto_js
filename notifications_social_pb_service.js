// package: sygma_pb
// file: notifications_social.proto

var notifications_social_pb = require("./notifications_social_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SocialNotificationsService = (function () {
  function SocialNotificationsService() {}
  SocialNotificationsService.serviceName = "sygma_pb.SocialNotificationsService";
  return SocialNotificationsService;
}());

SocialNotificationsService.GetSocialNotifications = {
  methodName: "GetSocialNotifications",
  service: SocialNotificationsService,
  requestStream: false,
  responseStream: false,
  requestType: notifications_social_pb.SocialNotificationsReq,
  responseType: notifications_social_pb.SocialNotificationsRes
};

SocialNotificationsService.MarkAsRead = {
  methodName: "MarkAsRead",
  service: SocialNotificationsService,
  requestStream: false,
  responseStream: false,
  requestType: notifications_social_pb.MarkAsReadReq,
  responseType: google_protobuf_empty_pb.Empty
};

exports.SocialNotificationsService = SocialNotificationsService;

function SocialNotificationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SocialNotificationsServiceClient.prototype.getSocialNotifications = function getSocialNotifications(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SocialNotificationsService.GetSocialNotifications, {
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

SocialNotificationsServiceClient.prototype.markAsRead = function markAsRead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SocialNotificationsService.MarkAsRead, {
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

exports.SocialNotificationsServiceClient = SocialNotificationsServiceClient;

