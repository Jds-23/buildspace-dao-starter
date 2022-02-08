import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xC678E2132b2e31984948ea3cA1D8f7188A20246F");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "BoutiesSpaceDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "BOUNTY",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

// Gov - token --- 0xC5B9702922858E81FDCe10A82cb67c357E5CE434
