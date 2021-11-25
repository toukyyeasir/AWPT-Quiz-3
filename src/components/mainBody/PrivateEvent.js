import React,{Fragment} from "react";
function PrivateEvent() {
  return (
    < >

      <div className="swiper-slide">
        <div className="row event-item">
          <div className="col-lg-6">
            <img src="assets/img/event-private.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Private Parties</h3>
            <div className="price">
              <p><span>$290</span></p>
            </div>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default PrivateEvent;