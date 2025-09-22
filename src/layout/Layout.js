import { useState, useEffect } from "react";
import { Sidebar, SidebarItem } from "../components/sidebar/Sidebar";
import { RiHome2Line } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css"

export default function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // prevent horizontal scroll
      }}
    >
      {/* Sidebar */}
      <Sidebar
        style={{
          flex: isMobile ? "0 0 auto" : "0 0 250px",
          width: isMobile ? "100%" : "250px",
          height: isMobile ? "auto" : "100%",
          boxShadow: isMobile ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          zIndex: 10,
        }}
      >
        <SidebarItem icon={<RiHome2Line />} label={"Home"} />
        <SidebarItem icon={<MdBarChart />} label={"Stats"} />
        <SidebarItem icon={<SlCalender />} label={"Schedule"} />
        <SidebarItem icon={<CgProfile />} label={"Profile"} />
      </Sidebar>

      {/* Main Content */}
      <main
        className={styles.mainLayout}
      >
        <Outlet />
      </main>
    </div>
  );
}
