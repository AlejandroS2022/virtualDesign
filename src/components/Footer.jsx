import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import Logo from "../assets/virtual-design-logo.png";

function Footer() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 px-[1.5rem]! py-10!">
                <div className="flex flex-col flex-1">
                    <img
                        src={Logo}
                        className="max-w-[12rem]"
                        alt="logo"
                    />
                    <p className="text-slate-800 font-semibold mt-2! mb-4!">
                        All-in-one photo editor for easy editing and better design.
                    </p>
                    <div className="flex flex-row mt-5!">
                        <a href="#" className="bg-slate-200 p-3! rounded-full mr-3! hover:bg-[#85cf67]">
                            <FaSquareFacebook className="text-lg" />
                        </a>
                        <a href="#" className="bg-slate-200 p-3! rounded-full mr-3! hover:bg-[#85cf67]">
                            <FaSquareXTwitter className="text-lg" />
                        </a>
                        <a href="#" className="bg-slate-200 p-3! rounded-full mr-3! hover:bg-[#85cf67]">
                            <FaSquareInstagram className="text-lg" />
                        </a>
                        <a href="#" className="bg-slate-200 p-3! rounded-full mr-3! hover:bg-[#85cf67]">
                            <FaSquarePinterest className="text-lg" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <h3 className="text-slate-800 font-semibold mb-4!">
                        Community
                    </h3>

                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        About Us
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Terms of Use
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Contact Us
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Reviews
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Partners
                    </a>
                </div>

                <div className="flex flex-col flex-1">
                    <h3 className="text-slate-800 font-semibold mb-4!">
                        Explore
                    </h3>

                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Design Ideas
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Custom Images
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Templates
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Fonts
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Colors
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Blog
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Apps
                    </a>
                </div>

                <div className="flex flex-col flex-1">
                    <h3 className="text-slate-800 font-semibold mb-4!">
                        Solutions
                    </h3>

                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        For Businesses
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        For Developers
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        For Specific Industries
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Quicktools
                    </a>
                    <a href="#" className="text-slate-800 hover:text-[#85cf67] font-medium mb-2!">
                        Pricing
                    </a>
                </div>
            </div>
            <div className="flex justify-center px-[1.5rem]! py-8!">
                <p className="text-slate-500 text-sm font-medium">
                    © 2025 Virtual Design, All Rights Reserved.
                </p>
            </div>
        </>
  )
}

export default Footer
