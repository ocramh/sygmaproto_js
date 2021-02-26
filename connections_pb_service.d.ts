// package: sygma_pb
// file: connections.proto

import * as connections_pb from "./connections_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConnectionsFindUsers = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connections_pb.FindUsersReq;
  readonly responseType: typeof connections_pb.FindUsersRes;
};

type ConnectionsFindUserByID = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connections_pb.FindUserReq;
  readonly responseType: typeof connections_pb.FindUserRes;
};

type ConnectionsCreateFollowConnection = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connections_pb.FollowReq;
  readonly responseType: typeof connections_pb.ConnectedUser;
};

type ConnectionsCreateMutualConnection = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connections_pb.MutualConnReq;
  readonly responseType: typeof connections_pb.ConnectedUser;
};

type ConnectionsGetConnections = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connections_pb.GetConnReq;
  readonly responseType: typeof connections_pb.GetConnRes;
};

type ConnectionsDeleteConnection = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connections_pb.DeleteConnReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ConnectionsSendJoinInvite = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connections_pb.JoinInviteReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class Connections {
  static readonly serviceName: string;
  static readonly FindUsers: ConnectionsFindUsers;
  static readonly FindUserByID: ConnectionsFindUserByID;
  static readonly CreateFollowConnection: ConnectionsCreateFollowConnection;
  static readonly CreateMutualConnection: ConnectionsCreateMutualConnection;
  static readonly GetConnections: ConnectionsGetConnections;
  static readonly DeleteConnection: ConnectionsDeleteConnection;
  static readonly SendJoinInvite: ConnectionsSendJoinInvite;
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

export class ConnectionsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  findUsers(
    requestMessage: connections_pb.FindUsersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: connections_pb.FindUsersRes|null) => void
  ): UnaryResponse;
  findUsers(
    requestMessage: connections_pb.FindUsersReq,
    callback: (error: ServiceError|null, responseMessage: connections_pb.FindUsersRes|null) => void
  ): UnaryResponse;
  findUserByID(
    requestMessage: connections_pb.FindUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: connections_pb.FindUserRes|null) => void
  ): UnaryResponse;
  findUserByID(
    requestMessage: connections_pb.FindUserReq,
    callback: (error: ServiceError|null, responseMessage: connections_pb.FindUserRes|null) => void
  ): UnaryResponse;
  createFollowConnection(
    requestMessage: connections_pb.FollowReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: connections_pb.ConnectedUser|null) => void
  ): UnaryResponse;
  createFollowConnection(
    requestMessage: connections_pb.FollowReq,
    callback: (error: ServiceError|null, responseMessage: connections_pb.ConnectedUser|null) => void
  ): UnaryResponse;
  createMutualConnection(
    requestMessage: connections_pb.MutualConnReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: connections_pb.ConnectedUser|null) => void
  ): UnaryResponse;
  createMutualConnection(
    requestMessage: connections_pb.MutualConnReq,
    callback: (error: ServiceError|null, responseMessage: connections_pb.ConnectedUser|null) => void
  ): UnaryResponse;
  getConnections(
    requestMessage: connections_pb.GetConnReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: connections_pb.GetConnRes|null) => void
  ): UnaryResponse;
  getConnections(
    requestMessage: connections_pb.GetConnReq,
    callback: (error: ServiceError|null, responseMessage: connections_pb.GetConnRes|null) => void
  ): UnaryResponse;
  deleteConnection(
    requestMessage: connections_pb.DeleteConnReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteConnection(
    requestMessage: connections_pb.DeleteConnReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendJoinInvite(
    requestMessage: connections_pb.JoinInviteReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendJoinInvite(
    requestMessage: connections_pb.JoinInviteReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

