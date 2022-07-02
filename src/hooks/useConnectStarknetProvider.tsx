import { useDispatch } from "react-redux";
import { setStarknetProvider } from "store/slicers/starknet";
import { Provider } from "starknet";

export const useConnectStarknetProvider = () => {
  const dispatch = useDispatch();

  const connectProvider = async () => {
    const provider: any = new Provider();
    dispatch(setStarknetProvider(provider));
  };

  return {
    connectProvider,
  };
};
