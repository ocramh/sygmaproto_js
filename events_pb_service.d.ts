// package: sygma_pb
// file: events.proto

import * as events_pb from "./events_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EventsServiceNewEvent = {
  readonly methodName: string;
  readonly service: typeof EventsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof events_pb.NewEventReq;
  readonly responseType: typeof events_pb.NewEventRes;
};

type EventsServiceUpdateEvent = {
  readonly methodName: string;
  readonly service: typeof EventsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof events_pb.UpdateEventReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type EventsServiceDeleteEvent = {
  readonly methodName: string;
  readonly service: typeof EventsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof events_pb.DeleteEventReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type EventsServiceGetEvent = {
  readonly methodName: string;
  readonly service: typeof EventsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof events_pb.GetEventReq;
  readonly responseType: typeof events_pb.GetEventRes;
};

type EventsServiceGetEvents = {
  readonly methodName: string;
  readonly service: typeof EventsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof events_pb.GetEventsReq;
  readonly responseType: typeof events_pb.GetEventsRes;
};

type EventsServiceLikeEvent = {
  readonly methodName: string;
  readonly service: typeof EventsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof events_pb.LikeEventReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class EventsService {
  static readonly serviceName: string;
  static readonly NewEvent: EventsServiceNewEvent;
  static readonly UpdateEvent: EventsServiceUpdateEvent;
  static readonly DeleteEvent: EventsServiceDeleteEvent;
  static readonly GetEvent: EventsServiceGetEvent;
  static readonly GetEvents: EventsServiceGetEvents;
  static readonly LikeEvent: EventsServiceLikeEvent;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EventsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  newEvent(
    requestMessage: events_pb.NewEventReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: events_pb.NewEventRes|null) => void
  ): UnaryResponse;
  newEvent(
    requestMessage: events_pb.NewEventReq,
    callback: (error: ServiceError|null, responseMessage: events_pb.NewEventRes|null) => void
  ): UnaryResponse;
  updateEvent(
    requestMessage: events_pb.UpdateEventReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateEvent(
    requestMessage: events_pb.UpdateEventReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEvent(
    requestMessage: events_pb.DeleteEventReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEvent(
    requestMessage: events_pb.DeleteEventReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getEvent(
    requestMessage: events_pb.GetEventReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: events_pb.GetEventRes|null) => void
  ): UnaryResponse;
  getEvent(
    requestMessage: events_pb.GetEventReq,
    callback: (error: ServiceError|null, responseMessage: events_pb.GetEventRes|null) => void
  ): UnaryResponse;
  getEvents(
    requestMessage: events_pb.GetEventsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: events_pb.GetEventsRes|null) => void
  ): UnaryResponse;
  getEvents(
    requestMessage: events_pb.GetEventsReq,
    callback: (error: ServiceError|null, responseMessage: events_pb.GetEventsRes|null) => void
  ): UnaryResponse;
  likeEvent(
    requestMessage: events_pb.LikeEventReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  likeEvent(
    requestMessage: events_pb.LikeEventReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

