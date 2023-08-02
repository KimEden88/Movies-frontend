import {
  FaDiscord,
  FaFacebookSquare,
  FaLinkedinIn,
  FaGithub,
  FaGoogle,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-[#00ADB5] text-[#222831]  pt-6 pb-6  flex justify-around align-center">
      <h3 className="text-xl font-semibold">
        © 2023 Copyright: Kim Eden WD#40
      </h3>
      <ul className="flex gap-4 text-2xl cursor-pointer">
        <li>
          <FaTiktok className="hover:text-[#555d6e]" />
        </li>
        <li>
          <FaDiscord className="hover:text-[#555d6e]" />
        </li>
        <li>
          <FaFacebookSquare className="hover:text-[#555d6e]" />
        </li>
        <li>
          <FaLinkedinIn className="hover:text-[#555d6e]" />
        </li>
        <li>
          <FaGithub className="hover:text-[#555d6e]" />
        </li>
        <li>
          <FaGoogle className="hover:text-[#555d6e]" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
