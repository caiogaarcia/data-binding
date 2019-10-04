import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /*styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }`
  ]*/
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = "http://lorempixel.com/400/200/nature/";
  valorAtual:string = '';
  valorSalvo:string = '';
 

  isMouseOver:boolean = false;

  nomeDoCurso: string = 'Angular';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botao clicado');
  }

  // metodo que escuta evento de tecla
  onKeyUp(evento:KeyboardEvent){
    
    // o evento.target eh do tipo HTML, por isso tipamos ele pra conseguir pegar o value
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}



