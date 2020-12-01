// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_connections_pb = require('../users/connections_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_ConnectedUser(arg) {
  if (!(arg instanceof users_connections_pb.ConnectedUser)) {
    throw new Error('Expected argument of type users.ConnectedUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_ConnectedUser(buffer_arg) {
  return users_connections_pb.ConnectedUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_ConnectionInfo(arg) {
  if (!(arg instanceof users_connections_pb.ConnectionInfo)) {
    throw new Error('Expected argument of type users.ConnectionInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_ConnectionInfo(buffer_arg) {
  return users_connections_pb.ConnectionInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_DeleteConnReq(arg) {
  if (!(arg instanceof users_connections_pb.DeleteConnReq)) {
    throw new Error('Expected argument of type users.DeleteConnReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_DeleteConnReq(buffer_arg) {
  return users_connections_pb.DeleteConnReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_FindUserReq(arg) {
  if (!(arg instanceof users_connections_pb.FindUserReq)) {
    throw new Error('Expected argument of type users.FindUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FindUserReq(buffer_arg) {
  return users_connections_pb.FindUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_FindUserRes(arg) {
  if (!(arg instanceof users_connections_pb.FindUserRes)) {
    throw new Error('Expected argument of type users.FindUserRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FindUserRes(buffer_arg) {
  return users_connections_pb.FindUserRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_FindUsersReq(arg) {
  if (!(arg instanceof users_connections_pb.FindUsersReq)) {
    throw new Error('Expected argument of type users.FindUsersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FindUsersReq(buffer_arg) {
  return users_connections_pb.FindUsersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_FindUsersRes(arg) {
  if (!(arg instanceof users_connections_pb.FindUsersRes)) {
    throw new Error('Expected argument of type users.FindUsersRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FindUsersRes(buffer_arg) {
  return users_connections_pb.FindUsersRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_FollowReq(arg) {
  if (!(arg instanceof users_connections_pb.FollowReq)) {
    throw new Error('Expected argument of type users.FollowReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FollowReq(buffer_arg) {
  return users_connections_pb.FollowReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetConnReq(arg) {
  if (!(arg instanceof users_connections_pb.GetConnReq)) {
    throw new Error('Expected argument of type users.GetConnReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetConnReq(buffer_arg) {
  return users_connections_pb.GetConnReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetConnRes(arg) {
  if (!(arg instanceof users_connections_pb.GetConnRes)) {
    throw new Error('Expected argument of type users.GetConnRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetConnRes(buffer_arg) {
  return users_connections_pb.GetConnRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_MutualConnReq(arg) {
  if (!(arg instanceof users_connections_pb.MutualConnReq)) {
    throw new Error('Expected argument of type users.MutualConnReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_MutualConnReq(buffer_arg) {
  return users_connections_pb.MutualConnReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConnectionsService = exports.ConnectionsService = {
  findUsers: {
    path: '/users.Connections/FindUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_connections_pb.FindUsersReq,
    responseType: users_connections_pb.FindUsersRes,
    requestSerialize: serialize_users_FindUsersReq,
    requestDeserialize: deserialize_users_FindUsersReq,
    responseSerialize: serialize_users_FindUsersRes,
    responseDeserialize: deserialize_users_FindUsersRes,
  },
  findUserByID: {
    path: '/users.Connections/FindUserByID',
    requestStream: false,
    responseStream: false,
    requestType: users_connections_pb.FindUserReq,
    responseType: users_connections_pb.FindUserRes,
    requestSerialize: serialize_users_FindUserReq,
    requestDeserialize: deserialize_users_FindUserReq,
    responseSerialize: serialize_users_FindUserRes,
    responseDeserialize: deserialize_users_FindUserRes,
  },
  createFollowConnection: {
    path: '/users.Connections/CreateFollowConnection',
    requestStream: false,
    responseStream: false,
    requestType: users_connections_pb.FollowReq,
    responseType: users_connections_pb.ConnectedUser,
    requestSerialize: serialize_users_FollowReq,
    requestDeserialize: deserialize_users_FollowReq,
    responseSerialize: serialize_users_ConnectedUser,
    responseDeserialize: deserialize_users_ConnectedUser,
  },
  createMutualConnection: {
    path: '/users.Connections/CreateMutualConnection',
    requestStream: false,
    responseStream: false,
    requestType: users_connections_pb.MutualConnReq,
    responseType: users_connections_pb.ConnectedUser,
    requestSerialize: serialize_users_MutualConnReq,
    requestDeserialize: deserialize_users_MutualConnReq,
    responseSerialize: serialize_users_ConnectedUser,
    responseDeserialize: deserialize_users_ConnectedUser,
  },
  getConnections: {
    path: '/users.Connections/GetConnections',
    requestStream: false,
    responseStream: false,
    requestType: users_connections_pb.GetConnReq,
    responseType: users_connections_pb.GetConnRes,
    requestSerialize: serialize_users_GetConnReq,
    requestDeserialize: deserialize_users_GetConnReq,
    responseSerialize: serialize_users_GetConnRes,
    responseDeserialize: deserialize_users_GetConnRes,
  },
  getConnNotifications: {
    path: '/users.Connections/GetConnNotifications',
    requestStream: false,
    responseStream: true,
    requestType: users_connections_pb.GetConnReq,
    responseType: users_connections_pb.ConnectionInfo,
    requestSerialize: serialize_users_GetConnReq,
    requestDeserialize: deserialize_users_GetConnReq,
    responseSerialize: serialize_users_ConnectionInfo,
    responseDeserialize: deserialize_users_ConnectionInfo,
  },
  deleteConnection: {
    path: '/users.Connections/DeleteConnection',
    requestStream: false,
    responseStream: false,
    requestType: users_connections_pb.DeleteConnReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_DeleteConnReq,
    requestDeserialize: deserialize_users_DeleteConnReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ConnectionsClient = grpc.makeGenericClientConstructor(ConnectionsService);
