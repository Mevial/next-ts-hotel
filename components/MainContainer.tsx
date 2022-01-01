import styles from "./style.module.scss"
import React, {ReactNode} from "react";
import {Index} from "./a";
import Image from 'next/image'
import frame from '../public/images/frame.svg'
import cart from '../public/images/buy.svg'
//type DefaultMetaPropsType = DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>

type MainContainerType = {
    children: ReactNode

}


const MainContainer: React.FC<MainContainerType> = ({children}) => {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_frameBlock}>
                    <div className={styles.logo}><Image src={frame} alt="Logo picture"/></div>
                    <div className={styles.option}>
                        <select>
                            <option>EN</option>
                            <option>RU</option>
                        </select></div>
                </div>
                <div className={styles.header_navbar}>
                    <Index href={'/'} text="Home"/>
                    <Index href={'/users'} text="Users"/>
                    <Index href={'/room'} text="Room"/>
                    <Index href={'/service'} text="Service"/>
                    <Index href={'/booking'} text="Booking"/>
                    <Index href={'/gallery'} text="Gallery"/>

                </div>
                <div className={styles.header_buttonBlock}>
                    <div className={styles.cart}>
                        <Image src={cart} alt="Cart picture"/>
                    </div>
                    <div className={styles.login}><Index href={'/login'} text="Login"/></div>
                </div>
            </div>
            <div>
                {children}
            </div>

            <footer className={styles.footer}>
                ©2021 All rights reserved.
            </footer>
        </>
    );
};

export default MainContainer;
