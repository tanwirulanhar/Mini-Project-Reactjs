import logo from "../assets/logo2.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/Instagram.png";
import twitter from "../assets/icon/Twitter.png";
import youtube from "../assets/icon/Youtube.png";

const Footer = () => {
  return (
    <div className="bg-cyan-900">
      <div className="flex flex-col items-center justify-center px-4 py-8 text-white md:flex-row md:justify-between md:py-12 md:px-12 lg:px-24">
        <div className="w-full text-center md:w-2/5 lg:w-1/4 md:text-left">
          <img className="w-48 h-12 md:w-60" src={logo} alt="logo" />
          <p className="my-2 text-sm text-center md:text-base md:text-left">
            SeeEvent is a platform where you can create or find an amazing
            events around the world.
          </p>
          <p className="mt-4 mb-2 font-bold ">Follow Us on</p>
          <div className="flex justify-center gap-5 md:justify-start">
            <img className="" src={facebook} alt="facebook" />
            <img className="" src={instagram} alt="instagram" />
            <img className="" src={twitter} alt="twitter" />
            <img className="" src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8 md:justify-between md:gap-12 md:mt-0">
          <div className="w-1/2 md:w-auto">
            <h1 className="mb-4 text-lg font-bold">Links</h1>
            <p className="mb-2 text-sm">Home</p>
            <p className="mb-2 text-sm">Explore</p>
            <p className="mb-2 text-sm">My Events</p>
            <p className="mb-2 text-sm">Bookmarks</p>
          </div>
          <div className="w-1/2 md:w-auto">
            <h1 className="mb-4 text-lg font-bold">Top Categories</h1>
            <p className="mb-2 text-sm">Design</p>
            <p className="mb-2 text-sm">Photography</p>
            <p className="mb-2 text-sm">Development</p>
            <p className="mb-2 text-sm">Marketing</p>
          </div>
          <div className="w-full md:w-auto">
            <h1 className="mb-4 text-lg font-bold">Contact Us</h1>
            <p className="mb-2 text-sm leading-loose text-center md:text-left">
              Indonesia Jl. Planet Namek No. 123, Surabaya Telp : 083849420146
              Email : Johndoe@seeevent.com
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between px-4 py-6 text-white md:flex-row md:items-end md:py-8 md:px-12 lg:px-24">
        <p className="mb-4 text-sm md:mb-0">© 2021 SeeEvent All rights reserved.</p>
        <div className="flex gap-6 text-sm md:gap-10">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Helps</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

