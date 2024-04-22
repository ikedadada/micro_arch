// package: book
// file: catalogue.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as catalogue_pb from "./catalogue_pb";

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBook: IBookServiceService_IGetBook;
    listBooks: IBookServiceService_IListBooks;
}

interface IBookServiceService_IGetBook extends grpc.MethodDefinition<catalogue_pb.GetBookRequest, catalogue_pb.GetBookResponse> {
    path: "/book.BookService/GetBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalogue_pb.GetBookRequest>;
    requestDeserialize: grpc.deserialize<catalogue_pb.GetBookRequest>;
    responseSerialize: grpc.serialize<catalogue_pb.GetBookResponse>;
    responseDeserialize: grpc.deserialize<catalogue_pb.GetBookResponse>;
}
interface IBookServiceService_IListBooks extends grpc.MethodDefinition<catalogue_pb.ListBooksRequest, catalogue_pb.ListBooksResponse> {
    path: "/book.BookService/ListBooks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catalogue_pb.ListBooksRequest>;
    requestDeserialize: grpc.deserialize<catalogue_pb.ListBooksRequest>;
    responseSerialize: grpc.serialize<catalogue_pb.ListBooksResponse>;
    responseDeserialize: grpc.deserialize<catalogue_pb.ListBooksResponse>;
}

export const BookServiceService: IBookServiceService;

export interface IBookServiceServer extends grpc.UntypedServiceImplementation {
    getBook: grpc.handleUnaryCall<catalogue_pb.GetBookRequest, catalogue_pb.GetBookResponse>;
    listBooks: grpc.handleUnaryCall<catalogue_pb.ListBooksRequest, catalogue_pb.ListBooksResponse>;
}

export interface IBookServiceClient {
    getBook(request: catalogue_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: catalogue_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    getBook(request: catalogue_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalogue_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    getBook(request: catalogue_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalogue_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    listBooks(request: catalogue_pb.ListBooksRequest, callback: (error: grpc.ServiceError | null, response: catalogue_pb.ListBooksResponse) => void): grpc.ClientUnaryCall;
    listBooks(request: catalogue_pb.ListBooksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalogue_pb.ListBooksResponse) => void): grpc.ClientUnaryCall;
    listBooks(request: catalogue_pb.ListBooksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalogue_pb.ListBooksResponse) => void): grpc.ClientUnaryCall;
}

export class BookServiceClient extends grpc.Client implements IBookServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getBook(request: catalogue_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: catalogue_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public getBook(request: catalogue_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalogue_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public getBook(request: catalogue_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalogue_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public listBooks(request: catalogue_pb.ListBooksRequest, callback: (error: grpc.ServiceError | null, response: catalogue_pb.ListBooksResponse) => void): grpc.ClientUnaryCall;
    public listBooks(request: catalogue_pb.ListBooksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catalogue_pb.ListBooksResponse) => void): grpc.ClientUnaryCall;
    public listBooks(request: catalogue_pb.ListBooksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catalogue_pb.ListBooksResponse) => void): grpc.ClientUnaryCall;
}
