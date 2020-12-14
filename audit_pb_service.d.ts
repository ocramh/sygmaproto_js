// package: sygma_pb
// file: audit.proto

import * as audit_pb from "./audit_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UsageAuditManagerSetPlayTrack = {
  readonly methodName: string;
  readonly service: typeof UsageAuditManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof audit_pb.SetPlayTrackReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type UsageAuditManagerGetUserUsage = {
  readonly methodName: string;
  readonly service: typeof UsageAuditManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof audit_pb.GetUserUsageReq;
  readonly responseType: typeof audit_pb.GetUserUsageRes;
};

export class UsageAuditManager {
  static readonly serviceName: string;
  static readonly SetPlayTrack: UsageAuditManagerSetPlayTrack;
  static readonly GetUserUsage: UsageAuditManagerGetUserUsage;
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

export class UsageAuditManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setPlayTrack(
    requestMessage: audit_pb.SetPlayTrackReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setPlayTrack(
    requestMessage: audit_pb.SetPlayTrackReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getUserUsage(
    requestMessage: audit_pb.GetUserUsageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: audit_pb.GetUserUsageRes|null) => void
  ): UnaryResponse;
  getUserUsage(
    requestMessage: audit_pb.GetUserUsageReq,
    callback: (error: ServiceError|null, responseMessage: audit_pb.GetUserUsageRes|null) => void
  ): UnaryResponse;
}

