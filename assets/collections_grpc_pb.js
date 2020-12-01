// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var assets_collections_pb = require('../assets/collections_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var users_connections_pb = require('../users/connections_pb.js');

function serialize_assets_AddDocumentReq(arg) {
  if (!(arg instanceof assets_collections_pb.AddDocumentReq)) {
    throw new Error('Expected argument of type assets.AddDocumentReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_AddDocumentReq(buffer_arg) {
  return assets_collections_pb.AddDocumentReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_DeleteCollectionReq(arg) {
  if (!(arg instanceof assets_collections_pb.DeleteCollectionReq)) {
    throw new Error('Expected argument of type assets.DeleteCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_DeleteCollectionReq(buffer_arg) {
  return assets_collections_pb.DeleteCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_GetCollectionReq(arg) {
  if (!(arg instanceof assets_collections_pb.GetCollectionReq)) {
    throw new Error('Expected argument of type assets.GetCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_GetCollectionReq(buffer_arg) {
  return assets_collections_pb.GetCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_GetCollectionRes(arg) {
  if (!(arg instanceof assets_collections_pb.GetCollectionRes)) {
    throw new Error('Expected argument of type assets.GetCollectionRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_GetCollectionRes(buffer_arg) {
  return assets_collections_pb.GetCollectionRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_GetCollectionsReq(arg) {
  if (!(arg instanceof assets_collections_pb.GetCollectionsReq)) {
    throw new Error('Expected argument of type assets.GetCollectionsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_GetCollectionsReq(buffer_arg) {
  return assets_collections_pb.GetCollectionsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_GetCollectionsRes(arg) {
  if (!(arg instanceof assets_collections_pb.GetCollectionsRes)) {
    throw new Error('Expected argument of type assets.GetCollectionsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_GetCollectionsRes(buffer_arg) {
  return assets_collections_pb.GetCollectionsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_NewCollectionReq(arg) {
  if (!(arg instanceof assets_collections_pb.NewCollectionReq)) {
    throw new Error('Expected argument of type assets.NewCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_NewCollectionReq(buffer_arg) {
  return assets_collections_pb.NewCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_NewCollectionRes(arg) {
  if (!(arg instanceof assets_collections_pb.NewCollectionRes)) {
    throw new Error('Expected argument of type assets.NewCollectionRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_NewCollectionRes(buffer_arg) {
  return assets_collections_pb.NewCollectionRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assets_ShareWithUserReq(arg) {
  if (!(arg instanceof assets_collections_pb.ShareWithUserReq)) {
    throw new Error('Expected argument of type assets.ShareWithUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assets_ShareWithUserReq(buffer_arg) {
  return assets_collections_pb.ShareWithUserReq.deserializeBinary(new Uint8Array(buffer_arg));
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


var CollectionsManagerService = exports.CollectionsManagerService = {
  // Collection creates a new Collection
newCollection: {
    path: '/assets.CollectionsManager/NewCollection',
    requestStream: false,
    responseStream: false,
    requestType: assets_collections_pb.NewCollectionReq,
    responseType: assets_collections_pb.NewCollectionRes,
    requestSerialize: serialize_assets_NewCollectionReq,
    requestDeserialize: deserialize_assets_NewCollectionReq,
    responseSerialize: serialize_assets_NewCollectionRes,
    responseDeserialize: deserialize_assets_NewCollectionRes,
  },
  // GetCollectionsByUser returns Collections created by or shared with a user
getCollectionsByUser: {
    path: '/assets.CollectionsManager/GetCollectionsByUser',
    requestStream: false,
    responseStream: false,
    requestType: assets_collections_pb.GetCollectionsReq,
    responseType: assets_collections_pb.GetCollectionsRes,
    requestSerialize: serialize_assets_GetCollectionsReq,
    requestDeserialize: deserialize_assets_GetCollectionsReq,
    responseSerialize: serialize_assets_GetCollectionsRes,
    responseDeserialize: deserialize_assets_GetCollectionsRes,
  },
  // GetCollection returns a single Collection
getCollection: {
    path: '/assets.CollectionsManager/GetCollection',
    requestStream: false,
    responseStream: false,
    requestType: assets_collections_pb.GetCollectionReq,
    responseType: assets_collections_pb.GetCollectionRes,
    requestSerialize: serialize_assets_GetCollectionReq,
    requestDeserialize: deserialize_assets_GetCollectionReq,
    responseSerialize: serialize_assets_GetCollectionRes,
    responseDeserialize: deserialize_assets_GetCollectionRes,
  },
  // DeleteCollection removes a Collection. Only owners should be allowed to perform
// this operation
deleteCollection: {
    path: '/assets.CollectionsManager/DeleteCollection',
    requestStream: false,
    responseStream: false,
    requestType: assets_collections_pb.DeleteCollectionReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_assets_DeleteCollectionReq,
    requestDeserialize: deserialize_assets_DeleteCollectionReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ShareWithUser grants access to a Collection to a user
shareWithUser: {
    path: '/assets.CollectionsManager/ShareWithUser',
    requestStream: false,
    responseStream: false,
    requestType: assets_collections_pb.ShareWithUserReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_assets_ShareWithUserReq,
    requestDeserialize: deserialize_assets_ShareWithUserReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // AddDocument includes a new document to an existing Collection
addDocument: {
    path: '/assets.CollectionsManager/AddDocument',
    requestStream: false,
    responseStream: false,
    requestType: assets_collections_pb.AddDocumentReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_assets_AddDocumentReq,
    requestDeserialize: deserialize_assets_AddDocumentReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CollectionsManagerClient = grpc.makeGenericClientConstructor(CollectionsManagerService);
