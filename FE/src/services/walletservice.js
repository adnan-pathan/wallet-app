import axios from "axios";

export const setUpWallet = async (data) => {
  const response = await axios({
    method: "post",
    url: "https://wallet-app-backend.onrender.com/setup",
    data: data,
  });
  return response.data;
};

export const initTransaction = async (data) => {
  const response = await axios({
    method: "post",
    url: `https://wallet-app-backend.onrender.com/transact/${localStorage.getItem(
      "walletID"
    )}`,
    data: data,
  });
  return response
};

export const fetchTransaction = async () => {
  const response = await axios({
    method: "get",
    url: `https://wallet-app-backend.onrender.com/transactions/${localStorage.getItem(
      "walletID"
    )}/0/0`,
  });
  return response
};

export const getWallet = async () => {
  const response = await axios({
    method: "get",
    url: `https://wallet-app-backend.onrender.com/wallet/${localStorage.getItem(
      "walletID"
    )}`,
    data: {},
  });
  return response
};
