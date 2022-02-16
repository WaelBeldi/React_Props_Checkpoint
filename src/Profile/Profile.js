import React from "react";
import PropTypes from "prop-types";
import defaultphoto from "./horde.jpg";

const Profile = (props) => {
  const styleProfile = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
  };
const styleSpan = {
  textDecoration: "underline",
  color: "#007bff"
}
const styleDivButton = {margin: "0 auto"}
const styleButton = {
  color: "#fff",
  backgroundColor: "#007bff",
  borderColor: "#007bff",
  fontWeight: "400",
  textAlign: "center",
  verticalAlign: "middle",
  border: "1px solid transparent",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: "0.25rem"
}

  return (
    <div style={styleProfile}>
      <div>{props.children}</div>
      <div>
        <h3>
          <span style={styleSpan}>FULL NAME:</span> {props.fullName}
        </h3>
        <h3>
          <span style={styleSpan}>BIOGRAPHY:</span> {props.bio}
        </h3>
        <h3>
          <span style={styleSpan}>PROFESSION:</span> {props.profession}
        </h3>
        <div style={styleDivButton}>
          <button onClick={() => props.handleName(`My name is ${props.fullName}`)} style={styleButton}>
            Who am I?
          </button>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Anonymous",
  bio: "None",
  profession: "Unknown",
  children: <img src={defaultphoto} alt="" />,
  handleName: () => alert("Anonymous user"),
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Profile;
