import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { UserContext } from '../lib/context'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useState, useEffect } from 'react'

useState

function MyApp({ Component, pageProps }) {

  return (
    <UserContext.Provider value={{ name: {}, username: 'kandil' }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
