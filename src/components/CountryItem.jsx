import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagcdn.com/48x36/${country.emoji}.png`}
        alt={country.emoji}
      />
      {/* <span>{country.emoji}</span> */}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

CountryItem.propTypes = {
  country: PropTypes.object,
};
