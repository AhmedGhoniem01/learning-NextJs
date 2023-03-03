import '@/styles/globals.css'
import Layout from '@/components/Layout'

//HERE THE LAYOUT COMPONENT WRAPS ALL PAGES CONTENT
//THE CONTENT INSIDE THE LAYOUT TAG IS PASSED TO IT AS CHILDREN IN THE COMPONENT FUNCTION PARAMS

export default function App({ Component, pageProps }) {
  return(
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}
