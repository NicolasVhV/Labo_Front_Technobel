import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { generateMyForm } from './myForm.form';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  selectInstance : any

  myFormValue! : {
  email : string,
  password : string,
  }

  myForm : FormGroup = generateMyForm(this.fb, this.httpC)

  constructor(
    private fb : FormBuilder,
    private httpC : HttpClient
  ) {}



  ngOnInit(): void {

  }


  typeCoopSelectChange(){
    let displaySelectForm = document.getElementById("typeCoop")!



    if(displaySelectForm.style.display == "block")
      displaySelectForm.style.display = "none"
    else
      displaySelectForm.style.display = "block"


  }



 sendForm(){
  console.log(this.myForm);
  M.toast({html : "Formulaire envoyé"})

  if (this.myForm.status == "VALID") {
    this.myFormValue = {

      email : this.myForm.value["email"],
      password : this.myForm.value["password"]

    }
  }
 }

}
