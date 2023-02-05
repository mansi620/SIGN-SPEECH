import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./Textarea.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Textarea() {
  return (
    <>
      <div className={styles.textarea}>
        <div className={styles.defaultext}>Get your Text Here....</div>
      </div>
      
    </>
  );
}
