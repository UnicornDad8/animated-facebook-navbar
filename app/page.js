"use client";

import React from "react";

import BellIcon from "./icons/BellIcon";
import MessengerIcon from "./icons/MessengerIcon";
import CaretIcon from "./icons/CaretIcon";
import PlusIcon from "./icons/PlusIcon";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";

export default function Home() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}
