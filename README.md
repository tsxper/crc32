# CRC32
Cycle Redundancy Check 32.

Calculates unsigned CRC32 32 bit checksum for ***0x04C11DB7*** polynomial.

***Browser and NodeJS compatible.***

TypeScript type definitions are included.

## Transitive Dependencies

None.

## Example

```JavaScript
const crc32 = new CRC32();
crc32.calculate('crc32 test'); // 2980580467
```


## Supporting CommonJS and ECMAScript modules

Both, CommonJS and ESM modules are supported.

```JavaScript
import { CRC32 } from '@tsxper/crc32';
// or
const { CRC32 } = require('@tsxper/crc32');
```

Supporting of the both module systems is done through "import", "require" and "default" conditions.

[Conditional exports, NodeJS](https://nodejs.org/api/packages.html#conditional-exports).

[Package exports, Webpack](https://webpack.js.org/guides/package-exports/).
