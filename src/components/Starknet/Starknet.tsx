import styles from "./Starknet.module.scss";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { change, getInput } from "store/slicers/balance";
import { useStarknetConnection } from "hooks/useStarknetConnection";
import { useConnectStarknetAccount } from "hooks/useConnectStarknetAccount";
import { useConnectStarknetContract } from "hooks/useConnectStarknetContract";
import { useConnectStarknetProvider } from "hooks/useConnectStarknetProvider";
import { useGetBalance } from "hooks/useGetBalance";
import { useIncreaseBalance } from "hooks/useIncreaseBalance";
import { useEffect } from "react";

import { BALANCE } from "constants/starknet_abi";
import { STARKNET_CONTRACTS } from "constants/addresses";

const Starknet = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.balance.value);
  const input = useSelector((state: RootState) => state.balance.input);

  const { connectAccount } = useConnectStarknetAccount();
  const { connectProvider } = useConnectStarknetProvider();
  const { getBalanceWithAccount, getBalanceWithProvider } = useGetBalance();
  const { increaseBalance } = useIncreaseBalance();

  useEffect(() => {
    getBalanceWithProvider(STARKNET_CONTRACTS.BALANCE, "get_balance");
  }, []);

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
        </div>
        <div className={styles.value}>
          <span>{count}</span>
        </div>
        <div className={styles.getBalance}>
          <button
            onClick={() => {
              getBalanceWithAccount(STARKNET_CONTRACTS.BALANCE, "get_balance");
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
            onClick={() =>
              increaseBalance(
                STARKNET_CONTRACTS.BALANCE,
                "increase_balance",
                Number(input)
              )
            }
          >
            Increase Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export { Starknet };
