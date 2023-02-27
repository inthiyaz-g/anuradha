import { Component, } from '@angular/core';
import { FormBuilder,FormControlName, FormGroup, Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router){

  }
  title = 'anuradha';
  userdata: any;
  clientData=[{clientName:"abc",clientEmail:"abc@abc",clientPhone:444444}]
  clientForm = new FormGroup({
    clientName : new FormControl(''),
    clientEmail : new FormControl(''),
    clientPhone : new FormControl(''),
  })
  onsubmitReg(){
this.clientData.push(this.clientForm.value)
  }
  add(){
    // this.clientData.push(this.clientForm.value)
    // this.clientForm.reset();
    this.route.navigate(["addclient"]);
  }
  editData(userdata:any){
    alert( 1)
  }
  deleteUser(client:any){
    this.cd=this.cd.filter(c => c !== client)

  }
  cd=[{clientName:"abc",clientEmail:"abc@abc",clientPhone:1},
  {clientName:"abc",clientEmail:"abc@abc",clientPhone:345},
  {clientName:"abc",clientEmail:"abc@abc",clientPhone:678}]
}
