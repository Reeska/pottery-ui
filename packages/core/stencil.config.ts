import {Config} from '@stencil/core';
import {sass} from "@stencil/sass";
import {reactOutputTarget} from "@stencil/react-output-target";
import {angularOutputTarget} from "@stencil/angular-output-target";

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
    angularOutputTarget({
      componentCorePackage: '@pottery-ui/core',
      directivesProxyFile: '../angular/projects/components/src/lib/proxies.ts',
      directivesArrayFile: '../angular/projects/components/src/lib/directives.ts',
    }),
  ]
};
