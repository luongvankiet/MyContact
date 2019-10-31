import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contacts;
  public term;
  @ViewChild('close') close;
  constructor(
    private _contactService: ContactService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.findAllContacts();
  }

  findAllContacts() {
    this._contactService.findAll().subscribe(data => this.contacts = data);
  }

  search() {
    this._contactService.search(this.term).subscribe(data => this.contacts = data);
  }

  add(event: MouseEvent) {
    event.preventDefault();
    this._router.navigate(['/add']);
  }

  edit(contact, event: MouseEvent) {
    event.preventDefault();
    this._router.navigate([`${contact.id}/edit`]);
  }

  showModal(event: MouseEvent) {
    event.preventDefault();
  }

  delete(contact) {
    this._contactService.delete(contact.id).subscribe(
      success => {
        location.reload();
      });
  }
}
