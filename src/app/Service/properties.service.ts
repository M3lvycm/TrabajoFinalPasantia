import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  houses = [
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

  citys = [
    { title: 'España', text: 'España es un país maravilloso conocido por su rica historia, arquitectura impresionante y una gastronomía excepcional como la paella y las tapas.', img: '501673-arenas-de-barcelona.webp' },
    { title: 'U.S.A', text: 'Estados Unidos es una nación diversa y dinámica, famosa por su influencia cultural, tecnológica y paisajes icónicos como el Gran Cañón y la Estatua de la Libertad.', img: 'About_the_USA_NYC_Statue_Liberty_._CROP_Web72DPI.jpg' },
    { title: 'Suiza', text: 'Suiza es conocida por sus paisajes alpinos, relojes de precisión, chocolates deliciosos y una calidad de vida envidiable.', img: 'K71TBD.webp' },
    { title: 'Francia', text: 'Francia es sinónimo de elegancia, arte y romanticismo. Su capital, París, es mundialmente conocida por la Torre Eiffel, el Louvre y su exquisita cocina.', img: 'photo-1502602898657-3e91760cbb34.jpg' },
  ];

  agents = [
    {
      title: 'Carlos Garcia',
      text: 'Especialista en propiedades de lujo con 15 años de experiencia. Reconocido por su excelente servicio al cliente y conocimiento del mercado inmobiliario de alto nivel.',
      img: 'Carlos.png',
      age: '42',
      specialty: 'Propiedades de lujo',
      rating: '4.9',
      properties: '78',
      location: 'Madrid, España',
      contact: '+34 612 345 678',
      propertiesSold: '78',
      qualification: 'Licenciado en Administración de Empresas'
    },
    {
      title: 'María González',
      text: 'Experta en bienes raíces residenciales con certificación en negociación avanzada. Ayuda a familias a encontrar el hogar perfecto con un enfoque personalizado.',
      img: 'maria.jpg',
      age: '35',
      specialty: 'Residencial',
      rating: '4.8',
      properties: '124',
      location: 'Barcelona, España',
      contact: '+34 623 456 789',
      propertiesSold: '124',
      qualification: 'Máster en Marketing Inmobiliario'
    },
    {
      title: 'Juan Pérez',
      text: 'Asesor inmobiliario especializado en propiedades comerciales e inversiones. Con formación en finanzas, ofrece análisis detallados para maximizar el retorno de inversión.',
      img: 'juan.avif',
      age: '38',
      specialty: 'Comercial',
      rating: '4.7',
      properties: '56',
      location: 'Valencia, España',
      contact: '+34 634 567 890',
      propertiesSold: '56',
      qualification: 'Licenciado en Economía'
    },
    {
      title: 'Alma Gozo',
      text: 'Consultora inmobiliaria con enfoque en desarrollo de proyectos y propiedades en zonas exclusivas. Conocida por su atención al detalle y servicio personalizado.',
      img: 'Alma.jpg',
      age: '40',
      specialty: 'Desarrollo',
      rating: '4.9',
      properties: '92',
      location: 'Sevilla, España',
      contact: '+34 645 678 901',
      propertiesSold: '92',
      qualification: 'Arquitecta e Ingeniera Civil'
    },
  ];

  recentHouse = [
    { title: 'Casa en España', text: 'Hermosa villa en la costa mediterránea, Barcelona.', img: 'Hespaña.webp', nH: "4", mC:'150', nG: '2', city: 'Barcelona'  },
    { title: 'Apartamento en USA', text: 'Moderno apartamento en Kansas, Estados Unidos.', img: 'Husa.jpg', nH: "2", mC:'90', nG: '1', city: 'Kansas' },
    { title: 'Chalet en Suiza', text: 'Lujoso chalet en los Alpes suizos, Zermatt.', img: 'Csuiza.jpg', nH: "5", mC:'200', nG: '3', city: 'Zermatt'  },
    { title: 'Villa en Francia', text: 'Elegante villa en la Provenza francesa.', img: 'Cfrancia.jpg', nH: "4", mC:'180', nG: '2', city: 'Provenza'  },

  ];



  constructor() { }

  // Método para obtener todas las propiedades
  getHouses() {
    return this.houses;
  }

  getCitys(){
    return  this.citys
  }
  getAgents(){
    return  this.agents
  }

    getRecentHouse(){
    return  this.recentHouse
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