import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor (private dbzService:DbzService){}


    get characters(): Character[]{
      return [...this.dbzService.characters];
    }


    onDeleteCharacter(id:string):void{
      this.dbzService.deletCharterById(id)
    }

    onNewCharacter(characters:Character){
      this.dbzService.addCharacter(characters)
    }




}
