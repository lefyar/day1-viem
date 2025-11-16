import { baseSepolia } from 'viem/chains';
import { createPublicClient, formatUnits, http } from 'viem';

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

async function main() {
  // get eth balance
  const ethBalance = await publicClient.getBalance({
    address: '0xYourAddress',
  });
  console.log('ETH Balance:', ethBalance);

  const ethBalanceFmt = formatUnits(ethBalance, 18);
  console.log('ETH Balance (formatted):', ethBalanceFmt);
}

main();
