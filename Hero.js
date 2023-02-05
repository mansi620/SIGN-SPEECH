import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./Hero.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.islt}>
          <div className={styles.we}>We are here with</div>
          <div className={styles.isl}>Indian Sign </div>
        </div>
        <div className={styles.language}>
          <div className={styles.isl2}>Language</div>
          <div className={styles.platform}>translation platform.</div>
        </div>
        <div className={styles.content}>
          In order to bridge the communication barrier between <br></br>
          physically impaired people and able-bodied people
        </div>
      </div>
      <div className={styles.tag}>
        Kinkfolks! Say it by your hands we'll hear it from heart &#x2764;
      </div>
      <div className={styles.line}></div>
    </>
  );
}
