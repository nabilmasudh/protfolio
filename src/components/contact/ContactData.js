import React from 'react'
import './ContactData.css'
import DataText from '../DataText';
import { FaAddressBook, FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Title from '../Title';

export default function ContactData() {
    return (
      <div className="contact-data">
        <Title title="Contact Information" />
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
