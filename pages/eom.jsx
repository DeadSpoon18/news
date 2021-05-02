import Image from "next/image";
import Toolbar from "../components/toolbar";
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
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <Image src={employee.image} height={250} width={250} className={styles.photo}/>
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export default eom;
