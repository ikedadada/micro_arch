// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var catalogue_pb = require('./catalogue_pb.js');

function serialize_book_GetBookRequest(arg) {
  if (!(arg instanceof catalogue_pb.GetBookRequest)) {
    throw new Error('Expected argument of type book.GetBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_GetBookRequest(buffer_arg) {
  return catalogue_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_GetBookResponse(arg) {
  if (!(arg instanceof catalogue_pb.GetBookResponse)) {
    throw new Error('Expected argument of type book.GetBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_GetBookResponse(buffer_arg) {
  return catalogue_pb.GetBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_ListBooksRequest(arg) {
  if (!(arg instanceof catalogue_pb.ListBooksRequest)) {
    throw new Error('Expected argument of type book.ListBooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_ListBooksRequest(buffer_arg) {
  return catalogue_pb.ListBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_ListBooksResponse(arg) {
  if (!(arg instanceof catalogue_pb.ListBooksResponse)) {
    throw new Error('Expected argument of type book.ListBooksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_ListBooksResponse(buffer_arg) {
  return catalogue_pb.ListBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  getBook: {
    path: '/book.BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: catalogue_pb.GetBookRequest,
    responseType: catalogue_pb.GetBookResponse,
    requestSerialize: serialize_book_GetBookRequest,
    requestDeserialize: deserialize_book_GetBookRequest,
    responseSerialize: serialize_book_GetBookResponse,
    responseDeserialize: deserialize_book_GetBookResponse,
  },
  listBooks: {
    path: '/book.BookService/ListBooks',
    requestStream: false,
    responseStream: false,
    requestType: catalogue_pb.ListBooksRequest,
    responseType: catalogue_pb.ListBooksResponse,
    requestSerialize: serialize_book_ListBooksRequest,
    requestDeserialize: deserialize_book_ListBooksRequest,
    responseSerialize: serialize_book_ListBooksResponse,
    responseDeserialize: deserialize_book_ListBooksResponse,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
