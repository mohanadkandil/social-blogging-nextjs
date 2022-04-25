import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href={{
        pathname: '/[username]',
        query: { username: 'mohanad kandil' }
      }}>
        <a>Kandil profile</a>
      </Link>
    </div>
  )
}
