import React from 'react';

const Home = () => {
  return (
    <div>
      <section id="front" className="bg-gray-800 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="text-content text-white">
            <h1 className="text-5xl font-bold italic">
              <span className="text-brown-800">W</span>elcome to MIT MarketPlace
            </h1>
            <h2 className="text-lg italic mt-4">
              Shop smart, shop local — your campus marketplace has it all
            </h2>
          </div>
          <div className="video-content">
            <video className="w-full h-auto" controls>
              <source
                src="https://web.mit.edu/files/images/201807/about-MIT-5.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <h1 className="text-center font-bold my-8 text-xl">
        <span className="text-indigo-900">F</span>ind Products
      </h1>

      <section id="mid" className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="text-center">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Events/2018/JupiterFallBack/Jupiter_bau_PC_top_card_home_1x._SY304_CB484150079_.jpg"
            alt="Furniture"
            className="w-full"
          />
          <div className="text-xl text-indigo-900">Furniture</div>
        </div>
        <div className="text-center">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/neel/March/1X._SY304_CB469330167_.jpg"
            alt="Electronic Items"
            className="w-full"
          />
          <div className="text-xl">Electronic Items</div>
        </div>
        <div className="text-center">
          <img
            src="https://m.media-amazon.com/images/I/519AaOu5XrL._SL1440_.jpg"
            alt="Home Appliances"
            className="w-64 h-64 mx-auto"
          />
          <div className="text-xl text-white">Home Appliances</div>
        </div>
        <div className="text-center">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Events/2018/JupiterFallBack/Jupiter_bau_PC_top_card_groceries_1x._SY304_CB484150076_.jpg"
            alt="Groceries"
            className="w-full"
          />
          <div className="text-xl text-indigo-900">Groceries</div>
        </div>
      </section>

      <section id="mid2" className="mt-8">
        <div>
          <img
            src="https://m.media-amazon.com/images/G/31/OHL/Janart/25/Toptrends/asindump/PC_header-copy._CB553306470_.jpg"
            alt="Advertisement"
            className="w-full"
          />
        </div>
      </section>

      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-auto my-4"
        data-bs-ride="carousel"
        style={{ maxWidth: '100%', height: '200px' }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/272970cd025f101d.jpeg?q=20"
              className="d-block w-100 object-cover"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/991c1edb19970044.jpg?q=20"
              className="d-block w-100 object-cover"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/c91c41fcd96af5f2.jpeg?q=20"
              className="d-block w-100 object-cover"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="watches py-8">
        <div id="head" className="text-center">
          <h3 className="text-xl font-bold">Up to 70% off on Bestselling smartwatches</h3>
        </div>
        <div className="image-gallery grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61seN4mfgOL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/710WylGxsiL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61apfl6EiqL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61sFBIcJAqL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/819DWQLgjKL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61rmkmqD5VL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71elbYR1eEL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61akt30bJsL._AC_SY200_.jpg"
              alt="Smartwatch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
