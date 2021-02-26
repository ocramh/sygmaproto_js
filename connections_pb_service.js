// package: sygma_pb
// file: connections.proto

var connections_pb = require("./connections_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConnectionsService = (function () {
  function ConnectionsService() {}
  ConnectionsService.serviceName = "sygma_pb.ConnectionsService";
  return ConnectionsService;
}());

ConnectionsService.FindUsers = {
  methodName: "FindUsers",
  service: ConnectionsService,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.FindUsersReq,
  responseType: connections_pb.FindUsersRes
};

ConnectionsService.FindUserByID = {
  methodName: "FindUserByID",
  service: ConnectionsService,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.FindUserReq,
  responseType: connections_pb.FindUserRes
};

ConnectionsService.CreateFollowConnection = {
  methodName: "CreateFollowConnection",
  service: ConnectionsService,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.FollowReq,
  responseType: connections_pb.ConnectedUser
};

ConnectionsService.CreateMutualConnection = {
  methodName: "CreateMutualConnection",
  service: ConnectionsService,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.MutualConnReq,
  responseType: connections_pb.ConnectedUser
};

ConnectionsService.GetConnections = {
  methodName: "GetConnections",
  service: ConnectionsService,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.GetConnReq,
  responseType: connections_pb.GetConnRes
};

ConnectionsService.DeleteConnection = {
  methodName: "DeleteConnection",
  service: ConnectionsService,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.DeleteConnReq,
  responseType: google_protobuf_empty_pb.Empty
};

ConnectionsService.SendJoinInvite = {
  methodName: "SendJoinInvite",
  service: ConnectionsService,
  requestStream: false,
  responseStream: false,
  requestType: connections_pb.JoinInviteReq,
  responseType: google_protobuf_empty_pb.Empty
};

exports.ConnectionsService = ConnectionsService;

function ConnectionsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConnectionsServiceClient.prototype.findUsers = function findUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionsService.FindUsers, {
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

ConnectionsServiceClient.prototype.findUserByID = function findUserByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionsService.FindUserByID, {
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

ConnectionsServiceClient.prototype.createFollowConnection = function createFollowConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionsService.CreateFollowConnection, {
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

ConnectionsServiceClient.prototype.createMutualConnection = function createMutualConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionsService.CreateMutualConnection, {
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

ConnectionsServiceClient.prototype.getConnections = function getConnections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionsService.GetConnections, {
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

ConnectionsServiceClient.prototype.deleteConnection = function deleteConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionsService.DeleteConnection, {
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

ConnectionsServiceClient.prototype.sendJoinInvite = function sendJoinInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionsService.SendJoinInvite, {
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

exports.ConnectionsServiceClient = ConnectionsServiceClient;

