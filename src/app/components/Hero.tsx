import React from "react";

const Hero = () => {
  return (
    <section>
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url('https://www.freepik.com/free-ai-image/scenario-inspired-by-videogame_94951532.htm#fromView=search&page=1&position=8&uuid=1abcb265-32d9-4c6d-ae81-7814aff4f675')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
