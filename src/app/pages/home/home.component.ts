import { Component } from '@angular/core';

type Link = {
  color: string,
  path: string,
  name: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public links: Link[] = [
    {color: 'red', path: '/details', name: 'Details'},
    {color: 'blue', path: '/contacts', name: 'Contacts'},
    {color: 'black', path: '/services', name: 'Services'},
    {color: 'green', path: '/overview', name: 'Overview'}
  ]
  constructor() { }
}
