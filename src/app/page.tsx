import Header from "@/components/Header/Header"
import Navbar from "@/components/Navbar/Navbar"
import VideoWithText from "@/components/Banner/VideoWithText"
import TitleSection from "@/components/Text/TitleSection"
import AboutUs from "@/components/Card/About"
import QuoteSection from "@/components/Card/QuoteSection"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Header />
      {/* <AboutUs /> */}
      <QuoteSection />
      {/* <TitleSection />
      <VideoWithText /> */}
    </main>
  )
}
