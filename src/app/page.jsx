
import Banner from "@/components/homepage/Banner";
import GetData from "../lib/GetData";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <div >
      <main >
       <Banner></Banner>
       <GetData></GetData>
       <Footer></Footer>
      </main>
    </div>
  );
}