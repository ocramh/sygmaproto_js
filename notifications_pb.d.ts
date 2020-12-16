// package: sygma_pb
// file: notifications.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SocialNotificationsReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialNotificationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SocialNotificationsReq): SocialNotificationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialNotificationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialNotificationsReq;
  static deserializeBinaryFromReader(message: SocialNotificationsReq, reader: jspb.BinaryReader): SocialNotificationsReq;
}

export namespace SocialNotificationsReq {
  export type AsObject = {
    userid: string,
  }
}

export class SocialNotificationsRes extends jspb.Message {
  clearNotificationsList(): void;
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): void;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialNotificationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: SocialNotificationsRes): SocialNotificationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialNotificationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialNotificationsRes;
  static deserializeBinaryFromReader(message: SocialNotificationsRes, reader: jspb.BinaryReader): SocialNotificationsRes;
}

export namespace SocialNotificationsRes {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class MarkAsReadReq extends jspb.Message {
  clearNotificationidsList(): void;
  getNotificationidsList(): Array<number>;
  setNotificationidsList(value: Array<number>): void;
  addNotificationids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAsReadReq.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAsReadReq): MarkAsReadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkAsReadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAsReadReq;
  static deserializeBinaryFromReader(message: MarkAsReadReq, reader: jspb.BinaryReader): MarkAsReadReq;
}

export namespace MarkAsReadReq {
  export type AsObject = {
    notificationidsList: Array<number>,
  }
}

export class Notification extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): SocialNotificationTypeMap[keyof SocialNotificationTypeMap];
  setType(value: SocialNotificationTypeMap[keyof SocialNotificationTypeMap]): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUserid(): string;
  setUserid(value: string): void;

  getConnectionid(): number;
  setConnectionid(value: number): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: number,
    type: SocialNotificationTypeMap[keyof SocialNotificationTypeMap],
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userid: string,
    connectionid: number,
    info: string,
  }
}

export interface SocialNotificationTypeMap {
  CONNECTION: 0;
  FOLLOWING: 1;
  FOLLOWER: 2;
}

export const SocialNotificationType: SocialNotificationTypeMap;

