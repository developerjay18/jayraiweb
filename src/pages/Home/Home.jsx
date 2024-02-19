import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import {
  certifications,
  clients,
  optionsInfo,
  services,
  socialLinks,
  testimonials,
} from './data';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ScrollToTop } from '../../components';
import { wpLink } from '../../components/Navbar/data';

function Home() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);
  const [isColor, setIsColor] = useState(false);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <ScrollToTop />
      {/* hero section */}
      <section
        id="home"
        className="pt-1 lg:pt-10 home-four-banner position-relative"
      >
        <div className="container px-3 lg:px-0 mx-auto custom-container">
          <div className="row">
            <div className="col-12">
              <div className="home-banner-wrapper row align-items-end">
                <div className="col-12 lg:w-[50%] col-lg-6 col-xxl-7 home-banner-text-col position-relative">
                  <div className="d-flex align-items-center">
                    <p className="fw-500 black-color text-uppercase mb-30">
                      Hey I'm
                      <span className="font-urbanist mx-1 font-bold text-pulp-orange">
                        Jay,
                      </span>
                      glad to see you here.
                    </p>
                  </div>
                  <div className="animate-heading">
                    <h1 className="black-color h1-home-4 fw-500 ah-headline text-5xl lg:text-7xl leading-[4rem] lg:leading-[5.4rem]">
                      I Build Stunning Websites
                      <span className="orange-color ml-5 fw-700">
                        for <br />
                        <span className="ah-words-wrapper">
                          <Typewriter
                            options={{
                              strings: [
                                'Businesses',
                                'Agencies',
                                'Freelancers',
                                'Show Rooms',
                                'Local Shops',
                              ],
                              autoStart: true,
                              loop: true,
                              delay: 60,
                              deleteSpeed: 40,
                              cursor: '|',
                              cursorClassName: 'text-Purple',
                            }}
                          />
                        </span>
                      </span>
                    </h1>
                  </div>
                  <p className="p line-height-7 lg:pr-8 mt-35 secondary-black fw-400">
                    I'm a skilled full stack web developer from Gujarat, India,
                    deeply passionate and committed to my craft. I specialize in
                    crafting modern and visually striking websites for
                    businesses, empowering them to enhance their online presence
                    and unlock greater profit potential through innovative
                    design solutions.
                  </p>
                  <div className="mt-16 lg:mt-20">
                    <p className="p black-color fw-500 text-uppercase line-height-3">
                      Find Me
                    </p>
                    <div className="mt-3">
                      <ul className="d-flex align-items-center mt-0">
                        {socialLinks.map((item, index) => (
                          <li
                            className="mr-5 home-four-banner-icon"
                            key={index}
                          >
                            <Link to={item.link}>
                              <i
                                className={`${item.name} fa-2xl text-white`}
                              ></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="home-four-banner-spacer"></div>
                </div>

                <div className="col-12 lg:w-[45%] lg:ml-2 col-lg-6 col-xxl-5 text-center position-relative home-four-banner-img-col mb-5 mb-lg-0">
                  <img
                    className="img-fluid home-banner-img"
                    src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708133546/jayraiweb/home/j3ofugkm7idhi6mu9jqo.svg"
                    alt="banner-image"
                  />
                  <img
                    className="home-four-banner-figma position-absolute zoom-in-out delay-200 hidden lg:block"
                    src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708089167/jayraiweb/home/zvdvphbgvdaebmnfcyyv.svg"
                    alt="figma"
                  />
                  <img
                    className="home-four-banner-experience position-absolute zoom-in-out delay-100 hidden lg:block"
                    src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708104405/jayraiweb/home/ldwj7i2ltd5cpxuiihvi.svg"
                    alt="experience"
                  />
                  <img
                    className="home-four-banner-sketch position-absolute zoom-in-out hidden lg:block"
                    src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708104618/jayraiweb/home/ozbrkkr6csynb3mrpyst.svg"
                    alt="experience"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* slider companies worked  */}
      <section className="partners-four">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="partners-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708134083/jayraiweb/home/czlpwaz97lt3gveh7zaa.png"
                      alt="orange-dot"
                    />
                    <p className="capitalize">Worked with</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    companies i worked with
                  </h2>
                </div>
                <div className="partner-four-grid-list-container row-mobile-margin mt-50">
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={0}
                    items={5}
                    autoplay={true}
                    autoplayTimeout={2000}
                  >
                    {clients.map((item, index) => (
                      <div className="item mx-5" key={index}>
                        <div className="partner-logo-card-two p-0">
                          <img
                            className="text-center min-w-[90%]  partner-img"
                            src={item}
                            alt="partner-image"
                          />
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section  */}
      <section
        id="about"
        className="about overflowx-hidden bg-[#fff3ea] pb-20 mb-0"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-wrapper">
                <div className="row align-items-center">
                  <div className="about-image-col col-12 col-lg-6 text-center position-relative overflow-hidden pb-3 pb-sm-5">
                    <img
                      className="img-fluid position-relative z-1"
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708246542/jayraiweb/home/th9nqambrfh7xz4xfde7.svg"
                      alt="about image"
                    />
                    <img
                      className="about-four-shape position-absolute rotate-360"
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708191398/jayraiweb/home/wqgihz7aeojc3siqc7gl.png"
                      alt="circular shape"
                    />
                  </div>
                  <div className="about-three-text-col col-12 col-lg-6 lg:pl-50 px-3 lg:px-0">
                    <div className="about-text-top">
                      <div className="section-heading">
                        <div className="sub-heading d-flex align-items-center">
                          <img
                            src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708134083/jayraiweb/home/czlpwaz97lt3gveh7zaa.png"
                            alt="orange-dot"
                          />
                          <p>About Me</p>
                        </div>
                        <h2 className="black-color line-height-3 h2">
                          I build stunning websites to generate more profits.
                        </h2>
                      </div>
                      <p className="secondary-black line-height-7 mt-35">
                        Hey, Jay here, a 20-year-old full stack developer
                        passionate about crafting stunning websites to help
                        businesses thrive online. With a degree in Computer
                        Applications and 1.5 years of freelancing experience,
                        I've honed my skills in creating websites that marry
                        beauty with functionality.
                      </p>
                      <p className="secondary-black line-height-7 mt-30">
                        I specialize in turning ideas into reality, delivering
                        sleek and intuitive websites that captivate audiences
                        and drive growth. If you want a website that stands out
                        and gets results, I'm here to make it happen.
                      </p>
                    </div>
                    <div className="row row-mobile-margin gy-3 gy-sm-0 mt-35">
                      <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center mt-4 lg:mt-0">
                        <div className="about-complete-project">
                          <h4 className="fw-700 orange-color about-count-heading">
                            <span className="counter mr-3">5</span>Star
                          </h4>
                          <h5 className="fw-500 black-color h5">
                            Ratings by clients
                          </h5>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center mt-4 lg:mt-0">
                        <div className="about-complete-project">
                          <h4 className="fw-700 orange-color about-count-heading">
                            <span className="counter">10</span>+
                          </h4>
                          <h5 className="fw-500 black-color h5">
                            Clients delivered
                          </h5>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center mt-4 lg:mt-0">
                        <div className="about-complete-project">
                          <h4 className="fw-700 orange-color about-count-heading">
                            <span className="counter">15</span>K+
                          </h4>
                          <h5 className="fw-500 black-color h5">
                            Monthly reach
                          </h5>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="btn home-banner-btn orange-btn mt-16 btn_effect"
                      to={wpLink}
                    >
                      <span className="z-1 position-relative flex gap-3 items-center">
                        <i className="fa-brands fa-xl fa-whatsapp hover:text-pulp-orange"></i>
                        Whatsapp Me
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services section  */}
      <section id="services" className="services pb-16 lg:pb-24">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708134083/jayraiweb/home/czlpwaz97lt3gveh7zaa.png"
                      alt="orange-dot"
                    />
                    <p>Services</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    My Services
                  </h2>
                </div>
                <div className="service-gridcontainer mt-50 row-mobile-margin flex flex-col lg:flex-row justify-between gap-3 lg:gap-0">
                  {services.map((item, index) => (
                    <div
                      className="service-grid-item text-start lg:w-[24%]"
                      key={index}
                    >
                      <img
                        className="service-item-img rounded-lg"
                        src={item.icon}
                        alt="service-img-two"
                      />
                      <h3 className="h3 fw-500 service-item-heading black-color capitalize">
                        {item.title} <br />
                        {item.title2}
                      </h3>
                      <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects section  */}
      <section id="projects" className="portfolio-two pt-10 pb-20 bg-[#fff3ea]">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="portfolio-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708134083/jayraiweb/home/czlpwaz97lt3gveh7zaa.png"
                      alt="orange-dot"
                    />
                    <p>Projects</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    Some Recent Work
                  </h2>
                </div>
                <div className="mt-50 row-mobile-margin">
                  <div className="controls d-flex justify-content-center flex-wrap gap-1 gap-lg-4 mb-45">
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".all"
                      onClick={() => handleOptionSelect('option1')}
                      style={{
                        color:
                          selectedOption === 'option1' ? '#ff6b00' : 'black',
                      }}
                    >
                      All
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".ui"
                      onClick={() => handleOptionSelect('option2')}
                      style={{
                        color:
                          selectedOption === 'option2' ? '#ff6b00' : 'black',
                      }}
                    >
                      Business
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".graphic"
                      onClick={() => handleOptionSelect('option3')}
                      style={{
                        color:
                          selectedOption === 'option3' ? '#ff6b00' : 'black',
                      }}
                    >
                      E-Commerce
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".app"
                      onClick={() => handleOptionSelect('option4')}
                      style={{
                        color:
                          selectedOption === 'option4' ? '#ff6b00' : 'black',
                      }}
                    >
                      Wordpress
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".web"
                      onClick={() => handleOptionSelect('option5')}
                      style={{
                        color:
                          selectedOption === 'option5' ? '#ff6b00' : 'black',
                      }}
                    >
                      Shopify
                    </button>
                  </div>
                  {/* write all rendering JS logic here  */}
                  <div className="portfoliomassonary-container">
                    {selectedOption && (
                      <div className="flex flex-wrap justify-between w-[100%] gap-3">
                        {optionsInfo[selectedOption].map((item, index) => (
                          <div
                            className="portfolio-massonary-four-items mix ui all position-relative lg:max-w-[32%]"
                            key={index}
                          >
                            <div
                              className="modal fade"
                              id="recentModalSix"
                              tabIndex="-1"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered justify-content-center border-2">
                                <div>
                                  <button
                                    type="button"
                                    className="btn-close mb-10 btn"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                  <img
                                    className="img-fluid"
                                    src="img/recentSix.png"
                                    alt="portfolio img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="img-overlay-full">
                              <img
                                className="img-fluid rounded-lg"
                                src={item.imgUrl}
                                alt="portfolio img"
                              />
                            </div>
                            <div className="w-100 justify-content-center align-items-center pt-15">
                              <p className="secondary-black fw-400 line-height-7 text-uppercase">
                                {item.title}
                              </p>
                              <Link
                                data-bs-toggle="modal"
                                data-bs-target="#recentModalSix"
                                to={item.link}
                                className="h4 black-color fw-600 line-height-3 portfolio-massonary-item-link"
                              >
                                {item.description}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="header-btn-wrapper pt-16 text-center">
                      <Link
                        className="btn orange-btn btn_effect"
                        to="/all-projects"
                      >
                        <span className="z-1 position-relative">
                          view More Projects
                        </span>
                      </Link>
                    </div>
                    {/* one project box */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* slider companies certifications  */}
      <section className="partners-four">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="partners-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708134083/jayraiweb/home/czlpwaz97lt3gveh7zaa.png"
                      alt="orange-dot"
                    />
                    <p className="capitalize">certifications</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    certified from
                  </h2>
                </div>
                <div className="partner-four-grid-list-container row-mobile-margin mt-50">
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={0}
                    items={5}
                    autoplay={true}
                    autoplayTimeout={2000}
                  >
                    {certifications.map((item, index) => (
                      <div className="item mx-5" key={index}>
                        <div className="partner-logo-card-two p-0">
                          <img
                            className="text-center min-w-[90%]  partner-img"
                            src={item}
                            alt="partner-image"
                          />
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials section  */}
      <section
        id="testimonials"
        className="testimonial lg:pt-20 lg:pb-10 bg-[#fff3ea]"
      >
        <div className="container">
          <div className="row">
            <div className="section-heading-middle pb-10">
              <div className="sub-heading d-flex align-items-center mx-auto">
                <img
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708134083/jayraiweb/home/czlpwaz97lt3gveh7zaa.png"
                  alt="orange-dot"
                />
                <p className="capitalize">Testimonials</p>
              </div>
              <h2 className="black-color line-height-3 h2 text-uppercase text-center capitalize">
                What My Clients say
              </h2>
            </div>

            <div className="">
              {/* testimonial box  */}
              <OwlCarousel
                className="owl-theme"
                loop
                margin={0}
                items={1}
                autoplay={true}
                autoplayTimeout={5000}
                dots={true}
              >
                {testimonials.map((item, index) => (
                  <div className="flex pt-4 flex-col lg:flex-row" key={index}>
                    <div className="col-12 col-lg-6 col-xl-4 mb-4 mb-lg-0">
                      <div className="img-overlay-full flex justify-center items-center border rounded-xl">
                        <img
                          className="testimonial-four-image h-[30vh] lg:h-[50vh]"
                          src={item.imgUrl}
                          alt="testimonial image"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-8 testimonial-fourcontents pl-3 lg:px-28">
                      <div className="section-heading">
                        <h3 className="black-color text-3xl capitalize line-height-3 h2 font-urbanist">
                          {item.title}
                        </h3>
                      </div>
                      <div className="testimonial-images">
                        <div className="testimonial-four-card">
                          <h5 className="h5 fw-400 line-height-6 secondary-black">
                            {item.review}
                          </h5>
                          <h4 className="black-color fw-600 line-height-3 testimonial-four-name capitalize">
                            {item.name}
                          </h4>
                          <p className="p fw-400 testimonial-four-client-title capitalize font-urbanist">
                            {item.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* contact form  */}
      <section
        id="contact"
        className="home-four-contact lg:pt-28 pb-20 lg:pb-28"
      >
        <div className="container px-3 lg:px-0">
          <div className="row">
            <div className="col-12">
              <div className="home-contact-wrapper">
                <div className="home-contact-info-container row align-items-center">
                  <div className="col-12 col-md-6 home-two-contactinfo-col">
                    <div className="section-heading">
                      <div className="sub-heading d-flex align-items-center">
                        <img
                          src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708134083/jayraiweb/home/czlpwaz97lt3gveh7zaa.png"
                          alt="orange-dot"
                        />
                        <p>Contact Me</p>
                      </div>
                      <h2 className="black-color line-height-3 h2">
                        Need help? Get in touch now!
                      </h2>
                    </div>
                    <div className="row mt-4 lg:pt-6 row-mobile-margin gy-3 gy-sm-0 row-mobile-margin mt-50">
                      <div className="col-12 d-flex align-items-center">
                        <div className="mr-10">
                          <div className="light-orange-bg-icon">
                            <i className="fa-solid fa-phone-volume orange-color h4"></i>
                          </div>
                        </div>
                        <div className="about-years-experience">
                          <p className="fw-400 secondary-black p">Phone</p>
                          <h4 className="fw-500 black-color h4">
                            <a href="tel:1234567890">+91 6351468706</a>
                          </h4>
                        </div>
                      </div>
                      <div className="col-12 d-flex align-items-center row-mobile-margin mt-35">
                        <div className="mr-10">
                          <div className="light-orange-bg-icon">
                            <i className="fa-solid fa-envelope orange-color h4"></i>
                          </div>
                        </div>
                        <div className="about-years-experience">
                          <p className="fw-400 secondary-black p">Email</p>
                          <h4 className="fw-500 black-color h4">
                            <a href="mailto:example@email.com">
                              raijay2003@gmail.com
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 row-mobile-margin">
                    <form>
                      <div className="row g-4">
                        <div className="col-12 w-full col-sm-6">
                          <input
                            type="text"
                            className="form-control home-four-contact-input"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>

                        <div className="col-12 col-sm-6">
                          <input
                            type="email"
                            className="form-control home-four-contact-input"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="tel"
                            className="form-control home-four-contact-input"
                            placeholder="Phone"
                          />
                        </div>

                        <div className="col-12">
                          <textarea
                            className="form-control home-four-contact-input home-four-textarea"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn bg-pulp-orange orange-btn btn_effect"
                            >
                              <span className="position-relative z-1">
                                Send Me Message
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
