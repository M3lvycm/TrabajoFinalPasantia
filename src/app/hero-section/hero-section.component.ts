import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Section4Component } from "../section-4/section-4.component";
import { HouseComponent } from "../house/house.component";
import { CitysComponent } from "../citys/citys.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { AgentsComponent } from "../agents/agents.component";

@Component({
  selector: 'app-hero-section',
  imports: [FooterComponent, Section4Component, HouseComponent, CitysComponent, NavbarComponent, ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {


  recentHouse = [
    { title: 'Casa en España', text: 'Hermosa villa en la costa mediterránea, Barcelona.', img: 'Hespaña.webp', nH: "4", mC:'150', nG: '2', city: 'Barcelona'  },
    { title: 'Apartamento en USA', text: 'Moderno apartamento en Kansas, Estados Unidos.', img: 'Husa.jpg', nH: "2", mC:'90', nG: '1', city: 'Kansas' },
    { title: 'Chalet en Suiza', text: 'Lujoso chalet en los Alpes suizos, Zermatt.', img: 'Csuiza.jpg', nH: "5", mC:'200', nG: '3', city: 'Zermatt'  },
    { title: 'Villa en Francia', text: 'Elegante villa en la Provenza francesa.', img: 'Cfrancia.jpg', nH: "4", mC:'180', nG: '2', city: 'Provenza'  },

  ];
}
