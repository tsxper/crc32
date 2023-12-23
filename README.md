# CRC32

[![NPM Version](https://img.shields.io/npm/v/@tsxper/crc32.svg?style=flat-square)](https://www.npmjs.com/package/@tsxper/crc32)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
![npm type definitions](https://img.shields.io/npm/types/@tsxper/crc32)
[![NPM Downloads](https://img.shields.io/npm/dt/@tsxper/crc32.svg?style=flat-square)](https://www.npmjs.com/package/@tsxper/crc32)

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

### UTF-8 Support

UTF8 characters are fully supported.

```JavaScript
crc32.calculate('español sí');
```

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

### Calculate CRC32 For String or File In Browser 

See "Compatibility".

***HTML Copy/Paste Example***

> This example also shows how to calculate CRC32 for ArrayBuffer.

```html
<!DOCTYPE html>
<html>
<body>
  <p>Calculating crc32 for text "hello crc32": <span id="placeholder"></span></p>
  <div>
    <input type="file" id="input" />
    <p>CRC32 of the file: <span id="filecrc32"></span></p>
  </div>
  <script type="importmap">
    {
      "imports": {
        "@tsxper/crc32": "https://www.unpkg.com/@tsxper/crc32@2.1.0/esm/CRC32.js"
      }
    }
  </script>
  <script type="module">
    import { CRC32 } from "@tsxper/crc32";
    const crc32 = new CRC32();

    function handleString() {
      const crc = crc32.calculate("hello crc32");
      document.getElementById('placeholder').innerText = crc;
    }
    handleString();

    const fileInput = document.getElementById("input");
    fileInput.addEventListener("change", handleFiles, false);

    function handleFiles(e) {
      if (!this.files.length) return;
      const file = this.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const buffer = e.target.result; // ArrayBuffer
        const view = new Uint8Array(buffer);
        document.getElementById('filecrc32').innerText = crc32.forBytes(view);
      };
      reader.readAsArrayBuffer(file);
    }
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

### Convert CRC32 decimal to hexadecimal

```JavaScript
const crc32 = new CRC32();
const checksum10 = crc32.calculate("hi"); // 3633523372
const checksum16 = `0x${checksum10.toString(16)}`; // 0xd8932aac
```

## Supporting CommonJS and ECMAScript modules

Both, CommonJS and ESM modules are supported.

```JavaScript
import { CRC32 } from '@tsxper/crc32';
// or
const { CRC32 } = require('@tsxper/crc32');
```

Supporting of the both module systems is done through "import", "require" and "default" conditions.

## License

MIT License.

## Links
+ [Implementing CRC32 in TypeScript](https://medium.com/@vbabak/implementing-crc32-in-typescript-ff3453a1a9e7).

+ [Conditional exports, NodeJS](https://nodejs.org/api/packages.html#conditional-exports).

+ [Package exports, Webpack](https://webpack.js.org/guides/package-exports/).

