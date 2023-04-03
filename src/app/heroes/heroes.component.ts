import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService){}
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    if (hero === this.selectedHero) {
      this.selectedHero = undefined;
      this.messageService.add(`Heroes Component: Deselected hero id=${hero.id}`);
    }
    else{
      this.selectedHero = hero;
      this.messageService.add(`Heroes Component: Selected hero id=${hero.id}`);
    }
  }
}
