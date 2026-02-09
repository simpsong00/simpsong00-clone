import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://simpsong00.github.io",
  base: "/simpsong00-clone",
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
