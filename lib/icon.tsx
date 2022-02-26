import React from 'react';
import {
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaBaby,
  FaBoxOpen,
  FaCertificate,
  FaCheck,
  FaCode,
  FaCube,
  FaDatabase,
  FaDog,
  FaExchangeAlt,
  FaGithub,
  FaGlobe,
  FaHammer,
  FaMoon,
  FaPlay,
  FaRegStar,
  FaRoute,
  FaShareAlt,
  FaSun,
} from 'react-icons/fa';
import { AiOutlineFork } from 'react-icons/ai';
import { SiFirebase, SiNextdotjs, SiVercel } from 'react-icons/si';

const getIcon = (value: String): React.ReactNode => {
  switch (value) {
    case 'baby':
      return <FaBaby />;
    case 'build':
      return <FaHammer />;
    case 'change':
      return <FaAngleDoubleRight />;
    case 'code':
      return <FaCode />;
    case 'dog':
      return <FaDog />;
    case 'edu':
      return <FaCertificate />;
    case 'firebase':
      return <SiFirebase />;
    case 'fork':
      return <AiOutlineFork />;
    case 'github':
      return <FaGithub />;
    case 'model':
      return <FaCube />;
    case 'moon':
      return <FaMoon />;
    case 'move':
      return <FaExchangeAlt />;
    case 'nextjs':
      return <SiNextdotjs />;
    case 'persist':
      return <FaDatabase />;
    case 'plan':
      return <FaRoute />;
    case 'presentation':
      return <FaGlobe />;
    case 'promotion':
      return <FaAngleDoubleUp />;
    case 'open':
      return <FaBoxOpen />;
    case 'run':
      return <FaPlay />;
    case 'share':
      return <FaShareAlt />;
    case 'star':
      return <FaRegStar />;
    case 'sun':
      return <FaSun />;
    case 'vercel':
      return <SiVercel />;
    case 'verify':
      return <FaCheck />;
  }
};

export default getIcon;
