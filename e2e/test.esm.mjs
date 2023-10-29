import { CRC32 } from '@tsxper/crc32';
import assert from 'node:assert/strict';

const crc32 = new CRC32();
const res = crc32.calculate('crc32 test');
assert.strictEqual(res, 2980580467, 'Test ESM');

