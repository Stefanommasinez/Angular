import { Component, Input, OnInit } from '@angular/core';
import { Person, Address, Gender, Role } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {

  constructor() {}

  @Input() index!: number;
  @Input() user!: Person;

  ngOnInit(): void {}

}
