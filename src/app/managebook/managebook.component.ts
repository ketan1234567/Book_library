import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-managebook',
  templateUrl: './managebook.component.html',
  styleUrls: ['./managebook.component.css']
})
export class ManagebookComponent implements OnInit { 
    books: Book[];
    book: Book = new Book();
    constructor(private router: Router,
	        private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }
    updateBook(id:number): void {
	this.router.navigate(['/update-book', id]);
    }
    deleteBook(id:number): void {
	this.bookService.deleteBook(id);
    }
}

