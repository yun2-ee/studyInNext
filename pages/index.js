import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <ul>
        <li onClick={() => router.push("/20220603Header")}>
          header 반응형으로 제작하기
        </li>
      </ul>
    </div>
  );
}
