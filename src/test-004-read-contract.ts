import { baseSepolia } from 'viem/chains';
import { createPublicClient, formatUnits, http } from 'viem';
import { mockTokenABI } from './abi';

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

async function main() {
  // get token balance
  const tokenBalance = await publicClient.readContract({
    address: '0xTokenAddress',
    abi: mockTokenABI,
    functionName: 'balanceOf',
    args: ['0xYourAddress'],
  });

  const tokenBalanceFmt = formatUnits(tokenBalance, 18);
  console.log('Token Balance:', tokenBalance);
  console.log('Token Balance (formatted):', tokenBalanceFmt);
}

main();
