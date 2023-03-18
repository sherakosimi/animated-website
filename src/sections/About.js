import React from "react";

import photoComp1 from "../img/nat-1-large.jpg";
import photoComp2 from "../img/nat-2-large.jpg";
import photoComp3 from "../img/nat-3-large.jpg";
export default function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventerous people
        </h2>
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You are going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            numquam rem eaque soluta laboriosam pariatur, itaque doloremque
            necessitatibus magni earum quibusdam officia illo, animi placeat
            incidunt aut quae et quia!
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            You are going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            corrupti maiores sequi officiis cumque quasi quo
          </p>
          <a href="#s" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div class="col-1-of-2">
          <div className="composition">
            <img
              src={photoComp1}
              alt="Photo1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={photoComp2}
              alt="Photo2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={photoComp3}
              alt="Photo3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
