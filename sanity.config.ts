import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "default",
  title: "Alta-Academy",

  projectId,
  dataset,

  plugins: [
    deskTool(),
    visionTool(), // optional but fine
  ],

  schema: {
    types: schemaTypes,
  },
});
