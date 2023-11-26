import { CRC32 } from '../CRC32';

describe('Test CRC32', () => {
  const checksums: [string, number][] = [
    ['', 0],
    ['getting-started', 3434040051],
    ['npm test', 3233492827],
    ['Running from command line', 1207362252],
    ['actions/checkout@v4', 1785145639],
    ['hello crc32', 2560021400],
    ['español sí', 2026633238],
  ];

  it.each(checksums)('Calculate crc32 for "%s"', (input: string, expected: number) => {
    const crc32 = new CRC32();
    expect(crc32.calculate(input)).toBe(expected);
  });

  it.each(checksums)('Calculate crc32 with forBytes("%s")', (input: string, expected: number) => {
    const crc32 = new CRC32();
    const bytes = new TextEncoder().encode(input);
    expect(crc32.forBytes(bytes)).toBe(expected);
  });

  it('Calculate crc32 for chunks', () => {
    const crc32 = new CRC32();
    const chunks = [new TextEncoder().encode('text1 text2')];
    let crc = 0;
    for (const chunk of chunks) {
      crc = crc32.forBytes(chunk, crc);
    }
    expect(crc32.forString('text1 text2')).toBe(crc);
  });
});
