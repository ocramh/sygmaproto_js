// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var recommend_pb = require('./recommend_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var types_pb = require('./types_pb.js');

function serialize_sygma_pb_AlbumsForUserReq(arg) {
  if (!(arg instanceof recommend_pb.AlbumsForUserReq)) {
    throw new Error('Expected argument of type sygma_pb.AlbumsForUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_AlbumsForUserReq(buffer_arg) {
  return recommend_pb.AlbumsForUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_ConnectionsForUserReq(arg) {
  if (!(arg instanceof recommend_pb.ConnectionsForUserReq)) {
    throw new Error('Expected argument of type sygma_pb.ConnectionsForUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_ConnectionsForUserReq(buffer_arg) {
  return recommend_pb.ConnectionsForUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_ConnectionsForUserRes(arg) {
  if (!(arg instanceof recommend_pb.ConnectionsForUserRes)) {
    throw new Error('Expected argument of type sygma_pb.ConnectionsForUserRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_ConnectionsForUserRes(buffer_arg) {
  return recommend_pb.ConnectionsForUserRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_RecommendationsRes(arg) {
  if (!(arg instanceof recommend_pb.RecommendationsRes)) {
    throw new Error('Expected argument of type sygma_pb.RecommendationsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_RecommendationsRes(buffer_arg) {
  return recommend_pb.RecommendationsRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecommendationsService = exports.RecommendationsService = {
  // AlbumsForUser returns albums recommendations for a user
albumsForUser: {
    path: '/sygma_pb.Recommendations/AlbumsForUser',
    requestStream: false,
    responseStream: false,
    requestType: recommend_pb.AlbumsForUserReq,
    responseType: recommend_pb.RecommendationsRes,
    requestSerialize: serialize_sygma_pb_AlbumsForUserReq,
    requestDeserialize: deserialize_sygma_pb_AlbumsForUserReq,
    responseSerialize: serialize_sygma_pb_RecommendationsRes,
    responseDeserialize: deserialize_sygma_pb_RecommendationsRes,
  },
};

exports.RecommendationsClient = grpc.makeGenericClientConstructor(RecommendationsService);
// SocialRecommendationsService is responsible for suggesting social contacts to
// users
var SocialRecommendationsServiceService = exports.SocialRecommendationsServiceService = {
  // ConnectionsForUser returns a list of users that share similar interests to
// the client
connectionsForUser: {
    path: '/sygma_pb.SocialRecommendationsService/ConnectionsForUser',
    requestStream: false,
    responseStream: false,
    requestType: recommend_pb.ConnectionsForUserReq,
    responseType: recommend_pb.ConnectionsForUserRes,
    requestSerialize: serialize_sygma_pb_ConnectionsForUserReq,
    requestDeserialize: deserialize_sygma_pb_ConnectionsForUserReq,
    responseSerialize: serialize_sygma_pb_ConnectionsForUserRes,
    responseDeserialize: deserialize_sygma_pb_ConnectionsForUserRes,
  },
};

exports.SocialRecommendationsServiceClient = grpc.makeGenericClientConstructor(SocialRecommendationsServiceService);
