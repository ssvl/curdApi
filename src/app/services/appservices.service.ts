import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppservicesService {

  constructor(private http: HttpClient) { }

  getaData() {
    return this.http.get('http://localhost:5000/api/v1/product/getData');
  }


  deleteData(id: any) {
    return this.http.delete(`http://localhost:5000/api/v1/product/deleteProduct/${id}`);
  }

  insertdata(data:any) {
    return this.http.post(`http://localhost:5000/api/v1/product/addProduct`,data);
  }

  getbyId(id:any){
    return this.http.get(`http://localhost:5000/api/v1/product/getDatabyId/${id}`);
  }

  updateData(id:any,data:any){
    return this.http.patch(`http://localhost:5000/api/v1/product/updatedata/${id}`,data);
  }

}
