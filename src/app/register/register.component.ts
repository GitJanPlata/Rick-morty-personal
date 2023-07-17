import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    const formValues = this.registerForm.value;
    if (formValues.password === formValues.confirmPassword) {
      const newUser = {
        username: formValues.username,
        password: formValues.password
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      console.log('Registro exitoso!');
      this.router.navigate(['/login']);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}