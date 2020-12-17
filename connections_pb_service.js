// package: sygma_pb
// file: connections.proto

var connections_pb = require("./connections_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Connections = (function () {
  function Connections() {}
  Connections.serviceName = "sygma_pb.Connections";
  return Connections;
}());

Connections.FindUsers = {
  methodName: "FindUsers",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.FindUsersReq,
  responseType: connections_pb.FindUsersRes
};

Connections.FindUserByID = {
  methodName: "FindUserByID",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.FindUserReq,
  responseType: connections_pb.FindUserRes
};

Connections.CreateFollowConnection = {
  methodName: "CreateFollowConnection",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.FollowReq,
  responseType: connections_pb.ConnectedUser
};

Connections.CreateMutualConnection = {
  methodName: "CreateMutualConnection",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.MutualConnReq,
  responseType: connections_pb.ConnectedUser
};

Connections.GetConnections = {
  methodName: "GetConnections",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.GetConnReq,
  responseType: connections_pb.GetConnRes
};

Connections.DeleteConnection = {
  methodName: "DeleteConnection",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.DeleteConnReq,
  responseType: google_protobuf_empty_pb.Empty
};

exports.Connections = Connections;

function ConnectionsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConnectionsClient.prototype.findUsers = function findUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Connections.FindUsers, {
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

ConnectionsClient.prototype.findUserByID = function findUserByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Connections.FindUserByID, {
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

ConnectionsClient.prototype.createFollowConnection = function createFollowConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Connections.CreateFollowConnection, {
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

ConnectionsClient.prototype.createMutualConnection = function createMutualConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Connections.CreateMutualConnection, {
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

ConnectionsClient.prototype.getConnections = function getConnections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Connections.GetConnections, {
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

ConnectionsClient.prototype.deleteConnection = function deleteConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Connections.DeleteConnection, {
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

exports.ConnectionsClient = ConnectionsClient;

