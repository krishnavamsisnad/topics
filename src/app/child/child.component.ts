import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() counter:any
@Output() counterdata=new EventEmitter<any>()
incre(){
this.counter++
this.counterdata.emit(this.counter)

}
desc(){
this.counter--
this.counterdata.emit(this.counter)
}


}
