import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import styles from "./CountryList.module.css";
import PropTypes from "prop-types";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      // return [...arr, city];
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  // OR
  // console.log(cities);
  // const country = cities.map((city) => city.country);
  // console.log(country);

  // const countries = [...new Set(country)];
  // console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;

CountriesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};
