// package: sygma_pb
// file: collections.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as types_pb from "./types_pb";

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
  getOwner(): types_pb.User | undefined;
  setOwner(value?: types_pb.User): void;

  getRole(): string;
  setRole(value: string): void;

  clearCollaboratorsList(): void;
  getCollaboratorsList(): Array<types_pb.User>;
  setCollaboratorsList(value: Array<types_pb.User>): void;
  addCollaborators(value?: types_pb.User, index?: number): types_pb.User;

  getCollaboratorscount(): number;
  setCollaboratorscount(value: number): void;

  getSubscriberscount(): number;
  setSubscriberscount(value: number): void;

  getDocumentscount(): number;
  setDocumentscount(value: number): void;

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
    owner?: types_pb.User.AsObject,
    role: string,
    collaboratorsList: Array<types_pb.User.AsObject>,
    collaboratorscount: number,
    subscriberscount: number,
    documentscount: number,
    tagsList: Array<string>,
    pb_private: boolean,
    readOnly: boolean,
  }
}

export class CollectionSummary extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSubscriberscount(): number;
  setSubscriberscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionSummary): CollectionSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionSummary;
  static deserializeBinaryFromReader(message: CollectionSummary, reader: jspb.BinaryReader): CollectionSummary;
}

export namespace CollectionSummary {
  export type AsObject = {
    id: string,
    name: string,
    subscriberscount: number,
  }
}

export class NewCollectionReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): types_pb.User | undefined;
  setOwner(value?: types_pb.User): void;

  clearSharedwithList(): void;
  getSharedwithList(): Array<types_pb.User>;
  setSharedwithList(value: Array<types_pb.User>): void;
  addSharedwith(value?: types_pb.User, index?: number): types_pb.User;

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
    owner?: types_pb.User.AsObject,
    sharedwithList: Array<types_pb.User.AsObject>,
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

export class UpdateCollectionReq extends jspb.Message {
  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): CollectionInfo | undefined;
  setCollection(value?: CollectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCollectionReq): UpdateCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCollectionReq;
  static deserializeBinaryFromReader(message: UpdateCollectionReq, reader: jspb.BinaryReader): UpdateCollectionReq;
}

export namespace UpdateCollectionReq {
  export type AsObject = {
    collection?: CollectionInfo.AsObject,
  }
}

export class UpdateCollectionRes extends jspb.Message {
  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): CollectionInfo | undefined;
  setCollection(value?: CollectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCollectionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCollectionRes): UpdateCollectionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCollectionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCollectionRes;
  static deserializeBinaryFromReader(message: UpdateCollectionRes, reader: jspb.BinaryReader): UpdateCollectionRes;
}

export namespace UpdateCollectionRes {
  export type AsObject = {
    collection?: CollectionInfo.AsObject,
  }
}

export class GetCollectionsReq extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): types_pb.User | undefined;
  setUser(value?: types_pb.User): void;

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
    user?: types_pb.User.AsObject,
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

export class CollectionsByGenreReq extends jspb.Message {
  clearGenresList(): void;
  getGenresList(): Array<string>;
  setGenresList(value: Array<string>): void;
  addGenres(value: string, index?: number): string;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionsByGenreReq.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionsByGenreReq): CollectionsByGenreReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionsByGenreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionsByGenreReq;
  static deserializeBinaryFromReader(message: CollectionsByGenreReq, reader: jspb.BinaryReader): CollectionsByGenreReq;
}

export namespace CollectionsByGenreReq {
  export type AsObject = {
    genresList: Array<string>,
    limit: number,
  }
}

export class CollectionsByGenreRes extends jspb.Message {
  clearCollectionsinfoList(): void;
  getCollectionsinfoList(): Array<CollectionShortInfo>;
  setCollectionsinfoList(value: Array<CollectionShortInfo>): void;
  addCollectionsinfo(value?: CollectionShortInfo, index?: number): CollectionShortInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionsByGenreRes.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionsByGenreRes): CollectionsByGenreRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionsByGenreRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionsByGenreRes;
  static deserializeBinaryFromReader(message: CollectionsByGenreRes, reader: jspb.BinaryReader): CollectionsByGenreRes;
}

export namespace CollectionsByGenreRes {
  export type AsObject = {
    collectionsinfoList: Array<CollectionShortInfo.AsObject>,
  }
}

export class DocsByGenreReq extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocsByGenreReq.AsObject;
  static toObject(includeInstance: boolean, msg: DocsByGenreReq): DocsByGenreReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocsByGenreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocsByGenreReq;
  static deserializeBinaryFromReader(message: DocsByGenreReq, reader: jspb.BinaryReader): DocsByGenreReq;
}

export namespace DocsByGenreReq {
  export type AsObject = {
    value: string,
    offset: number,
  }
}

export class DocsByGenreRes extends jspb.Message {
  clearDocumentsList(): void;
  getDocumentsList(): Array<CollectionItem>;
  setDocumentsList(value: Array<CollectionItem>): void;
  addDocuments(value?: CollectionItem, index?: number): CollectionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocsByGenreRes.AsObject;
  static toObject(includeInstance: boolean, msg: DocsByGenreRes): DocsByGenreRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocsByGenreRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocsByGenreRes;
  static deserializeBinaryFromReader(message: DocsByGenreRes, reader: jspb.BinaryReader): DocsByGenreRes;
}

export namespace DocsByGenreRes {
  export type AsObject = {
    documentsList: Array<CollectionItem.AsObject>,
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

export class FollowCollectionReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  hasFollower(): boolean;
  clearFollower(): void;
  getFollower(): types_pb.User | undefined;
  setFollower(value?: types_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: FollowCollectionReq): FollowCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FollowCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowCollectionReq;
  static deserializeBinaryFromReader(message: FollowCollectionReq, reader: jspb.BinaryReader): FollowCollectionReq;
}

export namespace FollowCollectionReq {
  export type AsObject = {
    collectionid: string,
    follower?: types_pb.User.AsObject,
  }
}

export class UnfollowCollectionReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnfollowCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnfollowCollectionReq): UnfollowCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnfollowCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnfollowCollectionReq;
  static deserializeBinaryFromReader(message: UnfollowCollectionReq, reader: jspb.BinaryReader): UnfollowCollectionReq;
}

export namespace UnfollowCollectionReq {
  export type AsObject = {
    collectionid: string,
  }
}

export class ShareWithUserReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  clearUsersList(): void;
  getUsersList(): Array<types_pb.User>;
  setUsersList(value: Array<types_pb.User>): void;
  addUsers(value?: types_pb.User, index?: number): types_pb.User;

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
    usersList: Array<types_pb.User.AsObject>,
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

export class AddDocumentRes extends jspb.Message {
  getDocumentid(): string;
  setDocumentid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDocumentRes.AsObject;
  static toObject(includeInstance: boolean, msg: AddDocumentRes): AddDocumentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDocumentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDocumentRes;
  static deserializeBinaryFromReader(message: AddDocumentRes, reader: jspb.BinaryReader): AddDocumentRes;
}

export namespace AddDocumentRes {
  export type AsObject = {
    documentid: string,
  }
}

export class DeleteDocumentReq extends jspb.Message {
  getDocumentid(): string;
  setDocumentid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDocumentReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDocumentReq): DeleteDocumentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDocumentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDocumentReq;
  static deserializeBinaryFromReader(message: DeleteDocumentReq, reader: jspb.BinaryReader): DeleteDocumentReq;
}

export namespace DeleteDocumentReq {
  export type AsObject = {
    documentid: string,
  }
}

export class GetAlbumInfoReq extends jspb.Message {
  getAlbumid(): string;
  setAlbumid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlbumInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlbumInfoReq): GetAlbumInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAlbumInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlbumInfoReq;
  static deserializeBinaryFromReader(message: GetAlbumInfoReq, reader: jspb.BinaryReader): GetAlbumInfoReq;
}

export namespace GetAlbumInfoReq {
  export type AsObject = {
    albumid: string,
  }
}

export class GetAlbumInfoRes extends jspb.Message {
  hasAlbum(): boolean;
  clearAlbum(): void;
  getAlbum(): types_pb.Album | undefined;
  setAlbum(value?: types_pb.Album): void;

  clearIncollectionsList(): void;
  getIncollectionsList(): Array<CollectionSummary>;
  setIncollectionsList(value: Array<CollectionSummary>): void;
  addIncollections(value?: CollectionSummary, index?: number): CollectionSummary;

  clearUploadedbyList(): void;
  getUploadedbyList(): Array<types_pb.User>;
  setUploadedbyList(value: Array<types_pb.User>): void;
  addUploadedby(value?: types_pb.User, index?: number): types_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlbumInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlbumInfoRes): GetAlbumInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAlbumInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlbumInfoRes;
  static deserializeBinaryFromReader(message: GetAlbumInfoRes, reader: jspb.BinaryReader): GetAlbumInfoRes;
}

export namespace GetAlbumInfoRes {
  export type AsObject = {
    album?: types_pb.Album.AsObject,
    incollectionsList: Array<CollectionSummary.AsObject>,
    uploadedbyList: Array<types_pb.User.AsObject>,
  }
}

export class GetUserInfoReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoReq): GetUserInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoReq;
  static deserializeBinaryFromReader(message: GetUserInfoReq, reader: jspb.BinaryReader): GetUserInfoReq;
}

export namespace GetUserInfoReq {
  export type AsObject = {
    userid: string,
  }
}

export class GetUserInfoRes extends jspb.Message {
  getTotaluploads(): number;
  setTotaluploads(value: number): void;

  clearCollectionsinfoList(): void;
  getCollectionsinfoList(): Array<CollectionShortInfo>;
  setCollectionsinfoList(value: Array<CollectionShortInfo>): void;
  addCollectionsinfo(value?: CollectionShortInfo, index?: number): CollectionShortInfo;

  clearUploadsinfoList(): void;
  getUploadsinfoList(): Array<UploadInfo>;
  setUploadsinfoList(value: Array<UploadInfo>): void;
  addUploadsinfo(value?: UploadInfo, index?: number): UploadInfo;

  clearGenresinfoList(): void;
  getGenresinfoList(): Array<GenreInfo>;
  setGenresinfoList(value: Array<GenreInfo>): void;
  addGenresinfo(value?: GenreInfo, index?: number): GenreInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoRes): GetUserInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoRes;
  static deserializeBinaryFromReader(message: GetUserInfoRes, reader: jspb.BinaryReader): GetUserInfoRes;
}

export namespace GetUserInfoRes {
  export type AsObject = {
    totaluploads: number,
    collectionsinfoList: Array<CollectionShortInfo.AsObject>,
    uploadsinfoList: Array<UploadInfo.AsObject>,
    genresinfoList: Array<GenreInfo.AsObject>,
  }
}

export class GetAlbumsByUserReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlbumsByUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlbumsByUserReq): GetAlbumsByUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAlbumsByUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlbumsByUserReq;
  static deserializeBinaryFromReader(message: GetAlbumsByUserReq, reader: jspb.BinaryReader): GetAlbumsByUserReq;
}

export namespace GetAlbumsByUserReq {
  export type AsObject = {
    userid: string,
  }
}

export class GetAlbumsByUserRes extends jspb.Message {
  clearUploadedalbumsList(): void;
  getUploadedalbumsList(): Array<CollectionItem>;
  setUploadedalbumsList(value: Array<CollectionItem>): void;
  addUploadedalbums(value?: CollectionItem, index?: number): CollectionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlbumsByUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlbumsByUserRes): GetAlbumsByUserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAlbumsByUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlbumsByUserRes;
  static deserializeBinaryFromReader(message: GetAlbumsByUserRes, reader: jspb.BinaryReader): GetAlbumsByUserRes;
}

export namespace GetAlbumsByUserRes {
  export type AsObject = {
    uploadedalbumsList: Array<CollectionItem.AsObject>,
  }
}

export class CollectionShortInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDocumentscount(): number;
  setDocumentscount(value: number): void;

  getUserscount(): number;
  setUserscount(value: number): void;

  clearGenresList(): void;
  getGenresList(): Array<string>;
  setGenresList(value: Array<string>): void;
  addGenres(value: string, index?: number): string;

  getOnwerid(): string;
  setOnwerid(value: string): void;

  getOwnername(): string;
  setOwnername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionShortInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionShortInfo): CollectionShortInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionShortInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionShortInfo;
  static deserializeBinaryFromReader(message: CollectionShortInfo, reader: jspb.BinaryReader): CollectionShortInfo;
}

export namespace CollectionShortInfo {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    documentscount: number,
    userscount: number,
    genresList: Array<string>,
    onwerid: string,
    ownername: string,
  }
}

export class UploadInfo extends jspb.Message {
  getAlbumid(): string;
  setAlbumid(value: string): void;

  getAlbumname(): string;
  setAlbumname(value: string): void;

  clearGenresList(): void;
  getGenresList(): Array<string>;
  setGenresList(value: Array<string>): void;
  addGenres(value: string, index?: number): string;

  getArtworkurl(): string;
  setArtworkurl(value: string): void;

  getArtistid(): string;
  setArtistid(value: string): void;

  getArtistname(): string;
  setArtistname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UploadInfo): UploadInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadInfo;
  static deserializeBinaryFromReader(message: UploadInfo, reader: jspb.BinaryReader): UploadInfo;
}

export namespace UploadInfo {
  export type AsObject = {
    albumid: string,
    albumname: string,
    genresList: Array<string>,
    artworkurl: string,
    artistid: string,
    artistname: string,
  }
}

export class GenreInfo extends jspb.Message {
  getGenre(): string;
  setGenre(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenreInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GenreInfo): GenreInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenreInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenreInfo;
  static deserializeBinaryFromReader(message: GenreInfo, reader: jspb.BinaryReader): GenreInfo;
}

export namespace GenreInfo {
  export type AsObject = {
    genre: string,
    count: number,
  }
}

export class CollectionItem extends jspb.Message {
  hasSelectedby(): boolean;
  clearSelectedby(): void;
  getSelectedby(): types_pb.User | undefined;
  setSelectedby(value?: types_pb.User): void;

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

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getTotallikes(): number;
  setTotallikes(value: number): void;

  getLiked(): boolean;
  setLiked(value: boolean): void;

  hasAlbum(): boolean;
  clearAlbum(): void;
  getAlbum(): types_pb.Album | undefined;
  setAlbum(value?: types_pb.Album): void;

  getCollectionid(): string;
  setCollectionid(value: string): void;

  getCollectionname(): string;
  setCollectionname(value: string): void;

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
    selectedby?: types_pb.User.AsObject,
    uplaodedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
    id: string,
    description: string,
    tagsList: Array<string>,
    totallikes: number,
    liked: boolean,
    album?: types_pb.Album.AsObject,
    collectionid: string,
    collectionname: string,
  }
}

export class GetGenresReq extends jspb.Message {
  getInuse(): boolean;
  setInuse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGenresReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetGenresReq): GetGenresReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGenresReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGenresReq;
  static deserializeBinaryFromReader(message: GetGenresReq, reader: jspb.BinaryReader): GetGenresReq;
}

export namespace GetGenresReq {
  export type AsObject = {
    inuse: boolean,
  }
}

export class GetGenresRes extends jspb.Message {
  clearGenresList(): void;
  getGenresList(): Array<string>;
  setGenresList(value: Array<string>): void;
  addGenres(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGenresRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetGenresRes): GetGenresRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGenresRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGenresRes;
  static deserializeBinaryFromReader(message: GetGenresRes, reader: jspb.BinaryReader): GetGenresRes;
}

export namespace GetGenresRes {
  export type AsObject = {
    genresList: Array<string>,
  }
}

export class LikeDocumentReq extends jspb.Message {
  getDocumentid(): string;
  setDocumentid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeDocumentReq.AsObject;
  static toObject(includeInstance: boolean, msg: LikeDocumentReq): LikeDocumentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LikeDocumentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeDocumentReq;
  static deserializeBinaryFromReader(message: LikeDocumentReq, reader: jspb.BinaryReader): LikeDocumentReq;
}

export namespace LikeDocumentReq {
  export type AsObject = {
    documentid: string,
  }
}

export class GetUserLikesReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLikesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLikesReq): GetUserLikesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLikesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLikesReq;
  static deserializeBinaryFromReader(message: GetUserLikesReq, reader: jspb.BinaryReader): GetUserLikesReq;
}

export namespace GetUserLikesReq {
  export type AsObject = {
    userid: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetUserLikesRes extends jspb.Message {
  clearDocumentidList(): void;
  getDocumentidList(): Array<string>;
  setDocumentidList(value: Array<string>): void;
  addDocumentid(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLikesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLikesRes): GetUserLikesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLikesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLikesRes;
  static deserializeBinaryFromReader(message: GetUserLikesRes, reader: jspb.BinaryReader): GetUserLikesRes;
}

export namespace GetUserLikesRes {
  export type AsObject = {
    documentidList: Array<string>,
  }
}

export class GetDocumentLikesReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getDocumentid(): string;
  setDocumentid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentLikesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentLikesReq): GetDocumentLikesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDocumentLikesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentLikesReq;
  static deserializeBinaryFromReader(message: GetDocumentLikesReq, reader: jspb.BinaryReader): GetDocumentLikesReq;
}

export namespace GetDocumentLikesReq {
  export type AsObject = {
    userid: string,
    documentid: string,
  }
}

export class GetDocuemntLikesRes extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getLiked(): boolean;
  setLiked(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocuemntLikesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocuemntLikesRes): GetDocuemntLikesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDocuemntLikesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocuemntLikesRes;
  static deserializeBinaryFromReader(message: GetDocuemntLikesRes, reader: jspb.BinaryReader): GetDocuemntLikesRes;
}

export namespace GetDocuemntLikesRes {
  export type AsObject = {
    count: number,
    liked: boolean,
  }
}

export class GetCollectionUsersReq extends jspb.Message {
  getCollectionid(): string;
  setCollectionid(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionUsersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionUsersReq): GetCollectionUsersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionUsersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionUsersReq;
  static deserializeBinaryFromReader(message: GetCollectionUsersReq, reader: jspb.BinaryReader): GetCollectionUsersReq;
}

export namespace GetCollectionUsersReq {
  export type AsObject = {
    collectionid: string,
    offset: number,
  }
}

export class GetCollectionUsersRes extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<types_pb.User>;
  setUsersList(value: Array<types_pb.User>): void;
  addUsers(value?: types_pb.User, index?: number): types_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionUsersRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionUsersRes): GetCollectionUsersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionUsersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionUsersRes;
  static deserializeBinaryFromReader(message: GetCollectionUsersRes, reader: jspb.BinaryReader): GetCollectionUsersRes;
}

export namespace GetCollectionUsersRes {
  export type AsObject = {
    usersList: Array<types_pb.User.AsObject>,
  }
}

export class GetLabelsReleasesReq extends jspb.Message {
  getLabelid(): string;
  setLabelid(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelsReleasesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelsReleasesReq): GetLabelsReleasesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLabelsReleasesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelsReleasesReq;
  static deserializeBinaryFromReader(message: GetLabelsReleasesReq, reader: jspb.BinaryReader): GetLabelsReleasesReq;
}

export namespace GetLabelsReleasesReq {
  export type AsObject = {
    labelid: string,
    offset: number,
  }
}

export class GetTagsReleasesReq extends jspb.Message {
  getTagid(): string;
  setTagid(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagsReleasesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTagsReleasesReq): GetTagsReleasesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTagsReleasesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagsReleasesReq;
  static deserializeBinaryFromReader(message: GetTagsReleasesReq, reader: jspb.BinaryReader): GetTagsReleasesReq;
}

export namespace GetTagsReleasesReq {
  export type AsObject = {
    tagid: string,
    offset: number,
  }
}

export class GetLabelsReleasesRes extends jspb.Message {
  getTotalmatches(): number;
  setTotalmatches(value: number): void;

  clearReleasesList(): void;
  getReleasesList(): Array<ReleaseInfo>;
  setReleasesList(value: Array<ReleaseInfo>): void;
  addReleases(value?: ReleaseInfo, index?: number): ReleaseInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelsReleasesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelsReleasesRes): GetLabelsReleasesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLabelsReleasesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelsReleasesRes;
  static deserializeBinaryFromReader(message: GetLabelsReleasesRes, reader: jspb.BinaryReader): GetLabelsReleasesRes;
}

export namespace GetLabelsReleasesRes {
  export type AsObject = {
    totalmatches: number,
    releasesList: Array<ReleaseInfo.AsObject>,
  }
}

export class ReleaseInfo extends jspb.Message {
  hasAlbum(): boolean;
  clearAlbum(): void;
  getAlbum(): types_pb.Album | undefined;
  setAlbum(value?: types_pb.Album): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): types_pb.Label | undefined;
  setLabel(value?: types_pb.Label): void;

  clearArtistsList(): void;
  getArtistsList(): Array<types_pb.Artist>;
  setArtistsList(value: Array<types_pb.Artist>): void;
  addArtists(value?: types_pb.Artist, index?: number): types_pb.Artist;

  clearUploadedbyList(): void;
  getUploadedbyList(): Array<types_pb.User>;
  setUploadedbyList(value: Array<types_pb.User>): void;
  addUploadedby(value?: types_pb.User, index?: number): types_pb.User;

  getLikescount(): number;
  setLikescount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseInfo): ReleaseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReleaseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseInfo;
  static deserializeBinaryFromReader(message: ReleaseInfo, reader: jspb.BinaryReader): ReleaseInfo;
}

export namespace ReleaseInfo {
  export type AsObject = {
    album?: types_pb.Album.AsObject,
    label?: types_pb.Label.AsObject,
    artistsList: Array<types_pb.Artist.AsObject>,
    uploadedbyList: Array<types_pb.User.AsObject>,
    likescount: number,
  }
}

export class GetTagsReleasesRes extends jspb.Message {
  getTotalmatches(): number;
  setTotalmatches(value: number): void;

  clearReleasesList(): void;
  getReleasesList(): Array<ReleaseInfo>;
  setReleasesList(value: Array<ReleaseInfo>): void;
  addReleases(value?: ReleaseInfo, index?: number): ReleaseInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagsReleasesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTagsReleasesRes): GetTagsReleasesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTagsReleasesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagsReleasesRes;
  static deserializeBinaryFromReader(message: GetTagsReleasesRes, reader: jspb.BinaryReader): GetTagsReleasesRes;
}

export namespace GetTagsReleasesRes {
  export type AsObject = {
    totalmatches: number,
    releasesList: Array<ReleaseInfo.AsObject>,
  }
}

