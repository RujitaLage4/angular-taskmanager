import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'], // Corrected: styleUrls instead of styleUrl
})
export class CreateFormComponent {
  taskName: string = '';

  @Input() EditMode: boolean = false;
  @Input() task: string | null = null;
  @Input() ShowCreateList: boolean = true;

  @Output() taskCreated = new EventEmitter<string | null>();

  createdTask() {
    if (this.taskName) {
      this.taskCreated.emit(this.taskName);
    }
  }

  OnCancel() {
    this.taskCreated.emit(null);
  }
}
