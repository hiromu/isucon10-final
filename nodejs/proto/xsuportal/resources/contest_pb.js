// source: xsuportal/resources/contest.proto
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
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.xsuportal.proto.resources.Contest', null, global);
goog.exportSymbol('proto.xsuportal.proto.resources.Contest.Status', null, global);
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
proto.xsuportal.proto.resources.Contest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.resources.Contest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.resources.Contest.displayName = 'proto.xsuportal.proto.resources.Contest';
}



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
proto.xsuportal.proto.resources.Contest.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.resources.Contest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.resources.Contest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.resources.Contest.toObject = function(includeInstance, msg) {
  var f, obj = {
    registrationOpenAt: (f = msg.getRegistrationOpenAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    contestStartsAt: (f = msg.getContestStartsAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    contestFreezesAt: (f = msg.getContestFreezesAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    contestEndsAt: (f = msg.getContestEndsAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    frozen: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.xsuportal.proto.resources.Contest}
 */
proto.xsuportal.proto.resources.Contest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.resources.Contest;
  return proto.xsuportal.proto.resources.Contest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.resources.Contest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.resources.Contest}
 */
proto.xsuportal.proto.resources.Contest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRegistrationOpenAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setContestStartsAt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setContestFreezesAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setContestEndsAt(value);
      break;
    case 6:
      var value = /** @type {!proto.xsuportal.proto.resources.Contest.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrozen(value);
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
proto.xsuportal.proto.resources.Contest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.resources.Contest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.resources.Contest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.resources.Contest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegistrationOpenAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContestStartsAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContestFreezesAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContestEndsAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getFrozen();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.xsuportal.proto.resources.Contest.Status = {
  STANDBY: 0,
  REGISTRATION: 1,
  STARTED: 2,
  FINISHED: 3
};

/**
 * optional google.protobuf.Timestamp registration_open_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.xsuportal.proto.resources.Contest.prototype.getRegistrationOpenAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
*/
proto.xsuportal.proto.resources.Contest.prototype.setRegistrationOpenAt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
 */
proto.xsuportal.proto.resources.Contest.prototype.clearRegistrationOpenAt = function() {
  return this.setRegistrationOpenAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Contest.prototype.hasRegistrationOpenAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp contest_starts_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.xsuportal.proto.resources.Contest.prototype.getContestStartsAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
*/
proto.xsuportal.proto.resources.Contest.prototype.setContestStartsAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
 */
proto.xsuportal.proto.resources.Contest.prototype.clearContestStartsAt = function() {
  return this.setContestStartsAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Contest.prototype.hasContestStartsAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp contest_freezes_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.xsuportal.proto.resources.Contest.prototype.getContestFreezesAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
*/
proto.xsuportal.proto.resources.Contest.prototype.setContestFreezesAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
 */
proto.xsuportal.proto.resources.Contest.prototype.clearContestFreezesAt = function() {
  return this.setContestFreezesAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Contest.prototype.hasContestFreezesAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp contest_ends_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.xsuportal.proto.resources.Contest.prototype.getContestEndsAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
*/
proto.xsuportal.proto.resources.Contest.prototype.setContestEndsAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
 */
proto.xsuportal.proto.resources.Contest.prototype.clearContestEndsAt = function() {
  return this.setContestEndsAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Contest.prototype.hasContestEndsAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Status status = 6;
 * @return {!proto.xsuportal.proto.resources.Contest.Status}
 */
proto.xsuportal.proto.resources.Contest.prototype.getStatus = function() {
  return /** @type {!proto.xsuportal.proto.resources.Contest.Status} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.xsuportal.proto.resources.Contest.Status} value
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
 */
proto.xsuportal.proto.resources.Contest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional bool frozen = 7;
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Contest.prototype.getFrozen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xsuportal.proto.resources.Contest} returns this
 */
proto.xsuportal.proto.resources.Contest.prototype.setFrozen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


goog.object.extend(exports, proto.xsuportal.proto.resources);
