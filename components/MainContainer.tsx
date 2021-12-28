import styles from "./style.module.scss"
import React, {ReactNode} from "react";
import {Index} from "./a";

//type DefaultMetaPropsType = DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>

type MainContainerType = {
    children: ReactNode

}
const MainContainer: React.FC<MainContainerType> = ({children}) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.frameBlock}>
                    <div className={styles.logo}><img alt={'logo'}/></div>
                    <div className={styles.option}>
                        <select>
                            <option>EN</option>
                            <option>RU</option>
                        </select></div>
                </div>
                <div className={styles.navbar}>
                    <Index href={'/'} text="Home"/>
                    <Index href={'/users'} text="Users"/>
                    <Index href={'/room'} text="Room"/>
                    <Index href={'/service'} text="Service"/>
                    <Index href={'/booking'} text="Booking"/>
                    <Index href={'/gallery'} text="Gallery"/>
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
