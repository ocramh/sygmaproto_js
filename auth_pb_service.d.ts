// package: sygma_pb
// file: auth.proto

import * as auth_pb from "./auth_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthServiceCreateAccount = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.CreateAccountReq;
  readonly responseType: typeof auth_pb.CreateAccountResp;
};

type AuthServiceActivateAccount = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.ActivateAccountReq;
  readonly responseType: typeof auth_pb.ActivateAccountResp;
};

type AuthServiceLogin = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.LoginReq;
  readonly responseType: typeof auth_pb.LoginResp;
};

type AuthServiceRefeshToken = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.RefeshTokenReq;
  readonly responseType: typeof auth_pb.RefeshTokenRes;
};

type AuthServiceRequestPasswordReset = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.RequestPassResetReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthServiceResetPassword = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.ResetPassReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthServiceDeleteAccount = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.DeleteAccountReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthServiceGetUserProfile = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.GetProfileReq;
  readonly responseType: typeof auth_pb.GetProfileRes;
};

type AuthServiceUpdateUserProfile = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.UpdateProfileReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthServiceUpdateEmailNotificationsPreferences = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.PreferencesReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly CreateAccount: AuthServiceCreateAccount;
  static readonly ActivateAccount: AuthServiceActivateAccount;
  static readonly Login: AuthServiceLogin;
  static readonly RefeshToken: AuthServiceRefeshToken;
  static readonly RequestPasswordReset: AuthServiceRequestPasswordReset;
  static readonly ResetPassword: AuthServiceResetPassword;
  static readonly DeleteAccount: AuthServiceDeleteAccount;
  static readonly GetUserProfile: AuthServiceGetUserProfile;
  static readonly UpdateUserProfile: AuthServiceUpdateUserProfile;
  static readonly UpdateEmailNotificationsPreferences: AuthServiceUpdateEmailNotificationsPreferences;
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

export class AuthServiceClient {
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
  getUserProfile(
    requestMessage: auth_pb.GetProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.GetProfileRes|null) => void
  ): UnaryResponse;
  getUserProfile(
    requestMessage: auth_pb.GetProfileReq,
    callback: (error: ServiceError|null, responseMessage: auth_pb.GetProfileRes|null) => void
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
  updateEmailNotificationsPreferences(
    requestMessage: auth_pb.PreferencesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateEmailNotificationsPreferences(
    requestMessage: auth_pb.PreferencesReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

