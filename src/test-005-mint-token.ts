import { baseSepolia } from 'viem/chains';
import { createWalletClient, http, parseUnits } from 'viem';
import { mockTokenABI } from './abi';
import { Address, privateKeyToAccount } from 'viem/accounts';
import { PRIVATE_KEY_A } from './config';

const walletAccount = privateKeyToAccount(PRIVATE_KEY_A as Address);
const walletClient = createWalletClient({
  account: walletAccount,
  chain: baseSepolia,
  transport: http(),
});

async function main() {
  // mint token
  const txHash = await walletClient.writeContract({
    address: '0xTokenAddress',
    abi: mockTokenABI,
    functionName: 'mint',
    args: [
      '0xYourAddress',
      parseUnits('1000', 18),
    ],
  });

  console.log(txHash);
}

main();
