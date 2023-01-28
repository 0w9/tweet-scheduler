import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return <div id="all">
    <div class="bg-gradient-blue-to-white">
      <div class="card p-4 mt-10 mx-auto shadow-lg">
        <div class="flex">
          <input class="w-full rounded-lg p-2 text-gray-700 bg-white border-2 border-gray-300 focus:outline-none focus:border-blue-500" type="text" />
          <button class="rounded-lg text-white bg-blue-500 p-2 ml-2">Compose</button>
        </div>
        
        <div class="flex mt-4">
          <input id="date-selector" type="date" class="w-1/2 rounded-lg p-2 text-gray-700 bg-white border-2 border-gray-300 focus:outline-none focus:border-blue-500 mr-2" />
          <input id="time-selector" type="time" class="w-1/2 rounded-lg p-2 text-gray-700 bg-white border-2 border-gray-300 focus:outline-none focus:border-blue-500" />

        </div>
      </div>
    </div>
  </div>
  
}
