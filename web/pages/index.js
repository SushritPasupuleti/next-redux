import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { useEffect } from 'react';

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
