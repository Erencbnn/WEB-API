import React, { useContext } from 'react';
import './Menu.css';
import MenuSection from './MenuSection';
import { CartContext } from '../context/CartContext';

function Menu() {
    const { addToCart } = useContext(CartContext);

    const menuItems = [
        {
            id: 1,
            name: 'Pizza Margherita',
            description: 'Mozzarella, domates sosu ve fesleğen ile klasik pizza',
            price: '120 TL',
            image: '/images/pizza.jpg',
            category: 'Fast Food'
        },
        {
            id: 2,
            name: 'Double Cheeseburger',
            description: 'İki katlı dana köfte, cheddar ve karamelize soğan',
            price: '150 TL',
            image: '/images/burger.jpg',
            category: 'Fast Food'
        },
        {
            id: 3,
            name: 'Akdeniz Salatası',
            description: 'Zeytin, domates, salatalık, beyaz peynir ve zeytinyağı',
            price: '90 TL',
            image: '/images/salad.jpg',
            category: 'Salata'
        },
        {
            id: 4,
            name: 'Adana Kebap',
            description: 'Acılı kıyma kebap, közlenmiş biber ve lavaş',
            price: '160 TL',
            image: '/images/kebab.jpg',
            category: 'Kebap'
        },
        {
            id: 5,
            name: 'Sezar Salata',
            description: 'Tavuk, parmesan ve sezar soslu salata',
            price: '95 TL',
            image: '/images/sezar.jpg',
            category: 'Salata'
        },
        {
            id: 6,
            name: 'Lahmacun',
            description: 'Kıymalı ince hamur fırın lezzeti',
            price: '70 TL',
            image: '/images/lahmacun.jpg',
            category: 'Kebap'
        },
        {
            id: 7,
            name: 'Mantı',
            description: 'Yoğurtlu ve soslu Türk mantısı',
            price: '110 TL',
            image: '/images/manti.jpg',
            category: 'Kebap'
        },
        {
            id: 8,
            name: 'Tavuk Şiş',
            description: 'Izgara tavuk şiş, pilav ve garnitür',
            price: '130 TL',
            image: '/images/tavuk_sis.jpg',
            category: 'Kebap'
        },
        {
            id: 9,
            name: 'Künefe',
            description: 'Şerbetli peynir tatlısı',
            price: '80 TL',
            image: '/images/kunefe.jpg',
            category: 'Tatlı'
        },
        {
            id: 10,
            name: 'Baklava',
            description: 'Cevizli geleneksel Türk tatlısı',
            price: '85 TL',
            image: '/images/baklava.jpg',
            category: 'Tatlı'
        }
    ];


    return (
        <div className="menu-container">
            <MenuSection menuItems={menuItems} />
        </div>
    );
}

export default Menu;
