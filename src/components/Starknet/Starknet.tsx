import styles from "./Starknet.module.scss";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { change, getInput } from "store/slicers/balance";
import { useStarknetConnection } from "hooks/useStarknetConnection";
import { useState } from "react";

const Starknet = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.balance.value);
  const input = useSelector((state: RootState) => state.balance.input);

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
                dispatch(getInput(value.target.value));
              }}
            ></input>
          </form>
        </div>
        <div className={styles.increaseBalanceButton}>
          <button
            name="data"
            type="button"
            onClick={() => increaseBalance(Number(input))}
          >
            Increase Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export { Starknet };
