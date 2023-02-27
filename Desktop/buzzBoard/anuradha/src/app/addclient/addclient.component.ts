import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControlName, FormGroup, Validators,FormControl} from '@angular/forms';
import { Router,NavigationExtras  } from '@angular/router';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  constructor(private route:Router , private myservice: SharedataService) { }
  clientData:any=[];
  edit:any=[];
  update:Boolean = false;
  tempdata:any;
  editClient:any;
  ngOnInit(): void {
    // this.myservice.details.subscribe(data =>{
    //   console.log(data)
    // })
    this.myservice.editData.subscribe(
      det =>
      this.edit= det
      
     )
     console.log("form edit")
         this.clientForm.patchValue({
          clientName: this.edit.clientName,
          clientEmail:this.edit.clientEmail,    
          clientPhone: this.edit.clientPhone,
   
    });
  //  console.log(this.edit)
if(this.clientForm.controls['clientName'].value){
this.update = true
}
  }
  navigationExtras: NavigationExtras = {
    state: {
      data: this.clientData
    }
  };
  clientForm = new FormGroup({
  
    clientName : new FormControl(''),
    clientEmail : new FormControl(''),
    clientPhone : new FormControl(''),
  })
  onsubmitReg(){

  }
  add(){
    // this.idcount = this.idcount+1
    // this.clientForm.controls['id'].value.push(2)
    this.myservice.cd.push(this.clientForm.value);
this.tempdata = this.clientForm.value;
    this.route.navigate([''])
    console.log(this.tempdata)
  }
 
editdata(){
  
}
// updatebtn(){
//   if(this.clientForm.value){
//     this.update = true;
  
//     }
// }

updateClient(f:any){


  this.myservice.cd.map((val:any, index:number)=>{
    if(val.clientPhone == f.clientPhone) {
      this.myservice.cd[index] = f;
      // alert(this.cdd[index])
    }
  });
  this.resetform();
  this.route.navigate([''])

  // this.myservice.updateItem(index,this.clientForm)
  // this.myservice.ls.clientName= 1111111111;
  // alert("update" + this.myservice.ls.clientName)
// this.editClient =  this.clientForm.value;
// this.myservice.updateClient(this.editClient);
// alert(JSON.stringify(this.editClient))
}
resetform(){
  this.clientForm.reset('')
  alert(1)
}
}
