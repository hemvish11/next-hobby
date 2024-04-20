"use client";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Introduction from "@/Components/Introduction";
import NavBar from "@/Components/NavBar";
import AddCard from "@/Components/cards/AddCard";
import GetStarted from "@/Components/cards/GetStarted";
import Testimonial from "@/Components/cards/Testimonial";
import { useState } from "react";
import LoggedIn from "../Components/LoggedIn";
import MobileSignJoin from "@/Components/mobile/MobileSignJoin";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);

  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const handleClick = () => {
    setHamburgerClicked(!hamburgerClicked);
  }

  const signInOut = () => {
    setSignedIn(!signedIn);
  }

  return (
    <main className="poppins ">
      <NavBar signedIn={signedIn} hamburgerClicked={hamburgerClicked} handleClick={handleClick} signInOut={signInOut} />
      {!signedIn && !hamburgerClicked ?
        (
          <div className="mt-1">
            <Introduction signInOut={signInOut} />
            <Features />
            <AddCard />
            <Testimonial />
            <GetStarted />
            <Footer />
          </div>) :

        (!hamburgerClicked && <div className="bg-[#f8f9fa] h-[100vh]">
          <LoggedIn />
        </div>)
      }

      {hamburgerClicked &&

        <div className=" sm:hidden flex justify-center items-center w-full">
          <div className="mt-3 flex items-center justify-center w-[100%] bg-white rounded-lg">
            <MobileSignJoin signInOut={signInOut} hamburgerClicked={hamburgerClicked} />
          </div>
        </div>
      }
      {/* {hamburgerClicked &&

        <div className=" sm:hidden flex justify-center items-center w-full absolute top-13 h-screen">
          <div className="bg-black absolute w-full h-full opacity-40 top-0"></div>
          <div className="mt-3 flex items-center justify-center w-[80%] bg-white z-50 rounded-lg">
            <MobileSignJoin signInOut={signInOut} hamburgerClicked={hamburgerClicked} />
          </div>

        </div>
      } */}
    </main>
  );
}
