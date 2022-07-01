import styles from "./Starknet.module.scss";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { change, reset } from "store/slicers/name";
import { connect } from "@argent/get-starknet";
import { ConnectStarknet, walletAddress } from "./Connect";
import { useState } from "react";

const Starknet = () => {
  const dispatch = useDispatch();

  // const starknet : any = connect()
  // // or
  // // const starknet = connect({showList: false})

  // if (!starknet) {
  //   throw Error("User rejected wallet selection or silent connect found nothing")
  // }

  // await starknet.enable()

  //   if(starknet.isConnected) {
  //     // If the extension was installed and successfully connected, you have access to a starknet.js Signer object to do all kinds of requests through the user's wallet contract.
  //     console.log("ba[landik")
  // } else {
  //     // In case the extension wasn't successfully connected you still have access to a starknet.js Provider to read starknet states and sent anonymous transactions
  //     console.log("Baglanamadik")
  // }

  return (
    <div className={styles.app}>
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
          <button onClick={() => {}}>Increase</button>
        </form>
      </div>
      <div>
        <button
          onClick={() => {
            ConnectStarknet();
          }}
        >
          Get Balance
        </button>
        <span>{}</span>
      </div>
    </div>
  );
};

export { Starknet };
