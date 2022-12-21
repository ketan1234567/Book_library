import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../services/book.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  books: Book[];
    book: Book = new Book();
    constructor(private router: Router,
	        private bookService: BookService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  respdata:any;
   /* getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }
    addBook(): void {
	this.bookService.addBook(this.book);
        this.router.navigate(['/home']);
    }	*/
    reactiveform=new FormGroup({
      name:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required)
     
    });
    addBook(){
      if(this.reactiveform.valid){
        this.bookService.addBookToSave(this.reactiveform.value)?.subscribe(item=>{
          this.respdata=item;
          if(this.respdata=item){
            //localStorage.setItem('signup',JSON.stringify(this.respdata))
            alertify.success("Registration SuccessFully Book Saved ");
            this.router.navigate(['home']);
          }else{
            alertify.error("Please Try Again ");
          }
        });

      }
    }
  


  }