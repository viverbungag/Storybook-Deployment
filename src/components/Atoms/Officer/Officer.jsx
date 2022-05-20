import React from "react";
import styles from "./Officer.module.scss";
// import "./Officer.module.css";

const Officer = ({ name, position, imageSrc, haveBorder }) => {
  return (
    <>
      <div className={styles.officerContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={imageSrc} alt="Image" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.nameText}>{name}</div>
          <div className={styles.positionText}>{position}</div>
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <div className="officerContainer">
  //       <div
  //         className={
  //           haveBorder ? "imageContainer" : "imageContainer--no-border"
  //         }
  //       >
  //         <img className="image" src={imageSrc} alt="Image" />
  //       </div>
  //       <div className="textContainer">
  //         <div className="nameText">{name}</div>
  //         <div className="positionText">{position}</div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Officer;
