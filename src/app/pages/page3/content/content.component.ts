import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page3-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout && this.validateForm.controls.formLayout.value === 'horizontal';
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: [ 'horizontal' ],
      fieldA    : [ null, [ Validators.required ] ],
      filedB    : [ null, [ Validators.required ] ]
    });
  }

}
