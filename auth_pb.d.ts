// package: sygma_pb
// file: auth.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CreateAccountReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getEmailaddress(): string;
  setEmailaddress(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getConfirmpassword(): string;
  setConfirmpassword(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountReq): CreateAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountReq;
  static deserializeBinaryFromReader(message: CreateAccountReq, reader: jspb.BinaryReader): CreateAccountReq;
}

export namespace CreateAccountReq {
  export type AsObject = {
    username: string,
    emailaddress: string,
    password: string,
    confirmpassword: string,
    deviceid: string,
  }
}

export class CreateAccountResp extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountResp): CreateAccountResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAccountResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountResp;
  static deserializeBinaryFromReader(message: CreateAccountResp, reader: jspb.BinaryReader): CreateAccountResp;
}

export namespace CreateAccountResp {
  export type AsObject = {
    userid: string,
  }
}

export class ActivateAccountReq extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateAccountReq): ActivateAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateAccountReq;
  static deserializeBinaryFromReader(message: ActivateAccountReq, reader: jspb.BinaryReader): ActivateAccountReq;
}

export namespace ActivateAccountReq {
  export type AsObject = {
    token: string,
  }
}

export class ActivateAccountResp extends jspb.Message {
  getActivated(): boolean;
  setActivated(value: boolean): void;

  getBucketurl(): boolean;
  setBucketurl(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateAccountResp.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateAccountResp): ActivateAccountResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateAccountResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateAccountResp;
  static deserializeBinaryFromReader(message: ActivateAccountResp, reader: jspb.BinaryReader): ActivateAccountResp;
}

export namespace ActivateAccountResp {
  export type AsObject = {
    activated: boolean,
    bucketurl: boolean,
  }
}

export class LoginReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReq.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReq): LoginReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReq;
  static deserializeBinaryFromReader(message: LoginReq, reader: jspb.BinaryReader): LoginReq;
}

export namespace LoginReq {
  export type AsObject = {
    username: string,
    password: string,
    deviceid: string,
  }
}

export class LoginResp extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmailaddress(): string;
  setEmailaddress(value: string): void;

  getProfilepic(): string;
  setProfilepic(value: string): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResp.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResp): LoginResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResp;
  static deserializeBinaryFromReader(message: LoginResp, reader: jspb.BinaryReader): LoginResp;
}

export namespace LoginResp {
  export type AsObject = {
    userid: string,
    username: string,
    emailaddress: string,
    profilepic: string,
    accesstoken: string,
    refreshtoken: string,
  }
}

export class RefeshTokenReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefeshTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: RefeshTokenReq): RefeshTokenReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefeshTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefeshTokenReq;
  static deserializeBinaryFromReader(message: RefeshTokenReq, reader: jspb.BinaryReader): RefeshTokenReq;
}

export namespace RefeshTokenReq {
  export type AsObject = {
    userid: string,
    refreshtoken: string,
  }
}

export class RefeshTokenRes extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): void;

  getExpiresat(): number;
  setExpiresat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefeshTokenRes.AsObject;
  static toObject(includeInstance: boolean, msg: RefeshTokenRes): RefeshTokenRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefeshTokenRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefeshTokenRes;
  static deserializeBinaryFromReader(message: RefeshTokenRes, reader: jspb.BinaryReader): RefeshTokenRes;
}

export namespace RefeshTokenRes {
  export type AsObject = {
    accesstoken: string,
    refreshtoken: string,
    expiresat: number,
  }
}

export class RequestPassResetReq extends jspb.Message {
  getEmailaddress(): string;
  setEmailaddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPassResetReq.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPassResetReq): RequestPassResetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPassResetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPassResetReq;
  static deserializeBinaryFromReader(message: RequestPassResetReq, reader: jspb.BinaryReader): RequestPassResetReq;
}

export namespace RequestPassResetReq {
  export type AsObject = {
    emailaddress: string,
  }
}

export class ResetPassReq extends jspb.Message {
  getResettoken(): string;
  setResettoken(value: string): void;

  getNewpassword(): string;
  setNewpassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPassReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPassReq): ResetPassReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetPassReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPassReq;
  static deserializeBinaryFromReader(message: ResetPassReq, reader: jspb.BinaryReader): ResetPassReq;
}

export namespace ResetPassReq {
  export type AsObject = {
    resettoken: string,
    newpassword: string,
  }
}

export class DeleteAccountReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountReq): DeleteAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountReq;
  static deserializeBinaryFromReader(message: DeleteAccountReq, reader: jspb.BinaryReader): DeleteAccountReq;
}

export namespace DeleteAccountReq {
  export type AsObject = {
    username: string,
  }
}

