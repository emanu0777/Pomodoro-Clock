export class Temporizador {
    tempoTotalMiliSeconds: number;
    tempototalMinutes: number;
    tempoTotalSeconds:number;
    tempoTotalIntervalo: number;
    tempoConvertString: string;
    tempoRestanteMiliSeconds:number;


    constructor() {
        this.tempoTotalMiliSeconds=0;
        this.tempototalMinutes=0;
        this.tempoTotalSeconds=0;
        this.tempoTotalIntervalo=0;
        this.tempoConvertString='';
        this.tempoRestanteMiliSeconds=0;
    }
}
