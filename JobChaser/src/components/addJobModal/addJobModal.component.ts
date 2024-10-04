import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { JobModel } from '../../models/jobModel';
@Component({
  selector: 'add-job-modal',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  template: ` <p-button (onClick)="showDialog()" label="Show" />
    <p-dialog
      header="Create New Track"
      [modal]="true"
      [(visible)]="visible"
      [style]="{ width: '30rem' }"
    >
      <form [formGroup]="jobForm">
        <span class="p-text-secondary block mb-5">Enter job information.</span>
        <div class="flex align-items-center mb-3 justify-between">
          <label for="position" class="font-semibold">Position</label>
          <input
            formControlName="position"
            pInputText
            id="position"
            class="flex"
            autocomplete="off"
          />
        </div>
        <div class="flex align-items-center mb-3 justify-between">
          <label for="companyName" class="font-semibold ">Company Name</label>
          <input
            formControlName="companyName"
            pInputText
            id="companyName"
            class="flex"
            autocomplete="off"
          />
        </div>
        <div class="flex align-items-center mb-3 justify-between">
          <label for="applyDate" class="font-semibold ">Apply Date</label>
          <input
            formControlName="applyDate"
            pInputText
            id="applyDate"
            class="flex"
            autocomplete="off"
          />
        </div>
        <div class="flex align-items-center mb-3 justify-between">
          <label for="status" class="font-semibold ">Status</label>
          <input
            formControlName="status"
            pInputText
            id="status"
            class="flex"
            autocomplete="off"
          />
        </div>
        <div class="flex align-items-center mb-5 justify-between">
          <label for="url" class="font-semibold ">Url</label>
          <input
            formControlName="url"
            pInputText
            id="url"
            class="flex"
            autocomplete="off"
          />
        </div>
        <div class="flex justify-end gap-2">
          <p-button
            label="Cancel"
            severity="secondary"
            (onClick)="visible = false"
          />
          <p-button label="Save" (onClick)="addNewJob()" />
        </div>
      </form>
    </p-dialog>`,
})
export class AddJobModalComponent {
  @Output() jobAdded = new EventEmitter<JobModel>();
  jobForm: FormGroup;
  visible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      position: new FormControl(),
      companyName: new FormControl(),
      applyDate: new FormControl([new Date()]),
      status: new FormControl(),
      url: new FormControl(),
    });
  }

  showDialog() {
    this.visible = true;
  }
  addNewJob() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
      this.jobAdded.emit(this.jobForm.value);
      this.visible = false;
    } else {
      console.log('Form is invalid');
    }
  }
}
