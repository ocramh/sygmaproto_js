// package: sygma_pb
// file: recommend.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as types_pb from "./types_pb";

export class AlbumsForUserReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  hasQueryfrom(): boolean;
  clearQueryfrom(): void;
  getQueryfrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueryfrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasQueryto(): boolean;
  clearQueryto(): void;
  getQueryto(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueryto(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearConectionidsList(): void;
  getConectionidsList(): Array<string>;
  setConectionidsList(value: Array<string>): void;
  addConectionids(value: string, index?: number): string;

  clearFavouritegenresList(): void;
  getFavouritegenresList(): Array<string>;
  setFavouritegenresList(value: Array<string>): void;
  addFavouritegenres(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlbumsForUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: AlbumsForUserReq): AlbumsForUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlbumsForUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlbumsForUserReq;
  static deserializeBinaryFromReader(message: AlbumsForUserReq, reader: jspb.BinaryReader): AlbumsForUserReq;
}

export namespace AlbumsForUserReq {
  export type AsObject = {
    userid: string,
    queryfrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    queryto?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conectionidsList: Array<string>,
    favouritegenresList: Array<string>,
  }
}

export class RecommendationsRes extends jspb.Message {
  clearMostplayedList(): void;
  getMostplayedList(): Array<types_pb.Album>;
  setMostplayedList(value: Array<types_pb.Album>): void;
  addMostplayed(value?: types_pb.Album, index?: number): types_pb.Album;

  clearMostplayedbygenreList(): void;
  getMostplayedbygenreList(): Array<types_pb.Album>;
  setMostplayedbygenreList(value: Array<types_pb.Album>): void;
  addMostplayedbygenre(value?: types_pb.Album, index?: number): types_pb.Album;

  clearMostplayedbyfriendsList(): void;
  getMostplayedbyfriendsList(): Array<types_pb.AlbumWithUser>;
  setMostplayedbyfriendsList(value: Array<types_pb.AlbumWithUser>): void;
  addMostplayedbyfriends(value?: types_pb.AlbumWithUser, index?: number): types_pb.AlbumWithUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationsRes): RecommendationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationsRes;
  static deserializeBinaryFromReader(message: RecommendationsRes, reader: jspb.BinaryReader): RecommendationsRes;
}

export namespace RecommendationsRes {
  export type AsObject = {
    mostplayedList: Array<types_pb.Album.AsObject>,
    mostplayedbygenreList: Array<types_pb.Album.AsObject>,
    mostplayedbyfriendsList: Array<types_pb.AlbumWithUser.AsObject>,
  }
}

