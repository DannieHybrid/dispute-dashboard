📄 README.md
markdown
Copy
Edit
# 🧾 Dispute Dashboard

A Hardhat-based smart contract project to manage and track dispute resolutions within a decentralized system.

## 🚀 Features

- Solidity contract for handling disputes (`DisputeManager`)
- Emits structured `DisputeRaised` and `DisputeResolved` events
- TypeScript-based test suite with Hardhat
- Real-time dispute log parser via CLI using `execa`
- Gas reporting for all contract interactions

## 📦 Tech Stack

- Solidity (v0.8.24)
- Hardhat
- TypeScript
- ethers.js
- chai
- ts-node
- execa

## 🛠️ Setup

```bash
git clone https://github.com/YOUR_USERNAME/dispute-dashboard.git
cd dispute-dashboard
npm install
🔬 Run Tests
bash
Copy
Edit
npx hardhat test
📡 Run CLI Dispute Monitor
bash
Copy
Edit
npx ts-node src/index.ts
📁 File Structure
pgsql
Copy
Edit
.
├── contracts/
│   └── DisputeManager.sol
├── src/
│   └── index.ts               # CLI to monitor test logs
├── test/
│   └── DisputeManager.test.ts # Contract tests
├── typechain-types/           # Auto-generated TypeScript bindings
├── hardhat.config.ts
├── tsconfig.json
├── package.json
└── README.md
🧪 Example Events
scss
Copy
Edit
DisputeRaised(indexed uint256 id, address indexed raisedBy, string reason)
DisputeResolved(indexed uint256 id, string outcome)


📄 License
MIT
