// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var audit_pb = require('./audit_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
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

function serialize_sygma_pb_GetUserUsageReq(arg) {
  if (!(arg instanceof audit_pb.GetUserUsageReq)) {
    throw new Error('Expected argument of type sygma_pb.GetUserUsageReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserUsageReq(buffer_arg) {
  return audit_pb.GetUserUsageReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetUserUsageRes(arg) {
  if (!(arg instanceof audit_pb.GetUserUsageRes)) {
    throw new Error('Expected argument of type sygma_pb.GetUserUsageRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserUsageRes(buffer_arg) {
  return audit_pb.GetUserUsageRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_TrackPlayedReq(arg) {
  if (!(arg instanceof audit_pb.TrackPlayedReq)) {
    throw new Error('Expected argument of type sygma_pb.TrackPlayedReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_TrackPlayedReq(buffer_arg) {
  return audit_pb.TrackPlayedReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsageAuditManagerService = exports.UsageAuditManagerService = {
  // SetTrackPlayed records a play event
setTrackPlayed: {
    path: '/sygma_pb.UsageAuditManager/SetTrackPlayed',
    requestStream: false,
    responseStream: false,
    requestType: audit_pb.TrackPlayedReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_TrackPlayedReq,
    requestDeserialize: deserialize_sygma_pb_TrackPlayedReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetUserUsage returns usage audit events for a user, optionally filtered by time
getUserUsage: {
    path: '/sygma_pb.UsageAuditManager/GetUserUsage',
    requestStream: false,
    responseStream: false,
    requestType: audit_pb.GetUserUsageReq,
    responseType: audit_pb.GetUserUsageRes,
    requestSerialize: serialize_sygma_pb_GetUserUsageReq,
    requestDeserialize: deserialize_sygma_pb_GetUserUsageReq,
    responseSerialize: serialize_sygma_pb_GetUserUsageRes,
    responseDeserialize: deserialize_sygma_pb_GetUserUsageRes,
  },
};

exports.UsageAuditManagerClient = grpc.makeGenericClientConstructor(UsageAuditManagerService);
