import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // da pra usar assim tb ao inves de @INPUT para os inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  // decorator serve para expor propriedade nome para o seletor usado dentro de algum lugar
  @Input() nome:string = '';

  constructor() { }

  ngOnInit() {
  }

}
