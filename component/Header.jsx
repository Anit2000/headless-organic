"use client";
import { sanityClient } from "@/sanityClient";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  console.log("loaded");
  async function getHeaderData() {
    const data = await sanityClient.fetch("*[_type == 'header']");
    console.log(data);
    setHeaderData(data[0]);
  }
  useEffect(() => {
    getHeaderData();
  }, []);
  return (
    <header>
      <nav></nav>
    </header>
  );
};

export default Header;
