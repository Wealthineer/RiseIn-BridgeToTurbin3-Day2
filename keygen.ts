import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
const keypair = Keypair.generate();

console.log("public key: ", keypair.publicKey.toBase58());
console.log("secret key: ", keypair.secretKey);

console.log("secret key in base 58: ", bs58.encode(keypair.secretKey))


