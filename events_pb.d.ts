// package: sygma_pb
// file: events.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as types_pb from "./types_pb";

export class NewEventReq extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): types_pb.Event | undefined;
  setEvent(value?: types_pb.Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: NewEventReq): NewEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewEventReq;
  static deserializeBinaryFromReader(message: NewEventReq, reader: jspb.BinaryReader): NewEventReq;
}

export namespace NewEventReq {
  export type AsObject = {
    event?: types_pb.Event.AsObject,
  }
}

export class NewEventRes extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): types_pb.Event | undefined;
  setEvent(value?: types_pb.Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: NewEventRes): NewEventRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewEventRes;
  static deserializeBinaryFromReader(message: NewEventRes, reader: jspb.BinaryReader): NewEventRes;
}

export namespace NewEventRes {
  export type AsObject = {
    event?: types_pb.Event.AsObject,
  }
}

export class UpdateEventReq extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): types_pb.Event | undefined;
  setEvent(value?: types_pb.Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventReq): UpdateEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventReq;
  static deserializeBinaryFromReader(message: UpdateEventReq, reader: jspb.BinaryReader): UpdateEventReq;
}

export namespace UpdateEventReq {
  export type AsObject = {
    event?: types_pb.Event.AsObject,
  }
}

export class DeleteEventReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventReq): DeleteEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventReq;
  static deserializeBinaryFromReader(message: DeleteEventReq, reader: jspb.BinaryReader): DeleteEventReq;
}

export namespace DeleteEventReq {
  export type AsObject = {
    id: string,
  }
}

export class GetEventReq extends jspb.Message {
  getEventid(): string;
  setEventid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventReq): GetEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventReq;
  static deserializeBinaryFromReader(message: GetEventReq, reader: jspb.BinaryReader): GetEventReq;
}

export namespace GetEventReq {
  export type AsObject = {
    eventid: string,
  }
}

export class GetEventRes extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): types_pb.Event | undefined;
  setEvent(value?: types_pb.Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventRes): GetEventRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventRes;
  static deserializeBinaryFromReader(message: GetEventRes, reader: jspb.BinaryReader): GetEventRes;
}

export namespace GetEventRes {
  export type AsObject = {
    event?: types_pb.Event.AsObject,
  }
}

export class GetEventsReq extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCreatorid(): string;
  setCreatorid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsReq): GetEventsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsReq;
  static deserializeBinaryFromReader(message: GetEventsReq, reader: jspb.BinaryReader): GetEventsReq;
}

export namespace GetEventsReq {
  export type AsObject = {
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creatorid: string,
  }
}

export class GetEventsRes extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<types_pb.Event>;
  setEventsList(value: Array<types_pb.Event>): void;
  addEvents(value?: types_pb.Event, index?: number): types_pb.Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsRes): GetEventsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsRes;
  static deserializeBinaryFromReader(message: GetEventsRes, reader: jspb.BinaryReader): GetEventsRes;
}

export namespace GetEventsRes {
  export type AsObject = {
    eventsList: Array<types_pb.Event.AsObject>,
  }
}

export class LikeEventReq extends jspb.Message {
  getEventid(): string;
  setEventid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: LikeEventReq): LikeEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LikeEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeEventReq;
  static deserializeBinaryFromReader(message: LikeEventReq, reader: jspb.BinaryReader): LikeEventReq;
}

export namespace LikeEventReq {
  export type AsObject = {
    eventid: string,
  }
}

