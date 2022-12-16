import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  book: Book = new Book();
  constructor(private route:ActivatedRoute,private router:Router,private bookservices:BookService,private location:Location){}
  ngOnInit(): void {
  this.route.params.pipe(
        switchMap((params: Params) => this.bookservices.getBook(+params['id']))
    ).subscribe(book => {this.book = book; console.log(this.book);});

    //const routerid=this.route.snapshot.paramMap.get('id');
   // console.log(routerid);

}
goBack(): void {
  this.location.back();
}
updateBook(id: number): void {
  this.router.navigate(['/update-book', id]);
}
}


