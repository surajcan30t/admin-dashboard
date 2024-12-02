// "use client";
import Dashboardview from "@/components/Dashboardview";
import Disasterreq from "@/components/Disasterreq";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="">
      <div className="flex overflow-scroll ">
        <div className="basis-[14%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[86%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <Main />
          <div className="">
            <Disasterreq />
          </div>
        </div>
      </div>
    </div>
  );
}
