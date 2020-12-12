// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var recommend_pb = require('./recommend_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var node_types_pb = require('./node/types_pb.js');

function serialize_audit_AlbumsForUserReq(arg) {
  if (!(arg instanceof recommend_pb.AlbumsForUserReq)) {
    throw new Error('Expected argument of type audit.AlbumsForUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audit_AlbumsForUserReq(buffer_arg) {
  return recommend_pb.AlbumsForUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_audit_RecommendationsRes(arg) {
  if (!(arg instanceof recommend_pb.RecommendationsRes)) {
    throw new Error('Expected argument of type audit.RecommendationsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audit_RecommendationsRes(buffer_arg) {
  return recommend_pb.RecommendationsRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecommendationsService = exports.RecommendationsService = {
  // Generates albums recommendations for a user
albumsForUser: {
    path: '/audit.Recommendations/AlbumsForUser',
    requestStream: false,
    responseStream: false,
    requestType: recommend_pb.AlbumsForUserReq,
    responseType: recommend_pb.RecommendationsRes,
    requestSerialize: serialize_audit_AlbumsForUserReq,
    requestDeserialize: deserialize_audit_AlbumsForUserReq,
    responseSerialize: serialize_audit_RecommendationsRes,
    responseDeserialize: deserialize_audit_RecommendationsRes,
  },
};

exports.RecommendationsClient = grpc.makeGenericClientConstructor(RecommendationsService);
