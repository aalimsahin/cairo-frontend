import styles from "./Name.module.scss";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { change, reset } from "store/slicers/name";

const Name = () => {
  const name = useSelector((state: RootState) => state.name.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.app}>
      <div>
        <form action="">
          <label>First name:</label>
          <input type="text" id="fname" name="fname" onChange={(value) => {
            dispatch(change(value.target.value));
          }}></input>
        </form>
        <p>{name}</p>
      </div>
    </div>
  );
};

export { Name };
