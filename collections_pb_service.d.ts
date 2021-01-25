// package: sygma_pb
// file: collections.proto

import * as collections_pb from "./collections_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CollectionsManagerNewCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.NewCollectionReq;
  readonly responseType: typeof collections_pb.NewCollectionRes;
};

type CollectionsManagerGetCollectionsByUser = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetCollectionsReq;
  readonly responseType: typeof collections_pb.GetCollectionsRes;
};

type CollectionsManagerGetCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetCollectionReq;
  readonly responseType: typeof collections_pb.GetCollectionRes;
};

type CollectionsManagerUpdateCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.UpdateCollectionReq;
  readonly responseType: typeof collections_pb.UpdateCollectionRes;
};

type CollectionsManagerDeleteCollection = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.DeleteCollectionReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsManagerShareWithUser = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.ShareWithUserReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CollectionsManagerAddDocument = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.AddDocumentReq;
  readonly responseType: typeof collections_pb.AddDocumentRes;
};

type CollectionsManagerGetAlbumInfo = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetAlbumInfoReq;
  readonly responseType: typeof collections_pb.GetAlbumInfoRes;
};

type CollectionsManagerGetUserInfo = {
  readonly methodName: string;
  readonly service: typeof CollectionsManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof collections_pb.GetUserInfoReq;
  readonly responseType: typeof collections_pb.GetUserInfoRes;
};

export class CollectionsManager {
  static readonly serviceName: string;
  static readonly NewCollection: CollectionsManagerNewCollection;
  static readonly GetCollectionsByUser: CollectionsManagerGetCollectionsByUser;
  static readonly GetCollection: CollectionsManagerGetCollection;
  static readonly UpdateCollection: CollectionsManagerUpdateCollection;
  static readonly DeleteCollection: CollectionsManagerDeleteCollection;
  static readonly ShareWithUser: CollectionsManagerShareWithUser;
  static readonly AddDocument: CollectionsManagerAddDocument;
  static readonly GetAlbumInfo: CollectionsManagerGetAlbumInfo;
  static readonly GetUserInfo: CollectionsManagerGetUserInfo;
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

export class CollectionsManagerClient {
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
}

