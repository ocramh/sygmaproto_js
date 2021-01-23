// source: recommend.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var types_pb = require('./types_pb.js');
goog.object.extend(proto, types_pb);
goog.exportSymbol('proto.sygma_pb.AlbumsForUserReq', null, global);
goog.exportSymbol('proto.sygma_pb.RecommendationsRes', null, global);
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
proto.sygma_pb.AlbumsForUserReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sygma_pb.AlbumsForUserReq.repeatedFields_, null);
};
goog.inherits(proto.sygma_pb.AlbumsForUserReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sygma_pb.AlbumsForUserReq.displayName = 'proto.sygma_pb.AlbumsForUserReq';
}
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
proto.sygma_pb.RecommendationsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sygma_pb.RecommendationsRes.repeatedFields_, null);
};
goog.inherits(proto.sygma_pb.RecommendationsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sygma_pb.RecommendationsRes.displayName = 'proto.sygma_pb.RecommendationsRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sygma_pb.AlbumsForUserReq.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sygma_pb.AlbumsForUserReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sygma_pb.AlbumsForUserReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sygma_pb.AlbumsForUserReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sygma_pb.AlbumsForUserReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queryfrom: (f = msg.getQueryfrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    queryto: (f = msg.getQueryto()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conectionidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.sygma_pb.AlbumsForUserReq}
 */
proto.sygma_pb.AlbumsForUserReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sygma_pb.AlbumsForUserReq;
  return proto.sygma_pb.AlbumsForUserReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sygma_pb.AlbumsForUserReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sygma_pb.AlbumsForUserReq}
 */
proto.sygma_pb.AlbumsForUserReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sygma_pb.AlbumsForUserReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sygma_pb.AlbumsForUserReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sygma_pb.AlbumsForUserReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sygma_pb.AlbumsForUserReq.serializeBinaryToWriter = function(message, writer) {
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
proto.sygma_pb.AlbumsForUserReq.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
 */
proto.sygma_pb.AlbumsForUserReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp queryFrom = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sygma_pb.AlbumsForUserReq.prototype.getQueryfrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
*/
proto.sygma_pb.AlbumsForUserReq.prototype.setQueryfrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
 */
proto.sygma_pb.AlbumsForUserReq.prototype.clearQueryfrom = function() {
  return this.setQueryfrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sygma_pb.AlbumsForUserReq.prototype.hasQueryfrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp queryTo = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sygma_pb.AlbumsForUserReq.prototype.getQueryto = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
*/
proto.sygma_pb.AlbumsForUserReq.prototype.setQueryto = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
 */
proto.sygma_pb.AlbumsForUserReq.prototype.clearQueryto = function() {
  return this.setQueryto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sygma_pb.AlbumsForUserReq.prototype.hasQueryto = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string conectionIDs = 4;
 * @return {!Array<string>}
 */
proto.sygma_pb.AlbumsForUserReq.prototype.getConectionidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
 */
proto.sygma_pb.AlbumsForUserReq.prototype.setConectionidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
 */
proto.sygma_pb.AlbumsForUserReq.prototype.addConectionids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sygma_pb.AlbumsForUserReq} returns this
 */
proto.sygma_pb.AlbumsForUserReq.prototype.clearConectionidsList = function() {
  return this.setConectionidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sygma_pb.RecommendationsRes.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sygma_pb.RecommendationsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.sygma_pb.RecommendationsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sygma_pb.RecommendationsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sygma_pb.RecommendationsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    mostplayedList: jspb.Message.toObjectList(msg.getMostplayedList(),
    types_pb.Album.toObject, includeInstance),
    mostplayedbygenreList: jspb.Message.toObjectList(msg.getMostplayedbygenreList(),
    types_pb.Album.toObject, includeInstance),
    mostplayedbyfriendsList: jspb.Message.toObjectList(msg.getMostplayedbyfriendsList(),
    types_pb.AlbumWithUser.toObject, includeInstance)
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
 * @return {!proto.sygma_pb.RecommendationsRes}
 */
proto.sygma_pb.RecommendationsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sygma_pb.RecommendationsRes;
  return proto.sygma_pb.RecommendationsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sygma_pb.RecommendationsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sygma_pb.RecommendationsRes}
 */
proto.sygma_pb.RecommendationsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.Album;
      reader.readMessage(value,types_pb.Album.deserializeBinaryFromReader);
      msg.addMostplayed(value);
      break;
    case 2:
      var value = new types_pb.Album;
      reader.readMessage(value,types_pb.Album.deserializeBinaryFromReader);
      msg.addMostplayedbygenre(value);
      break;
    case 3:
      var value = new types_pb.AlbumWithUser;
      reader.readMessage(value,types_pb.AlbumWithUser.deserializeBinaryFromReader);
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
proto.sygma_pb.RecommendationsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sygma_pb.RecommendationsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sygma_pb.RecommendationsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sygma_pb.RecommendationsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMostplayedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.Album.serializeBinaryToWriter
    );
  }
  f = message.getMostplayedbygenreList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      types_pb.Album.serializeBinaryToWriter
    );
  }
  f = message.getMostplayedbyfriendsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      types_pb.AlbumWithUser.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Album MostPlayed = 1;
 * @return {!Array<!proto.sygma_pb.Album>}
 */
proto.sygma_pb.RecommendationsRes.prototype.getMostplayedList = function() {
  return /** @type{!Array<!proto.sygma_pb.Album>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.Album, 1));
};


/**
 * @param {!Array<!proto.sygma_pb.Album>} value
 * @return {!proto.sygma_pb.RecommendationsRes} returns this
*/
proto.sygma_pb.RecommendationsRes.prototype.setMostplayedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sygma_pb.Album=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sygma_pb.Album}
 */
proto.sygma_pb.RecommendationsRes.prototype.addMostplayed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sygma_pb.Album, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sygma_pb.RecommendationsRes} returns this
 */
proto.sygma_pb.RecommendationsRes.prototype.clearMostplayedList = function() {
  return this.setMostplayedList([]);
};


/**
 * repeated Album MostPlayedByGenre = 2;
 * @return {!Array<!proto.sygma_pb.Album>}
 */
proto.sygma_pb.RecommendationsRes.prototype.getMostplayedbygenreList = function() {
  return /** @type{!Array<!proto.sygma_pb.Album>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.Album, 2));
};


/**
 * @param {!Array<!proto.sygma_pb.Album>} value
 * @return {!proto.sygma_pb.RecommendationsRes} returns this
*/
proto.sygma_pb.RecommendationsRes.prototype.setMostplayedbygenreList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sygma_pb.Album=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sygma_pb.Album}
 */
proto.sygma_pb.RecommendationsRes.prototype.addMostplayedbygenre = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sygma_pb.Album, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sygma_pb.RecommendationsRes} returns this
 */
proto.sygma_pb.RecommendationsRes.prototype.clearMostplayedbygenreList = function() {
  return this.setMostplayedbygenreList([]);
};


/**
 * repeated AlbumWithUser MostPlayedByFriends = 3;
 * @return {!Array<!proto.sygma_pb.AlbumWithUser>}
 */
proto.sygma_pb.RecommendationsRes.prototype.getMostplayedbyfriendsList = function() {
  return /** @type{!Array<!proto.sygma_pb.AlbumWithUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.AlbumWithUser, 3));
};


/**
 * @param {!Array<!proto.sygma_pb.AlbumWithUser>} value
 * @return {!proto.sygma_pb.RecommendationsRes} returns this
*/
proto.sygma_pb.RecommendationsRes.prototype.setMostplayedbyfriendsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sygma_pb.AlbumWithUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sygma_pb.AlbumWithUser}
 */
proto.sygma_pb.RecommendationsRes.prototype.addMostplayedbyfriends = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sygma_pb.AlbumWithUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sygma_pb.RecommendationsRes} returns this
 */
proto.sygma_pb.RecommendationsRes.prototype.clearMostplayedbyfriendsList = function() {
  return this.setMostplayedbyfriendsList([]);
};


goog.object.extend(exports, proto.sygma_pb);
