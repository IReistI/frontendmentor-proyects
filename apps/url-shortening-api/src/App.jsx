import { Header } from './components/header/Header.jsx'
import { CallToActionSection } from './components/main/CallToActionSection.jsx'
import { ShortenerSection } from './components/main/ShortenerSection.jsx'
import { StatisticsSection } from './components/main/StatisticsSection.jsx'
import { Footer } from './components/footer/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <ShortenerSection />
        <StatisticsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}

export default App
