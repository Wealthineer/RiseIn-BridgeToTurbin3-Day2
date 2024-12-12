import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction} from "@solana/web3.js";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(Uint8Array.from(wallet));
const connection = new Connection("http://127.0.0.1:8899");
// const connection = new Connection("https://api.devnet.solana.com");

const toKeypair = Keypair.generate();
// const toPubkey = new PublicKey("Fg6Yq6QzVkXp8G5Q12TtoVY6W1PhGj7jYj1aYupXm9y");

(async() => {

    const balanceBefore = await connection.getBalance(keypair.publicKey)
    console.log("balance before: ", balanceBefore / LAMPORTS_PER_SOL)

    const transferIx = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: toKeypair.publicKey,
        lamports: 1.1 * LAMPORTS_PER_SOL
    })

    const tx = new Transaction().add(transferIx);

    const txSignature = await sendAndConfirmTransaction(connection, tx, [keypair])

    console.log("txSignature: ", txSignature)

    const balanceAfter = await connection.getBalance(keypair.publicKey)
    console.log("balance after: ", balanceAfter / LAMPORTS_PER_SOL)

    const balanceToAfter = await connection.getBalance(toKeypair.publicKey)
    console.log("balance to after: ", balanceToAfter / LAMPORTS_PER_SOL)

})()