import type {NextPage} from 'next'

import MainContainer from "../components/MainContainer";
import Head from "next/head";
import React from "react";
import styles from './style.module.scss'
import calendar from "../public/images/calendar.svg";
import groupDate from "../public/images/groupDate.svg";
import users from "../public/images/users.svg";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <MainContainer>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.mainBlock}>
                    <div className={styles.mainBlock_welcomeBlock}>Welcome home</div>
                    <div className={styles.mainBlock_titleBlock}>Our world is your playground.</div>
                    <div className={styles.mainBlock_textBlock}>Make yourself at home in our sophisticated guest rooms,
                        take in
                        the incredible views and enjoy fresh air from our beautiful sea city.
                    </div>
                    <div className={styles.backgroundMainImage}></div>
                    <div className={styles.quickBookingBlock}>
                        <div className={styles.selectInfoBlock}>
                            <div className={styles.selectInfoBlock_checkinBlock}>
                                <span><Image src={calendar} alt="calendar picture"/></span>
                                <span>Check in</span>
                                <div>
                                    <Image src={groupDate} alt="groupDate picture"/>
                                </div>
                            </div>
                            <div className={styles.selectInfoBlock_checkoutBlock}><span><Image src={calendar}
                                                                                               alt="calendar picture"/></span>
                                <span>Check out</span>
                                <div>
                                    <Image src={groupDate} alt="groupDate picture"/>
                                </div>
                            </div>
                            <div className={styles.selectInfoBlock_guestBlock}><span><Image src={users}
                                                                                            alt="users picture"/></span>
                                <span>Guest</span>
                                <div>
                                    <select>
                                        <option>4 Persons</option>
                                        <option>3 Persons</option>
                                        <option>2 Persons</option>
                                        <option>1 Persons</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.quickBookingBlock_checkAvailabilityBlock}>
                            <div className={styles.quickBookingBlock_checkAvailabilityBlock_textRef}>
                                Check Availability
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.secondPage}></div>
            </div>

        </MainContainer>
    )
}

export default Home













