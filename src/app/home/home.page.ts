import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorPeso1: number=10;
  valorPeso3: number=12;
  valorPeso7: number=15;
  valorPeso10: number=20;
  
  //DISTANCIA até 10km/h
  valorFreteAM: number=15;
  valorFrete2: number=10;
  valorFrete5: number=5;

  //DISTANCIA 11km/h até 25km/h
  valorFrete22: number=15;
  valorFrete52: number=10;
  valorFrete72: number=5;

  //DISTANCIA acima de 25km/h
  valorFrete73: number=15; 
  valorFrete15: number=10;
  valorFrete25: number=5;

  //ITEM até 3
  valorFrete73: number=15; 
  valorFrete15: number=10;
  valorFrete25: number=5;

  distancia: string='';
  peso: string='';
  resultado: number=0;
  item: string='';
  compra: string= '';
  
  constructor(
    //public toastController: ToastController, //são objetos //class letra MAISUCULA //objeto n pode ter msm nome class
    public alertController: AlertController
  ) {}

  
  calcular() { //ta chamando p executar as ações

    if (this.peso=== 'homem'){
      this.resultado=parseFloat(this.altura) *72.7 - 58;
   
    }else{
      if(this.peso=== 'mulher'){
        this.resultado=parseFloat(this.altura) *62.1 - 44.7; 
        }
    }
 }
  
 //esse vai ser p desconto
verificar (){
  if (this.item=== '1-3'){
    this.compra= parseFloat(this.resultado);
  }

  if(this.radioSelecionada=== '4-7'){
    this.compra= parseFloat(this.resultado) - (parseFloat(this.compra) * 0.10);
  }

  if(this.radioSelecionada==='ac8') {
    this.compra= parseFloat(this.resultado )- (parseFloat(this.compra) * 0.15);
  }
  
 this.exibirAlerta();
}

 async exibirAlerta() {
   const alert = await this.alertController.create({
    header: 'O valor da compra é: ', //cabeçalho
    message: this.valorCompra.toString(), //msg caixinha
    buttons: ['OK'] //config botoes
    });
    alert.present();
  }

}
