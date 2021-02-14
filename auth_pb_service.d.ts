// package: sygma_pb
// file: auth.proto

import * as auth_pb from "./auth_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthCreateAccount = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.CreateAccountReq;
  readonly responseType: typeof auth_pb.CreateAccountResp;
};

type AuthActivateAccount = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.ActivateAccountReq;
  readonly responseType: typeof auth_pb.ActivateAccountResp;
};

type AuthLogin = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.LoginReq;
  readonly responseType: typeof auth_pb.LoginResp;
};

type AuthRefeshToken = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.RefeshTokenReq;
  readonly responseType: typeof auth_pb.RefeshTokenRes;
};

type AuthRequestPasswordReset = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.RequestPassResetReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthResetPassword = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.ResetPassReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthDeleteAccount = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.DeleteAccountReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthUpdateUserProfile = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.UpdateProfileReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class Auth {
  static readonly serviceName: string;
  static readonly CreateAccount: AuthCreateAccount;
  static readonly ActivateAccount: AuthActivateAccount;
  static readonly Login: AuthLogin;
  static readonly RefeshToken: AuthRefeshToken;
  static readonly RequestPasswordReset: AuthRequestPasswordReset;
  static readonly ResetPassword: AuthResetPassword;
  static readonly DeleteAccount: AuthDeleteAccount;
  static readonly UpdateUserProfile: AuthUpdateUserProfile;
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

export class AuthClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createAccount(
    requestMessage: auth_pb.CreateAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.CreateAccountResp|null) => void
  ): UnaryResponse;
  createAccount(
    requestMessage: auth_pb.CreateAccountReq,
    callback: (error: ServiceError|null, responseMessage: auth_pb.CreateAccountResp|null) => void
  ): UnaryResponse;
  activateAccount(
    requestMessage: auth_pb.ActivateAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.ActivateAccountResp|null) => void
  ): UnaryResponse;
  activateAccount(
    requestMessage: auth_pb.ActivateAccountReq,
    callback: (error: ServiceError|null, responseMessage: auth_pb.ActivateAccountResp|null) => void
  ): UnaryResponse;
  login(
    requestMessage: auth_pb.LoginReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.LoginResp|null) => void
  ): UnaryResponse;
  login(
    requestMessage: auth_pb.LoginReq,
    callback: (error: ServiceError|null, responseMessage: auth_pb.LoginResp|null) => void
  ): UnaryResponse;
  refeshToken(
    requestMessage: auth_pb.RefeshTokenReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.RefeshTokenRes|null) => void
  ): UnaryResponse;
  refeshToken(
    requestMessage: auth_pb.RefeshTokenReq,
    callback: (error: ServiceError|null, responseMessage: auth_pb.RefeshTokenRes|null) => void
  ): UnaryResponse;
  requestPasswordReset(
    requestMessage: auth_pb.RequestPassResetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  requestPasswordReset(
    requestMessage: auth_pb.RequestPassResetReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetPassword(
    requestMessage: auth_pb.ResetPassReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetPassword(
    requestMessage: auth_pb.ResetPassReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteAccount(
    requestMessage: auth_pb.DeleteAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteAccount(
    requestMessage: auth_pb.DeleteAccountReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateUserProfile(
    requestMessage: auth_pb.UpdateProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateUserProfile(
    requestMessage: auth_pb.UpdateProfileReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

