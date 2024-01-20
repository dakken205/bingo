import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://dakken205.github.io",
  base: "/bingo",
  integrations: [react(), vue()],
});
