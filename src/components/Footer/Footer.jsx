import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../pages/Home/data';

function Footer() {
  return (
    <section className="footer pt-10">
      <div className="footer-wrapper">
        <div className="">
          <img
            src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708153854/jayraiweb/home/sfx28ksg8ae9g0qocltk.svg"
            alt=""
            className="object-contain max-w-[100%]"
          />
        </div>
        <div className="footer-bottom">
          <div className="container border-t border-[#7a7777]">
            <div className="footer-bottom-container">
              <div className="row">
                <div className="footerbottom-left col-12 col-sm-5 col-md-6 text-start">
                  <div className="footer-social-media mt-15">
                    <ul className="footer-social-container d-flex align-items-center mt-0 text-center justify-center flex lg:justify-start">
                      {socialLinks.map((item, index) => (
                        <li className="footer-social-item" key={index}>
                          <Link to={item.link}>
                            <i className={`${item.name} text-white h5`}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>{' '}
                  <br />
                  <p className="p flex justify-center lg:justify-start text-white line-height-7">
                    &copy; 2024{' '}
                    <span className="font-urbanist">JAYRAI WEB</span> - | All
                    Rights Reserved
                  </p>
                </div>
                <div className="footerbottom-right col-12 col-sm-7 col-md-6 flex items-end justify-end">
                  <p className="p w-full flex justify-center lg:justify-end text-white line-height-7 text-sm-end">
                    Developed By{' '}
                    <Link to={'https://www.jayraiweb.com'}>
                      <span className="orange-color uppercase font-urbanist">
                        JayRai Web.
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
