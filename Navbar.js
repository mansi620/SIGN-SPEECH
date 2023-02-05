import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from "./Navbar.module.css"
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <>
    <div className={styles.top}>
        <div className={styles.logo}><img src="./image/logosvg.png" alt="" /></div>
        <div className={styles.nav}>
          <Link href={"/"} style={{textDecoration: 'none'}} >
            <div className={styles.home}>Home</div>
            </Link>
            <div className={styles.aboutus}>About Us</div>
            <div className={styles.app}>App</div>
            <div className={styles.blog}>Blog</div>
            <Link href={"./main"} style={{textDecoration: 'none'}}>
            <div className={styles.button}>Get Started</div>
            </Link>
            
        </div>
    </div>
      
    </>
  )
}
