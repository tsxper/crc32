# CRC32

Cycle Redundancy Check 32 (CRC32).

Calculates unsigned 32 bit checksum for ***0xEDB88320*** polynomial.

Speed optimization is done through using pre-calculated values from lookup tables.

[Release Notes](./NOTES.md).

### Performance

Performance totally depends on the hardware.
Results below are made on a very basic hardware with NodeJS v18.16.0, IntelCore i5 1.6 GHz CPU and DDR3 RAM.

| Processor | Rate | CRC32OPS | Input | Time |
| --- | --- | --- | --- | --- |
| CRC32 | 1.2047 Gbit/s | 147059 | 10K random 1024-Bytes items | 68 msec |
| CRC32Streams | 850.1594 Mbit/s | - | 100MB random data file | 941 msec |

### Compatibility

```JavaScript
class CRC32
// Browser and NodeJS compatible.
```

```JavaScript
class CRC32Streams
// Depends on NodeJS "stream" module.
```

### TypeScript Support

"@tsxper/crc32" package is originally written in TypeScript.
TypeScript type definitions are included.

### Transitive Dependencies
None.

## Example

### For String

```JavaScript
const crc32 = new CRC32();
crc32.calculate('crc32 test');
// or
crc32.forString('crc32 test');
```

### For Uint8Array

```JavaScript
const crc32 = new CRC32();
crc32.forBytes(new TextEncoder().encode('crc32 test'));
```

### For Buffer

> Buffer extends Uint8Array.

```JavaScript
const crc32 = new CRC32();
crc32.forBuffer(new TextEncoder().encode('crc32 test'));
```

### For File

```JavaScript
const crc32 = new CRC32Streams();
const checksum = await crc32.forFile(filePath);
```

### In Browser

See "Compatibility".

***HTML Copy/Paste Example***

```html
<!DOCTYPE html>
<html>
<body>
  <p>Calculating crc32 for text "hello crc32": <span id="placeholder"></span></p>
  <script type="importmap">
    {
      "imports": {
        "@tsxper/crc32": "https://www.unpkg.com/@tsxper/crc32@2.0.0/esm/CRC32.js"
      }
    }
  </script>
  <script type="module">
    import { CRC32 } from "@tsxper/crc32";
    const crc32 = new CRC32();
    const crc = crc32.calculate("hello crc32");
    document.getElementById('placeholder').innerText = crc;
  </script>
</body>
</html>
```

### Customization. Calculate for chunks, chunk by chunk.

For example, for sequence of events, converted into Uint8Array[] chunks.

```JavaScript
const chunks = [new TextEncoder().encode('text1 text2')];
const crc32 = new CRC32();
let crc = 0;
for (const chunk of chunks) {
  crc = crc32.forBytes(chunk, crc);
}

```

## Supporting CommonJS and ECMAScript modules

Both, CommonJS and ESM modules are supported.

```JavaScript
import { CRC32 } from '@tsxper/crc32';
// or
const { CRC32 } = require('@tsxper/crc32');
```

Supporting of the both module systems is done through "import", "require" and "default" conditions.

## Links
+ [Implementing CRC32 in TypeScript](https://medium.com/@vbabak/implementing-crc32-in-typescript-ff3453a1a9e7).

+ [Conditional exports, NodeJS](https://nodejs.org/api/packages.html#conditional-exports).

+ [Package exports, Webpack](https://webpack.js.org/guides/package-exports/).

