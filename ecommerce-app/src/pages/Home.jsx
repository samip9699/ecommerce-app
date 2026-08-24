
import React from 'react'
import "../components/home.css"

import home_img from '../assets/home_img.jpg'
import tshirtimg1 from '../assets/tshirtimg1.jpg'
import denimjacketimg1 from '../assets/denimjacketimg1.jpg'
import suitimg1 from '../assets/suitimg1.jpg'
import denim_3 from '../assets/denim_3.jpg'
import denim_2 from '../assets/denim_2.jpg'
import onepieceimg1 from '../assets/onepieceimg1.jpg'
import womenshirt1 from '../assets/womenshirt1.jpg'
import womenshirt2 from '../assets/womenshirt2.jpg'
import kurtiimg1 from '../assets/kurtiimg1.jpg'
import kurtiimg2 from '../assets/kurtiimg2.jpg'
import kurtiimg3 from '../assets/kurtiimg3.jpg'
import kurtiimg4 from '../assets/kurtiimg4.jpg'
import kids_1 from '../assets/kids_1.jpg'
import kids_2 from '../assets/kids_2.jpg'
import kids_3 from '../assets/kids_3.jpg'
import women_4 from '../assets/women_4.jpg'
import shoe_1 from '../assets/shoe_1.jpg'
import shoe_2 from '../assets/shoe_2.jpg'
import shoe_3 from '../assets/shoe_3.jpg'
import shoe_4 from '../assets/shoe_4.jpg'
import shoe_5 from '../assets/shoe_5.jpg'
import shoe_6 from '../assets/shoe_6.jpg'
import shoe_7 from '../assets/shoe_7.jpg'
import shoe_8 from '../assets/shoe_8.jpg'
import brif_img from '../assets/brif_img.jpg'
import discount_img from '../assets/discount_img.jpg'
import blog_img1 from '../assets/blog_img1.jpg'
import blog_img2 from '../assets/blog_img2.jpg'
import blog_img3 from '../assets/blog_img3.jpg'
import follow_img1 from '../assets/follow_img1.jpg'
import follow_img2 from '../assets/follow_img2.jpg'
import follow_img3 from '../assets/follow_img3.jpg'
import follow_img4 from '../assets/follow_img4.jpg'
import shipping_img from '../assets/shipping_img.png'
import return_img from '../assets/return_img.png'
import call_img from '../assets/call_img.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkdin from '../assets/linkdin.png'
import twitter from '../assets/twitter.png'









const Home = () => {
  return (
    <>
      <div className='container' >
        <div className='row flex '>
          <div className='col-md-6'>
            <h1 className=" text-center best-seller">
              _____our best seller____
            </h1>

            <h1 className=" text-center latest-arrivals">
              _____latest arrivals____
            </h1>

            <h1 className=" text-center shop-now ">
              shop now____
            </h1>

          </div>

          <div className='col-md-6'>

            <img src={home_img} className="img-fluid w-100" alt="home_img" />

          </div>
        </div>


      </div>
      <div className='container my-5'>

        <h1 className='text-center m-5'>
          latest collections
        </h1>
        <p className='text-center'>  Celebrates creative thinkers and innovators.
          Encourages people to be active and push their limits. </p>
        <div className='row flex g-5 justify-content-between '>


          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={tshirtimg1} className=" product-img " className=" img-fluid " alt="tshirtimg1" />
            <p className='text-center'>men's Tshit orange </p>
            <p> $ 40 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>

          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={denimjacketimg1} className=" product-img " className=" img-fluid" alt="denimjacketimg1" />
            <p className='text-center'>men's denim jacket </p>
            <p> $ 80 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={suitimg1} className=" product-img " className=" img-fluid" alt=" suitimg1" />
            <p className='text-center'>men's formal suit </p>
            <p> $ 120 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={denim_3} className=" product-img " className=" img-fluid " alt='denim_3' />
            <p className='text-center'>men's denim jacket </p>
            <p> $ 80 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
        <div className='row flex g-5 justify-content-between m-3'>


          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={denim_2} className=" product-img " className=" img-fluid " alt="denim_2" />
            <p className='text-center'>men's Brown denim jacket </p>
            <p> $ 80 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={womenshirt1} className=" product-img " className=" img-fluid" alt="womenshirt1" />
            <p className='text-center'>women's shirt </p>
            <p> $ 70 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={womenshirt2} className=" product-img " className=" img-fluid" alt="womenshirt2" />
            <p className='text-center'>women's shirt </p>
            <p> $ 75 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>

          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={onepieceimg1} className=" product-img " className=" img-fluid " alt='onepieceimg1' />
            <p className=' text-center '>women's Onepiece  </p>
            <p> $ 160 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
        <div className='row flex g-5 justify-content-between m-3'>


          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={kurtiimg1} className=" product-img " className=" img-fluid " alt="kurtiimg1" />
            <p className=' text-center '>women's kurti's  </p>
            <p> $ 150 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={kurtiimg2} className=" product-img " className=" img-fluid" alt="kurtiimg2" />
            <p className=' text-center '>women's kurti's  </p>
            <p> $ 150 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={kurtiimg3} className=" product-img " className=" img-fluid" alt="kurtiimg3" />
            <p className=' text-center '>women's kurti's  </p>
            <p> $ 140 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>

          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={kurtiimg4} className=" product-img " className=" img-fluid " alt='kurtiimg4' />
            <p className=' text-center '>women's kurti's </p>
            <p> $ 140 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>

        <div className='row flex g-5 justify-content-between m-3'>


          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={kids_1} className=" product-img " className=" img-fluid " alt="kids_1" />
            <p className=' text-center '>kids wear </p>
            <p> $ 140 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={kids_2} className=" product-img " className=" img-fluid" alt="kids_2" />
            <p className=' text-center '>kids wear  </p>
            <p> $ 140 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={kids_3} className=" product-img " className=" img-fluid" alt="kids_3" />
            <p className=' text-center '>kids wear  </p>
            <p> $ 140 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={women_4} className=" product-img " className=" img-fluid " alt='women_4' />
            <p className=' text-center '>women's  dresses </p>
            <p> $ 120 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
        <div className='row flex g-5 justify-content-between m-3'>


          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_1} className=" product-img " className=" img-fluid " alt="shoe_1" />
            <p className=' text-center '>nike air force shoe </p>
            <p> $ 420 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_2} className=" product-img " className=" img-fluid" alt="shoe_2" />
            <p className=' text-center '>nike air force shoe </p>
            <p> $ 550 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_3} className=" product-img " className=" img-fluid" alt="shoe_3" />
            <p className=' text-center '>nike air force shoe</p>
            <p> $ 550 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>

          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_4} className=" product-img " className=" img-fluid " alt='shoe_4' />
            <p className=' text-center '>nike air force shoe </p>
            <p> $ 450 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
        <div className='row flex g-5 justify-content-between m-3'>


          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_5} className=" product-img " className=" img-fluid " alt="shoe_5" />
            <p className=' text-center '>nike air force shoe </p>
            <p> $ 420 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_6} className=" product-img " className=" img-fluid" alt="shoe_6" />
            <p className=' text-center '>nike air force shoe </p>
            <p> $ 420 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_7} className=" product-img " className=" img-fluid" alt="shoe_7" />
            <p className=' text-center '>nike air force shoe </p>
            <p> $ 420 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
          <div className='col-md-3 card border-0 shadow-sm'>
            <img src={shoe_8} className=" product-img " className=" img-fluid " alt='shoe_8' />
            <p className=' text-center '>nike air force shoe </p>
            <p> $ 420 </p>
            <button className="btn btn-dark add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className='sale-section '>
        <div className='container-fluid'>



          <h1 className='text-center'>sale</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p className='text-center'>Up To 75% Off The Price </p>

          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-dark btn-lg rounded-pill px-5">
              Shop Now →
            </button>
          </div>

        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>

            <img src={brif_img} className="img-fluid mx-auto d-block" alt="brief_img" />

          </div>
          <div className='col-md-6'>

            <h1 className='text-center m-5'>WHAT PEOPLE SAY </h1>

            <p className='text-center m-5'>Pellentesque in ipsum id orci porta dapibus.
              Vivamus suscipit tortor eget felis porttitor volutpat.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus.
              Vivamus suscipit tortor eget felis porttitor volutpat. </p>

          </div>

        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={discount_img} className='discount' alt='' />
          </div>
          <div className='col-md-6'>
            <h1 className='text-center m-2'>
              FIRST TIME ON HERE?
            </h1>
            <p> We Are Pleased To Offer You</p>
            <h2 className='text-center m-2'> 10% DISCOUNT</h2>
            <p>DISCOUNT IS VALID ON FIRST PURCHASE</p>
            <input type="email" placeholder="Enter your e-mail" />

            <div className="m-3">
              <button className="btn btn-dark">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className='container'>
        <h1 className='text-center'>BLOG UPDATES </h1>
        <div className='row'>
          <div className='col-md-4'>
            <img src={blog_img1} className='blog_img' alt='blog_img1' />
            <p className='text-center fw-bold'> MIX & MATCH WEEKEND</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.</p>

          </div>
          <div className='col-md-4'>
            <img src={blog_img2} className='blog_img' alt='blog_img2' />
            <p className='text-center fw-bold '>  MIX & MATCH WEEKEND</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.</p>

          </div>
          <div className='col-md-4'>
            <img src={blog_img3} className='blog_img' alt='blog_img3' />
            <p className='text-center fw-bold '>  MIX & MATCH WEEKEND</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.</p>


          </div>

        </div>

      </div>
      <div className='container'>
        <h1 className='text-center'>FOLLOW US ON @SAMSHOP </h1>
        <div className='row'>
          <div className='col-md-3'>
            <img src={follow_img1} className='' alt='follow_img1' />

          </div>
          <div className='col-md-3'>
            <img src={follow_img2} className='' alt='follow_img2' />

          </div>
          <div className='col-md-3'>
            <img src={follow_img3} className='' alt='follow_img3' />

          </div>
          <div className='col-md-3'>
            <img src={follow_img4} className='' alt='follow_img4' />

          </div>

        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={shipping_img} className='shipping' alt='shipping_img' />
            <h1 className='text-center'>FREE SHIPPING </h1>
            <p className='text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className='col-md-4'>
            <img src={return_img} className='shipping' alt='return_img' />
            <h1 className='text-center'>FREE SHIPPING </h1>
            <p className='text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className='col-md-4'>
            <img src={call_img} className='shipping ' alt='call_img' />
            <h1 className='text-center'>FREE SHIPPING </h1>
            <p className='text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>

      <div className='container text-center'>

        <h1 className='text-center'> SAMSHOP </h1>
        <div className='d-flex justify-content-center  gap-4'>
          <img src={facebook} className='facebook' alt='facebook' />
          <img src={instagram} className='instagram' alt='instagram' />
          <img src={linkdin} className='linkdin' alt='linkdin' />
          <img src={twitter} className='twiter' alt='twitter' />
        </div>

      </div>
    </>
  );
}

export default Home
