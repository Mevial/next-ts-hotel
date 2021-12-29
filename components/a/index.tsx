import Link from "next/link";
import styles from './style.module.scss'
import React from "react";



type LinkType = {
    text: string
    href: string
}

export const Index: React.FC<LinkType> = ({text, href}) => {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
