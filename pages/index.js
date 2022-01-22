import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Device from './device'
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello, Welcome to my website!</h1>
      <Device />
    </div>
  )
}
