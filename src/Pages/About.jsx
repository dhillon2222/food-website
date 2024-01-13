import React from 'react'
import { Footer, Header } from '../Components'

const About = () => {
  return (

    <>
<Header/>
<div class="container py-4 py-lg-6">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="lc-block px-4">
                    <div class="position-relative">
                        <div class="lc-block position-absolute top-0 end-0 w-100 h-100 bg-dark mt-4 me-4"> </div>
                        <img class="position-relative img-fluid mb-5 mt-5" src="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Photo by Spacejoy" loading="lazy" />
                    </div>
                </div>
            </div>
            <div class="col-lg-6 ">
                <div class="lc-block mb-4">
                    <div editable="rich">
                        <h1><span>We Deliver delicious</span><br/><span className='text-success'>& healthy food</span> </h1>
                    </div>
                </div>
                <div class="lc-block mb-5">
                    <div editable="rich">
                        <p class="lead"> <strong>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="container py-4 py-lg-6">
        <div class="row align-items-center">
           
            <div class="col-lg-6 mt-5">
                <div class="lc-block mb-4">
                    <div editable="rich">
                        <h1><span className='text-danger'>Delicious Food</span><br/><span className='text-success'>real specialty of food</span> </h1>
                    </div>
                </div>
                <div class="lc-block mb-5">
                    <div editable="rich">
                        <p class="lead"> <strong>A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="lc-block px-4">
                    <div class="position-relative">
                        <div class="lc-block position-absolute top-0 end-0 w-100 h-100 bg-dark mt-4 me-4"> </div>
                        <img class="position-relative img-fluid" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Photo by Spacejoy" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
<Footer/>
    </>
  )
}

export default About