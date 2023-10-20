import {
  setTitleFilter,
  selectTitleFilter,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          value={titleFilter}
          type="text"
          placeholder="Filter by title..."
          onChange={handleTitleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filter;
