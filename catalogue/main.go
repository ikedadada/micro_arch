package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	pb "micro_arch/catalogue/proto/book"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type Book struct {
	Id     int
	Title  string
	Author string
	Price  int
}

// DBを使わずに書籍情報を返せるように構造体にデータを保持
var (
	book1 = Book{
		Id:     1,
		Title:  "The Awakening",
		Author: "Kate Chopin",
		Price:  1000,
	}
	book2 = Book{
		Id:     2,
		Title:  "City of Glass",
		Author: "Paul Auster",
		Price:  2000,
	}
	books = []Book{book1, book2}
)

func getBook(i int32) Book {
	return books[int(i)]
}

func getBooks() []Book {
	return books
}

type server struct {
	pb.UnimplementedBookServiceServer
}

func (s *server) GetBook(ctx context.Context, req *pb.GetBookRequest) (*pb.GetBookResponse, error) {
	book := getBook(req.Id)
	return &pb.GetBookResponse{
		Book: &pb.Book{
			Id:     int32(book.Id),
			Title:  book.Title,
			Author: book.Author,
			Price:  int32(book.Price),
		},
	}, nil
}

func (s *server) ListBooks(ctx context.Context, req *pb.ListBooksRequest) (*pb.ListBooksResponse, error) {
	books := getBooks()
	var pbBooks []*pb.Book
	for _, book := range books {
		pbBooks = append(pbBooks, &pb.Book{
			Id:     int32(book.Id),
			Title:  book.Title,
			Author: book.Author,
			Price:  int32(book.Price),
		})
	}
	return &pb.ListBooksResponse{
		Books: pbBooks,
	}, nil
}

var (
	port = flag.Int("port", 50051, "The server port")
)

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()

	// 自動生成された関数に、サーバーと実際に処理を行うメソッドを実装したハンドラを設定
	pb.RegisterBookServiceServer(s, &server{})
	// gRPCサーバーにリフレクションサービスを登録
	reflection.Register(s)

	log.Printf("Server listening at :%v", lis.Addr())

	// サーバーを起動し、エラー発生時にはエラーメッセージを出力
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
