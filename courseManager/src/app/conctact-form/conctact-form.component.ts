import { Component } from '@angular/core';

@Component({
  selector: 'app-conctact-form',
  standalone: true,
  imports: [],
  templateUrl: './conctact-form.component.html',
  styleUrl: './conctact-form.component.css'
})


export class ConctactFormComponent {
  submitDisabled : boolean = true;
  inputValue : string = "";

  onInputChange(event : Event): void{
    const inputField = event.target as HTMLInputElement;
    this.inputValue = inputField.value;

    if(this.inputValue.length > 0){
      this.submitDisabled = false;
    }
    else{
      this.submitDisabled = true;
    }

  }
}
