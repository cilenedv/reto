import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    formulario: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,) {
    this.crearFormulario();
   }

  ngOnInit(): void {
    this.formulario.get("tipodocumento")?.valueChanges.subscribe( valor => {
        let objetivoControl = this.formulario.get("numerodocumento");
    //   console.log(objetivoControl?.value);
    //   console.log(valor)
    //   console.log('click sde seleccion')
      objetivoControl?.clearValidators();


      switch (valor) {
        case "1":
        //   objetivoControl?.setValidators([Validators.pattern("[0-9]{8}$")]);
          this.formulario.controls['numerodocumento'].setValidators([
            Validators.required,
            Validators.pattern("[0-9]{8}$")
          ]);
          break;
        case "2":
        //   objetivoControl?.setValidators([Validators.pattern("[0-9]{12}$")]);
          this.formulario.controls['numerodocumento'].setValidators([
            Validators.required,
            Validators.pattern("[0-9]{12}$")
          ]);
          break;
      }
      objetivoControl?.markAsDirty()

      objetivoControl?.updateValueAndValidity()

    })

  }
  get correoNoValido(){
    return this.formulario.get('correo')?.invalid && this.formulario.get('correo')?.touched;
  }
  get phoneNoValido(){
    return this.formulario.get('phone')?.invalid && this.formulario.get('phone')?.touched;
  }
  get documentoNoValido(){
    return this.formulario.get('numerodocumento')?.invalid && this.formulario.get('numerodocumento')?.touched;
  }
  get tipodocumentoNoValido(){
    return this.formulario.get('tipodocumento')?.invalid && this.formulario.get('tipodocumento')?.touched;
  }
  crearFormulario(){
    this.formulario = this.fb.group({
        correo  : ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$')]],
        phone  : ['', [Validators.required, Validators.pattern('^[09][0-9]{8}$')]],
        tipodocumento : ['1', [Validators.required]],
        numerodocumento: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
        conditionFirst: [false, Validators.requiredTrue],
        conditionSecond: [false, Validators.requiredTrue]
    });

  }
  start(){

}

}
