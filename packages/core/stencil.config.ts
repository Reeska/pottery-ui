import {Config} from '@stencil/core';
import {sass} from "@stencil/sass";
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  plugins: [
    sass(),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@pottery-ui/core',
      proxiesFile: '../react/src/index.ts',
    }),
  ]
};
