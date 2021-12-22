import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
// import * as IoIcons from "react-icons/io";
// import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Map',
    path: '/map',
    icon: <GiIcons.GiFamilyTree />,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <AiIcons.AiOutlineSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Upgrade',
    path: '/upgrade',
    icon: <GiIcons.GiTeamUpgrade />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Reports',
  //   path: '/reports',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // },
]

