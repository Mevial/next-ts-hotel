import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {ReactNode} from "react";
import {Index} from "./a";

//type DefaultMetaPropsType = DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>

type MainContainerType = {
    children: ReactNode

}
const MainContainer: React.FC<MainContainerType> = ({children}) => {
    return (
        <>
            <Head>

                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <Index href={'/'} text="Главная"/>
                <Index href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>

            <footer className={styles.footer}>
                Powered by qwerty
            </footer>
            <style jsx>
                {`
                  .navbar {
                    background: cornflowerblue;
                    padding: 15px;
                  }

                `}
            </style>
        </>
    );
};

export default MainContainer;
