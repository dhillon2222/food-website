import React from 'react'


const Product = ({productname, price, img,title,productid}) => {
  return (
    <>
<div className="col-md-4 mb-5">
        <div className="container py-6">
            <div className="swiper mySwiper-RANDOMID">
                <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="card shadow mx-auto">
                        <div className="card-body">
                            <div className="lc-block">
                                <img className="img-fluid" src={img}/>
                            </div>
                            <div className="card-body">
                                <div className="lc-block mb-3">
                                    <div editable="rich">
                                        <h3><span className='fw-bold'>{productname}</span></h3>
                                        <h4>Price : {price}</h4>

                                        <p>{title}</p>
                                    </div>
                                </div>
                                <div className="lc-block">
                                    <a className="btn btn-primary" href={`productdetail/${productid}`} role="button">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Product
