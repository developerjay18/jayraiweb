import React, { useState } from 'react';
import { ScrollToTop } from '../../components';
import { Link } from 'react-router-dom';
import { optionsInfo } from '../Home/data';
import { wpLink } from '../../components/Navbar/data';
import Navbar2 from '../../components/Navbar/Navbar2';

function Projects() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);
  const [isColor, setIsColor] = useState(false);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar2 />
      <ScrollToTop />
      {/* projects section  */}
      <section
        id="portfolio"
        className="portfolio-two pt-10 pb-20 bg-[#fff3ea]"
      >
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
                    All Project works
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
                      <Link className="btn orange-btn btn_effect" to={wpLink}>
                        <span className="z-1 position-relative flex gap-3 items-center">
                          <i className="fa-brands fa-xl fa-whatsapp hover:text-pulp-orange"></i>
                          Whatsapp Me
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
    </div>
  );
}

export default Projects;
