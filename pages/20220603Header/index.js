import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Header0603.module.css";
import { faHeartCirclePlus, faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const toggleBtn = () => {
    const content = document.getElementById("contentBtns");
    const lastBtns = document.getElementById("lastBtns");

    content.classList.toggle(styles.toggleBtn);
    lastBtns.classList.toggle(styles.toggleBtn);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faHeartCirclePlus} color="#d49466" />
        <a>Yun's</a>
      </div>
      <ul id="contentBtns" className={styles.contents}>
        <li>Header1</li>
        <li>Header2</li>
        <li>Header3</li>
      </ul>

      <ul id="lastBtns" className={styles.lastWrap}>
        <a>1</a>
        <a>2</a>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        color="#d49466"
        className={styles.hamMenu}
        onClick={toggleBtn}
      />
    </div>
  );
}
