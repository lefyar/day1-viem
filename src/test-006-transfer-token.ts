import { baseSepolia } from 'viem/chains';
import { createWalletClient, http, parseUnits } from 'viem';
import { mockTokenABI } from './abi';
import { Address, privateKeyToAccount } from 'viem/accounts';
import { PRIVATE_KEY_A, PRIVATE_KEY_B } from './config';

const walletAccount = privateKeyToAccount(PRIVATE_KEY_B as Address);
const walletClient = createWalletClient({
  account: walletAccount,
  chain: baseSepolia,
  transport: http(),
});

async function main() {
  // send token
  const txHash = await walletClient.writeContract({
    address: '0xTokenAddress',
    abi: mockTokenABI,
    functionName: 'transfer',
    args: ['0xYourAddress', parseUnits('10000', 18)],
  });

  console.log(txHash);
}

main();
