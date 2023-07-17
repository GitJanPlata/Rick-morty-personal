import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const formValues = this.loginForm.value;
  
    if (storedUser && formValues.username === storedUser.username && formValues.password === storedUser.password) {
      this.router.navigate(['/cards']); 
    } else {
      alert('Credenciales incorrectas!');
    }
  }
}