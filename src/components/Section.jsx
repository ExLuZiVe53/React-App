import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
