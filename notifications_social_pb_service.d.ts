// package: sygma_pb
// file: notifications_social.proto

import * as notifications_social_pb from "./notifications_social_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SocialNotificationsServiceGetSocialNotifications = {
  readonly methodName: string;
  readonly service: typeof SocialNotificationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof notifications_social_pb.SocialNotificationsReq;
  readonly responseType: typeof notifications_social_pb.SocialNotificationsRes;
};

type SocialNotificationsServiceMarkAsRead = {
  readonly methodName: string;
  readonly service: typeof SocialNotificationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof notifications_social_pb.MarkAsReadReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class SocialNotificationsService {
  static readonly serviceName: string;
  static readonly GetSocialNotifications: SocialNotificationsServiceGetSocialNotifications;
  static readonly MarkAsRead: SocialNotificationsServiceMarkAsRead;
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

export class SocialNotificationsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSocialNotifications(
    requestMessage: notifications_social_pb.SocialNotificationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: notifications_social_pb.SocialNotificationsRes|null) => void
  ): UnaryResponse;
  getSocialNotifications(
    requestMessage: notifications_social_pb.SocialNotificationsReq,
    callback: (error: ServiceError|null, responseMessage: notifications_social_pb.SocialNotificationsRes|null) => void
  ): UnaryResponse;
  markAsRead(
    requestMessage: notifications_social_pb.MarkAsReadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  markAsRead(
    requestMessage: notifications_social_pb.MarkAsReadReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

