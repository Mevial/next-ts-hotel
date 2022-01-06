import type {NextPage} from 'next'

import MainContainer from "../components/MainContainer";
import Head from "next/head";
import React from "react";
import styles from './style.module.scss'
import calendar from "../public/images/calendar.svg";
import groupDate from "../public/images/groupDate.svg";
import users from "../public/images/users.svg";
import mainImage from "../public/images/mainImage.svg";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <MainContainer>
            <Head>
                <title>Home</title>
            </Head>
            <div className="container">
                <div className={styles.main}>
                    <div>
                    </div>
                    <div>
                        <div className={styles.main__welcome}>Welcome home</div>
                        <div className={styles.main__title}>Our world is your playground.</div>
                        <div className={styles.main__text}>Make yourself at home in our sophisticated guest rooms,
                            take in
                            the incredible views and enjoy fresh air from our beautiful sea city.
                        </div>
                    </div>

                    <div className={styles.quickBooking}>
                        <div className={styles.selectInfo}>
                            <div className={styles.selectInfo__checkin}>
                                <div><Image src={calendar} alt="calendar picture"/>Check in</div>
                                <div>
                                    <Image src={groupDate} alt="groupDate picture"/>
                                </div>
                            </div>
                            <div className={styles.selectInfo__checkout}>
                                <div><Image src={calendar}
                                            alt="calendar picture"/>Check out
                                </div>
                                <div>
                                    <Image src={groupDate} alt="groupDate picture"/>
                                </div>
                            </div>
                            <div className={styles.selectInfo__guest}>
                                <div><Image src={users}
                                            alt="users picture"/>Guest
                                </div>
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
                        <div className={styles.backgroundMainImage}><Image src={mainImage} layout={"fixed"}/></div>
                        <div className={styles.quickBooking__checkAvailability}>
                            <div className={styles.quickBooking__checkAvailabilityBlock_textRef}>
                                Check Availability
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.secondPage}>
                    <div className={styles.secondPage__aboutUs}>
                        <div className={styles.secondPage__list}>
                            <div className={styles.secondPage__item}></div>
                            <div className={styles.secondPage__item}></div>
                            <div className={styles.secondPage__item}></div>
                        </div>
                    </div>
                </div>
            </div>

        </MainContainer>
    )
}

export default Home













