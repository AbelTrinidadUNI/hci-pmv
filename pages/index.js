import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'
import { PaginasProvider } from '../contexts/PaginasContext'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const router = useRouter();



  useEffect(() => {
    if(!(localStorage.getItem('token'))){
      router.push('/login');
    } 
    
  }, [])

 

  
  

  return (
    <>
      <PaginasProvider>
        <Layout />
      </PaginasProvider>
    </>
  )
}
