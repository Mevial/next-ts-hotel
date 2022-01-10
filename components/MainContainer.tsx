import React, { ReactNode } from 'react';

import Image from 'next/image';

import cart from '../public/images/buy.svg';
import frame from '../public/images/frame.svg';

import { Index } from './a';
import styles from './style.module.scss';

type MainContainerType = {
  children: ReactNode;
};

const MainContainer: React.FC<MainContainerType> = ({ children }) => (
  <div className="container">
    <div className={styles.header}>
      <div className={styles.header__frame}>
        <div className={styles.header__logo}>
          <Image src={frame} alt="Logo picture" />
        </div>
        <div className={styles.header__option}>
          <select>
            <option>EN</option>
            <option>RU</option>
          </select>
        </div>
      </div>
      <div className={styles.header__navbar}>
        <Index href={'/'} text="Home" />
        <Index href={'/users'} text="Users" />
        <Index href={'/room'} text="Room" />
        <Index href={'/service'} text="Service" />
        <Index href={'/booking'} text="Booking" />
        <Index href={'/gallery'} text="Gallery" />
      </div>
      <div className={styles.header__button}>
        <div className={styles.header__cart}>
          <Image src={cart} alt="Cart picture" />
        </div>
        <div className={styles.header__login}>
          <Index href={'/login'} text="Login" />
        </div>
      </div>
    </div>
    {children}
    <footer className={styles.footer}>©2021 All rights reserved.</footer>;
  </div>
);

export default MainContainer;
