import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public contact = {
    id: null,
    name: null,
    email: null,
    phone: null
  };
  public error;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _contactService: ContactService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      param => {
        this._contactService.findById(param.id).subscribe((con: any) => this.contact = con);
      }
    )
  }

  submit() {
    this._contactService.edit(this.contact).subscribe(
      success => {
        this._router.navigate(['/'])
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
