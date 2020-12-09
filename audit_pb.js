/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var assets_collections_pb = require('./assets/collections_pb.js');
goog.exportSymbol('proto.audit.AuditedTrack', null, global);
goog.exportSymbol('proto.audit.GetUserUsageReq', null, global);
goog.exportSymbol('proto.audit.GetUserUsageRes', null, global);
goog.exportSymbol('proto.audit.SetPlayTrackReq', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.audit.SetPlayTrackReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.audit.SetPlayTrackReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.audit.SetPlayTrackReq.displayName = 'proto.audit.SetPlayTrackReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.audit.SetPlayTrackReq.prototype.toObject = function(opt_includeInstance) {
  return proto.audit.SetPlayTrackReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audit.SetPlayTrackReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.SetPlayTrackReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    trackid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    trackname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    albumid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    albumname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    artistsMap: (f = msg.getArtistsMap()) ? f.toObject(includeInstance, undefined) : [],
    labelid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    labelname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sourcetype: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sourceurl: jspb.Message.getFieldWithDefault(msg, 11, ""),
    genre: jspb.Message.getFieldWithDefault(msg, 12, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.audit.SetPlayTrackReq}
 */
proto.audit.SetPlayTrackReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audit.SetPlayTrackReq;
  return proto.audit.SetPlayTrackReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audit.SetPlayTrackReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audit.SetPlayTrackReq}
 */
proto.audit.SetPlayTrackReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlbumid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlbumname(value);
      break;
    case 6:
      var value = msg.getArtistsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelname(value);
      break;
    case 10:
      var value = /** @type {!proto.assets.SourceType} */ (reader.readEnum());
      msg.setSourcetype(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceurl(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setGenre(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.audit.SetPlayTrackReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audit.SetPlayTrackReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audit.SetPlayTrackReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.SetPlayTrackReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTrackname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAlbumid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAlbumname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getArtistsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getLabelid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLabelname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSourcetype();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getSourceurl();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getGenre();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string userID = 1;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setUserid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trackID = 2;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setTrackid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trackName = 3;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getTrackname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setTrackname = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string albumID = 4;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getAlbumid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setAlbumid = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string albumName = 5;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getAlbumname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setAlbumname = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> artists = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.audit.SetPlayTrackReq.prototype.getArtistsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.audit.SetPlayTrackReq.prototype.clearArtistsMap = function() {
  this.getArtistsMap().clear();
};


/**
 * optional string labelID = 7;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getLabelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setLabelid = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string labelName = 8;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getLabelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setLabelname = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional assets.SourceType sourceType = 10;
 * @return {!proto.assets.SourceType}
 */
proto.audit.SetPlayTrackReq.prototype.getSourcetype = function() {
  return /** @type {!proto.assets.SourceType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.assets.SourceType} value */
proto.audit.SetPlayTrackReq.prototype.setSourcetype = function(value) {
  jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string sourceURL = 11;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getSourceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setSourceurl = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string genre = 12;
 * @return {string}
 */
proto.audit.SetPlayTrackReq.prototype.getGenre = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.audit.SetPlayTrackReq.prototype.setGenre = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.audit.SetPlayTrackReq.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.audit.SetPlayTrackReq.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.audit.SetPlayTrackReq.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.audit.SetPlayTrackReq.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.audit.GetUserUsageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.audit.GetUserUsageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.audit.GetUserUsageReq.displayName = 'proto.audit.GetUserUsageReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.audit.GetUserUsageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.audit.GetUserUsageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audit.GetUserUsageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.GetUserUsageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.audit.GetUserUsageReq}
 */
proto.audit.GetUserUsageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audit.GetUserUsageReq;
  return proto.audit.GetUserUsageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audit.GetUserUsageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audit.GetUserUsageReq}
 */
proto.audit.GetUserUsageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.audit.GetUserUsageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audit.GetUserUsageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audit.GetUserUsageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.GetUserUsageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string userID = 1;
 * @return {string}
 */
proto.audit.GetUserUsageReq.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.audit.GetUserUsageReq.prototype.setUserid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.audit.GetUserUsageReq.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.audit.GetUserUsageReq.prototype.setFrom = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.audit.GetUserUsageReq.prototype.clearFrom = function() {
  this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.audit.GetUserUsageReq.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.audit.GetUserUsageReq.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.audit.GetUserUsageReq.prototype.setTo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.audit.GetUserUsageReq.prototype.clearTo = function() {
  this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.audit.GetUserUsageReq.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.audit.GetUserUsageReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.audit.GetUserUsageReq.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.audit.GetUserUsageRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.audit.GetUserUsageRes.repeatedFields_, null);
};
goog.inherits(proto.audit.GetUserUsageRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.audit.GetUserUsageRes.displayName = 'proto.audit.GetUserUsageRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.audit.GetUserUsageRes.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.audit.GetUserUsageRes.prototype.toObject = function(opt_includeInstance) {
  return proto.audit.GetUserUsageRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audit.GetUserUsageRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.GetUserUsageRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    auditedtracksList: jspb.Message.toObjectList(msg.getAuditedtracksList(),
    proto.audit.AuditedTrack.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.audit.GetUserUsageRes}
 */
proto.audit.GetUserUsageRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audit.GetUserUsageRes;
  return proto.audit.GetUserUsageRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audit.GetUserUsageRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audit.GetUserUsageRes}
 */
proto.audit.GetUserUsageRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = new proto.audit.AuditedTrack;
      reader.readMessage(value,proto.audit.AuditedTrack.deserializeBinaryFromReader);
      msg.addAuditedtracks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.audit.GetUserUsageRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audit.GetUserUsageRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audit.GetUserUsageRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.GetUserUsageRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuditedtracksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.audit.AuditedTrack.serializeBinaryToWriter
    );
  }
};


/**
 * optional string userID = 1;
 * @return {string}
 */
proto.audit.GetUserUsageRes.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.audit.GetUserUsageRes.prototype.setUserid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.audit.GetUserUsageRes.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.audit.GetUserUsageRes.prototype.setFrom = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.audit.GetUserUsageRes.prototype.clearFrom = function() {
  this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.audit.GetUserUsageRes.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.audit.GetUserUsageRes.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.audit.GetUserUsageRes.prototype.setTo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.audit.GetUserUsageRes.prototype.clearTo = function() {
  this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.audit.GetUserUsageRes.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated AuditedTrack auditedTracks = 4;
 * @return {!Array.<!proto.audit.AuditedTrack>}
 */
proto.audit.GetUserUsageRes.prototype.getAuditedtracksList = function() {
  return /** @type{!Array.<!proto.audit.AuditedTrack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.audit.AuditedTrack, 4));
};


/** @param {!Array.<!proto.audit.AuditedTrack>} value */
proto.audit.GetUserUsageRes.prototype.setAuditedtracksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.audit.AuditedTrack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.audit.AuditedTrack}
 */
proto.audit.GetUserUsageRes.prototype.addAuditedtracks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.audit.AuditedTrack, opt_index);
};


proto.audit.GetUserUsageRes.prototype.clearAuditedtracksList = function() {
  this.setAuditedtracksList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.audit.AuditedTrack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.audit.AuditedTrack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.audit.AuditedTrack.displayName = 'proto.audit.AuditedTrack';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.audit.AuditedTrack.prototype.toObject = function(opt_includeInstance) {
  return proto.audit.AuditedTrack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audit.AuditedTrack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.AuditedTrack.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    trackname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    albumid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    albumname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    artistsMap: (f = msg.getArtistsMap()) ? f.toObject(includeInstance, undefined) : [],
    playCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    genre: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.audit.AuditedTrack}
 */
proto.audit.AuditedTrack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audit.AuditedTrack;
  return proto.audit.AuditedTrack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audit.AuditedTrack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audit.AuditedTrack}
 */
proto.audit.AuditedTrack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlbumid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlbumname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelname(value);
      break;
    case 7:
      var value = msg.getArtistsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayCount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setGenre(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.audit.AuditedTrack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audit.AuditedTrack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audit.AuditedTrack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.AuditedTrack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTrackname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAlbumid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAlbumname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLabelid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLabelname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getArtistsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPlayCount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getGenre();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string trackID = 1;
 * @return {string}
 */
proto.audit.AuditedTrack.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.audit.AuditedTrack.prototype.setTrackid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trackName = 2;
 * @return {string}
 */
proto.audit.AuditedTrack.prototype.getTrackname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.audit.AuditedTrack.prototype.setTrackname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string albumID = 3;
 * @return {string}
 */
proto.audit.AuditedTrack.prototype.getAlbumid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.audit.AuditedTrack.prototype.setAlbumid = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string albumName = 4;
 * @return {string}
 */
proto.audit.AuditedTrack.prototype.getAlbumname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.audit.AuditedTrack.prototype.setAlbumname = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string labelID = 5;
 * @return {string}
 */
proto.audit.AuditedTrack.prototype.getLabelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.audit.AuditedTrack.prototype.setLabelid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string labelName = 6;
 * @return {string}
 */
proto.audit.AuditedTrack.prototype.getLabelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.audit.AuditedTrack.prototype.setLabelname = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<string, string> artists = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.audit.AuditedTrack.prototype.getArtistsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


proto.audit.AuditedTrack.prototype.clearArtistsMap = function() {
  this.getArtistsMap().clear();
};


/**
 * optional int32 play_count = 8;
 * @return {number}
 */
proto.audit.AuditedTrack.prototype.getPlayCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.audit.AuditedTrack.prototype.setPlayCount = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string genre = 9;
 * @return {string}
 */
proto.audit.AuditedTrack.prototype.getGenre = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.audit.AuditedTrack.prototype.setGenre = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.audit);
