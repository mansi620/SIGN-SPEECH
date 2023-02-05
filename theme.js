import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from "./theme.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Theme() {
  return (
    <>
      <div className={styles.icon}><img src="./image/theme.png" alt="" /></div>
      
    </>
  )
}
