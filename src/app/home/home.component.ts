import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import * as alertify from 'alertifyjs';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];



@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private service: BookService, private dialog: MatDialog) { }

    ngOnInit(): void {
        this.getBooks();
    }


    @ViewChild(MatPaginator) paginator !: MatPaginator;

    dataSource: any;
    userDetails: any;


    getBooks(): void {
        this.service.getBooks().then(item => {
            this.userDetails = item;
            console.log(this.userDetails)
            this.dataSource = new MatTableDataSource<Book>(this.userDetails);
            this.dataSource.paginator = this.paginator;
            // console.log(this.userDetails);
        });



    }
    displayedColumns: string[] = ['name', 'price', 'description', 'Actions'];

    FunctionUpdate(userid:any){

        let poppup=this.dialog.open(ModalpopupComponent,{
            width:'300px',
            exitAnimationDuration: '500ms',
            enterAnimationDuration: '500ms',
            
            data: {
                userid: userid
              }


        })
        poppup.afterClosed().subscribe(item => {
            this.getBooks();
          })
    }
    FunctionDelete(userid: any) {
        alertify.confirm("Remove user", "do you wnat to remove this user?", () => {
          this.service.RemoveUser(userid).subscribe(item => {
            this.getBooks();
            alertify.success("Removed SuccessFully");
          });
    
        }, function () { });
      }
}
