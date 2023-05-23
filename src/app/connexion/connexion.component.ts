import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  submitted : boolean = false
  connectForm = this.fb.group(
    {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  }
  )

  constructor(private fb: FormBuilder) {}

  onSubmit = () => {
    this.submitted = true
    if(this.connectForm.valid) console.log(this.connectForm);
  }

  @Output()
  click: EventEmitter<any> = new EventEmitter()


  onClick = () => {
    this.click.emit()
  }
}
