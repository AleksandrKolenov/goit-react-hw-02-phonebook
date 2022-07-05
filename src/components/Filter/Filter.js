import React from "react";
import PropTypes from "prop-types";
const Filter = ({value, changeFilterInput}) => (
    <label>
         <span>Find contacts by name</span>
        Фильтр по имени <input type="text"
            name="filter"
            value={value}
            onChange={changeFilterInput}
       placeholder= "Type contact"
        />
</label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
export default Filter;