// package: sygma_pb
// file: audit.proto

var audit_pb = require("./audit_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UsageAuditManager = (function () {
  function UsageAuditManager() {}
  UsageAuditManager.serviceName = "sygma_pb.UsageAuditManager";
  return UsageAuditManager;
}());

UsageAuditManager.SetTrackPlayed = {
  methodName: "SetTrackPlayed",
  service: UsageAuditManager,
  requestStream: false,
  responseStream: false,
  requestType: audit_pb.TrackPlayedReq,
  responseType: google_protobuf_empty_pb.Empty
};

UsageAuditManager.GetUserUsage = {
  methodName: "GetUserUsage",
  service: UsageAuditManager,
  requestStream: false,
  responseStream: false,
  requestType: audit_pb.GetUserUsageReq,
  responseType: audit_pb.GetUserUsageRes
};

exports.UsageAuditManager = UsageAuditManager;

function UsageAuditManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UsageAuditManagerClient.prototype.setTrackPlayed = function setTrackPlayed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsageAuditManager.SetTrackPlayed, {
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

UsageAuditManagerClient.prototype.getUserUsage = function getUserUsage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsageAuditManager.GetUserUsage, {
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

exports.UsageAuditManagerClient = UsageAuditManagerClient;

