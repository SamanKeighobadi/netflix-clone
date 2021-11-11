import 'tailwindcss/tailwind.css'
import Mainlayout from '../components/Layouts/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  )
}

export default MyApp
