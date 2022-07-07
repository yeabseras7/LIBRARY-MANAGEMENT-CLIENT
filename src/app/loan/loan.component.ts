import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loans: any[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void{
    this.http.get('http://localhost:3000/book_loans').subscribe((response: any) => {
      this.loans = response.data;
    })
  }

}
