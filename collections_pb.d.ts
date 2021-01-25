// package: sygma_pb
// file: collections.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as types_pb from "./types_pb";
import * as connections_pb from "./connections_pb";

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
  getOwner(): connections_pb.User | undefined;
  setOwner(value?: connections_pb.User): void;

  getRole(): string;
  setRole(value: string): void;

  clearCollaboratorsList(): void;
  getCollaboratorsList(): Array<connections_pb.User>;
  setCollaboratorsList(value: Array<connections_pb.User>): void;
  addCollaborators(value?: connections_pb.User, index?: number): connections_pb.User;

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
    owner?: connections_pb.User.AsObject,
    role: string,
    collaboratorsList: Array<connections_pb.User.AsObject>,
    collaboratorscount: number,
    subscriberscount: number,
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
  getOwner(): connections_pb.User | undefined;
  setOwner(value?: connections_pb.User): void;

  clearSharedwithList(): void;
  getSharedwithList(): Array<connections_pb.User>;
  setSharedwithList(value: Array<connections_pb.User>): void;
  addSharedwith(value?: connections_pb.User, index?: number): connections_pb.User;

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
    owner?: connections_pb.User.AsObject,
    sharedwithList: Array<connections_pb.User.AsObject>,
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
  getUser(): connections_pb.User | undefined;
  setUser(value?: connections_pb.User): void;

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
    user?: connections_pb.User.AsObject,
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
  getUsersList(): Array<connections_pb.User>;
  setUsersList(value: Array<connections_pb.User>): void;
  addUsers(value?: connections_pb.User, index?: number): connections_pb.User;

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
    usersList: Array<connections_pb.User.AsObject>,
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
  getUploadedbyList(): Array<connections_pb.User>;
  setUploadedbyList(value: Array<connections_pb.User>): void;
  addUploadedby(value?: connections_pb.User, index?: number): connections_pb.User;

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
    uploadedbyList: Array<connections_pb.User.AsObject>,
  }
}

export class GetUserInfoReq extends jspb.Message {
  getAlbumid(): string;
  setAlbumid(value: string): void;

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
    albumid: string,
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

export class CollectionShortInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDocumentscount(): string;
  setDocumentscount(value: string): void;

  getUserscount(): number;
  setUserscount(value: number): void;

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
    documentscount: string,
    userscount: number,
  }
}

export class UploadInfo extends jspb.Message {
  getAlbumid(): string;
  setAlbumid(value: string): void;

  getAlbumname(): string;
  setAlbumname(value: string): void;

  getGenre(): string;
  setGenre(value: string): void;

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
    genre: string,
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
  getSelectedby(): connections_pb.User | undefined;
  setSelectedby(value?: connections_pb.User): void;

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

  getScore(): number;
  setScore(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  hasAlbum(): boolean;
  clearAlbum(): void;
  getAlbum(): types_pb.Album | undefined;
  setAlbum(value?: types_pb.Album): void;

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
    selectedby?: connections_pb.User.AsObject,
    uplaodedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
    id: string,
    description: string,
    score: number,
    tagsList: Array<string>,
    album?: types_pb.Album.AsObject,
  }
}

