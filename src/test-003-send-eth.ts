import { baseSepolia } from 'viem/chains';
import { createWalletClient, http, parseUnits } from 'viem';
import { Address, privateKeyToAccount } from 'viem/accounts';
import { PRIVATE_KEY_A } from './config';

const walletAccount = privateKeyToAccount(PRIVATE_KEY_A as Address);
const walletClient = createWalletClient({
  account: walletAccount,
  chain: baseSepolia,
  transport: http(),
});

async function main() {
  // send eth -> 0.001 ETH
  const hash = await walletClient.sendTransaction({
    account: walletAccount,
    to: '0xYourAddress',
    value: parseUnits('0.001', 18),
  });

  console.log('Transaction Hash:', hash);
}

main();
