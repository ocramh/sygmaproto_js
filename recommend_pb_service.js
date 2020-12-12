// package: audit
// file: recommend.proto

var recommend_pb = require("./recommend_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Recommendations = (function () {
  function Recommendations() {}
  Recommendations.serviceName = "audit.Recommendations";
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
