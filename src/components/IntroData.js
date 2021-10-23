import { FaAddressBook, FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import React from "react";
import "./IntroData.css";
import DataText from "./DataText";

export default function IntroData() {
  return (
    <div className="intro-Data">
      <DataText
        icon={<BsFilePersonFill />}
        title="Name"
        name="MD MASUDH HOWLADER"
      />
      <DataText
        icon={<FaAddressBook />}
        title="Address"
        name="Bangladesh, Khulna, Bagethat"
      />
      <DataText
        icon={<FaPhoneSquareAlt />}
        title="Phone"
        name="+8801727424565"
      />
      <DataText
        icon={<MdMarkEmailRead />}
        title="Email"
        name="nabilmasudh@gmail.com"
      />
    </div>
  );
}
