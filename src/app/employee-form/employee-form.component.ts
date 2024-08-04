import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  submittedData: any[] = [];;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      address: ['', Validators.required],
      position: ['', Validators.required],
      dateOfJoining: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.employeeForm.valid) {
      this.submittedData.push(this.employeeForm.value);
      console.log(this.employeeForm.value);
      this.employeeForm.reset();
    } else {
      console.log('Form is not valid');
    }
  }

  onReset() {
    this.employeeForm.reset();
  }
}
