// package: sygma_pb
// file: collections.proto

import * as collections_pb from "./collections_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CollectionsServiceNewCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.NewCollectionReq;
  readonly responseType: typeof collections_pb.NewCollectionRes;
};

type CollectionsServiceGetCollectionsByUser = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetCollectionsReq;
  readonly responseType: typeof collections_pb.GetCollectionsRes;
};

type CollectionsServiceGetCollectionsByGenre = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.CollectionsByGenreReq;
  readonly responseType: typeof collections_pb.CollectionsByGenreRes;
};

type CollectionsServiceGetDocumentsByGenre = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.DocsByGenreReq;
  readonly responseType: typeof collections_pb.DocsByGenreRes;
};

type CollectionsServiceGetCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetCollectionReq;
  readonly responseType: typeof collections_pb.GetCollectionRes;
};

type CollectionsServiceUpdateCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.UpdateCollectionReq;
  readonly responseType: typeof collections_pb.UpdateCollectionRes;
};

type CollectionsServiceDeleteCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.DeleteCollectionReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsServiceFollowCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.FollowCollectionReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsServiceUnfollowCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.UnfollowCollectionReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsServiceShareWithUser = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.ShareWithUserReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsServiceAddDocument = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.AddDocumentReq;
  readonly responseType: typeof collections_pb.AddDocumentRes;
};

type CollectionsServiceDeleteDocument = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.DeleteDocumentReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsServiceGetAlbumInfo = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetAlbumInfoReq;
  readonly responseType: typeof collections_pb.GetAlbumInfoRes;
};

type CollectionsServiceGetUserInfo = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetUserInfoReq;
  readonly responseType: typeof collections_pb.GetUserInfoRes;
};

type CollectionsServiceGetAlbumsByUser = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetAlbumsByUserReq;
  readonly responseType: typeof collections_pb.GetAlbumsByUserRes;
};

type CollectionsServiceGetGenres = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetGenresReq;
  readonly responseType: typeof collections_pb.GetGenresRes;
};

type CollectionsServiceLikeDocument = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.LikeDocumentReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsServiceGetUserLikes = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetUserLikesReq;
  readonly responseType: typeof collections_pb.GetUserLikesRes;
};

type CollectionsServiceGetDocumentLikes = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetDocumentLikesReq;
  readonly responseType: typeof collections_pb.GetDocuemntLikesRes;
};

type CollectionsServiceGetCollectionUsers = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetCollectionUsersReq;
  readonly responseType: typeof collections_pb.GetCollectionUsersRes;
};

type CollectionsServiceGetLabelsReleasesInfo = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetLabelsReleasesReq;
  readonly responseType: typeof collections_pb.GetLabelsReleasesRes;
};

type CollectionsServiceGetTagsReleasesInfo = {
  readonly methodName: string;
  readonly service: typeof CollectionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetTagsReleasesReq;
  readonly responseType: typeof collections_pb.GetTagsReleasesRes;
};

export class CollectionsService {
  static readonly serviceName: string;
  static readonly NewCollection: CollectionsServiceNewCollection;
  static readonly GetCollectionsByUser: CollectionsServiceGetCollectionsByUser;
  static readonly GetCollectionsByGenre: CollectionsServiceGetCollectionsByGenre;
  static readonly GetDocumentsByGenre: CollectionsServiceGetDocumentsByGenre;
  static readonly GetCollection: CollectionsServiceGetCollection;
  static readonly UpdateCollection: CollectionsServiceUpdateCollection;
  static readonly DeleteCollection: CollectionsServiceDeleteCollection;
  static readonly FollowCollection: CollectionsServiceFollowCollection;
  static readonly UnfollowCollection: CollectionsServiceUnfollowCollection;
  static readonly ShareWithUser: CollectionsServiceShareWithUser;
  static readonly AddDocument: CollectionsServiceAddDocument;
  static readonly DeleteDocument: CollectionsServiceDeleteDocument;
  static readonly GetAlbumInfo: CollectionsServiceGetAlbumInfo;
  static readonly GetUserInfo: CollectionsServiceGetUserInfo;
  static readonly GetAlbumsByUser: CollectionsServiceGetAlbumsByUser;
  static readonly GetGenres: CollectionsServiceGetGenres;
  static readonly LikeDocument: CollectionsServiceLikeDocument;
  static readonly GetUserLikes: CollectionsServiceGetUserLikes;
  static readonly GetDocumentLikes: CollectionsServiceGetDocumentLikes;
  static readonly GetCollectionUsers: CollectionsServiceGetCollectionUsers;
  static readonly GetLabelsReleasesInfo: CollectionsServiceGetLabelsReleasesInfo;
  static readonly GetTagsReleasesInfo: CollectionsServiceGetTagsReleasesInfo;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CollectionsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  newCollection(
    requestMessage: collections_pb.NewCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.NewCollectionRes|null) => void
  ): UnaryResponse;
  newCollection(
    requestMessage: collections_pb.NewCollectionReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.NewCollectionRes|null) => void
  ): UnaryResponse;
  getCollectionsByUser(
    requestMessage: collections_pb.GetCollectionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetCollectionsRes|null) => void
  ): UnaryResponse;
  getCollectionsByUser(
    requestMessage: collections_pb.GetCollectionsReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetCollectionsRes|null) => void
  ): UnaryResponse;
  getCollectionsByGenre(
    requestMessage: collections_pb.CollectionsByGenreReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.CollectionsByGenreRes|null) => void
  ): UnaryResponse;
  getCollectionsByGenre(
    requestMessage: collections_pb.CollectionsByGenreReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.CollectionsByGenreRes|null) => void
  ): UnaryResponse;
  getDocumentsByGenre(
    requestMessage: collections_pb.DocsByGenreReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.DocsByGenreRes|null) => void
  ): UnaryResponse;
  getDocumentsByGenre(
    requestMessage: collections_pb.DocsByGenreReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.DocsByGenreRes|null) => void
  ): UnaryResponse;
  getCollection(
    requestMessage: collections_pb.GetCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetCollectionRes|null) => void
  ): UnaryResponse;
  getCollection(
    requestMessage: collections_pb.GetCollectionReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetCollectionRes|null) => void
  ): UnaryResponse;
  updateCollection(
    requestMessage: collections_pb.UpdateCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.UpdateCollectionRes|null) => void
  ): UnaryResponse;
  updateCollection(
    requestMessage: collections_pb.UpdateCollectionReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.UpdateCollectionRes|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: collections_pb.DeleteCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: collections_pb.DeleteCollectionReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  followCollection(
    requestMessage: collections_pb.FollowCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  followCollection(
    requestMessage: collections_pb.FollowCollectionReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unfollowCollection(
    requestMessage: collections_pb.UnfollowCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unfollowCollection(
    requestMessage: collections_pb.UnfollowCollectionReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  shareWithUser(
    requestMessage: collections_pb.ShareWithUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  shareWithUser(
    requestMessage: collections_pb.ShareWithUserReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addDocument(
    requestMessage: collections_pb.AddDocumentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.AddDocumentRes|null) => void
  ): UnaryResponse;
  addDocument(
    requestMessage: collections_pb.AddDocumentReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.AddDocumentRes|null) => void
  ): UnaryResponse;
  deleteDocument(
    requestMessage: collections_pb.DeleteDocumentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteDocument(
    requestMessage: collections_pb.DeleteDocumentReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getAlbumInfo(
    requestMessage: collections_pb.GetAlbumInfoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetAlbumInfoRes|null) => void
  ): UnaryResponse;
  getAlbumInfo(
    requestMessage: collections_pb.GetAlbumInfoReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetAlbumInfoRes|null) => void
  ): UnaryResponse;
  getUserInfo(
    requestMessage: collections_pb.GetUserInfoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetUserInfoRes|null) => void
  ): UnaryResponse;
  getUserInfo(
    requestMessage: collections_pb.GetUserInfoReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetUserInfoRes|null) => void
  ): UnaryResponse;
  getAlbumsByUser(
    requestMessage: collections_pb.GetAlbumsByUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetAlbumsByUserRes|null) => void
  ): UnaryResponse;
  getAlbumsByUser(
    requestMessage: collections_pb.GetAlbumsByUserReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetAlbumsByUserRes|null) => void
  ): UnaryResponse;
  getGenres(
    requestMessage: collections_pb.GetGenresReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetGenresRes|null) => void
  ): UnaryResponse;
  getGenres(
    requestMessage: collections_pb.GetGenresReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetGenresRes|null) => void
  ): UnaryResponse;
  likeDocument(
    requestMessage: collections_pb.LikeDocumentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  likeDocument(
    requestMessage: collections_pb.LikeDocumentReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getUserLikes(
    requestMessage: collections_pb.GetUserLikesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetUserLikesRes|null) => void
  ): UnaryResponse;
  getUserLikes(
    requestMessage: collections_pb.GetUserLikesReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetUserLikesRes|null) => void
  ): UnaryResponse;
  getDocumentLikes(
    requestMessage: collections_pb.GetDocumentLikesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetDocuemntLikesRes|null) => void
  ): UnaryResponse;
  getDocumentLikes(
    requestMessage: collections_pb.GetDocumentLikesReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetDocuemntLikesRes|null) => void
  ): UnaryResponse;
  getCollectionUsers(
    requestMessage: collections_pb.GetCollectionUsersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetCollectionUsersRes|null) => void
  ): UnaryResponse;
  getCollectionUsers(
    requestMessage: collections_pb.GetCollectionUsersReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetCollectionUsersRes|null) => void
  ): UnaryResponse;
  getLabelsReleasesInfo(
    requestMessage: collections_pb.GetLabelsReleasesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetLabelsReleasesRes|null) => void
  ): UnaryResponse;
  getLabelsReleasesInfo(
    requestMessage: collections_pb.GetLabelsReleasesReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetLabelsReleasesRes|null) => void
  ): UnaryResponse;
  getTagsReleasesInfo(
    requestMessage: collections_pb.GetTagsReleasesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetTagsReleasesRes|null) => void
  ): UnaryResponse;
  getTagsReleasesInfo(
    requestMessage: collections_pb.GetTagsReleasesReq,
    callback: (error: ServiceError|null, responseMessage: collections_pb.GetTagsReleasesRes|null) => void
  ): UnaryResponse;
}

