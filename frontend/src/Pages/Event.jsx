import React, { useEffect } from "react";
import "./Event.css";

const Event = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".event-head, .tech-events-head h1, .tech-events-head h2, .tech-events-para, .event-box"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Add animation class when visible
            observer.unobserve(entry.target); // Stop observing after animation runs
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el)); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div className="event-container">
      {/* Header Section */}
      <div className="event-head">
        <div className="tech-events-head">
          <h2>TECH EVENT</h2>
          <h1>EVENTS</h1>
        </div>
        <div className="tech-events-para">
          <p>
            The Tech Events featured in this list take place throughout the year
            and cover a wide range of different industries.
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="events">
        <div className="event-box">
          <div className="event-img">
            <img
              src="https://cdn.prod.website-files.com/637b71cdd60031caacd2e7ae/638f01c78ce65ffbb5765ea7_event-main-08-p-2000.jpg"
              alt="Annual API Cybersecurity Conference"
            />
          </div>
          <div className="event-para">
            <div className="event-box-heading">
              <h1>Annual API Cybersecurity Conference for Tech</h1>
              <div className="time-mode-date-container">
                <span>Time</span>
                <span>Mode</span>
                <span>Date</span>
              </div>
              <p>
                API is committed to following CDC, local government agencies, and
                the Woodlands Waterway Marriott...
              </p>
            </div>
          </div>
        </div>

        <div className="event-box">
          <div className="event-img">
            <img
              src="https://cdn.prod.website-files.com/637b71cdd60031caacd2e7ae/6380be266760ce8ab1c04c81_event-main-05-p-2000.jpg"
              alt="International Security Conference & Expo"
            />
          </div>
          <div className="event-para">
            <div className="event-box-heading">
              <h1>International Security Conference & Expo</h1>
              <div className="time-mode-date-container">
                <span>Time</span>
                <span>Mode</span>
                <span>Date</span>
              </div>
              <p>
                The International Security Conference & Exposition is the
                Northeast's largest security trade show, featuring one-on-one
                conversations...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
