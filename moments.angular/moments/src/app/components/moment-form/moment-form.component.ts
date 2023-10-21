import { Component, Input } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {

  @Input() btnText!: string;

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      image: new FormControl(''),
    })
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }

    console.log('Enviou formulário');
  }

}
