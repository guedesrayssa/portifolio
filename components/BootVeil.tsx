"use client";

import { useEffect, useState } from "react";
import { MeanderDivider } from "./Ornaments";

/* Black veil held over the page until the first paint settles. The fade is driven by CSS
   so the site still appears if this script never runs; the effect only shortens the wait. */
export function BootVeil() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const finish = () => {
      window.setTimeout(() => {
        setReady(true);
        document.documentElement.classList.remove("is-booting");
      }, 160);
    };

    document.documentElement.classList.add("is-booting");

    if (document.readyState === "complete") {
      finish();
      return () => document.documentElement.classList.remove("is-booting");
    }

    window.addEventListener("load", finish);
    return () => {
      window.removeEventListener("load", finish);
      document.documentElement.classList.remove("is-booting");
    };
  }, []);

  return (
    <div className={`boot-veil${ready ? " is-ready" : ""}`} aria-hidden="true">
      <div className="boot-mark">
        <MeanderDivider className="boot-meander" />
        <span className="boot-name">RGF</span>
        <i className="boot-bar" />
      </div>
    </div>
  );
}
