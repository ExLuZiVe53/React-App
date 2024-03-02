// import defaultImage from "./default.jpg";
import PropTypes from "prop-types";

const Painting = ({ imageUrl, title, author, profileUrl, price, quantity }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price} cents</p>
      <p>Accessibility: {quantity < 10 ? "expiring" : "in stock"}</p>
      <button type="button">Add to card</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
