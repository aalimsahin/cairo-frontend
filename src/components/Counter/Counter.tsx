import styles from "./Counter.module.scss";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "store/slicers/global";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.app}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          Decrement
        </button>
          <span>{count}</span>
      </div>
    </div>
  );
};

export { Counter };