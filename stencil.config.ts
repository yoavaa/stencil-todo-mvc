import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-comp',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {src: 'index.css'},
        {src: 'learn.json'},
        {src: '../node_modules/todomvc-common/base.css', dest: 'todomvc-common-base.css'}
        {src: '../node_modules/todomvc-common/base.js', dest: 'todomvc-common-base.js'}
      ]
    }
  ]
};
