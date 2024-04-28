import PropTypes from "prop-types";
import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired, // Define the prop type for 'message'
  // message: PropTypes.string,
};
