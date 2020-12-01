// package: users
// file: users/connections.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class User extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getProfilepic(): string;
  setProfilepic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userid: string,
    username: string,
    profilepic: string,
  }
}

export class ConnectionInfo extends jspb.Message {
  getConnectionid(): number;
  setConnectionid(value: number): void;

  hasFromuser(): boolean;
  clearFromuser(): void;
  getFromuser(): User | undefined;
  setFromuser(value?: User): void;

  getTouserid(): string;
  setTouserid(value: string): void;

  getType(): ConnectionTypeMap[keyof ConnectionTypeMap];
  setType(value: ConnectionTypeMap[keyof ConnectionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionInfo): ConnectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionInfo;
  static deserializeBinaryFromReader(message: ConnectionInfo, reader: jspb.BinaryReader): ConnectionInfo;
}

export namespace ConnectionInfo {
  export type AsObject = {
    connectionid: number,
    fromuser?: User.AsObject,
    touserid: string,
    type: ConnectionTypeMap[keyof ConnectionTypeMap],
  }
}

export class ConnectedUser extends jspb.Message {
  getConnectionid(): number;
  setConnectionid(value: number): void;

  getType(): ConnectionTypeMap[keyof ConnectionTypeMap];
  setType(value: ConnectionTypeMap[keyof ConnectionTypeMap]): void;

  hasUserinfo(): boolean;
  clearUserinfo(): void;
  getUserinfo(): User | undefined;
  setUserinfo(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedUser.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedUser): ConnectedUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectedUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedUser;
  static deserializeBinaryFromReader(message: ConnectedUser, reader: jspb.BinaryReader): ConnectedUser;
}

export namespace ConnectedUser {
  export type AsObject = {
    connectionid: number,
    type: ConnectionTypeMap[keyof ConnectionTypeMap],
    userinfo?: User.AsObject,
  }
}

export class FindUsersReq extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsersReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsersReq): FindUsersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsersReq;
  static deserializeBinaryFromReader(message: FindUsersReq, reader: jspb.BinaryReader): FindUsersReq;
}

export namespace FindUsersReq {
  export type AsObject = {
    query: string,
  }
}

export class FindUsersRes extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsersRes.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsersRes): FindUsersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsersRes;
  static deserializeBinaryFromReader(message: FindUsersRes, reader: jspb.BinaryReader): FindUsersRes;
}

export namespace FindUsersRes {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class FindUserReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindUserReq): FindUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUserReq;
  static deserializeBinaryFromReader(message: FindUserReq, reader: jspb.BinaryReader): FindUserReq;
}

export namespace FindUserReq {
  export type AsObject = {
    id: string,
  }
}

export class FindUserRes extends jspb.Message {
  hasUsers(): boolean;
  clearUsers(): void;
  getUsers(): User | undefined;
  setUsers(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: FindUserRes): FindUserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUserRes;
  static deserializeBinaryFromReader(message: FindUserRes, reader: jspb.BinaryReader): FindUserRes;
}

export namespace FindUserRes {
  export type AsObject = {
    users?: User.AsObject,
  }
}

export class FollowReq extends jspb.Message {
  getFromuserid(): string;
  setFromuserid(value: string): void;

  getTouserid(): string;
  setTouserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowReq.AsObject;
  static toObject(includeInstance: boolean, msg: FollowReq): FollowReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FollowReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowReq;
  static deserializeBinaryFromReader(message: FollowReq, reader: jspb.BinaryReader): FollowReq;
}

export namespace FollowReq {
  export type AsObject = {
    fromuserid: string,
    touserid: string,
  }
}

export class MutualConnReq extends jspb.Message {
  getConnectionid(): number;
  setConnectionid(value: number): void;

  getFromuserid(): string;
  setFromuserid(value: string): void;

  getTouserid(): string;
  setTouserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutualConnReq.AsObject;
  static toObject(includeInstance: boolean, msg: MutualConnReq): MutualConnReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutualConnReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutualConnReq;
  static deserializeBinaryFromReader(message: MutualConnReq, reader: jspb.BinaryReader): MutualConnReq;
}

export namespace MutualConnReq {
  export type AsObject = {
    connectionid: number,
    fromuserid: string,
    touserid: string,
  }
}

export class GetConnReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnReq): GetConnReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnReq;
  static deserializeBinaryFromReader(message: GetConnReq, reader: jspb.BinaryReader): GetConnReq;
}

export namespace GetConnReq {
  export type AsObject = {
    userid: string,
  }
}

export class GetConnRes extends jspb.Message {
  clearFollowingList(): void;
  getFollowingList(): Array<ConnectedUser>;
  setFollowingList(value: Array<ConnectedUser>): void;
  addFollowing(value?: ConnectedUser, index?: number): ConnectedUser;

  clearFollowersList(): void;
  getFollowersList(): Array<ConnectedUser>;
  setFollowersList(value: Array<ConnectedUser>): void;
  addFollowers(value?: ConnectedUser, index?: number): ConnectedUser;

  clearConnectedList(): void;
  getConnectedList(): Array<ConnectedUser>;
  setConnectedList(value: Array<ConnectedUser>): void;
  addConnected(value?: ConnectedUser, index?: number): ConnectedUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnRes): GetConnRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnRes;
  static deserializeBinaryFromReader(message: GetConnRes, reader: jspb.BinaryReader): GetConnRes;
}

export namespace GetConnRes {
  export type AsObject = {
    followingList: Array<ConnectedUser.AsObject>,
    followersList: Array<ConnectedUser.AsObject>,
    connectedList: Array<ConnectedUser.AsObject>,
  }
}

export class DeleteConnReq extends jspb.Message {
  getFromuserid(): string;
  setFromuserid(value: string): void;

  getTouserid(): string;
  setTouserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnReq): DeleteConnReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnReq;
  static deserializeBinaryFromReader(message: DeleteConnReq, reader: jspb.BinaryReader): DeleteConnReq;
}

export namespace DeleteConnReq {
  export type AsObject = {
    fromuserid: string,
    touserid: string,
  }
}

export interface ConnectionTypeMap {
  FOLLOW: 0;
  CONNECT: 1;
}

export const ConnectionType: ConnectionTypeMap;

