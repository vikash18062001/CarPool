import { FormGroup } from "@angular/forms";
import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidators
{
    static confirmPasswordValidator(form : FormGroup) : ValidatorFn
    {
        return (control:AbstractControl) : {[key:string]:boolean} | null => {
            if(form.controls['password'].value !== form.controls['confirmPassword'].value)
                return {'passwordMismatch':true};
            return null;
        }
    } 
}