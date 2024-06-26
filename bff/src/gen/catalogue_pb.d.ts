// package: book
// file: catalogue.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Book extends jspb.Message { 
    getId(): number;
    setId(value: number): Book;
    getTitle(): string;
    setTitle(value: string): Book;
    getAuthor(): string;
    setAuthor(value: string): Book;
    getPrice(): number;
    setPrice(value: number): Book;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Book.AsObject;
    static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Book;
    static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
    export type AsObject = {
        id: number,
        title: string,
        author: string,
        price: number,
    }
}

export class GetBookRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetBookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookRequest;
    static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetBookResponse extends jspb.Message { 

    hasBook(): boolean;
    clearBook(): void;
    getBook(): Book | undefined;
    setBook(value?: Book): GetBookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookResponse): GetBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookResponse;
    static deserializeBinaryFromReader(message: GetBookResponse, reader: jspb.BinaryReader): GetBookResponse;
}

export namespace GetBookResponse {
    export type AsObject = {
        book?: Book.AsObject,
    }
}

export class ListBooksRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBooksRequest): ListBooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBooksRequest;
    static deserializeBinaryFromReader(message: ListBooksRequest, reader: jspb.BinaryReader): ListBooksRequest;
}

export namespace ListBooksRequest {
    export type AsObject = {
    }
}

export class ListBooksResponse extends jspb.Message { 
    clearBooksList(): void;
    getBooksList(): Array<Book>;
    setBooksList(value: Array<Book>): ListBooksResponse;
    addBooks(value?: Book, index?: number): Book;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBooksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBooksResponse): ListBooksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBooksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBooksResponse;
    static deserializeBinaryFromReader(message: ListBooksResponse, reader: jspb.BinaryReader): ListBooksResponse;
}

export namespace ListBooksResponse {
    export type AsObject = {
        booksList: Array<Book.AsObject>,
    }
}
