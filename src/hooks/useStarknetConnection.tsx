import { connect, getStarknet } from "@argent/get-starknet";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contract as StarknetContract } from "starknet";
import { Signer } from "starknet";
import { STORAGE } from "constants/starknet_abi";
import { STARKNET_CONTRACTS } from "constants/addresses";
import {
  setStarknetAccount,
  setStarknetContract,
} from "store/slicers/starknet";
import { change } from "store/slicers/balance";
import { RootState } from "store";
export const useStarknetConnection = () => {
  const dispatch = useDispatch();
  const Values = useSelector((state: RootState) => state.starknet);

  const connectAccount = async () => {
    const starknet: any = await connect({ showList: true });
    await starknet?.enable();

    if (!starknet) {
      throw Error(
        "User rejected wallet selection or silent connect found nothing"
      );
    }
    if (starknet.isConnected) {
      dispatch(setStarknetAccount(starknet));
      console.log(starknet);
    } else {
      console.log("Baglanamadik");
    }
  };

  const connectContract = async () => {
    if (Values.account) {
      const ctc: any = new StarknetContract(
        STORAGE as any,
        STARKNET_CONTRACTS.STORAGE,
        Values.account.provider
      );
      dispatch(setStarknetContract(ctc));
      console.log(ctc);
    } else {
      return;
    }
  };

  const getBalance = async () => {
    if (!Values.account) {
      return;
    } else {
      // const res = await Values.contract.get_balance();
      const res: any = await Values.account.provider.callContract({
        contractAddress: STARKNET_CONTRACTS.STORAGE,
        entrypoint: "get_balance",
      });
      console.log(res);
      dispatch(change(parseInt(res.result[0], 16)));
    }
  };

  const increaseBalance = async (number: number) => {
    if (!Values.contract) {
      return;
    } else {
      // await Values.contract.increase_balance("13", {
      //   max_fee: 2000000000000000,
      // });
      const txDetails: any = await Values.account.account.execute({
        contractAddress: STARKNET_CONTRACTS.STORAGE,
        entrypoint: "increase_balance",
        calldata: [number],
      });
      console.log("tx: ", txDetails);
    }
  };

  return { connectAccount, connectContract, getBalance, increaseBalance };
};
