import React from 'react'
import List from "@mui/material/List";
import Link from 'next/link';
import { ListNav } from './mainStyles';

const LeftNavbar = () => {
  return (
    <>
      <List>
        <Link href={"/"}>
          <ListNav>Home</ListNav>
        </Link>
        <Link href={"/services"}>
          <ListNav>Services</ListNav>
        </Link>
        <Link href={"/projects"}>
          <ListNav>Projects</ListNav>
        </Link>
        <Link href={"/contact"}>
          <ListNav>Contact Me</ListNav>
        </Link>
      </List>
    </>
  );
};
export default LeftNavbar;
