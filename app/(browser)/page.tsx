'use client'

import Image from "next/image";
import LandingPage from "./_compoenent/LandingPage";
import { useChatSiderbar } from "@/store/use-sideBar";
import RegToggle from "@/components/Recommended/_component/RegToggle";

export default function Home() {

  const {collapsed} = useChatSiderbar((state) => state)
  
  return (
    <div className="  max-w-[1500px]x">
      

      <LandingPage/>
      {/* <p>d</p> */}

    </div>
  );
}
