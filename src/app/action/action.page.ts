import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
})
export class ActionPage implements OnInit {

  ngOnInit() {
  }


  constructor(public actionSheetController: ActionSheetController) { }
  async Action() {
    const actionSheet = await this.actionSheetController.create({
    header: 'Sobre o Projeto',
    backdropDismiss: false, 
    cssClass: 'my-custom-class',
    buttons: [{
    text: 'Cancelar',
    icon: 'close',
    role: 'cancel',
    handler: () => {
    console.log('Cancel clicked');  
  }
    },{
      text: 'Veja no GitHub',
      icon: 'logo-github',
      handler: () => {
      console.log('GitHub clicked');
      }
    },{
      text: 'Perfil no Instagram',
      icon: 'logo-instagram',
      handler: () => {
      console.log('Instagram clicked');

    },
  }]
});

    await actionSheet.present();
    }

}
