import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Assignment Grader</h1>
      <Link href="/staff">Staff Portal</Link>
    </main>
  );
}
