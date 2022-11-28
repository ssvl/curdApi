import { Component } from '@angular/core';
import { AppservicesService } from '../services/appservices.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'apicall';
  result: any;
  deleteSLIDER: any;
  id: any;
  data: any

  constructor(private AppAData: AppservicesService,private Router:ActivatedRoute) { }

  msgForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    quntity: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),

  })

  ngOnInit() {
    this.AllProducts();
  }

  get name(): any {
    return this.msgForm.get('name')
  }

  get city(): any {
    return this.msgForm.get('city')
  }

  get quntity(): any {
    return this.msgForm.get('quntity')
  }
  get size(): any {
    return this.msgForm.get('size')
  }


  AllProducts() {
    this.AppAData.getaData().subscribe((data: any) => {
      this.result = data.result;
      console.log(this.result);
    })
  }

  productdelte(id: any) {
    this.AppAData.deleteData(id).subscribe((deldata: any) => {
      this.deleteSLIDER = deldata;
      console.log(deldata);

    })
  }

  adddata(data: any) {
    this.AppAData.insertdata(this.msgForm.value).subscribe((data: any) => {
     this.data = data;
      console.log(this.msgForm.value)
    })

  }


  getdataByID(_id:any){
    this.AppAData.getbyId(this.Router.snapshot.params['id']).subscribe((data:any)=>{
      console.log(this.id);
    })
  }

}
