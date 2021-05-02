import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css"

const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/feed/1">
        <a>Feed</a>
      </Link>
      <Link href="/eom">
        <a>EOM</a>
      </Link>
      <a
        onClick={() => (window.location.href = "https://twitter.com/")}
      >
        Twitter
      </a>
    </div>
  );
};

export default Toolbar;
