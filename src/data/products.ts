import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'EcoRunner Sneakers',
    price: 128,
    originalPrice: 160,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Obuwie',
    description: 'Zrównoważone buty do biegania wykonane z plastiku wyłowionego z oceanów i materiałów organicznych. Idealne na co dzień.',
    features: ['Wykonane z 6 butelek plastikowych', 'Bawełniane, organiczne sznurówki', 'Neutralna węglowo wysyłka', 'Można prać w pralce'],
    colors: ['Naturalna biel', 'Szałwiowa zieleń', 'Ciepły piasek'],
    sizes: ['7', '8', '9', '10', '11', '12']
  },
  {
    id: '2',
    name: 'Comfort Cloud Loafers',
    price: 98,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Obuwie',
    description: 'Nadzwyczaj wygodne wsuwane buty zrównoważonej wełny merynosów. Idealne do pracy i na co dzień.',
    features: ['Cholewka z 100% wełny merynosów', 'Podeszwa z bio‑pianki', 'Odporne na zapachy', 'Całodniowy komfort'],
    colors: ['Grafitowy', 'Naturalna kremowa', 'Leśna zieleń'],
    sizes: ['7', '8', '9', '10', '11', '12']
  },
  {
    id: '3',
    name: 'Adventure Hikers',
    price: 145,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Obuwie',
    description: 'Wytrzymałe buty trekkingowe z odpowiedzialnie pozyskanych materiałów. Stworzone do przygód w terenie.',
    features: ['Wodoodporna konstrukcja', 'Podeszwa z recyklingowanej gumy', 'Podszycie z organicznego konopiu', 'Gwarancja 2 lata'],
    colors: ['Ziemisty brąz', 'Oliwkowa zieleń', 'Kamienna szarość'],
    sizes: ['7', '8', '9', '10', '11', '12']
  }
];