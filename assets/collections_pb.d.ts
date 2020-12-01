// package: assets
// file: assets/collections.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as users_connections_pb from "../users/connections_pb";

export class CollectionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): users_connections_pb.User | undefined;
  setOwner(value?: users_connections_pb.User): void;

  getRole(): string;
  setRole(value: string): void;

  clearCollaboratorsList(): void;
  getCollaboratorsList(): Array<users_connections_pb.User>;
  setCollaboratorsList(value: Array<users_connections_pb.User>): void;
  addCollaborators(value?: users_connections_pb.User, index?: number): users_connections_pb.User;

  getCollaboratorscount(): number;
  setCollaboratorscount(value: number): void;

  getSubscriberscount(): number;
  setSubscriberscount(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getPrivate(): boolean;
  setPrivate(value: boolean): void;

  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionInfo): CollectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionInfo;
  static deserializeBinaryFromReader(message: CollectionInfo, reader: jspb.BinaryReader): CollectionInfo;
}

export namespace CollectionInfo {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    owner?: users_connections_pb.User.AsObject,
    role: string,
    collaboratorsList: Array<users_connections_pb.User.AsObject>,
    collaboratorscount: number,
    subscriberscount: number,
    tagsList: Array<string>,
    pb_private: boolean,
    readOnly: boolean,
  }
}

export class NewCollectionReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): users_connections_pb.User | undefined;
  setOwner(value?: users_connections_pb.User): void;

  clearSharedwithList(): void;
  getSharedwithList(): Array<users_connections_pb.User>;
  setSharedwithList(value: Array<users_connections_pb.User>): void;
  addSharedwith(value?: users_connections_pb.User, index?: number): users_connections_pb.User;

  getPrivate(): boolean;
  setPrivate(value: boolean): void;

  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: NewCollectionReq): NewCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewCollectionReq;
  static deserializeBinaryFromReader(message: NewCollectionReq, reader: jspb.BinaryReader): NewCollectionReq;
}

export namespace NewCollectionReq {
  export type AsObject = {
    name: string,
    description: string,
    owner?: users_connections_pb.User.AsObject,
    sharedwithList: Array<users_connections_pb.User.AsObject>,
    pb_private: boolean,
    readOnly: boolean,
  }
}

export class NewCollectionRes extends jspb.Message {
  hasCollectioninfo(): boolean;
  clearCollectioninfo(): void;
  getCollectioninfo(): CollectionInfo | undefined;
  setCollectioninfo(value?: CollectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewCollectionRes.AsObject;
  static toObject(includeInstance: boolean, msg: NewCollectionRes): NewCollectionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewCollectionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewCollectionRes;
  static deserializeBinaryFromReader(message: NewCollectionRes, reader: jspb.BinaryReader): NewCollectionRes;
}

export namespace NewCollectionRes {
  export type AsObject = {
    collectioninfo?: CollectionInfo.AsObject,
  }
}

export class GetCollectionsReq extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): users_connections_pb.User | undefined;
  setUser(value?: users_connections_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionsReq): GetCollectionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionsReq;
  static deserializeBinaryFromReader(message: GetCollectionsReq, reader: jspb.BinaryReader): GetCollectionsReq;
}

export namespace GetCollectionsReq {
  export type AsObject = {
    user?: users_connections_pb.User.AsObject,
  }
}

export class GetCollectionsRes extends jspb.Message {
  clearCollectionsList(): void;
  getCollectionsList(): Array<CollectionInfo>;
  setCollectionsList(value: Array<CollectionInfo>): void;
  addCollections(value?: CollectionInfo, index?: number): CollectionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionsRes): GetCollectionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionsRes;
  static deserializeBinaryFromReader(message: GetCollectionsRes, reader: jspb.BinaryReader): GetCollectionsRes;
}

export namespace GetCollectionsRes {
  export type AsObject = {
    collectionsList: Array<CollectionInfo.AsObject>,
  }
}

export class GetCollectionReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionReq): GetCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionReq;
  static deserializeBinaryFromReader(message: GetCollectionReq, reader: jspb.BinaryReader): GetCollectionReq;
}

export namespace GetCollectionReq {
  export type AsObject = {
    collectionid: string,
    userid: string,
  }
}

export class GetCollectionRes extends jspb.Message {
  hasCollectioninfo(): boolean;
  clearCollectioninfo(): void;
  getCollectioninfo(): CollectionInfo | undefined;
  setCollectioninfo(value?: CollectionInfo): void;

  clearCollectionitemsList(): void;
  getCollectionitemsList(): Array<CollectionItem>;
  setCollectionitemsList(value: Array<CollectionItem>): void;
  addCollectionitems(value?: CollectionItem, index?: number): CollectionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionRes): GetCollectionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionRes;
  static deserializeBinaryFromReader(message: GetCollectionRes, reader: jspb.BinaryReader): GetCollectionRes;
}

export namespace GetCollectionRes {
  export type AsObject = {
    collectioninfo?: CollectionInfo.AsObject,
    collectionitemsList: Array<CollectionItem.AsObject>,
  }
}

export class DeleteCollectionReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionReq): DeleteCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionReq;
  static deserializeBinaryFromReader(message: DeleteCollectionReq, reader: jspb.BinaryReader): DeleteCollectionReq;
}

export namespace DeleteCollectionReq {
  export type AsObject = {
    collectionid: string,
  }
}

export class ShareWithUserReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  clearUsersList(): void;
  getUsersList(): Array<users_connections_pb.User>;
  setUsersList(value: Array<users_connections_pb.User>): void;
  addUsers(value?: users_connections_pb.User, index?: number): users_connections_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareWithUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: ShareWithUserReq): ShareWithUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareWithUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareWithUserReq;
  static deserializeBinaryFromReader(message: ShareWithUserReq, reader: jspb.BinaryReader): ShareWithUserReq;
}

export namespace ShareWithUserReq {
  export type AsObject = {
    collectionid: string,
    usersList: Array<users_connections_pb.User.AsObject>,
  }
}

export class AddDocumentReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): CollectionItem | undefined;
  setItem(value?: CollectionItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDocumentReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddDocumentReq): AddDocumentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDocumentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDocumentReq;
  static deserializeBinaryFromReader(message: AddDocumentReq, reader: jspb.BinaryReader): AddDocumentReq;
}

export namespace AddDocumentReq {
  export type AsObject = {
    collectionid: string,
    item?: CollectionItem.AsObject,
  }
}

export class CollectionItem extends jspb.Message {
  hasSelectedby(): boolean;
  clearSelectedby(): void;
  getSelectedby(): users_connections_pb.User | undefined;
  setSelectedby(value?: users_connections_pb.User): void;

  hasUplaodedat(): boolean;
  clearUplaodedat(): void;
  getUplaodedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUplaodedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTitle(): string;
  setTitle(value: string): void;

  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAlbumid(): string;
  setAlbumid(value: string): void;

  getAlbumtitle(): string;
  setAlbumtitle(value: string): void;

  clearAuthorList(): void;
  getAuthorList(): Array<Artist>;
  setAuthorList(value: Array<Artist>): void;
  addAuthor(value?: Artist, index?: number): Artist;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): Label | undefined;
  setLabel(value?: Label): void;

  hasPublisheddate(): boolean;
  clearPublisheddate(): void;
  getPublisheddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublisheddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getArtworkurl(): string;
  setArtworkurl(value: string): void;

  getSourcetype(): SourceTypeMap[keyof SourceTypeMap];
  setSourcetype(value: SourceTypeMap[keyof SourceTypeMap]): void;

  getSourceurl(): string;
  setSourceurl(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionItem.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionItem): CollectionItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionItem;
  static deserializeBinaryFromReader(message: CollectionItem, reader: jspb.BinaryReader): CollectionItem;
}

export namespace CollectionItem {
  export type AsObject = {
    selectedby?: users_connections_pb.User.AsObject,
    uplaodedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
    id: string,
    description: string,
    albumid: string,
    albumtitle: string,
    authorList: Array<Artist.AsObject>,
    label?: Label.AsObject,
    publisheddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    artworkurl: string,
    sourcetype: SourceTypeMap[keyof SourceTypeMap],
    sourceurl: string,
    score: number,
    tagsList: Array<string>,
  }
}

export class Artist extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getArtisturl(): string;
  setArtisturl(value: string): void;

  getImageurl(): string;
  setImageurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artist.AsObject;
  static toObject(includeInstance: boolean, msg: Artist): Artist.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Artist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artist;
  static deserializeBinaryFromReader(message: Artist, reader: jspb.BinaryReader): Artist;
}

export namespace Artist {
  export type AsObject = {
    id: string,
    name: string,
    artisturl: string,
    imageurl: string,
  }
}

export class Label extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLabelurl(): string;
  setLabelurl(value: string): void;

  getImageurl(): string;
  setImageurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    id: string,
    name: string,
    labelurl: string,
    imageurl: string,
  }
}

export interface SourceTypeMap {
  INTERNAL: 0;
  BANDCAMP: 1;
  UNKNOWN: 2;
}

export const SourceType: SourceTypeMap;

