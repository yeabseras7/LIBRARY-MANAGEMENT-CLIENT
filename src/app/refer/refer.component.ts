import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.css']
})
export class ReferComponent implements OnInit {
  books: any[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void{
    this.http.get('http://localhost:3000/books').subscribe((response: any) => {
      this.books = response.data;
      console.log(response.data.category)
    })
  }

}
