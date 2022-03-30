import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Temporizador } from '../model/temporizador';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {


  temporizador: Temporizador = new Temporizador();

  constructor() { }

  ngOnInit(): void {
    this.temporizador.tempoConvertString = "25:00";
  }

  inicarContagem() {
    console.log("Iniciando contagem!");
    this.contagem();
  }

  contagem() {
    var intervalo = interval(1000);
    var totalSeconds = (1 * 60);
    this.temporizador.tempoTotalMiliSeconds = 1000 * totalSeconds;

    intervalo.subscribe( val=> {
      var tempoTotal = 0
      tempoTotal = this.temporizador.tempoTotalMiliSeconds - (val * 1000);
      this.temporizador.tempoConvertString =  this.convertTimerSeconds(tempoTotal);
    })

  }


  convertTimerSeconds(tempoTotal:number): string {
    let minutes = Math.floor((tempoTotal / 1000)/60);
    let seconds = Math.floor((tempoTotal/ 1000 ) % 60);
    let timerApresentation = this.transformTimerToString(minutes,seconds);
    return timerApresentation;
  }

  transformTimerToString(minutes:number, seconds:number) : string {
    let timerApresentationMinutes  = ''
    let timerApresentationSeconds = ''

    timerApresentationSeconds = seconds < 10 ? "0"+seconds.toString() : seconds.toString();
    timerApresentationMinutes = seconds < 10 ? "0"+minutes.toString() : minutes.toString();

    return timerApresentationMinutes + ":" + timerApresentationSeconds;
  }

  pararContagem() {
    console.log("Parando")
  }

}
