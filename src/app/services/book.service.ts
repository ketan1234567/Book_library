import { Injectable } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private http:HttpClient){}
    apiurl="http://localhost:3000/addbook";  
    getBooks(): Promise<any> {
      //  return Promise.resolve(BOOKS);
        return this.http.get(' http://localhost:3000/addbook').toPromise(); // we did add The get add book 
    }
    addBook(book:Book): void {
		this.getBooks().then(books => {
		     let maxIndex = books.length - 1;
		     let bookWithMaxIndex = books[maxIndex];
		     book.id = bookWithMaxIndex.id + 1;
		     books.push(book);}
		);
    }
    getBook(id: number): Promise<Book> {
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }
    deleteBook(id: number): void {
		this.getBooks().then(books => {
		    let book = books.find(ob => ob.id === id);
                    let bookIndex = books.indexOf(book);
                    books.splice(bookIndex, 1);}
		);
    }
addBookToSave(data:any){
    return this.http.post(' http://localhost:3000/addbook',data);
}
RemoveUser(UserId:any){
    return this.http.delete(this.apiurl+'/'+UserId)
  }

  GetAlltheBooks(){
    return this.http.get("http://localhost:3000/addbook");
  }
  GetBooksUserById(UserId:any){
    return this.http.get(this.apiurl+'/'+UserId)
  }
  UpdateUser(inputdata:any){
    return this.http.put(this.apiurl+'/'+inputdata.id,inputdata)
  }

} 