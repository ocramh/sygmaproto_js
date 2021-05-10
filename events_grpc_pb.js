// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var events_pb = require('./events_pb.js');
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

function serialize_sygma_pb_DeleteEventReq(arg) {
  if (!(arg instanceof events_pb.DeleteEventReq)) {
    throw new Error('Expected argument of type sygma_pb.DeleteEventReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_DeleteEventReq(buffer_arg) {
  return events_pb.DeleteEventReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetEventReq(arg) {
  if (!(arg instanceof events_pb.GetEventReq)) {
    throw new Error('Expected argument of type sygma_pb.GetEventReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetEventReq(buffer_arg) {
  return events_pb.GetEventReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetEventRes(arg) {
  if (!(arg instanceof events_pb.GetEventRes)) {
    throw new Error('Expected argument of type sygma_pb.GetEventRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetEventRes(buffer_arg) {
  return events_pb.GetEventRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetEventsReq(arg) {
  if (!(arg instanceof events_pb.GetEventsReq)) {
    throw new Error('Expected argument of type sygma_pb.GetEventsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetEventsReq(buffer_arg) {
  return events_pb.GetEventsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetEventsRes(arg) {
  if (!(arg instanceof events_pb.GetEventsRes)) {
    throw new Error('Expected argument of type sygma_pb.GetEventsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetEventsRes(buffer_arg) {
  return events_pb.GetEventsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_NewEventReq(arg) {
  if (!(arg instanceof events_pb.NewEventReq)) {
    throw new Error('Expected argument of type sygma_pb.NewEventReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_NewEventReq(buffer_arg) {
  return events_pb.NewEventReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_SubscribeToEventReq(arg) {
  if (!(arg instanceof events_pb.SubscribeToEventReq)) {
    throw new Error('Expected argument of type sygma_pb.SubscribeToEventReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_SubscribeToEventReq(buffer_arg) {
  return events_pb.SubscribeToEventReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_UnsubscribeToEventReq(arg) {
  if (!(arg instanceof events_pb.UnsubscribeToEventReq)) {
    throw new Error('Expected argument of type sygma_pb.UnsubscribeToEventReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_UnsubscribeToEventReq(buffer_arg) {
  return events_pb.UnsubscribeToEventReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_UpdateEventReq(arg) {
  if (!(arg instanceof events_pb.UpdateEventReq)) {
    throw new Error('Expected argument of type sygma_pb.UpdateEventReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_UpdateEventReq(buffer_arg) {
  return events_pb.UpdateEventReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventsServiceService = exports.EventsServiceService = {
  newEvent: {
    path: '/sygma_pb.EventsService/NewEvent',
    requestStream: false,
    responseStream: false,
    requestType: events_pb.NewEventReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_NewEventReq,
    requestDeserialize: deserialize_sygma_pb_NewEventReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateEvent: {
    path: '/sygma_pb.EventsService/UpdateEvent',
    requestStream: false,
    responseStream: false,
    requestType: events_pb.UpdateEventReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_UpdateEventReq,
    requestDeserialize: deserialize_sygma_pb_UpdateEventReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteEvent: {
    path: '/sygma_pb.EventsService/DeleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: events_pb.DeleteEventReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_DeleteEventReq,
    requestDeserialize: deserialize_sygma_pb_DeleteEventReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getEvent: {
    path: '/sygma_pb.EventsService/GetEvent',
    requestStream: false,
    responseStream: false,
    requestType: events_pb.GetEventReq,
    responseType: events_pb.GetEventRes,
    requestSerialize: serialize_sygma_pb_GetEventReq,
    requestDeserialize: deserialize_sygma_pb_GetEventReq,
    responseSerialize: serialize_sygma_pb_GetEventRes,
    responseDeserialize: deserialize_sygma_pb_GetEventRes,
  },
  getEvents: {
    path: '/sygma_pb.EventsService/GetEvents',
    requestStream: false,
    responseStream: false,
    requestType: events_pb.GetEventsReq,
    responseType: events_pb.GetEventsRes,
    requestSerialize: serialize_sygma_pb_GetEventsReq,
    requestDeserialize: deserialize_sygma_pb_GetEventsReq,
    responseSerialize: serialize_sygma_pb_GetEventsRes,
    responseDeserialize: deserialize_sygma_pb_GetEventsRes,
  },
  subscribeToEvent: {
    path: '/sygma_pb.EventsService/SubscribeToEvent',
    requestStream: false,
    responseStream: false,
    requestType: events_pb.SubscribeToEventReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_SubscribeToEventReq,
    requestDeserialize: deserialize_sygma_pb_SubscribeToEventReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  unsubscribeToEvent: {
    path: '/sygma_pb.EventsService/UnsubscribeToEvent',
    requestStream: false,
    responseStream: false,
    requestType: events_pb.UnsubscribeToEventReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_UnsubscribeToEventReq,
    requestDeserialize: deserialize_sygma_pb_UnsubscribeToEventReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.EventsServiceClient = grpc.makeGenericClientConstructor(EventsServiceService);
