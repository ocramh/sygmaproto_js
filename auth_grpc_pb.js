// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var types_pb = require('./types_pb.js');

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

function serialize_sygma_pb_GetProfileReq(arg) {
  if (!(arg instanceof auth_pb.GetProfileReq)) {
    throw new Error('Expected argument of type sygma_pb.GetProfileReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetProfileReq(buffer_arg) {
  return auth_pb.GetProfileReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetProfileRes(arg) {
  if (!(arg instanceof auth_pb.GetProfileRes)) {
    throw new Error('Expected argument of type sygma_pb.GetProfileRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetProfileRes(buffer_arg) {
  return auth_pb.GetProfileRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetUserEmailReq(arg) {
  if (!(arg instanceof auth_pb.GetUserEmailReq)) {
    throw new Error('Expected argument of type sygma_pb.GetUserEmailReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserEmailReq(buffer_arg) {
  return auth_pb.GetUserEmailReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_GetUserEmailRes(arg) {
  if (!(arg instanceof auth_pb.GetUserEmailRes)) {
    throw new Error('Expected argument of type sygma_pb.GetUserEmailRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_GetUserEmailRes(buffer_arg) {
  return auth_pb.GetUserEmailRes.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sygma_pb_LogoutReq(arg) {
  if (!(arg instanceof auth_pb.LogoutReq)) {
    throw new Error('Expected argument of type sygma_pb.LogoutReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_LogoutReq(buffer_arg) {
  return auth_pb.LogoutReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sygma_pb_PreferencesReq(arg) {
  if (!(arg instanceof auth_pb.PreferencesReq)) {
    throw new Error('Expected argument of type sygma_pb.PreferencesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_PreferencesReq(buffer_arg) {
  return auth_pb.PreferencesReq.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sygma_pb_UpdateProfileReq(arg) {
  if (!(arg instanceof auth_pb.UpdateProfileReq)) {
    throw new Error('Expected argument of type sygma_pb.UpdateProfileReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sygma_pb_UpdateProfileReq(buffer_arg) {
  return auth_pb.UpdateProfileReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  // Creates a new user account
createAccount: {
    path: '/sygma_pb.AuthService/CreateAccount',
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
    path: '/sygma_pb.AuthService/ActivateAccount',
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
    path: '/sygma_pb.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginReq,
    responseType: auth_pb.LoginResp,
    requestSerialize: serialize_sygma_pb_LoginReq,
    requestDeserialize: deserialize_sygma_pb_LoginReq,
    responseSerialize: serialize_sygma_pb_LoginResp,
    responseDeserialize: deserialize_sygma_pb_LoginResp,
  },
  // Cleans any session related data and tokens
logout: {
    path: '/sygma_pb.AuthService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LogoutReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_LogoutReq,
    requestDeserialize: deserialize_sygma_pb_LogoutReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns a new access and refresh token for authenticated users
refeshToken: {
    path: '/sygma_pb.AuthService/RefeshToken',
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
    path: '/sygma_pb.AuthService/RequestPasswordReset',
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
    path: '/sygma_pb.AuthService/ResetPassword',
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
    path: '/sygma_pb.AuthService/DeleteAccount',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.DeleteAccountReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_DeleteAccountReq,
    requestDeserialize: deserialize_sygma_pb_DeleteAccountReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns an existing user profile
getUserProfile: {
    path: '/sygma_pb.AuthService/GetUserProfile',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GetProfileReq,
    responseType: auth_pb.GetProfileRes,
    requestSerialize: serialize_sygma_pb_GetProfileReq,
    requestDeserialize: deserialize_sygma_pb_GetProfileReq,
    responseSerialize: serialize_sygma_pb_GetProfileRes,
    responseDeserialize: deserialize_sygma_pb_GetProfileRes,
  },
  // Updates an existing user profile
updateUserProfile: {
    path: '/sygma_pb.AuthService/UpdateUserProfile',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.UpdateProfileReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_UpdateProfileReq,
    requestDeserialize: deserialize_sygma_pb_UpdateProfileReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Turns on or off the user notifications prefences
updateEmailNotificationsPreferences: {
    path: '/sygma_pb.AuthService/UpdateEmailNotificationsPreferences',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.PreferencesReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sygma_pb_PreferencesReq,
    requestDeserialize: deserialize_sygma_pb_PreferencesReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the email address associated with a user account.
// ONly internal services are allowed to call this method
getUserEmail: {
    path: '/sygma_pb.AuthService/GetUserEmail',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GetUserEmailReq,
    responseType: auth_pb.GetUserEmailRes,
    requestSerialize: serialize_sygma_pb_GetUserEmailReq,
    requestDeserialize: deserialize_sygma_pb_GetUserEmailReq,
    responseSerialize: serialize_sygma_pb_GetUserEmailRes,
    responseDeserialize: deserialize_sygma_pb_GetUserEmailRes,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
