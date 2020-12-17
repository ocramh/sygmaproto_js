// package: sygma_pb
// file: notifications_collection.proto

import * as notifications_collection_pb from "./notifications_collection_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CollectionsNotificationsServiceGetCollectionsNotifications = {
  readonly methodName: string;
  readonly service: typeof CollectionsNotificationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof notifications_collection_pb.CollectionsNotificationsReq;
  readonly responseType: typeof notifications_collection_pb.CollectionNotificationsRes;
};

type CollectionsNotificationsServiceMarkAsRead = {
  readonly methodName: string;
  readonly service: typeof CollectionsNotificationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof notifications_collection_pb.MarkCollNotifAsReadReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class CollectionsNotificationsService {
  static readonly serviceName: string;
  static readonly GetCollectionsNotifications: CollectionsNotificationsServiceGetCollectionsNotifications;
  static readonly MarkAsRead: CollectionsNotificationsServiceMarkAsRead;
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

export class CollectionsNotificationsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCollectionsNotifications(
    requestMessage: notifications_collection_pb.CollectionsNotificationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: notifications_collection_pb.CollectionNotificationsRes|null) => void
  ): UnaryResponse;
  getCollectionsNotifications(
    requestMessage: notifications_collection_pb.CollectionsNotificationsReq,
    callback: (error: ServiceError|null, responseMessage: notifications_collection_pb.CollectionNotificationsRes|null) => void
  ): UnaryResponse;
  markAsRead(
    requestMessage: notifications_collection_pb.MarkCollNotifAsReadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  markAsRead(
    requestMessage: notifications_collection_pb.MarkCollNotifAsReadReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

