import React from 'react';
import { Header, Footer, ProductItems } from '../Components/index.js';

const Home = () => {

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
  return (
    <>
    <Header/>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x350/?Noodles" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x350/?Pizza" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x350/?Burgers" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<section className='py-5'>
                <div className='container'>
                    <div className='row'>

                        <h2 className='fw-bold pb-5 text-center'>Popular Dishes</h2>

              {productsArry.map((item)=> (
  
                 <ProductItems key={item.id}  productid={item.id} img={item.img} price={item.price} productname={item.productname} title={item.title}/>
              ))}
                    </div>

                </div>
            </section>
    <Footer/>
    </>
  )
}

export default Home