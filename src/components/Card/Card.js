import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark textc mw250 justify-content-center "
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center align-items-center p-10`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4 positionCenter d-flex justify-content-center">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal positionCenter d-flex justify-content-center">Last Location</div>
                <div className="fw-medium d-flex justify-content-center positionCenter text-break">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = (

      <div className={`${styles.noFavorites} text-white text-center h100 cwt`}>
        Oh, that looks like you don't have favorite characters.
      </div>

    );
  }

  return <>{display}</>;
};

export default Card;
