import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LabelsService } from '../services/labels/labels.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css'],
})
export class LabelsComponent implements OnInit {
  labelsForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private labelsService: LabelsService) { }

  ngOnInit(): void {
    this.labelsForm =  this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      color: [null, [Validators.required]],
      id: [34]
    });

  }

  onSubmit() {
    console.log(this.labelsForm.value);
    this.labelsService.createLabel(this.labelsForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
