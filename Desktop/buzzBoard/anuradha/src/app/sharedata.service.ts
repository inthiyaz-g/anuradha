import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  cd:any=[]
  clientData:any=[]
  public details  = new BehaviorSubject<any[]>(this.cd);
  selectedProduct$ = this.details.asObservable();
  editArray:any = []
  public editData = new BehaviorSubject<any[]>(this.editArray);
  edid:Boolean=false;
  selectedHero:any;
 testlist:any=[];
 ls:any=[];
 public mylist  = new BehaviorSubject<any[]>(this.ls);

  constructor() {
    // setTimeout(() => {
    //   this.title.next(this.clientData);
    // }
    // , 1000);
   }
   tempEdit(){
    this.details.next(this.editArray);
   }
   addTolist(textdata:any): Promise <any> {
    return this.ls.push(textdata)
    
    alert(this.ls)
   }
   deleteTodo(i:any): Promise <any> {
    // alert(this.ls.filter((l:any) => l!==i)
    // )
    return this.ls.splice(i , 1)
    
    alert(this.ls)
   }
  loadClient(viewDetails:any){
    
  //   console.log(viewDetails)
  //  this.editData.subscribe(
  //   det =>
  //   console.log(det)
  //  )
    this.editData.next(viewDetails);

    return this.details;
    
  }
  update(edit:boolean){
    this.edid = true;
  }
  deleteClient(i:any): BehaviorSubject <any> {
      return this.cd.splice(i , 1)
  }
  updateItem(index: number, updatedItem: string) {
    this.cd[index] = updatedItem;
    this.editData.next(this.cd);
  }
}
