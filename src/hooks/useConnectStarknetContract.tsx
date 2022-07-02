import { useDispatch, useSelector } from "react-redux";
import { Contract as StarknetContract } from "starknet";
import { setStarknetContract } from "store/slicers/starknet";
import { RootState } from "store";
export const useConnectStarknetContract = () => {
  const dispatch = useDispatch();
  const Values = useSelector((state: RootState) => state.starknet);

  const connectContract = async (ABI: any, Address: any) => {
    if (!Values.account) {
      return;
    } else {
      const ctc: any = new StarknetContract(
        ABI as any,
        Address,
        Values.account.provider
      );
      dispatch(setStarknetContract(ctc));
      console.log(ctc);
    }
  };

  return {
    connectContract,
  };
};
