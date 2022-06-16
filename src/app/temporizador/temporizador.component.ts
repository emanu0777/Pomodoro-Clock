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
  contagemIniciada: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.temporizador.tempoConvertString = "25:00";
  }

  inicarContagem() {
    this.contagemIniciada = true;
    var totalSeconds = (25 * 60);
    this.temporizador.tempoTotalMiliSeconds = 1000 * totalSeconds;
    this.contagem();
  }

  contagem() {
    var intervalo = interval(1000);
    const subscribe = intervalo.subscribe( val=> {
  
      if(this.pararCronometro== false) {
        this.setTimer(val); 
      }

      if (this.pararCronometro == true) {
        setTimeout(()=> subscribe.unsubscribe(), 2000)
      }
    })
    
  }


  setTimer(valueTimer:number) {

    var totalTime = 0
    totalTime = this.temporizador.tempoTotalMiliSeconds - (valueTimer * 1000);

    let minutes = Math.floor((totalTime / 1000)/60);
    let seconds = Math.floor((totalTime/ 1000 ) % 60);
    let timerApresentation = this.transformTimerToString(minutes,seconds);

    this.temporizador.tempoConvertString = timerApresentation;
    this.temporizador.tempototalMinutes = minutes;
    this.temporizador.tempoTotalSeconds = seconds;
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
    console.log(this.temporizador.tempototalMinutes);
    console.log(this.temporizador.tempoTotalSeconds);
    console.log(this.temporizador.tempoTotalMiliSeconds);
  }

  continuarContagem() {
    console.log("voltandoContagem")
    this.pararCronometro = false
    this.contagemIniciada = true
    console.log(this.temporizador.tempoTotalMiliSeconds)
   // Vai ter que voltar a contagem
  }

}
