import { Footer, FooterCopyright } from "flowbite-react";
import {BsFacebook, BsGithub, BsInstagram, BsReddit, BsTwitterX} from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function FooterCom() {
    return (
      <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="">
            <div className="">
                <p className="text-gray-400 text-center italic">"Your voice matters, let it be heard through your blogs"</p>
            </div>
            <div className="">
                <Footer.Divider/>
                <Footer.Copyright
                    href = '#'
                    by="Sudipta's EzBlog"
                    year={new Date().getFullYear()}
                ></Footer.Copyright>
                <div className="flex gap-6 sm:mt-2 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='https://github.com/Sudipta013' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsReddit}/>
                    <Footer.Icon href='#' icon={BsTwitterX}/>
                </div>
            </div>
          </div>
        </div>
      </Footer>
    );
  }