import { useSelector } from "react-redux";
import { RootState } from "store";
import { STARKNET_CONTRACTS } from "constants/addresses";

export const useIncreaseBalance = () => {
  const Values = useSelector((state: RootState) => state.starknet);

  const increaseBalance = async (
    _contractAddress: string,
    _entrypoint: string,
    _number: number
  ) => {
    if (!Values.account) {
      return;
    } else {
      const txDetails: any = await Values.account.account.execute({
        contractAddress: _contractAddress,
        entrypoint: _entrypoint,
        calldata: [_number],
      });
      console.log("tx: ", txDetails);
    }
  };

  return {
    increaseBalance,
  };
};
