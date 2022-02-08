import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2E573e0bA17585916dcc26E24C062617EaCa5607",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "He He Boi",
        description: "This NFT will give you access to BountySpaceDAO!",
        image: readFileSync("scripts/assets/avatars.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()