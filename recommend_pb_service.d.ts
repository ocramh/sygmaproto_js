// package: audit
// file: recommend.proto

import * as recommend_pb from "./recommend_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RecommendationsAlbumsForUser = {
  readonly methodName: string;
  readonly service: typeof Recommendations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof recommend_pb.AlbumsForUserReq;
  readonly responseType: typeof recommend_pb.RecommendationsRes;
};

export class Recommendations {
  static readonly serviceName: string;
  static readonly AlbumsForUser: RecommendationsAlbumsForUser;
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

export class RecommendationsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  albumsForUser(
    requestMessage: recommend_pb.AlbumsForUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: recommend_pb.RecommendationsRes|null) => void
  ): UnaryResponse;
  albumsForUser(
    requestMessage: recommend_pb.AlbumsForUserReq,
    callback: (error: ServiceError|null, responseMessage: recommend_pb.RecommendationsRes|null) => void
  ): UnaryResponse;
}

