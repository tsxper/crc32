const { CRC32 } = require('@tsxper/crc32');

it('Test CJS', () => {
  const crc32 = new CRC32();
  const res = crc32.calculate('crc32 test');
  expect(res).toBe(2980580467);
});
