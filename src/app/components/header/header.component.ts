import { AppComponent } from './../../app.component';
import { HomePage } from './../../pages/home/HomePage';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

criterio = "promocoes"

  @Input() titulo:string;

  constructor() { }


selecionarCriterio(tipo:string)
{
 this.criterio=tipo;
 return this.criterio;
}
  ngOnInit() {}

}
