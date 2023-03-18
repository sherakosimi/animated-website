import React from "react";
import storyPhoto1 from "../img/nat-8.jpg";
import storyPhoto2 from "../img/nat-9.jpg";
import videoBg from "../img/video.mp4";
import videoBg2 from "../img/video.webm";
export default function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videoBg} type="video/mp4" />
          <source src={videoBg2} type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src={storyPhoto1}
              alt="Persons on the tour"
              className="story__image"
            />
            <figcaption className="story__caption">Marry Smith</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              corrupti maiores sequi officiis cumque quasi quo. Incidunt
              corrupti maiores sequi officiis cumque quasi quo.Commodi numquam
              rem eaque soluta laboriosam pariatur, itaque doloremque
              necessitatibus magni earum quibusdam officia.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src={storyPhoto2}
              alt="Persons on the tour"
              className="story__image"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WoW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              corrupti maiores sequi officiis cumque quasi quo. Incidunt
              corrupti maiores sequi officiis cumque quasi quo.Commodi numquam
              rem eaque soluta laboriosam pariatur, itaque doloremque
              necessitatibus magni earum quibusdam officia.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="f" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}
