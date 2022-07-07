import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  @Output() submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.bookForm = fb.group({
      book_code: '',
      title: '',
      author: '',
      publisher: '',
      published_date: '',
      category: '',
      description: '',
      copy: '',
      isbn: '',
      status: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = this.bookForm.value;
    this.http.post('http://localhost:3000/books', payload).subscribe((res) => {
      this.bookForm = this.fb.group({
        book_code: '',
        title: '',
        author: '',
        publisher: '',
        published_date: '',
        category: '',
        description: '',
        copy: '',
        isbn: '',
        status: ''
      })
      
    })
  }

}
