// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var notifications_social_pb = require('./notifications_social_pb.js');
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

function serialize_sygma_pb_MarkAsReadReq(arg) {
  if (!(arg instanceof notifications_social_pb.MarkAsReadReq)) {
    throw new Error('Expected argument of type sygma_pb.MarkAsReadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_MarkAsReadReq(buffer_arg) {
  return notifications_social_pb.MarkAsReadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_SocialNotificationsReq(arg) {
  if (!(arg instanceof notifications_social_pb.SocialNotificationsReq)) {
    throw new Error('Expected argument of type sygma_pb.SocialNotificationsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_SocialNotificationsReq(buffer_arg) {
  return notifications_social_pb.SocialNotificationsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_SocialNotificationsRes(arg) {
  if (!(arg instanceof notifications_social_pb.SocialNotificationsRes)) {
    throw new Error('Expected argument of type sygma_pb.SocialNotificationsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_SocialNotificationsRes(buffer_arg) {
  return notifications_social_pb.SocialNotificationsRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var SocialNotificationsServiceService = exports.SocialNotificationsServiceService = {
  getSocialNotifications: {
    path: '/sygma_pb.SocialNotificationsService/GetSocialNotifications',
    requestStream: false,
    responseStream: false,
    requestType: notifications_social_pb.SocialNotificationsReq,
    responseType: notifications_social_pb.SocialNotificationsRes,
    requestSerialize: serialize_sygma_pb_SocialNotificationsReq,
    requestDeserialize: deserialize_sygma_pb_SocialNotificationsReq,
    responseSerialize: serialize_sygma_pb_SocialNotificationsRes,
    responseDeserialize: deserialize_sygma_pb_SocialNotificationsRes,
  },
  markAsRead: {
    path: '/sygma_pb.SocialNotificationsService/MarkAsRead',
    requestStream: false,
    responseStream: false,
    requestType: notifications_social_pb.MarkAsReadReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_MarkAsReadReq,
    requestDeserialize: deserialize_sygma_pb_MarkAsReadReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.SocialNotificationsServiceClient = grpc.makeGenericClientConstructor(SocialNotificationsServiceService);
