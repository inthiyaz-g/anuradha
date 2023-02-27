import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { FormBuilder,FormControlName, FormGroup, Validators,FormControl} from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  constructor( private route:Router, private rou:ActivatedRoute, private myservice:SharedataService ) { }
data:any;
title: any=[];
newdata:number=0;
textdata:any;
dotodata:any;
editObj:any
cname:any;
cemail:any;
cphone:any;
  ngOnInit(): void {
    this.myservice.details.subscribe(
      det =>
      this.data = det
      
     )
    this.getlist();

  }
  // ngAfterViewChecked(): void {
  //   // this.myservice.details.subscribe(
  //   //   det =>{
  //   //     this.data = det[0]

  //   //   }
      
  //   //  )
  // }
  userdata: any;
  // clientData=[{clientName:"abc",clientEmail:"abc@abc",clientPhone:1},
  // {clientName:"abc",clientEmail:"abc@abc",clientPhone:345},
  // {clientName:"abc",clientEmail:"abc@abc",clientPhone:678}]
  
  clientData:any=[];
  update:Boolean = false
//   onsubmitReg(){
// this.clientData.push(this.clientForm.value)
//   }
getlist(){
  this.myservice.mylist.subscribe(l => {
    this.dotodata = l[0];
  })
}
getClients(){
  this.myservice.details.subscribe(
    n => {
    this.data=n[0];
  });
}
aa(){
 this.myservice.addTolist(this.textdata)
 this.myservice.mylist.subscribe(l => {
  this.ngOnInit()
 })

}
deleteTodo(i:any){
this.myservice.deleteTodo(i)
this.myservice.mylist.subscribe(l => {
  this.ngOnInit()
 })
}
  add(){
this.myservice.editData.next([]);
    
    this.route.navigate(["addclient"]);
  }
  editData(client:any) {
    // alert(client[0])
    this.myservice.loadClient(client).subscribe(l =>{
      this.ngOnInit();
    });
    this.route.navigate(["addclient"]);

    // this.myservice.loadClient(userdata);

    // this.userForm.patchValue({
    //   firstName: userdata.firstName,
    //   lastName: userdata.lastName,
    //   email: userdata.email,
   
    // });
  }
  deleteUser(i:any){
    // this.data = this.data.filter((h:any) => h !== client);
    this.myservice.deleteClient(i);

    // this.cd = this.cd.filter((h:any) => h !== phone);
    // this.getClients();
    // alert(phone)
    // this.clientData = this.clientData.filter(ph => ph.clientPhone! == phone.clientPhone)
    // this.clientData.splice(this.newdata,this.newdata);
// this.myservice.deleteClient(phone.clientPhone)
  //  newdata = this.clientData.filter(p => p.clientPhone !== 1);
    // this.myservice.deleteClient(phone).subscribe(d=>{
    //   this.data = d;
    //   console.log(this.data)
    // }
    //  )
//     if(this.newdata > 0 ){
// this.clientData.splice(0, 1);

//     }
    // console.log(this.newdata)
    // this.getClients();
// this.myservice.deleteClient(phone) 
 }
 editClient(client:any){
alert(client.id)
//   this.editData(client);
// this.myservice.tempEdit();
// this.myservice.deleteClient(i);
// this.editObj = client;
// this.cname=this.editObj.clientName;
// this.cemail = this.editObj.clientEmail;
// this.cphone = this.editObj.clientPhone;
// alert(this.cname)
 }
}
