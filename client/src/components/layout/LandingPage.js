import React from "react";

const LandingPage = () => (
  <div>
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Bite Sized</span>
          <span className="heading-primary--sub">Get a little taste of heaven</span>
        </h1>

        <a href="#" className="btn btn--animated">
          Launch the app
        </a>
      </div>
    </header>

    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Features</h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Discover</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium fugit maxime alias est accusamus velit dolore.
              Reiciendis qui vitae hic ipsum, tempora unde autem inventore dicta
              veniam ut enim. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Adipisci laborum voluptates soluta odio
              molestiae porro praesentium facere eaque libero exercitationem
              est, aspernatur ipsa perspiciatis aut facilis delectus perferendis
              mollitia illum.
            </p>
          </div>
          <div className="col-1-of-2">
            <div className="u-center-image">
              <img src="/img/food-1.jpg" className="photo" alt="Photo 3" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="u-center-image">
              <img src="/img/food-2.jpg" className="photo" alt="Photo 2" />
            </div>
          </div>
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Share</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium fugit maxime alias est accusamus velit dolore.
              Reiciendis qui vitae hic ipsum, tempora unde autem inventore dicta
              veniam ut enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ad aliquid delectus, exercitationem cumque reprehenderit
              architecto repudiandae perspiciatis enim quas, eveniet fugit
              eligendi! Animi quos voluptatibus recusandae inventore voluptas!
              Reprehenderit, beatae!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Rate</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium fugit maxime alias est accusamus velit dolore.
              Reiciendis qui vitae hic ipsum, tempora unde autem inventore dicta
              veniam ut enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Laborum, vitae? Minima nulla, ipsa, sit id assumenda quis
              nisi iusto quae voluptatibus sunt libero, fugit error autem
              dolores asperiores temporibus repudiandae.
            </p>
          </div>
          <div className="col-1-of-2">
            <div className="u-center-image">
              <img src="/img/food-3.jpg" className="photo" alt="Photo 3" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default LandingPage;
