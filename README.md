# CSSSR official website

This repo contains the source code for [csssr.com](http://csssr.com/).

*Readme is also available in [Russian](README.ru.md).*

## What this repo can offer to you

CSSSR website is powered by [Next.js](https://nextjs.org/).

Examples provided by Next.js are great and cover a lot of different topics,
but we strongly believe that being able to hack into real-world application's source code is even better.
By opening this project to public we intend to share our experience 
and help other developers to come up with solutions more quickly.

Apart from Next.js built-in features our site has:
- custom express server
- basic multilingual support without any third-party library
- example usage of our [e2e tools](https://github.com/CSSSR/e2e-tools)
- integration with [emotion](https://emotion.sh/docs/introduction)
- [sentry](https://sentry.io/organizations/csssr/issues/) integration for both client and server

We hope that this repo will be helpful to anyone building Next.js app!

## Development

### Prerequisites

1. [Git](https://git-scm.com/download)
1. [Node.js LTS](https://nodejs.org/en/download/): any 12.x version starting with v12.0.0 or greater
1. [Yarn](https://yarnpkg.com/lang/en/docs/install/)
1. [Set up token for private github packages](https://confluence.csssr.io/display/DT/Github+packages)
*Currently it is restricted to company employees only, but we are preparing to share our internal npm packages with everyone!*

### Installation

1. Clone this repository
1. Run `yarn` in project root to install npm dependencies

### Running locally

1. Run `CSSSR_SPACE_ORIGIN=http://master.space.csssr yarn dev` to start dev server
(CSSSR_SPACE_ORIGIN is used to fetch data about vacancies from our HR software)
1. Open `localhost:3000` in browser

## License

The CSSSR website is an open source project released under the [MIT License](https://github.com/CSSSR/csssr.com/LICENSE).
