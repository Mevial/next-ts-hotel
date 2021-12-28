import Link from "next/link";

import {GetStaticProps} from "next";
import MainContainer from "../../components/MainContainer";
import React from "react";
import Head from "next/head";

type UsersType = {
    users: []
}

const Index: React.FC<UsersType> = ({users}) => {

    return (
        <MainContainer>
            <Head>
                <title>Users</title>
            </Head>
            <h1>User list</h1>
            <ul>
                {users.map((user: { id: React.Key | null | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Index;


export const getStaticProps: GetStaticProps = async (context) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}
