## What is this

A simple cjs wrapper to the [cpy](https://github.com/sindresorhus/cpy) module

## Why make a wrapper ?

Since version 11 of cpy, the module [only supports esm import](https://github.com/sindresorhus/cpy/commit/f2b332123cfe7d9cd924577894fa4dd277ef6b4a).
In order to continue using this module conveniently I decided to wrap it in [fix-esm](https://www.npmjs.com/package/fix-esm).

## Why declare cpy as a peer dependency ?

Doing this allows you to decide the version of cpy in your project.
