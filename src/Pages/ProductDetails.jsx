import React from 'react'
import {useParams} from 'react-router-dom'
import { Header, Footer } from '../Components/index.js'

const ProductDetails = () => {

    const productsArry = [
        {
            id: 1,
            productname: "Burger",
            price:70,
            title:'A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll.',
            img:'https://source.unsplash.com/random/300x300/?Burger'
        },
        {
            id: 2,
            productname: "Sandwich",
            price:40,
            title:'Two or more slices of bread with a layer of meat, fish, cheese, etc., between them:a tuna sandwich.',
            img:'https://source.unsplash.com/random/300x300/?Sandwich'
        },
        {
            id: 3,
            productname: "Pizza",
            price:220,
            title:'Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings.',
            img:'https://source.unsplash.com/random/300x300/?Pizza'
        },
        {
            id: 4,
            productname: "Fries",
            price:120,
            title:'French fries, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips.',
            img:'https://source.unsplash.com/random/300x300/?Fries'
        },
        {
            id: 5,
            productname: "Cake",
            price:400,
            title:'A sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent',
            img:'https://source.unsplash.com/random/300x300/?Cake'
        },
        
    ]
      


const { id } = useParams();
const product = productsArry.find((product) => product.id === parseInt(id));

if (!product) {
  return <div>Product not found</div>;
}
  return (
    <>
     <Header />
    
        <h3>ProductId: {id}</h3>
        
<Footer />
    
    </>
  )
}

export default ProductDetails;