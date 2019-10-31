import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public contact = {
    name: null,
    email: null,
    phone: null
  }

  public error;
  constructor(
    private _router: Router,
    private _contactService: ContactService
  ) { }

  ngOnInit() {
  }
  submit() {
    this._contactService.add(this.contact).subscribe(
      success => {
        this._router.navigate(["/"]);
      },
      (error: any) => {
        let field = error.error.errors[0].field[0].toUpperCase() + error.error.errors[0].field.slice(1);
        let message = error.error.errors[0].defaultMessage;
        let err = {
          field: error.error.errors[0].field,
          message: field + " " + message
        };
        this.error = err;
      }
    );
  }
  
  back() {
    this._router.navigate(["/"]);
  }
}
