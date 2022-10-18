import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { generateMyForm } from './myFormCo.form';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {
  myFormValue! : {
    email : string,
    password : string,
    }

    // myForm : FormGroup = generateMyForm(this.fb, this.httpC)

  constructor(
    private fb : FormBuilder,
    private httpC : HttpClient
  ) {}

  ngOnInit(): void {
  }

}
