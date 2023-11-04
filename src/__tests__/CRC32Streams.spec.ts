import path from 'path';
import { CRC32Streams } from '../CRC32Streams';

describe('Test CRC32Streams', () => {
  it('Calculate crc32 of a file', async () => {
    const expected = 3908598516;
    const file = path.join(__dirname, 'file.txt');
    const crc32 = new CRC32Streams();
    const checksum = await crc32.forFile(file);
    expect(checksum).toBe(expected);
  });
});
