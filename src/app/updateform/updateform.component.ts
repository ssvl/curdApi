import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName, FormBuilder, FormArray } from '@angular/forms';
import { AppservicesService } from '../services/appservices.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent {
  result: any;
  id: any;
  myForm: any;
  data: any;
  fb: any;
  sendData: any;

  createOrderForm: FormGroup = new FormGroup({});
  constructor(private AppAData: AppservicesService, private router: ActivatedRoute, private formBuilder: FormBuilder, private routes: Router) {

  }



  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.AppAData.getbyId(this.id).subscribe((res: any) => {
      this.data = res.result;
      console.log(this.data);
    })


    this.createOrderForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      quntity: ['', Validators.compose([Validators.required])],
      size: ['', Validators.compose([Validators.required])],

    })
  }

  onSubmit() {
    this.myForm = document.getElementById('updateProduct');
    this.fb = new FormData(this.myForm);
    this.sendData = {};
    console.log(this.sendData)
    for (var [key, value] of this.fb.entries()) {
      this.sendData[key] = value;
    }

    console.log(this.sendData)
    this.AppAData.updateData(this.id, this.sendData).subscribe(data => {
      this.routes.navigate(['']);
    });
  }



}
