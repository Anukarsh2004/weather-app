import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { cityOptions, cityUrl } from "../../API";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadCities = (inputValue) => {
    return fetch(`${cityUrl}&namePrefix=${inputValue}`, cityOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={500}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadCities}
    />
  );
};

export default Search;
