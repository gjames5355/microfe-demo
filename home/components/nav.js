import React from 'react';
import Link from 'next/link';

import styles from '../styles/nav.module.css';

// const links = [
//   { href: 'https://zeit.co/now', label: 'ZEIT' },
//   { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link href='http://localhost:3001/'>
          <a>Home</a>
        </Link>
        <Link href='http://localhost:3002/events'>
          <a>Events</a>
        </Link>
        <Link href='http://localhost:3000/core'>
          <a>Core</a>
        </Link>
      </li>
      {/* {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))} */}
    </ul>
  </nav>
);

export default Nav;
