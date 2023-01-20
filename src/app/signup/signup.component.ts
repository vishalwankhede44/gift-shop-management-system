import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  show:boolean = false;
  showConfirm:boolean = false;
  popup:boolean = false;
  popupType:string = 'success';
  popupMessage:string='';
    

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(data:any){
    // if(!globals.Methods.validateText(data.username) || !globals.Methods.validateText(data.password)){
    //   globals.popup.msg = "Invalid Input";
    //   globals.popup.type = 'danger';
    //   this.ngOnInit();
    //   return;
    }

    togglePassword(){
      this.show = !this.show;
    }

    toggleConfirmPassword(){
      this.showConfirm = !this.showConfirm;
    }
}
