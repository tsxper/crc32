import { CRC32 } from './CRC32';

describe('Test CRC32', () => {
  const checksums: [string, number][] = [
    ['getting-started', 3434040051],
    ['npm test', 3233492827],
    ['Running from command line', 1207362252],
    ['actions/checkout@v4', 1785145639],
  ];

  it.each(checksums)('Calculate crc32 for "%s"', (input: string, expected: number) => {
    const crc32 = new CRC32();
    expect(crc32.calculate(input)).toBe(expected);
  });
});
