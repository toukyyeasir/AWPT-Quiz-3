import React,{Fragment} from "react";
import AboutSection from "./AboutSection";
import Whyus from "./Whyus";
import Menu from "./Menu";
import Specials from "./Specials";
import Events from "./Events";
import BookTable from "./BookTable";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Chefs from "./Chefs";
import Contact from "./Contact";

function MainBody() {
    return (
      < >
          <main id="main">
            <AboutSection />
            <Whyus />
            <Menu />
            <Specials />
            <Events />
            <BookTable />
            <Testimonials />
            <Gallery />
            <Chefs />
            <Contact />

            

          </main>
       
      </>
    );
  }
  
export default MainBody;