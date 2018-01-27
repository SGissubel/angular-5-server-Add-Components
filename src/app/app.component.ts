import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

  onServerAdded(serverData: {servername: string, serverContent: string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.servername,
        content: serverData.serverContent
      });
    }

  onBluePrintAdded(blueprintData: {servername: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.servername,
      content: blueprintData.serverContent
    });
  }


}
