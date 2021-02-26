// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var connections_pb = require('./connections_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var types_pb = require('./types_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_ConnectedUser(arg) {
  if (!(arg instanceof connections_pb.ConnectedUser)) {
    throw new Error('Expected argument of type sygma_pb.ConnectedUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_ConnectedUser(buffer_arg) {
  return connections_pb.ConnectedUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_DeleteConnReq(arg) {
  if (!(arg instanceof connections_pb.DeleteConnReq)) {
    throw new Error('Expected argument of type sygma_pb.DeleteConnReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_DeleteConnReq(buffer_arg) {
  return connections_pb.DeleteConnReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_FindUserReq(arg) {
  if (!(arg instanceof connections_pb.FindUserReq)) {
    throw new Error('Expected argument of type sygma_pb.FindUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_FindUserReq(buffer_arg) {
  return connections_pb.FindUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_FindUserRes(arg) {
  if (!(arg instanceof connections_pb.FindUserRes)) {
    throw new Error('Expected argument of type sygma_pb.FindUserRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_FindUserRes(buffer_arg) {
  return connections_pb.FindUserRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_FindUsersReq(arg) {
  if (!(arg instanceof connections_pb.FindUsersReq)) {
    throw new Error('Expected argument of type sygma_pb.FindUsersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_FindUsersReq(buffer_arg) {
  return connections_pb.FindUsersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_FindUsersRes(arg) {
  if (!(arg instanceof connections_pb.FindUsersRes)) {
    throw new Error('Expected argument of type sygma_pb.FindUsersRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_FindUsersRes(buffer_arg) {
  return connections_pb.FindUsersRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_FollowReq(arg) {
  if (!(arg instanceof connections_pb.FollowReq)) {
    throw new Error('Expected argument of type sygma_pb.FollowReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_FollowReq(buffer_arg) {
  return connections_pb.FollowReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetConnReq(arg) {
  if (!(arg instanceof connections_pb.GetConnReq)) {
    throw new Error('Expected argument of type sygma_pb.GetConnReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetConnReq(buffer_arg) {
  return connections_pb.GetConnReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetConnRes(arg) {
  if (!(arg instanceof connections_pb.GetConnRes)) {
    throw new Error('Expected argument of type sygma_pb.GetConnRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetConnRes(buffer_arg) {
  return connections_pb.GetConnRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_JoinInviteReq(arg) {
  if (!(arg instanceof connections_pb.JoinInviteReq)) {
    throw new Error('Expected argument of type sygma_pb.JoinInviteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_JoinInviteReq(buffer_arg) {
  return connections_pb.JoinInviteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_MutualConnReq(arg) {
  if (!(arg instanceof connections_pb.MutualConnReq)) {
    throw new Error('Expected argument of type sygma_pb.MutualConnReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_MutualConnReq(buffer_arg) {
  return connections_pb.MutualConnReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConnectionsService = exports.ConnectionsService = {
  findUsers: {
    path: '/sygma_pb.Connections/FindUsers',
    requestStream: false,
    responseStream: false,
    requestType: connections_pb.FindUsersReq,
    responseType: connections_pb.FindUsersRes,
    requestSerialize: serialize_sygma_pb_FindUsersReq,
    requestDeserialize: deserialize_sygma_pb_FindUsersReq,
    responseSerialize: serialize_sygma_pb_FindUsersRes,
    responseDeserialize: deserialize_sygma_pb_FindUsersRes,
  },
  findUserByID: {
    path: '/sygma_pb.Connections/FindUserByID',
    requestStream: false,
    responseStream: false,
    requestType: connections_pb.FindUserReq,
    responseType: connections_pb.FindUserRes,
    requestSerialize: serialize_sygma_pb_FindUserReq,
    requestDeserialize: deserialize_sygma_pb_FindUserReq,
    responseSerialize: serialize_sygma_pb_FindUserRes,
    responseDeserialize: deserialize_sygma_pb_FindUserRes,
  },
  createFollowConnection: {
    path: '/sygma_pb.Connections/CreateFollowConnection',
    requestStream: false,
    responseStream: false,
    requestType: connections_pb.FollowReq,
    responseType: connections_pb.ConnectedUser,
    requestSerialize: serialize_sygma_pb_FollowReq,
    requestDeserialize: deserialize_sygma_pb_FollowReq,
    responseSerialize: serialize_sygma_pb_ConnectedUser,
    responseDeserialize: deserialize_sygma_pb_ConnectedUser,
  },
  createMutualConnection: {
    path: '/sygma_pb.Connections/CreateMutualConnection',
    requestStream: false,
    responseStream: false,
    requestType: connections_pb.MutualConnReq,
    responseType: connections_pb.ConnectedUser,
    requestSerialize: serialize_sygma_pb_MutualConnReq,
    requestDeserialize: deserialize_sygma_pb_MutualConnReq,
    responseSerialize: serialize_sygma_pb_ConnectedUser,
    responseDeserialize: deserialize_sygma_pb_ConnectedUser,
  },
  getConnections: {
    path: '/sygma_pb.Connections/GetConnections',
    requestStream: false,
    responseStream: false,
    requestType: connections_pb.GetConnReq,
    responseType: connections_pb.GetConnRes,
    requestSerialize: serialize_sygma_pb_GetConnReq,
    requestDeserialize: deserialize_sygma_pb_GetConnReq,
    responseSerialize: serialize_sygma_pb_GetConnRes,
    responseDeserialize: deserialize_sygma_pb_GetConnRes,
  },
  deleteConnection: {
    path: '/sygma_pb.Connections/DeleteConnection',
    requestStream: false,
    responseStream: false,
    requestType: connections_pb.DeleteConnReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_DeleteConnReq,
    requestDeserialize: deserialize_sygma_pb_DeleteConnReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // SendJoinInvite sends an email invite to join Sygma from an existing user to a
// prospect user
sendJoinInvite: {
    path: '/sygma_pb.Connections/SendJoinInvite',
    requestStream: false,
    responseStream: false,
    requestType: connections_pb.JoinInviteReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_JoinInviteReq,
    requestDeserialize: deserialize_sygma_pb_JoinInviteReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ConnectionsClient = grpc.makeGenericClientConstructor(ConnectionsService);
