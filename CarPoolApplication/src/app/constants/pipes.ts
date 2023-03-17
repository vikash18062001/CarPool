import { Pipe,PipeTransform } from "@angular/core";
//not getting used any where will remove after checking
@Pipe({name:"numberToArray"})
export class NumberToArrayPipe implements PipeTransform
{
    transform(value: number) {
        return new Array(value);
        // throw new Error("Method not implemented.");
    }

}