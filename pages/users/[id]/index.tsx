import {useRouter} from "next/router";
import styles from '../style.module.scss'
import MainContainer from "../../../components/MainContainer";
import React from "react";
import {GetServerSideProps} from "next";
import Head from "next/head";

type UserType = {
    user: GetServerSideProps
    name: string
}

export default function User({user}: UserType) {
    const {query} = useRouter()
    return (
        <MainContainer>
            <Head>
                <title>User</title>
            </Head>
            <div className={styles.user}>
                <h1>User id {query.id}</h1>
                <div>User name - {user.name}</div>
            </div>
        </MainContainer>
    )
};


export const getServerSideProps: GetServerSideProps = async ({params}: any) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}


