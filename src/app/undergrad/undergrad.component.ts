import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-undergrad',
  templateUrl: './undergrad.component.html',
  styleUrls: ['./undergrad.component.css']
})
export class UndergradComponent implements OnInit {
  books: any[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void{
    this.http.get('http://localhost:3000/books').subscribe((response: any) => {
      this.books = response.data;
    })
  }

}
