import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from 'src/app/book';
import { Location } from '@angular/common';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book = new Book();
  constructor(private route: ActivatedRoute,
      private bookService: BookService,
      private location: Location) { }
  ngOnInit(): void {
      this.route.params.pipe(
          switchMap((params: Params) => this.bookService.getBook(+params['id']))
      ).subscribe(book => this.book = book);
  }
  goBack(): void {
      this.location.back();
  }
}