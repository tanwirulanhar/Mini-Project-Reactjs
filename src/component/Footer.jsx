import logo from "../assets/logo2.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/Instagram.png";
import twitter from "../assets/icon/Twitter.png";
import youtube from "../assets/icon/Youtube.png";

const Footer = () => {
  return (
    <div className="bg-cyan-900 ">
      <div className="flex text-white  ml-108 pt-12">
        <div className="w-96 ">
          <img className="color-yellow w-60 h-12" src={logo} alt="logo" />
          <p className="my-2 text-base">
            SeeEvent is a platform where you can create or find an amazing
            events around the world.
          </p>
          <p className="mt-8 mb-2 font-bold">Follow Us on</p>
          <div className="flex gap-5 mb-12">
            <img className="" src={facebook} alt="facebook" />
            <img className="" src={instagram} alt="instagram" />
            <img className="" src={twitter} alt="twitter" />
            <img className="" src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="flex w-704 ml-32 mr-108 justify-between">
          <div className="w-184  h-36 " >
            <h1 className="text-lg font-bold mb-4">Links</h1>
            <p className="mb-2 text-sm">Home</p>
            <p className="mb-2 text-sm">Explore</p>
            <p className="mb-2 text-sm">My Events</p>
            <p className="mb-2 text-sm">Bookmarks</p>
          </div>
          <div className="w-40 h-36 "  >
            <h1 className="text-lg font-bold mb-4">Top Categories</h1>
            <p className="mb-2 text-sm">Design</p>
            <p className="mb-2 text-sm">Photography</p>
            <p className="mb-2 text-sm">Development</p>
            <p className="mb-2 text-sm">Marketing</p>
          </div>
     
          <div className="w-72 ">
            <h1 className="text-lg font-bold mb-4">Contact Us</h1>
            <p className="mb-2 text-sm leading-loose">
              Indonesia Jl. Planet Namek No. 123, Surabaya Telp : 083849420146
              Email : Johndoe@seeevent.com
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between ml-108 mr-108 pt-10 pb-10 text-white">
        <p className="text-sm">© 2021 SeeEvent All rights reserved.</p>
        <div className="flex gap-10 text-sm">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Helps</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;