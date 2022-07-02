import { useDispatch, useSelector } from "react-redux";
import { change } from "store/slicers/balance";
import { RootState } from "store";
import { Provider } from "starknet";

export const useGetBalance = () => {
  const dispatch = useDispatch();
  const Values = useSelector((state: RootState) => state.starknet);

  const getBalanceWithAccount = async (
    _contractAddress: any,
    _entrypoint: string
  ) => {
    if (!Values.account) {
      return;
    } else {
      const res: any = await Values.account.provider.callContract({
        contractAddress: _contractAddress,
        entrypoint: _entrypoint,
      });
      console.log(res);
      dispatch(change(parseInt(res.result[0], 16)));
    }
  };

  const getBalanceWithContract = async () => {
    if (!Values.contract) {
      return;
    } else {
      const res = await Values.contract.get_balance();
      console.log(res.res.words[0]);
      dispatch(change(res.res.words[0]));
    }
  };

  const getBalanceWithProvider = async (
    _contractAddress: any,
    _entrypoint: any
  ) => {
    const provider: any = new Provider();
    const res = await provider.callContract({
      contractAddress: _contractAddress,
      entrypoint: _entrypoint,
    });
    console.log(res.result[0], 16);
    dispatch(change(parseInt(res.result[0], 16)));
  };

  return {
    getBalanceWithAccount,
    getBalanceWithContract,
    getBalanceWithProvider,
  };
};
