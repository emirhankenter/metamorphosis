import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  const currentDate = new Date();
  const targetDate = new Date('2023-06-23T14:00:00+03:00'); // June 23, 2023, 2 PM GMT+3

  // if (currentDate < targetDate) {
  //   return (
  //     <div className={styles.container}>
  //       {/* <Head>
  //         <meta name="description" content="Metamorfoz" />
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head> */}
  //         <h1 className={styles.title}>Metamorfoz</h1>
  //       <h2 className={styles.message}>Video 23 Haziran 14:00&apos;da aktif olacaktır.</h2>
  //     </div>
  //   );
  // }

  return (
    <>
      {/* <Head>
        <meta name="description" content="Metamorfoz" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className={styles.videoPlayerWrapper}>
        <h1 className={styles.title}>Metamorfoz</h1>
        <video className={styles.videoPlayer}width="320" height="240" controls autoPlay>
          <source src="https://pikagames.s3.amazonaws.com/Metamorfoz-Derin+Ekin+Kenter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Home;
