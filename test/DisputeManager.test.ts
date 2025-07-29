import { ethers } from "hardhat";
import { expect } from "chai";
import { DisputeManager } from "../typechain-types";

describe("DisputeManager", () => {
  it("should emit dispute events", async () => {
    const [user] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("DisputeManager");

    const contract = (await factory.deploy()) as DisputeManager;
    await contract.waitForDeployment();

    await expect(contract.connect(user).raiseDispute(1, "Invalid response"))
      .to.emit(contract, "DisputeRaised")
      .withArgs(user.address, 1, "Invalid response");

    await expect(contract.connect(user).resolveDispute(1, true))
      .to.emit(contract, "DisputeResolved")
      .withArgs(1, true);
  });
});
