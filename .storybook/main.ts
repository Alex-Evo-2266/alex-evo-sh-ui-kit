import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path'

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    config.cacheDir = path.join(__dirname, '../node_modules/.vite-unique-name')
    config.base = '/alex-evo-sh-ui-kit/';
    return config;
  },
};
export default config;
