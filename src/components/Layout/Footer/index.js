import "./style.css";
import React from "react";

import saddle_logo from "assets/icons/saddleLogo.svg";
import { useLoggedIn } from "context/LoggedInContext";
import SocialIcons from "../../SocialIcons";

export const Footer = () => {
  const { show } = useLoggedIn();
  return (
    <>
      <footer className={`footer_main !text-white relative z-10`}>
        <div className="flex justify-center items-center"> </div>
        <div className="footer_container">
          <div className="footer_wrapper">
            <div className="footer_logo_main">
              <div className="mb-10 w-full mx-auto lg:mx-0 :!ml-0">
                <a href="/#" className="footer_logo">
                  <img
                    src={saddle_logo}
                    alt="saddle_logo"
                    className="w-[254.406px] h-auto"
                  />
                </a>
                <p className="desc_text">SCAN. FIT. PERFORM.</p>
              </div>
            </div>
            <div className="footer_links_main">
              <LinkGroup header="About">
                {/* <NavLink link="/#" label="Our Story" /> */}
                {/* <NavLink link="/#" label="Contact us" /> */}
                <NavLink link="/#" label="Site Map" />
              </LinkGroup>
              {/* <div>
                <LinkGroup header="Partners">
                  <NavLink link="/partner" label="Become a partner" />
                </LinkGroup>
              </div> */}
              <LinkGroup header="Company">
                <NavLink
                  link="/terms-and-conditions"
                  label="Terms and Conditions"
                />
                <NavLink link="/privacy-policy" label="Privacy Policy" />
                {/* <NavLink link="/#" label="Careers" /> */}
              </LinkGroup>
            </div>
            <div className="mob_footer_logo_main">
              <div className="mob_footer_logo">
                <a href="/#" className="mb-6 inline-block  mx-auto">
                  <img src={saddle_logo} alt="saddle_logo" />
                </a>
                <p className="desc_text">SCAN. FIT. PERFORM.</p>
              </div>
            </div>
            <div className="footer_icons_main">
              <div className="footer_icons">
                <SocialIcons
                  instagram="https://www.instagram.com/saddlefit.io/"
                  youtube="https://www.youtube.com/channel/UCUj-9ml6dOitzXY-H515cmQ"
                  facebook="https://www.facebook.com/profile.php?id=61555381395666"
                  tiktok="https://www.tiktok.com/@saddlefit.io"
                />
                <p className="regards_text">
                  SaddleFit 2024. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4">
        <div className="mb-10 w-full">
          <h4 className="nav_links_head">{header}</h4>
          <ul className="ftr_nav_links">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a href={link} className="anchor_links">
        {label}
      </a>
    </li>
  );
};
