// package: sygma_pb
// file: notifications_collection.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CollectionsNotificationsReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionsNotificationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionsNotificationsReq): CollectionsNotificationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionsNotificationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionsNotificationsReq;
  static deserializeBinaryFromReader(message: CollectionsNotificationsReq, reader: jspb.BinaryReader): CollectionsNotificationsReq;
}

export namespace CollectionsNotificationsReq {
  export type AsObject = {
    userid: string,
  }
}

export class CollectionNotificationsRes extends jspb.Message {
  clearNotificationsList(): void;
  getNotificationsList(): Array<CollectionNotification>;
  setNotificationsList(value: Array<CollectionNotification>): void;
  addNotifications(value?: CollectionNotification, index?: number): CollectionNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionNotificationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionNotificationsRes): CollectionNotificationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionNotificationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionNotificationsRes;
  static deserializeBinaryFromReader(message: CollectionNotificationsRes, reader: jspb.BinaryReader): CollectionNotificationsRes;
}

export namespace CollectionNotificationsRes {
  export type AsObject = {
    notificationsList: Array<CollectionNotification.AsObject>,
  }
}

export class MarkCollNotifAsReadReq extends jspb.Message {
  clearNotificationidsList(): void;
  getNotificationidsList(): Array<number>;
  setNotificationidsList(value: Array<number>): void;
  addNotificationids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkCollNotifAsReadReq.AsObject;
  static toObject(includeInstance: boolean, msg: MarkCollNotifAsReadReq): MarkCollNotifAsReadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkCollNotifAsReadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkCollNotifAsReadReq;
  static deserializeBinaryFromReader(message: MarkCollNotifAsReadReq, reader: jspb.BinaryReader): MarkCollNotifAsReadReq;
}

export namespace MarkCollNotifAsReadReq {
  export type AsObject = {
    notificationidsList: Array<number>,
  }
}

export class CollectionNotification extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): CollectionNotificationTypeMap[keyof CollectionNotificationTypeMap];
  setType(value: CollectionNotificationTypeMap[keyof CollectionNotificationTypeMap]): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSenderid(): string;
  setSenderid(value: string): void;

  getCollectionid(): string;
  setCollectionid(value: string): void;

  getAlbumid(): string;
  setAlbumid(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionNotification.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionNotification): CollectionNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionNotification;
  static deserializeBinaryFromReader(message: CollectionNotification, reader: jspb.BinaryReader): CollectionNotification;
}

export namespace CollectionNotification {
  export type AsObject = {
    id: number,
    type: CollectionNotificationTypeMap[keyof CollectionNotificationTypeMap],
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    senderid: string,
    collectionid: string,
    albumid: string,
    info: string,
  }
}

export interface CollectionNotificationTypeMap {
  UNKNOWN: 0;
  NEWCOLLECTION: 1;
  NEWALBUM: 2;
}

export const CollectionNotificationType: CollectionNotificationTypeMap;

