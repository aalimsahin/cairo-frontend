export const BALANCE = [
  {
    inputs: [
      {
        name: "amount",
        type: "felt",
      },
    ],
    name: "increase_balance",
    outputs: [],
    type: "function",
  },
  {
    inputs: [],
    name: "get_balance",
    outputs: [
      {
        name: "res",
        type: "felt",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
