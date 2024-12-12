import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(Uint8Array.from(wallet));
const connection = new Connection("http://127.0.0.1:8899");
// const connection = new Connection("https://api.devnet.solana.com");

(async() => {
    const airdropTx = await connection.requestAirdrop(keypair.publicKey, 20 * LAMPORTS_PER_SOL)
    console.log("airdropTx: ", airdropTx)
    await connection.confirmTransaction(airdropTx)
    const balance = await connection.getBalance(keypair.publicKey)
    console.log("balance: ", balance / LAMPORTS_PER_SOL)
})()