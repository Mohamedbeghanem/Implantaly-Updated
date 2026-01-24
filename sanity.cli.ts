/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from "sanity/cli"
import { resolveDataset } from "./src/sanity/lib/dataset"

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID
const dataset = resolveDataset({
  explicitDataset:
    process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET,
})

export default defineCliConfig({ api: { projectId, dataset } })
