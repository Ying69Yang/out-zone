import { Component, NgZone, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'out-zone';

  constructor(private zone: NgZone, private renderer: Renderer2) {
  }

  ngOnInit() {
    window['dameAlerta'] = {
      zone: this.zone,
      componentFn: (value) => this.getAlert(value),
      component: this,
    };
    const elemento = this.renderer.selectRootElement('#onclick');
    this.renderer.setAttribute(elemento, 'onclick', "window.dameAlerta.zone.run(()=>{window.dameAlerta.componentFn('Hola');})");
  }

  getAlert(data) {
    alert(data);
    }
}
