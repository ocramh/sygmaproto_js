// package: audit
// file: audit.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as assets_collections_pb from "./assets/collections_pb";

export class SetPlayTrackReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getTrackid(): string;
  setTrackid(value: string): void;

  getTrackname(): string;
  setTrackname(value: string): void;

  getAlbumid(): string;
  setAlbumid(value: string): void;

  getAlbumname(): string;
  setAlbumname(value: string): void;

  getArtistsMap(): jspb.Map<string, string>;
  clearArtistsMap(): void;
  getLabelid(): string;
  setLabelid(value: string): void;

  getLabelname(): string;
  setLabelname(value: string): void;

  getSourcetype(): assets_collections_pb.SourceTypeMap[keyof assets_collections_pb.SourceTypeMap];
  setSourcetype(value: assets_collections_pb.SourceTypeMap[keyof assets_collections_pb.SourceTypeMap]): void;

  getSourceurl(): string;
  setSourceurl(value: string): void;

  getGenre(): string;
  setGenre(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPlayTrackReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetPlayTrackReq): SetPlayTrackReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPlayTrackReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPlayTrackReq;
  static deserializeBinaryFromReader(message: SetPlayTrackReq, reader: jspb.BinaryReader): SetPlayTrackReq;
}

export namespace SetPlayTrackReq {
  export type AsObject = {
    userid: string,
    trackid: string,
    trackname: string,
    albumid: string,
    albumname: string,
    artistsMap: Array<[string, string]>,
    labelid: string,
    labelname: string,
    sourcetype: assets_collections_pb.SourceTypeMap[keyof assets_collections_pb.SourceTypeMap],
    sourceurl: string,
    genre: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetUserUsageReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserUsageReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserUsageReq): GetUserUsageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserUsageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserUsageReq;
  static deserializeBinaryFromReader(message: GetUserUsageReq, reader: jspb.BinaryReader): GetUserUsageReq;
}

export namespace GetUserUsageReq {
  export type AsObject = {
    userid: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limit: number,
  }
}

export class GetUserUsageRes extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearAuditedtracksList(): void;
  getAuditedtracksList(): Array<AuditedTrack>;
  setAuditedtracksList(value: Array<AuditedTrack>): void;
  addAuditedtracks(value?: AuditedTrack, index?: number): AuditedTrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserUsageRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserUsageRes): GetUserUsageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserUsageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserUsageRes;
  static deserializeBinaryFromReader(message: GetUserUsageRes, reader: jspb.BinaryReader): GetUserUsageRes;
}

export namespace GetUserUsageRes {
  export type AsObject = {
    userid: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    auditedtracksList: Array<AuditedTrack.AsObject>,
  }
}

export class AuditedTrack extends jspb.Message {
  getTrackid(): string;
  setTrackid(value: string): void;

  getTrackname(): string;
  setTrackname(value: string): void;

  getAlbumid(): string;
  setAlbumid(value: string): void;

  getAlbumname(): string;
  setAlbumname(value: string): void;

  getArtistsMap(): jspb.Map<string, string>;
  clearArtistsMap(): void;
  getPlayCount(): number;
  setPlayCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditedTrack.AsObject;
  static toObject(includeInstance: boolean, msg: AuditedTrack): AuditedTrack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditedTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditedTrack;
  static deserializeBinaryFromReader(message: AuditedTrack, reader: jspb.BinaryReader): AuditedTrack;
}

export namespace AuditedTrack {
  export type AsObject = {
    trackid: string,
    trackname: string,
    albumid: string,
    albumname: string,
    artistsMap: Array<[string, string]>,
    playCount: number,
  }
}

