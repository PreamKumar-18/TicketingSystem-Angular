import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  users: User[] = [];
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userForm = this.userService.createUserForm();
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      if (this.editingIndex !== null) {
        this.users[this.editingIndex] = newUser;
        this.editingIndex = null;
      } else {
        this.userService.addUser(newUser);
      }
      this.userForm.reset();
    }
  }
  editUser(index: number) {
    const selectedUser = this.users[index];
    this.userForm.patchValue(selectedUser);
    this.editingIndex = index; 
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
