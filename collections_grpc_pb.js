// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var collections_pb = require('./collections_pb.js');
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

function serialize_sygma_pb_AddDocumentReq(arg) {
  if (!(arg instanceof collections_pb.AddDocumentReq)) {
    throw new Error('Expected argument of type sygma_pb.AddDocumentReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_AddDocumentReq(buffer_arg) {
  return collections_pb.AddDocumentReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_AddDocumentRes(arg) {
  if (!(arg instanceof collections_pb.AddDocumentRes)) {
    throw new Error('Expected argument of type sygma_pb.AddDocumentRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_AddDocumentRes(buffer_arg) {
  return collections_pb.AddDocumentRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_CollectionsByGenreReq(arg) {
  if (!(arg instanceof collections_pb.CollectionsByGenreReq)) {
    throw new Error('Expected argument of type sygma_pb.CollectionsByGenreReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_CollectionsByGenreReq(buffer_arg) {
  return collections_pb.CollectionsByGenreReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_CollectionsByGenreRes(arg) {
  if (!(arg instanceof collections_pb.CollectionsByGenreRes)) {
    throw new Error('Expected argument of type sygma_pb.CollectionsByGenreRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_CollectionsByGenreRes(buffer_arg) {
  return collections_pb.CollectionsByGenreRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_DeleteCollectionReq(arg) {
  if (!(arg instanceof collections_pb.DeleteCollectionReq)) {
    throw new Error('Expected argument of type sygma_pb.DeleteCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_DeleteCollectionReq(buffer_arg) {
  return collections_pb.DeleteCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_DeleteDocumentReq(arg) {
  if (!(arg instanceof collections_pb.DeleteDocumentReq)) {
    throw new Error('Expected argument of type sygma_pb.DeleteDocumentReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_DeleteDocumentReq(buffer_arg) {
  return collections_pb.DeleteDocumentReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_FollowCollectionReq(arg) {
  if (!(arg instanceof collections_pb.FollowCollectionReq)) {
    throw new Error('Expected argument of type sygma_pb.FollowCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_FollowCollectionReq(buffer_arg) {
  return collections_pb.FollowCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetAlbumInfoReq(arg) {
  if (!(arg instanceof collections_pb.GetAlbumInfoReq)) {
    throw new Error('Expected argument of type sygma_pb.GetAlbumInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetAlbumInfoReq(buffer_arg) {
  return collections_pb.GetAlbumInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetAlbumInfoRes(arg) {
  if (!(arg instanceof collections_pb.GetAlbumInfoRes)) {
    throw new Error('Expected argument of type sygma_pb.GetAlbumInfoRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetAlbumInfoRes(buffer_arg) {
  return collections_pb.GetAlbumInfoRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetAlbumsByUserReq(arg) {
  if (!(arg instanceof collections_pb.GetAlbumsByUserReq)) {
    throw new Error('Expected argument of type sygma_pb.GetAlbumsByUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetAlbumsByUserReq(buffer_arg) {
  return collections_pb.GetAlbumsByUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetAlbumsByUserRes(arg) {
  if (!(arg instanceof collections_pb.GetAlbumsByUserRes)) {
    throw new Error('Expected argument of type sygma_pb.GetAlbumsByUserRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetAlbumsByUserRes(buffer_arg) {
  return collections_pb.GetAlbumsByUserRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetCollectionReq(arg) {
  if (!(arg instanceof collections_pb.GetCollectionReq)) {
    throw new Error('Expected argument of type sygma_pb.GetCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetCollectionReq(buffer_arg) {
  return collections_pb.GetCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetCollectionRes(arg) {
  if (!(arg instanceof collections_pb.GetCollectionRes)) {
    throw new Error('Expected argument of type sygma_pb.GetCollectionRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetCollectionRes(buffer_arg) {
  return collections_pb.GetCollectionRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetCollectionsReq(arg) {
  if (!(arg instanceof collections_pb.GetCollectionsReq)) {
    throw new Error('Expected argument of type sygma_pb.GetCollectionsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetCollectionsReq(buffer_arg) {
  return collections_pb.GetCollectionsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetCollectionsRes(arg) {
  if (!(arg instanceof collections_pb.GetCollectionsRes)) {
    throw new Error('Expected argument of type sygma_pb.GetCollectionsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetCollectionsRes(buffer_arg) {
  return collections_pb.GetCollectionsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetGenresReq(arg) {
  if (!(arg instanceof collections_pb.GetGenresReq)) {
    throw new Error('Expected argument of type sygma_pb.GetGenresReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetGenresReq(buffer_arg) {
  return collections_pb.GetGenresReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetGenresRes(arg) {
  if (!(arg instanceof collections_pb.GetGenresRes)) {
    throw new Error('Expected argument of type sygma_pb.GetGenresRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetGenresRes(buffer_arg) {
  return collections_pb.GetGenresRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetUserInfoReq(arg) {
  if (!(arg instanceof collections_pb.GetUserInfoReq)) {
    throw new Error('Expected argument of type sygma_pb.GetUserInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserInfoReq(buffer_arg) {
  return collections_pb.GetUserInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetUserInfoRes(arg) {
  if (!(arg instanceof collections_pb.GetUserInfoRes)) {
    throw new Error('Expected argument of type sygma_pb.GetUserInfoRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserInfoRes(buffer_arg) {
  return collections_pb.GetUserInfoRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetUserLikesReq(arg) {
  if (!(arg instanceof collections_pb.GetUserLikesReq)) {
    throw new Error('Expected argument of type sygma_pb.GetUserLikesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserLikesReq(buffer_arg) {
  return collections_pb.GetUserLikesReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetUserLikesRes(arg) {
  if (!(arg instanceof collections_pb.GetUserLikesRes)) {
    throw new Error('Expected argument of type sygma_pb.GetUserLikesRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserLikesRes(buffer_arg) {
  return collections_pb.GetUserLikesRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_LikeDocumentReq(arg) {
  if (!(arg instanceof collections_pb.LikeDocumentReq)) {
    throw new Error('Expected argument of type sygma_pb.LikeDocumentReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_LikeDocumentReq(buffer_arg) {
  return collections_pb.LikeDocumentReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_NewCollectionReq(arg) {
  if (!(arg instanceof collections_pb.NewCollectionReq)) {
    throw new Error('Expected argument of type sygma_pb.NewCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_NewCollectionReq(buffer_arg) {
  return collections_pb.NewCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_NewCollectionRes(arg) {
  if (!(arg instanceof collections_pb.NewCollectionRes)) {
    throw new Error('Expected argument of type sygma_pb.NewCollectionRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_NewCollectionRes(buffer_arg) {
  return collections_pb.NewCollectionRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_ShareWithUserReq(arg) {
  if (!(arg instanceof collections_pb.ShareWithUserReq)) {
    throw new Error('Expected argument of type sygma_pb.ShareWithUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_ShareWithUserReq(buffer_arg) {
  return collections_pb.ShareWithUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_UnfollowCollectionReq(arg) {
  if (!(arg instanceof collections_pb.UnfollowCollectionReq)) {
    throw new Error('Expected argument of type sygma_pb.UnfollowCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_UnfollowCollectionReq(buffer_arg) {
  return collections_pb.UnfollowCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_UpdateCollectionReq(arg) {
  if (!(arg instanceof collections_pb.UpdateCollectionReq)) {
    throw new Error('Expected argument of type sygma_pb.UpdateCollectionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_UpdateCollectionReq(buffer_arg) {
  return collections_pb.UpdateCollectionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_UpdateCollectionRes(arg) {
  if (!(arg instanceof collections_pb.UpdateCollectionRes)) {
    throw new Error('Expected argument of type sygma_pb.UpdateCollectionRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_UpdateCollectionRes(buffer_arg) {
  return collections_pb.UpdateCollectionRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var CollectionsServiceService = exports.CollectionsServiceService = {
  // Collection creates a new Collection
newCollection: {
    path: '/sygma_pb.CollectionsService/NewCollection',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.NewCollectionReq,
    responseType: collections_pb.NewCollectionRes,
    requestSerialize: serialize_sygma_pb_NewCollectionReq,
    requestDeserialize: deserialize_sygma_pb_NewCollectionReq,
    responseSerialize: serialize_sygma_pb_NewCollectionRes,
    responseDeserialize: deserialize_sygma_pb_NewCollectionRes,
  },
  // GetCollectionsByUser returns Collections created by or shared with a user
getCollectionsByUser: {
    path: '/sygma_pb.CollectionsService/GetCollectionsByUser',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.GetCollectionsReq,
    responseType: collections_pb.GetCollectionsRes,
    requestSerialize: serialize_sygma_pb_GetCollectionsReq,
    requestDeserialize: deserialize_sygma_pb_GetCollectionsReq,
    responseSerialize: serialize_sygma_pb_GetCollectionsRes,
    responseDeserialize: deserialize_sygma_pb_GetCollectionsRes,
  },
  // GetCollectionsByGenre returns Collections containing albums of a certain genres
getCollectionsByGenre: {
    path: '/sygma_pb.CollectionsService/GetCollectionsByGenre',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.CollectionsByGenreReq,
    responseType: collections_pb.CollectionsByGenreRes,
    requestSerialize: serialize_sygma_pb_CollectionsByGenreReq,
    requestDeserialize: deserialize_sygma_pb_CollectionsByGenreReq,
    responseSerialize: serialize_sygma_pb_CollectionsByGenreRes,
    responseDeserialize: deserialize_sygma_pb_CollectionsByGenreRes,
  },
  // GetCollection returns a single Collection
getCollection: {
    path: '/sygma_pb.CollectionsService/GetCollection',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.GetCollectionReq,
    responseType: collections_pb.GetCollectionRes,
    requestSerialize: serialize_sygma_pb_GetCollectionReq,
    requestDeserialize: deserialize_sygma_pb_GetCollectionReq,
    responseSerialize: serialize_sygma_pb_GetCollectionRes,
    responseDeserialize: deserialize_sygma_pb_GetCollectionRes,
  },
  // UpdateCollection updates an existing collection info
updateCollection: {
    path: '/sygma_pb.CollectionsService/UpdateCollection',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.UpdateCollectionReq,
    responseType: collections_pb.UpdateCollectionRes,
    requestSerialize: serialize_sygma_pb_UpdateCollectionReq,
    requestDeserialize: deserialize_sygma_pb_UpdateCollectionReq,
    responseSerialize: serialize_sygma_pb_UpdateCollectionRes,
    responseDeserialize: deserialize_sygma_pb_UpdateCollectionRes,
  },
  // DeleteCollection removes a Collection. Only owners should be allowed to perform
// this operation
deleteCollection: {
    path: '/sygma_pb.CollectionsService/DeleteCollection',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.DeleteCollectionReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_DeleteCollectionReq,
    requestDeserialize: deserialize_sygma_pb_DeleteCollectionReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // FollowCollection adds a new follower to a collection
followCollection: {
    path: '/sygma_pb.CollectionsService/FollowCollection',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.FollowCollectionReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_FollowCollectionReq,
    requestDeserialize: deserialize_sygma_pb_FollowCollectionReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // UnfollowCollection removes a follower from a collection
unfollowCollection: {
    path: '/sygma_pb.CollectionsService/UnfollowCollection',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.UnfollowCollectionReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_UnfollowCollectionReq,
    requestDeserialize: deserialize_sygma_pb_UnfollowCollectionReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ShareWithUser grants access to a Collection to a user
shareWithUser: {
    path: '/sygma_pb.CollectionsService/ShareWithUser',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.ShareWithUserReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_ShareWithUserReq,
    requestDeserialize: deserialize_sygma_pb_ShareWithUserReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // AddDocument includes a new document to an existing Collection
addDocument: {
    path: '/sygma_pb.CollectionsService/AddDocument',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.AddDocumentReq,
    responseType: collections_pb.AddDocumentRes,
    requestSerialize: serialize_sygma_pb_AddDocumentReq,
    requestDeserialize: deserialize_sygma_pb_AddDocumentReq,
    responseSerialize: serialize_sygma_pb_AddDocumentRes,
    responseDeserialize: deserialize_sygma_pb_AddDocumentRes,
  },
  // DeleteDocument removes a document from a collection
deleteDocument: {
    path: '/sygma_pb.CollectionsService/DeleteDocument',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.DeleteDocumentReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_DeleteDocumentReq,
    requestDeserialize: deserialize_sygma_pb_DeleteDocumentReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetAlbumInfo returns information about a single album including the collections
// it has been included in and the users that uploaded it
getAlbumInfo: {
    path: '/sygma_pb.CollectionsService/GetAlbumInfo',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.GetAlbumInfoReq,
    responseType: collections_pb.GetAlbumInfoRes,
    requestSerialize: serialize_sygma_pb_GetAlbumInfoReq,
    requestDeserialize: deserialize_sygma_pb_GetAlbumInfoReq,
    responseSerialize: serialize_sygma_pb_GetAlbumInfoRes,
    responseDeserialize: deserialize_sygma_pb_GetAlbumInfoRes,
  },
  // GetUserInfo returns information about a user's collections and uploads
getUserInfo: {
    path: '/sygma_pb.CollectionsService/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.GetUserInfoReq,
    responseType: collections_pb.GetUserInfoRes,
    requestSerialize: serialize_sygma_pb_GetUserInfoReq,
    requestDeserialize: deserialize_sygma_pb_GetUserInfoReq,
    responseSerialize: serialize_sygma_pb_GetUserInfoRes,
    responseDeserialize: deserialize_sygma_pb_GetUserInfoRes,
  },
  // GetAlbumsByUser returns a list of albums uploaded by a user
getAlbumsByUser: {
    path: '/sygma_pb.CollectionsService/GetAlbumsByUser',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.GetAlbumsByUserReq,
    responseType: collections_pb.GetAlbumsByUserRes,
    requestSerialize: serialize_sygma_pb_GetAlbumsByUserReq,
    requestDeserialize: deserialize_sygma_pb_GetAlbumsByUserReq,
    responseSerialize: serialize_sygma_pb_GetAlbumsByUserRes,
    responseDeserialize: deserialize_sygma_pb_GetAlbumsByUserRes,
  },
  // GetGenres returns either the genres of music available on the platfom. If the
// request inUse option is set to true the genres returned will only include the
// genres in use by collections
getGenres: {
    path: '/sygma_pb.CollectionsService/GetGenres',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.GetGenresReq,
    responseType: collections_pb.GetGenresRes,
    requestSerialize: serialize_sygma_pb_GetGenresReq,
    requestDeserialize: deserialize_sygma_pb_GetGenresReq,
    responseSerialize: serialize_sygma_pb_GetGenresRes,
    responseDeserialize: deserialize_sygma_pb_GetGenresRes,
  },
  // LikeDocument allows an authentucated user to like a document
likeDocument: {
    path: '/sygma_pb.CollectionsService/LikeDocument',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.LikeDocumentReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_LikeDocumentReq,
    requestDeserialize: deserialize_sygma_pb_LikeDocumentReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetUserLikes returns the id of the documents liked by a user from a specified
// timestamp
getUserLikes: {
    path: '/sygma_pb.CollectionsService/GetUserLikes',
    requestStream: false,
    responseStream: false,
    requestType: collections_pb.GetUserLikesReq,
    responseType: collections_pb.GetUserLikesRes,
    requestSerialize: serialize_sygma_pb_GetUserLikesReq,
    requestDeserialize: deserialize_sygma_pb_GetUserLikesReq,
    responseSerialize: serialize_sygma_pb_GetUserLikesRes,
    responseDeserialize: deserialize_sygma_pb_GetUserLikesRes,
  },
};

exports.CollectionsServiceClient = grpc.makeGenericClientConstructor(CollectionsServiceService);
