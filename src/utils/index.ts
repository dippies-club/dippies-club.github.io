import { BN } from "@project-serum/anchor";
import { Decimal } from "decimal.js";
import { PublicKey } from "@solana/web3.js";
import { request } from "https";

export const shortAddress = (key: PublicKey) => {
  const fullKey = key.toString();
  return (
    fullKey.substring(0, 4) +
    "..." +
    fullKey.substring(fullKey.length - 4, fullKey.length)
  );
};

export const formatValue = (n: BN | string, shift: number) => {
  const value = (() => {
    if (typeof n === "string") {
      return Number(n);
    } else {
      return n.toNumber();
    }
  })();

  return new Decimal(value).div(new Decimal(10 ** shift));
};

/**
 *
 * @param file - File object
 * @returns attachment or null
 */
export const uploadFileToIPFS = async (file: File) => {
  try {
    const res = await fetch("https://ipfs.infura.io:5001/api/v0/add", {
      headers: { "": "" },
      method: "POST",
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
