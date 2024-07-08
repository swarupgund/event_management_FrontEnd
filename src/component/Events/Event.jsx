import React from "react";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const navigate = useNavigate();

  // const goToWedding = () => {
  //   navigate("/Wedding");
  // };
  const goToBirthday = () => {
    navigate("/Birthday");
  };
  const goToExhibition = () => {
    navigate("/Exhibition");
  };
  const goToCorporate = () => {
    navigate("/Corporate");
  };

  return (
    <section className="text-gray-600 body-font" id="event">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Events
          </h1>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/book home/11.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Wedding and Reception
            </h2>
            <p className="leading-relaxed text-base">
              Nestled with lush trees, heritage antiques,plenty of open space
              with a mandap and heritage temple- our venue will ensure you have
              the entire royal experience giving the bride and the groom the
              wedding that they’ve always dreamt of
            </p>
            {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"><a href="/beforebooking/Wedding.html">Book Now</a></button> */}
            <button
              onClick={() => navigate("/Wedding")}
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Book Now
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/book home/2.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Corporate Events
            </h2>
            <p className="leading-relaxed text-base">
              Whether it’s company meetings, team building exercises, product
              launches, Avadhani Nisargah provides a refreshing change for you
              and your team to do some out of the box thinking.
            </p>
            <button
              onClick={goToCorporate}
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/book home/3.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Birthdays
            </h2>
            <p className="leading-relaxed text-base">
              We understand your emotions and give our best to make your moments
              beautiful. Our birthday-themed decorations help to add beauty to
              your overall event.
            </p>
            <button
              onClick={goToBirthday}
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Book Now
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/book home/4.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Exhibitions
            </h2>
            <p className="leading-relaxed text-base">
              Discover the best Business events in your area and online.
              Innovative technologies, industry leaders, networking
              opportunities, immersive experiences, cutting-edge products,
              interactive demonstrations.
            </p>
            <button
              onClick={goToExhibition}
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
