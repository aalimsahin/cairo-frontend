import { connect, getStarknet } from "@argent/get-starknet";
import { useDispatch } from "react-redux";
import { setStarknetAccount } from "store/slicers/starknet";
export const useConnectStarknetAccount = () => {
  const dispatch = useDispatch();

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
      console.log("Problem");
    }
  };

  return {
    connectAccount,
  };
};
