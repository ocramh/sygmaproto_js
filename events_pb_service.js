// package: sygma_pb
// file: events.proto

var events_pb = require("./events_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EventsService = (function () {
  function EventsService() {}
  EventsService.serviceName = "sygma_pb.EventsService";
  return EventsService;
}());

EventsService.NewEvent = {
  methodName: "NewEvent",
  service: EventsService,
  requestStream: false,
  responseStream: false,
  requestType: events_pb.NewEventReq,
  responseType: google_protobuf_empty_pb.Empty
};

EventsService.UpdateEvent = {
  methodName: "UpdateEvent",
  service: EventsService,
  requestStream: false,
  responseStream: false,
  requestType: events_pb.UpdateEventReq,
  responseType: google_protobuf_empty_pb.Empty
};

EventsService.DeleteEvent = {
  methodName: "DeleteEvent",
  service: EventsService,
  requestStream: false,
  responseStream: false,
  requestType: events_pb.DeleteEventReq,
  responseType: google_protobuf_empty_pb.Empty
};

EventsService.GetEvent = {
  methodName: "GetEvent",
  service: EventsService,
  requestStream: false,
  responseStream: false,
  requestType: events_pb.GetEventReq,
  responseType: events_pb.GetEventRes
};

EventsService.GetEvents = {
  methodName: "GetEvents",
  service: EventsService,
  requestStream: false,
  responseStream: false,
  requestType: events_pb.GetEventsReq,
  responseType: events_pb.GetEventsRes
};

EventsService.SubscribeToEvent = {
  methodName: "SubscribeToEvent",
  service: EventsService,
  requestStream: false,
  responseStream: false,
  requestType: events_pb.SubscribeToEventReq,
  responseType: google_protobuf_empty_pb.Empty
};

EventsService.UnsubscribeToEvent = {
  methodName: "UnsubscribeToEvent",
  service: EventsService,
  requestStream: false,
  responseStream: false,
  requestType: events_pb.UnsubscribeToEventReq,
  responseType: google_protobuf_empty_pb.Empty
};

exports.EventsService = EventsService;

function EventsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EventsServiceClient.prototype.newEvent = function newEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventsService.NewEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EventsServiceClient.prototype.updateEvent = function updateEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventsService.UpdateEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EventsServiceClient.prototype.deleteEvent = function deleteEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventsService.DeleteEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EventsServiceClient.prototype.getEvent = function getEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventsService.GetEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EventsServiceClient.prototype.getEvents = function getEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventsService.GetEvents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EventsServiceClient.prototype.subscribeToEvent = function subscribeToEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventsService.SubscribeToEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EventsServiceClient.prototype.unsubscribeToEvent = function unsubscribeToEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventsService.UnsubscribeToEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.EventsServiceClient = EventsServiceClient;

