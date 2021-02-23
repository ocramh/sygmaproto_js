// package: sygma_pb
// file: recommend.proto

var recommend_pb = require("./recommend_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Recommendations = (function () {
  function Recommendations() {}
  Recommendations.serviceName = "sygma_pb.Recommendations";
  return Recommendations;
}());

Recommendations.AlbumsForUser = {
  methodName: "AlbumsForUser",
  service: Recommendations,
  requestStream: false,
  responseStream: false,
  requestType: recommend_pb.AlbumsForUserReq,
  responseType: recommend_pb.RecommendationsRes
};

exports.Recommendations = Recommendations;

function RecommendationsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RecommendationsClient.prototype.albumsForUser = function albumsForUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Recommendations.AlbumsForUser, {
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

exports.RecommendationsClient = RecommendationsClient;

var SocialRecommendationsService = (function () {
  function SocialRecommendationsService() {}
  SocialRecommendationsService.serviceName = "sygma_pb.SocialRecommendationsService";
  return SocialRecommendationsService;
}());

SocialRecommendationsService.ConnectionsForUser = {
  methodName: "ConnectionsForUser",
  service: SocialRecommendationsService,
  requestStream: false,
  responseStream: false,
  requestType: recommend_pb.ConnectionsForUserReq,
  responseType: recommend_pb.ConnectionsForUserRes
};

exports.SocialRecommendationsService = SocialRecommendationsService;

function SocialRecommendationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SocialRecommendationsServiceClient.prototype.connectionsForUser = function connectionsForUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SocialRecommendationsService.ConnectionsForUser, {
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

exports.SocialRecommendationsServiceClient = SocialRecommendationsServiceClient;

