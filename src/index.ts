#!/usr/bin/env ts-node
import { execa } from "execa"; // ✅ Fix import
import chalk from "chalk";

async function run() {
  console.log(chalk.cyan("📡 Running Hardhat tests to monitor disputes..."));

  try {
    const { stdout } = await execa("npx", ["hardhat", "test"]);
    const lines: string[] = stdout.split("\n");

    const disputeLogs = lines.filter(
      (line: string) =>
        line.includes("DisputeRaised") || line.includes("DisputeResolved")
    );

    console.log(chalk.green("\n📊 Dispute Logs:"));
    disputeLogs.forEach((log: string, idx: number) => {
      console.log(`  #${idx + 1}: ${log}`);
    });

    if (disputeLogs.length === 0) {
      console.log(chalk.yellow("No disputes found."));
    }
  } catch (err) {
    console.error(chalk.red("❌ Failed to run dashboard:"), err);
  }
}

run();
