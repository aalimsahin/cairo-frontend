import styles from "./Starknet.module.scss";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { change, reset } from "store/slicers/name";
import { useStarknetConnection } from "hooks/useStarknetConnection";

const Starknet = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const { connectAccount, connectContract, getBalance, increaseBalance } = useStarknetConnection();



  return (
    <div className={styles.app}>
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
      <div>
        <form action="">
          <label>Increase Balance: </label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(value) => {
              dispatch(change(value.target.value));
            }}
          ></input>
          <button name="data" type="button"onClick={() => increaseBalance(13)} >
            Increase
          </button>
        </form>
      </div>
      <button
        onClick={() => {
          getBalance();
        }}
      >
        Get Balance
      </button>
      <div>
        <span>Value: {count}</span>
      </div>
    </div>
  );
};

export { Starknet };
