import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  valorPeso1: number=10; //menos de 1kg
  valorPeso3: number=12; //1 a 3kg
  valorPeso7: number=15; //4 a 7kg
  valorPeso10: number=20; //8 a 10kg
  
  //DISTANCIA até 10km/h
  valorFreteAM: number=20; //amanhã
  valorFrete2: number=15; //2 dias
  valorFrete5: number=10; //5 dias
  valorFrete7: number=5; //7 dias

  distancia: string='';
  peso: string='';
  resultado: number=0;
  item: string='';
  compra: string= '';
  frete: string='';

  constructor(
    //public toastController: ToastController, //são objetos //class letra MAISUCULA //objeto n pode ter msm nome class
    public alertController:  AlertController

  ) {}

  
  calcular() { //ta chamando p executar as ações

    if (this.peso=== 'peso1' || this.peso=== 'peso3' || this.peso=== 'peso7' || this.peso=== 'peso10' && this.frete=== 'freteAM'){
          this.resultado=parseFloat(this.peso) + (parseFloat(this.frete));
      }
    if (this.peso=== 'peso1' || this.peso=== 'peso3' || this.peso=== 'peso7' || this.peso=== 'peso10' && this.frete=== 'frete2'){
          this.resultado=parseFloat(this.peso) + (parseFloat(this.frete));
      }

    if (this.peso=== 'peso1' || this.peso=== 'peso3' || this.peso=== 'peso7' || this.peso=== 'peso10' && this.frete=== 'frete5'){
          this.resultado=parseFloat(this.peso) + (parseFloat(this.frete));
      }
          
    if (this.peso=== 'peso1' || this.peso=== 'peso3' || this.peso=== 'peso7' || this.peso=== 'peso10' && this.frete=== 'frete7'){
          this.resultado=parseFloat(this.peso) + (parseFloat(this.frete));
      }
    }
//itens
}

desconto (){
  if (this.item=== '1-3'){
    this.compra= parseFloat(this.resultado);
  }

  if(this.item=== '4-7'){
    this.compra= parseFloat(this.resultado) - (parseFloat(this.compra) * 0.10);
  }

  if(this.item==='ac8') {
    this.compra= parseFloat(this.resultado )- (parseFloat(this.compra) * 0.15);
  }
  this.exibirAlerta(); 
}

  async exibirAlerta() {
   const alert = await this.alertController.create({
  header: 'O valor da sua compra é: ', //cabeçalho
   message: this.compra.toString(), //msg caixinha
  buttons: ['OK'] //config botoes
  });
   alert.present();
 }
  