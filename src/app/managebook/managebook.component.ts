import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
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

    @ViewChild('select') select: MatSelect;

    allSelected=false;
     foods: any[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
    toggleAllSelection() {
      if (this.allSelected) {
        this.select.options.forEach((item: MatOption) => item.select());
      } else {
        this.select.options.forEach((item: MatOption) => item.deselect());
      }
    }
     optionClick() {
      let newStatus = true;
      this.select.options.forEach((item: MatOption) => {
        if (!item.selected) {
          newStatus = false;
        }
      });
      this.allSelected = newStatus;
    }
  }


