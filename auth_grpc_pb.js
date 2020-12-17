// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_ActivateAccountReq(arg) {
  if (!(arg instanceof auth_pb.ActivateAccountReq)) {
    throw new Error('Expected argument of type sygma_pb.ActivateAccountReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_ActivateAccountReq(buffer_arg) {
  return auth_pb.ActivateAccountReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_ActivateAccountResp(arg) {
  if (!(arg instanceof auth_pb.ActivateAccountResp)) {
    throw new Error('Expected argument of type sygma_pb.ActivateAccountResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_ActivateAccountResp(buffer_arg) {
  return auth_pb.ActivateAccountResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_CreateAccountReq(arg) {
  if (!(arg instanceof auth_pb.CreateAccountReq)) {
    throw new Error('Expected argument of type sygma_pb.CreateAccountReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_CreateAccountReq(buffer_arg) {
  return auth_pb.CreateAccountReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_CreateAccountResp(arg) {
  if (!(arg instanceof auth_pb.CreateAccountResp)) {
    throw new Error('Expected argument of type sygma_pb.CreateAccountResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_CreateAccountResp(buffer_arg) {
  return auth_pb.CreateAccountResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_DeleteAccountReq(arg) {
  if (!(arg instanceof auth_pb.DeleteAccountReq)) {
    throw new Error('Expected argument of type sygma_pb.DeleteAccountReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_DeleteAccountReq(buffer_arg) {
  return auth_pb.DeleteAccountReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_LoginReq(arg) {
  if (!(arg instanceof auth_pb.LoginReq)) {
    throw new Error('Expected argument of type sygma_pb.LoginReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_LoginReq(buffer_arg) {
  return auth_pb.LoginReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_LoginResp(arg) {
  if (!(arg instanceof auth_pb.LoginResp)) {
    throw new Error('Expected argument of type sygma_pb.LoginResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_LoginResp(buffer_arg) {
  return auth_pb.LoginResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_RefeshTokenReq(arg) {
  if (!(arg instanceof auth_pb.RefeshTokenReq)) {
    throw new Error('Expected argument of type sygma_pb.RefeshTokenReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_RefeshTokenReq(buffer_arg) {
  return auth_pb.RefeshTokenReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_RefeshTokenRes(arg) {
  if (!(arg instanceof auth_pb.RefeshTokenRes)) {
    throw new Error('Expected argument of type sygma_pb.RefeshTokenRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_RefeshTokenRes(buffer_arg) {
  return auth_pb.RefeshTokenRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_RequestPassResetReq(arg) {
  if (!(arg instanceof auth_pb.RequestPassResetReq)) {
    throw new Error('Expected argument of type sygma_pb.RequestPassResetReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_RequestPassResetReq(buffer_arg) {
  return auth_pb.RequestPassResetReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_ResetPassReq(arg) {
  if (!(arg instanceof auth_pb.ResetPassReq)) {
    throw new Error('Expected argument of type sygma_pb.ResetPassReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_ResetPassReq(buffer_arg) {
  return auth_pb.ResetPassReq.deserializeBinary(new Uint8Array(buffer_arg));
}


// the Auth service definition
var AuthService = exports.AuthService = {
  // Creates a new user account
createAccount: {
    path: '/sygma_pb.Auth/CreateAccount',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.CreateAccountReq,
    responseType: auth_pb.CreateAccountResp,
    requestSerialize: serialize_sygma_pb_CreateAccountReq,
    requestDeserialize: deserialize_sygma_pb_CreateAccountReq,
    responseSerialize: serialize_sygma_pb_CreateAccountResp,
    responseDeserialize: deserialize_sygma_pb_CreateAccountResp,
  },
  // Activates the account
activateAccount: {
    path: '/sygma_pb.Auth/ActivateAccount',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ActivateAccountReq,
    responseType: auth_pb.ActivateAccountResp,
    requestSerialize: serialize_sygma_pb_ActivateAccountReq,
    requestDeserialize: deserialize_sygma_pb_ActivateAccountReq,
    responseSerialize: serialize_sygma_pb_ActivateAccountResp,
    responseDeserialize: deserialize_sygma_pb_ActivateAccountResp,
  },
  // Returns an access token that allows the user to access the Sygma services
login: {
    path: '/sygma_pb.Auth/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginReq,
    responseType: auth_pb.LoginResp,
    requestSerialize: serialize_sygma_pb_LoginReq,
    requestDeserialize: deserialize_sygma_pb_LoginReq,
    responseSerialize: serialize_sygma_pb_LoginResp,
    responseDeserialize: deserialize_sygma_pb_LoginResp,
  },
  // Returns a new access and refresh token for authenticated users
refeshToken: {
    path: '/sygma_pb.Auth/RefeshToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RefeshTokenReq,
    responseType: auth_pb.RefeshTokenRes,
    requestSerialize: serialize_sygma_pb_RefeshTokenReq,
    requestDeserialize: deserialize_sygma_pb_RefeshTokenReq,
    responseSerialize: serialize_sygma_pb_RefeshTokenRes,
    responseDeserialize: deserialize_sygma_pb_RefeshTokenRes,
  },
  // Returns a URL that allows the user to reset his/her password
requestPasswordReset: {
    path: '/sygma_pb.Auth/RequestPasswordReset',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RequestPassResetReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_RequestPassResetReq,
    requestDeserialize: deserialize_sygma_pb_RequestPassResetReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Replaces the old password with a new one
resetPassword: {
    path: '/sygma_pb.Auth/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ResetPassReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_ResetPassReq,
    requestDeserialize: deserialize_sygma_pb_ResetPassReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes an existing account
deleteAccount: {
    path: '/sygma_pb.Auth/DeleteAccount',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.DeleteAccountReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_DeleteAccountReq,
    requestDeserialize: deserialize_sygma_pb_DeleteAccountReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
