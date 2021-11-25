import React,{Fragment} from "react";
import CustomEvent from "./CustomEvent";
import PrivateEvent from "./PrivateEvent";
import BirthdayEvent from "./BirthdayEvent";
function Events() {
  return (
    < >
      <section id="events" className="events">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Events</h2>
            <p>Organize Your Events in our Restaurant</p>
          </div>

          <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
              <BirthdayEvent />
              <PrivateEvent />
              <CustomEvent />
             
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>

    </>
  );
}

export default Events;