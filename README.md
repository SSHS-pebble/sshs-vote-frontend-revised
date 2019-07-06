
# SSHS vote front-end
## Prerequisites

Make sure you installed [Node.js](https://nodejs.org/), [npm](https://npmjs.com), and [yarn](https://yarnpkg.com).
When using windows, install unix tools and git bash from [git](https://git-scm.com/download/win).

This repo is based on the backend [sshs-vote-backend](https://github.com/SSHS-pebble/sshs-vote-backend).

## Building

Clone this repository and install all dependencies:

``` shellsession
$ git clone https://github.com/SSHS-pebble/sshs-vote-frontend-revised.git sshs-vote-frontend
$ cd sshs-vote-frontend
$ yarn install
```

Bundle all frontend assets with [parcel](https://parceljs.org):

``` shellsession
$ # If you don't have parcel installed:
$ yarn global add parcel # Or npm i -g parcel if you prefer
$ yarn run build
```

When bundling is finished, the toplevel directory `dist` will contain the bundled assets.

## Developing

To bundle assets automatically by file-watching:

``` shellsession
$ yarn run start
```

This automatically watches the directories and bundles automatically.
