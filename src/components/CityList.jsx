import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import PropTypes from "prop-types";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

// CityList.propTypes = {
//   cities: PropTypes.array,
//   city: PropTypes.object,
//   isLoading: PropTypes.bool,
// };
CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};
