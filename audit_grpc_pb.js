// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var audit_pb = require('./audit_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var assets_collections_pb = require('./assets/collections_pb.js');

function serialize_audit_GetUserUsageReq(arg) {
  if (!(arg instanceof audit_pb.GetUserUsageReq)) {
    throw new Error('Expected argument of type audit.GetUserUsageReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audit_GetUserUsageReq(buffer_arg) {
  return audit_pb.GetUserUsageReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_audit_GetUserUsageRes(arg) {
  if (!(arg instanceof audit_pb.GetUserUsageRes)) {
    throw new Error('Expected argument of type audit.GetUserUsageRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audit_GetUserUsageRes(buffer_arg) {
  return audit_pb.GetUserUsageRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_audit_SetPlayTrackReq(arg) {
  if (!(arg instanceof audit_pb.SetPlayTrackReq)) {
    throw new Error('Expected argument of type audit.SetPlayTrackReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audit_SetPlayTrackReq(buffer_arg) {
  return audit_pb.SetPlayTrackReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsageAuditManagerService = exports.UsageAuditManagerService = {
  // SetPlayTrack records a play event
setPlayTrack: {
    path: '/audit.UsageAuditManager/SetPlayTrack',
    requestStream: false,
    responseStream: false,
    requestType: audit_pb.SetPlayTrackReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_audit_SetPlayTrackReq,
    requestDeserialize: deserialize_audit_SetPlayTrackReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetUserUsage returns usage audit events for a user, optionally filtered by time
getUserUsage: {
    path: '/audit.UsageAuditManager/GetUserUsage',
    requestStream: false,
    responseStream: false,
    requestType: audit_pb.GetUserUsageReq,
    responseType: audit_pb.GetUserUsageRes,
    requestSerialize: serialize_audit_GetUserUsageReq,
    requestDeserialize: deserialize_audit_GetUserUsageReq,
    responseSerialize: serialize_audit_GetUserUsageRes,
    responseDeserialize: deserialize_audit_GetUserUsageRes,
  },
};

exports.UsageAuditManagerClient = grpc.makeGenericClientConstructor(UsageAuditManagerService);
