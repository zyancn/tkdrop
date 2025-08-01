import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, polygon } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
// 临时使用示例ID，请替换为您自己的项目ID
const projectId = '8966cbe8c785ecd3978f0ced7cac8cae'

// 2. Set up Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, arbitrum, polygon],
  projectId
})

// 3. Configure the metadata
const metadata = {
  name: 'VeriCred',
  description: 'VeriCred - Skill Verification Protocol',
  url: window.location.origin, // 动态获取当前域名，支持开发和生产环境
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 4. Create AppKit instance
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum, polygon],
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export { wagmiAdapter }