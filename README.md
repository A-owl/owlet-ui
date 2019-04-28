# Owlet UI Framework

You should check out our [living style guide][docs], which contains many examples on how components in the UI framework look and feel, and how to use them in your products.

## Installation

To install the Owlet UI Framework into an existing project, use the `yarn` or `npm`.

```sh
$ yarn add @owlet/ui
# or
$ npm install --save @owlet/ui
```

A working version, assuming you are using something like [Create React App](https://github.com/facebookincubator/create-react-app), might look like this:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@owlet/ui'

ReactDOM.render(
  <Button>I am using 🌲 Owlet UI!</Button>,
  document.getElementById('root')
)
```

## Running Locally

### Node

We depend upon the version of node defined in [.nvmrc](.nvmrc).

You will probably want to install a node version manager. [nvm](https://github.com/creationix/nvm) is recommended.

To install and use the correct node version with `nvm`:

```sh
nvm install
nvm use
```

### Documentation

You can run the documentation locally at [http://localhost:8000/](http://localhost:8000/) by running.

```sh
npm run docs
```

## Goals

The primary goal of this library is to provide reusable UI components.

## 🎉 Contributing

We will add you to the list if you make any meaningful contribution!

- ... many other open-source contributors

Please take a look at the [CONTRIBUTING.md](CONTRIBUTING.md) to better understand what to work on.

## Wiki

## License

[license]: LICENSE.md

[docs]: https://vowlet.github.io/owlet-ui/
