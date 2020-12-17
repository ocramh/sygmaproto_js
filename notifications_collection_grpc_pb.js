// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var notifications_collection_pb = require('./notifications_collection_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
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

function serialize_sygma_pb_CollectionNotificationsRes(arg) {
  if (!(arg instanceof notifications_collection_pb.CollectionNotificationsRes)) {
    throw new Error('Expected argument of type sygma_pb.CollectionNotificationsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_CollectionNotificationsRes(buffer_arg) {
  return notifications_collection_pb.CollectionNotificationsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_CollectionsNotificationsReq(arg) {
  if (!(arg instanceof notifications_collection_pb.CollectionsNotificationsReq)) {
    throw new Error('Expected argument of type sygma_pb.CollectionsNotificationsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_CollectionsNotificationsReq(buffer_arg) {
  return notifications_collection_pb.CollectionsNotificationsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_MarkCollNotifAsReadReq(arg) {
  if (!(arg instanceof notifications_collection_pb.MarkCollNotifAsReadReq)) {
    throw new Error('Expected argument of type sygma_pb.MarkCollNotifAsReadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_MarkCollNotifAsReadReq(buffer_arg) {
  return notifications_collection_pb.MarkCollNotifAsReadReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var CollectionsNotificationsServiceService = exports.CollectionsNotificationsServiceService = {
  getCollectionsNotifications: {
    path: '/sygma_pb.CollectionsNotificationsService/GetCollectionsNotifications',
    requestStream: false,
    responseStream: false,
    requestType: notifications_collection_pb.CollectionsNotificationsReq,
    responseType: notifications_collection_pb.CollectionNotificationsRes,
    requestSerialize: serialize_sygma_pb_CollectionsNotificationsReq,
    requestDeserialize: deserialize_sygma_pb_CollectionsNotificationsReq,
    responseSerialize: serialize_sygma_pb_CollectionNotificationsRes,
    responseDeserialize: deserialize_sygma_pb_CollectionNotificationsRes,
  },
  markAsRead: {
    path: '/sygma_pb.CollectionsNotificationsService/MarkAsRead',
    requestStream: false,
    responseStream: false,
    requestType: notifications_collection_pb.MarkCollNotifAsReadReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_MarkCollNotifAsReadReq,
    requestDeserialize: deserialize_sygma_pb_MarkCollNotifAsReadReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CollectionsNotificationsServiceClient = grpc.makeGenericClientConstructor(CollectionsNotificationsServiceService);
