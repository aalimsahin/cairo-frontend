import styles from "./Starknet.module.scss";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { change, reset } from "store/slicers/name";
import { useStarknetConnection } from "hooks/useStarknetConnection";

const Starknet = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const { connectAccount, connectContract, getBalance, increaseBalance } =
    useStarknetConnection();

  return (
    <div className={styles.app}>
      <div className={styles.box}>
        <div className={styles.connectButtons}>
          <button
            onClick={() => {
              connectAccount();
            }}
          >
            Connect Account
          </button>
          <button
            onClick={() => {
              connectContract();
            }}
          >
            Connect Contract
          </button>
        </div>
        <div className={styles.value}>
          <span>{count}</span>
        </div>
        <div className={styles.getBalance}>
          <button
            onClick={() => {
              getBalance();
            }}
          >
            Get Balance
          </button>
        </div>

        <div className={styles.increaseBalanceInput}>
          <form action="">
            <input
              className={styles.input}
              placeholder="12345..."
              type="text"
              id="fname"
              name="fname"
              onChange={(value) => {
                dispatch(change(value.target.value));
              }}
            ></input>
          </form>
        </div>
        <div className={styles.increaseBalanceButton}>
          <button name="data" type="button" onClick={() => increaseBalance(13)}>
            Increase Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export { Starknet };
