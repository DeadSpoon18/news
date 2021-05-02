import Head from "next/head";
import Image from "next/image";
import Toolbar from "../components/Toolbar";
import styles from "../styles/EOM.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const data = await res.json();

  return {
    props: {
      employee: data,
    },
  };
};

const eom = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>Employee of the Month</h1>
          <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <Image
              src={employee.image}
              height={250}
              width={250}
              className={styles.photo}
            />
            <p>{employee.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default eom;
