// @ts-check
import { defineConfig } from "astro/config"; //  Se importa astro
import tailwindcss from "@tailwindcss/vite"; // Se importa Tailwindcss UI/UX


export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: "https://bleach93.github.io",
    base: "/mar-de-japon",
});