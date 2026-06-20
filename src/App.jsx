import CategoryBar from "./components/CategoryBar";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HostCTA from "./components/HostCTA";
import ListingGrid from "./components/ListingGrid";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryBar />
        <ListingGrid />
        <Experiences />
        <HostCTA />
      </main>
      <Footer />
    </>
  );
}
