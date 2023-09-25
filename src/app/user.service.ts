import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor(private fb: FormBuilder) {}

  createUserForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      multipleAddress: ['',Validators.required],
      role: ['Admin', Validators.required],
      department: ['']
    });
  }
  

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }
}
