import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
import { useId } from "react";
import css from './SearchBox.module.css'

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const id = useId();

  const handleFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setStatusFilter(name));
  };

  return (
    <div className={css.box}>
      <p className={css.label}>Find contact by name</p>
      <input className={css.input}
        type="text"
        value={filter}
        id={id}
        onChange={handleFilter}
        placeholder="Search contacts..."
      />
    </div>
  );
}