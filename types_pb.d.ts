// package: sygma_pb
// file: types.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Album extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearTracksList(): void;
  getTracksList(): Array<Track>;
  setTracksList(value: Array<Track>): void;
  addTracks(value?: Track, index?: number): Track;

  clearArtistsList(): void;
  getArtistsList(): Array<Artist>;
  setArtistsList(value: Array<Artist>): void;
  addArtists(value?: Artist, index?: number): Artist;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): Label | undefined;
  setLabel(value?: Label): void;

  hasReleasedat(): boolean;
  clearReleasedat(): void;
  getReleasedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReleasedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getArtworkurl(): string;
  setArtworkurl(value: string): void;

  getOwnerid(): string;
  setOwnerid(value: string): void;

  getOwnername(): string;
  setOwnername(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getSourcetype(): SourceTypeMap[keyof SourceTypeMap];
  setSourcetype(value: SourceTypeMap[keyof SourceTypeMap]): void;

  getSourceurl(): string;
  setSourceurl(value: string): void;

  getGenre(): string;
  setGenre(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Album.AsObject;
  static toObject(includeInstance: boolean, msg: Album): Album.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Album, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Album;
  static deserializeBinaryFromReader(message: Album, reader: jspb.BinaryReader): Album;
}

export namespace Album {
  export type AsObject = {
    id: string,
    name: string,
    tracksList: Array<Track.AsObject>,
    artistsList: Array<Artist.AsObject>,
    label?: Label.AsObject,
    releasedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    artworkurl: string,
    ownerid: string,
    ownername: string,
    info: string,
    sourcetype: SourceTypeMap[keyof SourceTypeMap],
    sourceurl: string,
    genre: string,
  }
}

export class AlbumWithUser extends jspb.Message {
  hasAlbum(): boolean;
  clearAlbum(): void;
  getAlbum(): Album | undefined;
  setAlbum(value?: Album): void;

  getUserid(): string;
  setUserid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlbumWithUser.AsObject;
  static toObject(includeInstance: boolean, msg: AlbumWithUser): AlbumWithUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlbumWithUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlbumWithUser;
  static deserializeBinaryFromReader(message: AlbumWithUser, reader: jspb.BinaryReader): AlbumWithUser;
}

export namespace AlbumWithUser {
  export type AsObject = {
    album?: Album.AsObject,
    userid: string,
    username: string,
  }
}

export class Track extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getNum(): number;
  setNum(value: number): void;

  getDurationsec(): number;
  setDurationsec(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getAudiourl(): string;
  setAudiourl(value: string): void;

  getIsrccode(): string;
  setIsrccode(value: string): void;

  clearCollaboratorsList(): void;
  getCollaboratorsList(): Array<Artist>;
  setCollaboratorsList(value: Array<Artist>): void;
  addCollaborators(value?: Artist, index?: number): Artist;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Track.AsObject;
  static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Track;
  static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
  export type AsObject = {
    id: string,
    name: string,
    num: number,
    durationsec: number,
    url: string,
    audiourl: string,
    isrccode: string,
    collaboratorsList: Array<Artist.AsObject>,
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

export class User extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): UserProfile | undefined;
  setProfile(value?: UserProfile): void;

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
    profile?: UserProfile.AsObject,
  }
}

export class UserProfile extends jspb.Message {
  hasUpdatedat(): boolean;
  clearUpdatedat(): void;
  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOnboarded(): boolean;
  setOnboarded(value: boolean): void;

  getBio(): string;
  setBio(value: string): void;

  getProfilepicurl(): string;
  setProfilepicurl(value: string): void;

  clearFavouritegenresList(): void;
  getFavouritegenresList(): Array<string>;
  setFavouritegenresList(value: Array<string>): void;
  addFavouritegenres(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    onboarded: boolean,
    bio: string,
    profilepicurl: string,
    favouritegenresList: Array<string>,
  }
}

export interface SourceTypeMap {
  INTERNAL: 0;
  BANDCAMP: 1;
  UNKNOWN: 2;
}

export const SourceType: SourceTypeMap;

