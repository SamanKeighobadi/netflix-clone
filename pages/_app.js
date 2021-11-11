import 'tailwindcss/tailwind.css'
import Mainlayout from '../components/Layouts/MainLayout'
import '../public/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  )
}

export default MyApp
