import '@/styles/globals.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { auth } from '@/services/firebase/firebaseService'
import { dbGet } from '@/services/firebase/databaseService'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

	// const { profile, setProfile } = useProfile()

	// useEffect(() => {
	// 	auth.onAuthStateChanged(state => {
	// 		if (state?.uid) {
	// 			dbGet(`profiles/${state.uid}`).then(result => {
	// 				setProfile(result)
	// 			})
	// 		}
	// 	})
	// }, [])

	return (
		<ChakraProvider>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
