import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Temporizador } from '../model/temporizador';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {


  temporizador: Temporizador = new Temporizador();
  pararCronometro: Boolean = false;

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
    var totalSeconds = (25 * 60);
    this.temporizador.tempoTotalMiliSeconds = 1000 * totalSeconds;

    intervalo.subscribe( val=> {
      if(this.pararCronometro== false) {
        this.setTimer(this.temporizador, val); 
      } 
    })


  }


  setTimer(temporizador:Temporizador, valueTimer:number) {

    var totalTime = 0
    totalTime = this.temporizador.tempoTotalMiliSeconds - (valueTimer * 1000);

    let minutes = Math.floor((totalTime / 1000)/60);
    let seconds = Math.floor((totalTime/ 1000 ) % 60);
    let timerApresentation = this.transformTimerToString(minutes,seconds);

    temporizador.tempoConvertString = timerApresentation;
    temporizador.tempototalMinutes = minutes;
    temporizador.tempoTotalSeconds = seconds;
  }

  transformTimerToString(minutes:number, seconds:number) : string {
    let timerApresentationMinutes  = ''
    let timerApresentationSeconds = ''

    timerApresentationSeconds = seconds < 10 ? "0"+seconds.toString() : seconds.toString();
    timerApresentationMinutes = minutes < 10 ? "0"+minutes.toString() : minutes.toString();

    return timerApresentationMinutes + ":" + timerApresentationSeconds;
  }

  pararContagem() {
    this.pararCronometro = true;
    console.log("Parado")
  }

}
