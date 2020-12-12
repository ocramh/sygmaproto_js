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
var node_types_pb = require('./node/types_pb.js');
goog.exportSymbol('proto.audit.AlbumsForUserReq', null, global);
goog.exportSymbol('proto.audit.RecommendationsRes', null, global);

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
proto.audit.AlbumsForUserReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.audit.AlbumsForUserReq.repeatedFields_, null);
};
goog.inherits(proto.audit.AlbumsForUserReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.audit.AlbumsForUserReq.displayName = 'proto.audit.AlbumsForUserReq';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.audit.AlbumsForUserReq.repeatedFields_ = [4];



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
proto.audit.AlbumsForUserReq.prototype.toObject = function(opt_includeInstance) {
  return proto.audit.AlbumsForUserReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audit.AlbumsForUserReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.AlbumsForUserReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queryfrom: (f = msg.getQueryfrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    queryto: (f = msg.getQueryto()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conectionidsList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.audit.AlbumsForUserReq}
 */
proto.audit.AlbumsForUserReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audit.AlbumsForUserReq;
  return proto.audit.AlbumsForUserReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audit.AlbumsForUserReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audit.AlbumsForUserReq}
 */
proto.audit.AlbumsForUserReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setQueryfrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setQueryto(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addConectionids(value);
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
proto.audit.AlbumsForUserReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audit.AlbumsForUserReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audit.AlbumsForUserReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.AlbumsForUserReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueryfrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getQueryto();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConectionidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string userID = 1;
 * @return {string}
 */
proto.audit.AlbumsForUserReq.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.audit.AlbumsForUserReq.prototype.setUserid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp queryFrom = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.audit.AlbumsForUserReq.prototype.getQueryfrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.audit.AlbumsForUserReq.prototype.setQueryfrom = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.audit.AlbumsForUserReq.prototype.clearQueryfrom = function() {
  this.setQueryfrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.audit.AlbumsForUserReq.prototype.hasQueryfrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp queryTo = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.audit.AlbumsForUserReq.prototype.getQueryto = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.audit.AlbumsForUserReq.prototype.setQueryto = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.audit.AlbumsForUserReq.prototype.clearQueryto = function() {
  this.setQueryto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.audit.AlbumsForUserReq.prototype.hasQueryto = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string conectionIDs = 4;
 * @return {!Array.<string>}
 */
proto.audit.AlbumsForUserReq.prototype.getConectionidsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array.<string>} value */
proto.audit.AlbumsForUserReq.prototype.setConectionidsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.audit.AlbumsForUserReq.prototype.addConectionids = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.audit.AlbumsForUserReq.prototype.clearConectionidsList = function() {
  this.setConectionidsList([]);
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
proto.audit.RecommendationsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.audit.RecommendationsRes.repeatedFields_, null);
};
goog.inherits(proto.audit.RecommendationsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.audit.RecommendationsRes.displayName = 'proto.audit.RecommendationsRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.audit.RecommendationsRes.repeatedFields_ = [1,2,3];



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
proto.audit.RecommendationsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.audit.RecommendationsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audit.RecommendationsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.RecommendationsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    mostplayedList: jspb.Message.toObjectList(msg.getMostplayedList(),
    node_types_pb.Album.toObject, includeInstance),
    mostplayedbygenreList: jspb.Message.toObjectList(msg.getMostplayedbygenreList(),
    node_types_pb.Album.toObject, includeInstance),
    mostplayedbyfriendsList: jspb.Message.toObjectList(msg.getMostplayedbyfriendsList(),
    node_types_pb.Album.toObject, includeInstance)
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
 * @return {!proto.audit.RecommendationsRes}
 */
proto.audit.RecommendationsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audit.RecommendationsRes;
  return proto.audit.RecommendationsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audit.RecommendationsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audit.RecommendationsRes}
 */
proto.audit.RecommendationsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new node_types_pb.Album;
      reader.readMessage(value,node_types_pb.Album.deserializeBinaryFromReader);
      msg.addMostplayed(value);
      break;
    case 2:
      var value = new node_types_pb.Album;
      reader.readMessage(value,node_types_pb.Album.deserializeBinaryFromReader);
      msg.addMostplayedbygenre(value);
      break;
    case 3:
      var value = new node_types_pb.Album;
      reader.readMessage(value,node_types_pb.Album.deserializeBinaryFromReader);
      msg.addMostplayedbyfriends(value);
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
proto.audit.RecommendationsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audit.RecommendationsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audit.RecommendationsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audit.RecommendationsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMostplayedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      node_types_pb.Album.serializeBinaryToWriter
    );
  }
  f = message.getMostplayedbygenreList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      node_types_pb.Album.serializeBinaryToWriter
    );
  }
  f = message.getMostplayedbyfriendsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      node_types_pb.Album.serializeBinaryToWriter
    );
  }
};


/**
 * repeated protocols.Album MostPlayed = 1;
 * @return {!Array.<!proto.protocols.Album>}
 */
proto.audit.RecommendationsRes.prototype.getMostplayedList = function() {
  return /** @type{!Array.<!proto.protocols.Album>} */ (
    jspb.Message.getRepeatedWrapperField(this, node_types_pb.Album, 1));
};


/** @param {!Array.<!proto.protocols.Album>} value */
proto.audit.RecommendationsRes.prototype.setMostplayedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocols.Album=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.Album}
 */
proto.audit.RecommendationsRes.prototype.addMostplayed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocols.Album, opt_index);
};


proto.audit.RecommendationsRes.prototype.clearMostplayedList = function() {
  this.setMostplayedList([]);
};


/**
 * repeated protocols.Album MostPlayedByGenre = 2;
 * @return {!Array.<!proto.protocols.Album>}
 */
proto.audit.RecommendationsRes.prototype.getMostplayedbygenreList = function() {
  return /** @type{!Array.<!proto.protocols.Album>} */ (
    jspb.Message.getRepeatedWrapperField(this, node_types_pb.Album, 2));
};


/** @param {!Array.<!proto.protocols.Album>} value */
proto.audit.RecommendationsRes.prototype.setMostplayedbygenreList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.Album=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.Album}
 */
proto.audit.RecommendationsRes.prototype.addMostplayedbygenre = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.Album, opt_index);
};


proto.audit.RecommendationsRes.prototype.clearMostplayedbygenreList = function() {
  this.setMostplayedbygenreList([]);
};


/**
 * repeated protocols.Album MostPlayedByFriends = 3;
 * @return {!Array.<!proto.protocols.Album>}
 */
proto.audit.RecommendationsRes.prototype.getMostplayedbyfriendsList = function() {
  return /** @type{!Array.<!proto.protocols.Album>} */ (
    jspb.Message.getRepeatedWrapperField(this, node_types_pb.Album, 3));
};


/** @param {!Array.<!proto.protocols.Album>} value */
proto.audit.RecommendationsRes.prototype.setMostplayedbyfriendsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.Album=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.Album}
 */
proto.audit.RecommendationsRes.prototype.addMostplayedbyfriends = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.Album, opt_index);
};


proto.audit.RecommendationsRes.prototype.clearMostplayedbyfriendsList = function() {
  this.setMostplayedbyfriendsList([]);
};


goog.object.extend(exports, proto.audit);