# Marketing Pages for 3Blades.io

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2c0e6e1ee79d42eb9fb1a6899a38f492)](https://www.codacy.com/app/3Blades/www-site?utm_source=github.com&utm_medium=referral&utm_content=3Blades/www-site&utm_campaign=badger)

#

This repo contains the source code for our public web site, located at https://3blades.io.

Our blog is currently hosted by [Medium](https://blog.3blades.io).

## Stack
##

This is running on next.js leveraging styled jsx and postcss, although we are currently moving to styled components.

## Dev
##

To run locally, first install dependencies:

    npm install

Then run:

    npm run dev

Navigate to `localhost:3000` to view. Changes to source code will hot reload page(s).

## Production
##

1. Install [now](https://zeit.co/now)
1. Login to your account and switch to 3Blades team account: `now switch`
1. Deploy: `now`
1. If everything looks ok, update alias: `now alias <random-string>.now.sh www.3blades.io`

## Contributors
##

Contributions are welcome! If you would like to help us improve our marketing site, follow our [contributor guide](CONTRIBUTING.md).

## Copyright and license
##

Copyright © 2016-2017 3Blades, LLC. All rights reserved, except as follows. Code
is released under the BSD 3.0 license. The README.md file, and files in the
"docs" folder are licensed under the Creative Commons Attribution 4.0
International License under the terms and conditions set forth in the file
"LICENSE.docs". You may obtain a duplicate copy of the same license, titled
CC-BY-SA-4.0, at http://creativecommons.org/licenses/by/4.0/.
