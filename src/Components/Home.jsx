import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import styles from "../Styles/Home.module.css";
import axios from "axios";
const Home = () => {
  const [ShortId, setShortId] = useState("");
  const [Url, setUrl] = useState("");
  const [Copy, setCopy] = useState(false);

  const handleCopyButton = async () => {
    try {
      await navigator.clipboard.writeText(Url);
      setCopy(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  useEffect(() => {
    if (Copy) {
      // This will run when `copy` changes to true, you can perform additional side effects here
      console.log("Text copied successfully");

      // Optionally, reset the copy state after a delay to allow copying again
      const timer = setTimeout(() => setCopy(false), 3000);

      // Clean up the timer if the component is unmounted before the timeout
      return () => clearTimeout(timer);
    }
  }, [Copy]);
  const handleUrlForm = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    console.log(data);
    // const formdata = JSON.stringify(data);
    try {
      const response = await axios.post(
        "https://url-shortner-gtxo.onrender.com/api/shortid",

        data,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response && response.data) {
        console.log(response.data.id);
        setShortId(response.data.id);
        setUrl(`https://url-shortner-gtxo.onrender.com/${response.data.id}`);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
  return (
    <>
      <Layout>
        <div className={styles.main_container}>
          <h1>ENTER OR COPY THE LONG URL YOU WANT TO GENERATE SHORT URL FOR</h1>
          <form onSubmit={handleUrlForm}>
            <div className={styles.container}>
              <div className={styles.shadowInput}></div>
              <button className={styles.buttonShadow} type="submit">
                <svg
                  viewBox="0 0 24 24"
                  fill="#000000"
                  width="20px"
                  height="20px"
                  className={styles.svg}
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </button>
              <input
                type="text"
                name="url"
                className={styles.search}
                placeholder="Enter  Long Url"
              />
              <div className={styles.label}>URL</div>
            </div>
          </form>
          {ShortId && (
            <>
              <div className={styles.redirecturldiv}>
                <h1>
                  Your New Short Url is :{" "}
                  <span className={styles.spanurl}>{Url}</span>
                </h1>
                <div className={styles.copybutton} onClick={handleCopyButton}>
                  {Copy ? <>Copied</> : <>Copy</>}
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
