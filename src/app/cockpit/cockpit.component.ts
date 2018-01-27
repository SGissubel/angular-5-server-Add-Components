import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @Output() serverElements = [];
  @Output() serverCreated = new EventEmitter<{servername: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{servername: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      servername: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      servername: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
