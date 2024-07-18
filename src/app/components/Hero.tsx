import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="hero min-h-96 ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-start justify-start">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5 text-2xl">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
