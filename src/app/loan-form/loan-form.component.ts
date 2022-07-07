import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
  loanForm: FormGroup;
  users: any[] = [];
  books: any[] = [];
  @Output() submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loanForm = fb.group({
      user_id: '',
      book_id: '',
      due_date: '',
      loan_date: '',
      status: ''
    })
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe((response: any) => {
      this.users = response.data
    })

    this.http.get('http://localhost:3000/books').subscribe((response: any) => {
      this.books = response.data
    })
  }

  onSubmit(): void {
    const payload = this.loanForm.value;
    this.http.post('http://localhost:3000/book_loans', payload).subscribe((res) => {
      this.loanForm = this.fb.group({
        user_id: '',
        book_id: '',
        due_date: '',
        loan_date: '',
        status: ''
      })
      
    })
  }
}
