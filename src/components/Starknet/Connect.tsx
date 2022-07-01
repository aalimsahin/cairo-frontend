import { connect, getStarknet } from "@argent/get-starknet";
import { useDispatch } from "react-redux";
import { setStarknet } from "store/slicers/starknet";
import { decrement, increment } from "store/slicers/global";

export const ConnectStarknet = () => {
  // dispatch(increment())
  const dispatch = useDispatch();

  const trial = async () => {

    const starknet:any = await connect({showList: true})
    await starknet?.enable()
    // or
  // const starknet : any = connect()
  if (!starknet) {
    throw Error("User rejected wallet selection or silent connect found nothing")
  }
  if(starknet.isConnected) {
    console.log(starknet.selectedAddress)
    // dispatch(setStarknet(23));
    dispatch(increment())
    // If the extension was installed and successfully connected, you have access to a starknet.js Signer object to do all kinds of requests through the user's wallet contract.
    // console.log(starknet.selectedAddress)
  } else {
    // In case the extension wasn't successfully connected you still have access to a starknet.js Provider to read starknet states and sent anonymous transactions
    console.log("Baglanamadik")
  }
}

trial()

};

export const walletAddress = async (): Promise<string | undefined> => {
  const starknet = await getStarknet()
  if (!starknet?.isConnected) {
    return
  }
  return starknet.selectedAddress
}
