import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/components/HomePage'
import DefaultLayout from "@/layout/DefaultLayout";

export default function Home() {
  return (
    <>
      <main>
        <DefaultLayout
          isMain
          hasTop
        >
          <HomePage />
        </DefaultLayout>
      </main>
    </>
  );
}
