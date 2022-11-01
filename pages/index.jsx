
import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss';
import Cards from '../src/components/Card';
import Header from '../src/components/Header';
import Pagination from '../src/components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRequest } from '../src/redux';

export default function Home() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()
  const list = useSelector(state => state.data?.results)
  const info = useSelector(state => state.data?.info)

  useEffect(() => {
    dispatch(getUserRequest({ page, search }))
  }, [page, search]);

  useEffect(() => {
    setPage(1)
  }, [search]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Aplicação Rick and Morty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onChange={(e) => setSearch(e.target.value)} />
      <section className={styles.card}>
        {list?.map((item) => {
          return (
            <Cards data={item} key={item.id} />
          )
        })}
      </section>
      <Pagination
        actionNext={() => setPage(page + 1)}
        actionPrev={() => setPage(page - 1)}
        info={info} />
    </div>
  )
}
