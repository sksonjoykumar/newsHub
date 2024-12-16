import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="px-4 md:px-20 border-t dark:border-gray-700 mt-8 pb-4">
      <div className=" ">
        <div className="mt-5 mb-3 logo-wrapper">
          <Link to={"/"} className="logo ">
            <h1 className="font-inter text-[#3A80E9] dark:text-[#0F925C] text-2xl font-semibold italic">
              News
              <span className="text-[#0F925C] dark:text-[#3A80E9]">Hub</span>
            </h1>
          </Link>
        </div>

        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div className="item-1">
            <h3 className="font-outfit text-gray-800 dark:text-gray-200 text-base uppercase mb-2">
              News
            </h3>

            <ul className="font-outfit text-sm font-normal text-gray-700 dark:text-gray-200">
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"us"}>US</NavLink>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"world"}>World</NavLink>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"politics"}>Politics</NavLink>
              </li>
              <li className="hidden md:block hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"business"}>Business</NavLink>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"health"}>Health</NavLink>
              </li>
              <li className=" hidden lg:block hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"entertainment"}>Entertainment</NavLink>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"travel"}>Travel</NavLink>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <NavLink to={"sports"}>Sports</NavLink>
              </li>
            </ul>
          </div>

          <div className="item-2">
            <h3 className="font-outfit text-gray-800 dark:text-gray-200 text-base uppercase mb-2">
              Opinion
            </h3>

            <ul className="font-outfit text-sm font-normal text-gray-700 dark:text-gray-200">
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Today's Opinion</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Op-Ed Columnists</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Editorials</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Op-Ed Contributors</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Letter's</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Sunday Review</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Video: Opinion</Link>
              </li>
            </ul>
          </div>

          <div className="item-3">
            <h3 className="font-outfit text-gray-800 dark:text-gray-200 text-base uppercase mb-2">
              Arts
            </h3>

            <ul className="font-outfit text-sm font-normal text-gray-700 dark:text-gray-200">
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Today's Arts</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Art & Design</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Books</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Dance</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Movies</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Music</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>N.Y.C. Events Guide</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Television</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Theater</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Video: Arts</Link>
              </li>
            </ul>
          </div>

          <div className="item-4 order-2 md:order-1">
            <h3 className="font-outfit text-gray-800 dark:text-gray-200 text-base uppercase mb-2">
              Living
            </h3>

            <ul className="font-outfit text-sm font-normal text-gray-700 dark:text-gray-200">
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Automobiles</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Crossword</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Food</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Education</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Fashion & Style</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Health</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Job</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Magazine</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>N.T.C. Events Guide</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Real Estate</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>T Magazine</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Travel</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Wedding & Celebrations</Link>
              </li>
            </ul>
          </div>

          <div className="item-5 ">
            <h3 className="font-outfit text-gray-800 dark:text-gray-200 text-base uppercase mb-2">
              Listings & More
            </h3>

            <ul className="font-outfit text-sm font-normal text-gray-700 dark:text-gray-200">
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Reader Center</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Classifieds</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Tool & Service</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>N.T.C. Events Guide</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Multimedia</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Photography</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Video</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>NYT Store</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Times Journeys</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Subscribe</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Manage My Account</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>NYTCo</Link>
              </li>
            </ul>
          </div>

          <div className="item-6 order-1 md:order-2">
            <h3 className="font-outfit text-gray-800 dark:text-gray-200 text-base uppercase mb-2">
              Support
            </h3>

            <ul className="font-outfit text-sm font-normal text-gray-700 dark:text-gray-200">
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Submit request</Link>
              </li>
              <li className=" hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>support.newshub@gmail.com</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Gift Subscriptions</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Group Subscriptions</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Email Newsletters</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Education Rate</Link>
              </li>
            </ul>

            {/* contact */}
            <h3 className="font-outfit text-gray-800 dark:text-gray-200 text-base uppercase  mt-3 mb-1">
              Contact
            </h3>

            <ul className="font-outfit text-sm font-normal text-gray-700 dark:text-gray-200">
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>@Listing_on_P2PBP5P6</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>newshubinfo@gmail.com</Link>
              </li>
              <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 pb-1">
                <Link>Verity our represent.</Link>
              </li>
            </ul>

            <div className="social my-3">
              <ul className="flex gap-1.5 justify-start flex-wrap md:flex-nowrap items-center md:justify-start md:items-start">
                <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin color="#0077B5" size="25" />
                  </a>
                </li>

                <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook color="#1877F2" size="25" />
                  </a>
                </li>
                <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram color="#E1306C" size="25" />
                  </a>
                </li>

                <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size="25" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="font-sans flex flex-col  lg:flex-row justify-center lg:justify-between border-t border-gray-300 dark:border-t dark:border-gray-700 pt-3 mt-4 mb-3">
          <div className="flex items-center gap-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              © 2024 The NewsHub Company{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Work With Us{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Advertise{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Your Ad Choices{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Privacy{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Terms of Service{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Terms of Sale
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Site Map{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Help <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Site Feedback{" "}
              <span className="text-gray-300 dark:text-gray-500">|</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200 cursor-pointer">
              Subscriptions{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
