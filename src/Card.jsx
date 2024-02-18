import React, { useState } from "react";

export const Card = ({ title, content, thumbnail, author, date }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { name, role } = author;
  const { large } = thumbnail;

  const getFormattedDate = (timestamp) => {
    let dateObj = new Date(timestamp * 1000); // Convert seconds to milliseconds

    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, "0");
    let year = dateObj.getFullYear();

    let formattedDate = month + " " + day + ", " + year;
    return formattedDate;
  };
  return (
    <div>
      <div
        className="card-container"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={large}
          id="card-image"
          className={isHovered ? "image-hovered" : ""}
        />
        <div className="card-main-body">
          <div className="card-design"></div>
          <h3 className="card-title">{title}</h3>
          <div className="card-content">{content}</div>
          <div className="card-footer">
            <label>
              {name}-{role}
            </label>
            <label>{getFormattedDate(date)}</label>
          </div>
        </div>
        {isHovered && <div className="card-hover-text">Learn More</div>}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="card-container modal-content">
            <span className="close-icon" onClick={handleCloseModal}>
              ×
            </span>
            <img
              src={large}
              id="card-image"
              className={isHovered ? "image-hovered" : ""}
            />
            <div className="card-main-body">
              <div className="card-design"></div>
              <h3 className="card-title">{title}</h3>
              <div className="card-content">{content}</div>
              <div className="card-footer">
                <label>
                  {name}-{role}
                </label>
                <label>{getFormattedDate(date)}</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
