"use client";

import { useEffect, useState } from "react";
import SideBarLinks from "./sidebar-links";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function SideBar() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    localStorage.setItem("Mode", "dark");
  };

  useEffect(() => {
    if (JSON.stringify(localStorage.getItem("Mode")) == "dark") {
      setDark(true);
      document.body.classList.toggle("dark");
    }
  }, []);

  return (
    <div className="flex h-full flex-col px-3 md:px-2">
      <aside
        id="separator-sidebar"
        className="z-50 w-15 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-slate-900"
        >
          <div>
            <SideBarLinks />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button onClick={() => darkModeHandler()}>
              {
                dark && (
                  <LightModeIcon
                    className="transition-opacity duration-300 ease-in-out"
                    sx={{ color: "white" }}
                  />
                ) // render sunny when dark is true
              }
              {
                !dark && <DarkModeIcon /> // render moon when dark is false
              }
            </button>

            <img
              style={{ width: "40px" }}
              src="https://cdn-icons-png.flaticon.com/512/12225/12225881.png"
            ></img>
          </div>
        </div>
      </aside>
    </div>
  );
}
