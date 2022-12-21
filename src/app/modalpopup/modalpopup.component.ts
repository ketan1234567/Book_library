import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent  implements OnInit{
  constructor(private service:BookService , @Inject(MAT_DIALOG_DATA) public data: any,
  private ref:MatDialogRef<ModalpopupComponent>) { }
  ngOnInit(): void {
    this.GetAllBooks();
    this.GetExistBooks(this.data.userid);
  }
  AllBooks:any;
  editBooks:any;
  saveBooks:any;
  GetAllBooks() {
    this.service.GetAlltheBooks().subscribe(item => {
      this.AllBooks = item;
    });
   
  }
  updateform=new FormGroup({
    name:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
   
  });

  SaveBoooks() {
    if (this.updateform.valid) {
      this.editBooks.name = this.updateform.getRawValue().name
      this.editBooks.price = this.updateform.getRawValue().price
      this.editBooks.description = this.updateform.getRawValue().description

      this.service.UpdateUser(this.editBooks).subscribe(item => {
        this.saveBooks = item;
        //console.log(this.updateform.getRawValue());
        this.saveBooks = item;
        if (this.saveBooks = item) {
          alertify.success("This is SuccessFully Updated");
          this.ref.close();
        } else {
          alertify.error("please Try again");
        }
      });
    }
  }

  GetExistBooks(userid:any){
    this.service.GetBooksUserById(userid).subscribe(item=>{
      this.editBooks=item;
      if(this.editBooks !=null){
        this.updateform.setValue({ name: this.editBooks.name, price: this.editBooks.price, description: this.editBooks.description})
      }


    })
  }
  /*addBook(){
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
  }*/


}
