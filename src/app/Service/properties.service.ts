import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private houses = [
    { title: 'Casa en España', text: 'Hermosa villa en la costa mediterránea, Barcelona.', img: 'Hespaña.webp', nH: "4", mC:'150', nG: '2', city: 'Barcelona'  },
    { title: 'Casa en USA', text: 'Moderno apartamento en Kansas, Estados Unidos.', img: 'Husa.jpg', nH: "2", mC:'90', nG: '1', city: 'Kansas' },
    { title: 'Chalet en Suiza', text: 'Lujoso chalet en los Alpes suizos, Zermatt.', img: 'Csuiza.jpg', nH: "5", mC:'200', nG: '3', city: 'Zermatt'  },
    { title: 'Casa en Francia', text: 'Elegante villa en la Provenza francesa.', img: 'Cfrancia.jpg', nH: "4", mC:'180', nG: '2', city: 'Provenza'  },
    { title: 'Casa en España', text: 'Hermosa villa en la costa mediterránea, Barcelona.', img: 'iopjpioj.jpg', nH: "4", mC:'150', nG: '2', city: 'Barcelona'  },
    { title: 'Casa en USA', text: 'Moderno apartamento en Kansas, Estados Unidos.', img: 'casamodernaaa.jpg', nH: "2", mC:'90', nG: '1', city: 'Kansas' },
    { title: 'Chalet en Suiza', text: 'Lujoso chalet en los Alpes suizos, Zermatt.', img: 'ihjiop;huj.webp', nH: "5", mC:'200', nG: '3', city: 'Zermatt'  },
    { title: 'Casa en Francia', text: 'Elegante villa en la Provenza francesa.', img: 'IMG_4084.jpg', nH: "4", mC:'180', nG: '2', city: 'Provenza'  },
    { title: 'Casa en España', text: 'Hermosa villa en la costa mediterránea, Barcelona.', img: 'moderno.avif', nH: "4", mC:'150', nG: '2', city: 'Barcelona'  },
    { title: 'Casa en USA', text: 'Moderno apartamento en Kansas, Estados Unidos.', img: 'Stock-Gray-Ranch-Style-Home-AdobeStock_279953994-copy.jpeg', nH: "2", mC:'90', nG: '1', city: 'Kansas' },
  ];

  constructor() { }

  // Método para obtener todas las propiedades
  getHouses() {
    return this.houses;
  }

  // Método para agregar una nueva propiedad
  addHouse(house: any) {
    this.houses.push(house);
  }

  // Método para eliminar una propiedad
  deleteHouse(index: number) {
    if (index >= 0 && index < this.houses.length) {
      this.houses.splice(index, 1);
    }
  }

  // Método para actualizar una propiedad existente
  updateHouse(index: number, updatedHouse: any) {
    if (index >= 0 && index < this.houses.length) {
      this.houses[index] = updatedHouse;
    }
  }
}