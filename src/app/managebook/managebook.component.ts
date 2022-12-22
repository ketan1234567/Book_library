import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../services/book.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as alertify from 'alertifyjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-managebook',
  templateUrl: './managebook.component.html',
  styleUrls: ['./managebook.component.css']
})
export class ManagebookComponent implements OnInit {
  books: Book[];
  book: Book = new Book();
  constructor(private router: Router,
    private bookService: BookService, private location: Location) { }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();

  }
  updateBook(id: number): void {
    this.router.navigate(['/update-book', id]);
  }
  deleteBook(id: number): void {
    this.bookService.deleteBook(id);
  }
  isXyzChecked = false;
  isAbcChecked = true;
  onChange(ob: MatCheckboxChange) {
    console.log("PQR checked: " + ob.checked);
  }
  selectedBooks: Book[];
  deleteFoodSelected() {
    this.isXyzChecked = (this.isXyzChecked) ? false : true;
    if (this.isXyzChecked === true) {
      for (let index = 0; index < this.books.length; index++) {
        this.books[index].selected = "true";
      }
    } else {
      for (let index = 0; index < this.books.length; index++) {
        this.books[index].selected = null;
      }
    }
    if (this.isXyzChecked === false) { return; }

    var self = this;
    alertify.confirm("Remove user", "do you wnat to remove All user simultaneously?", () => {


      this.bookService.getBooks().then(books => this.books = books);
      ``
      this.selectedBooks = this.books.filter(_ => _.selected);
      for (var book in this.selectedBooks) {
        try {
          this.bookService.RemoveUser(this.selectedBooks[book].id)
            .subscribe(data => {

            }
            )
        } catch (error) {
          console.log(error);

        }
      }
      this.bookService.getBooks().then(books => this.books = books);
      alertify.success("Removed SuccessFully");
    }, function () {
      for (let index = 0; index < self.books.length; index++) {
        self.books[index].selected = null;
      }

    });




  }

}




