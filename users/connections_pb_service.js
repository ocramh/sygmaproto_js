// package: users
// file: users/connections.proto

var users_connections_pb = require("../users/connections_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Connections = (function () {
  function Connections() {}
  Connections.serviceName = "users.Connections";
  return Connections;
}());

Connections.FindUsers = {
  methodName: "FindUsers",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: users_connections_pb.FindUsersReq,
  responseType: users_connections_pb.FindUsersRes
};

Connections.FindUserByID = {
  methodName: "FindUserByID",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: users_connections_pb.FindUserReq,
  responseType: users_connections_pb.FindUserRes
};

Connections.CreateFollowConnection = {
  methodName: "CreateFollowConnection",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: users_connections_pb.FollowReq,
  responseType: users_connections_pb.ConnectedUser
};

Connections.CreateMutualConnection = {
  methodName: "CreateMutualConnection",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: users_connections_pb.MutualConnReq,
  responseType: users_connections_pb.ConnectedUser
};

Connections.GetConnections = {
  methodName: "GetConnections",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: users_connections_pb.GetConnReq,
  responseType: users_connections_pb.GetConnRes
};

Connections.GetConnNotifications = {
  methodName: "GetConnNotifications",
  service: Connections,
  requestStream: false,
  responseStream: true,
  requestType: users_connections_pb.GetConnReq,
  responseType: users_connections_pb.ConnectionInfo
};

Connections.DeleteConnection = {
  methodName: "DeleteConnection",
  service: Connections,
  requestStream: false,
  responseStream: false,
  requestType: users_connections_pb.DeleteConnReq,
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

ConnectionsClient.prototype.getConnNotifications = function getConnNotifications(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Connections.GetConnNotifications, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
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

