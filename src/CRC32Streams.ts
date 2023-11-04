import fs from 'fs';
import stream from 'stream';
import { CRC32 } from './CRC32';

export class CRC32Streams extends CRC32 {
  public async forFile(filePath: string): Promise<number> {
    const readableStream = fs.createReadStream(filePath);
    const sum = await this.forReadableStream(readableStream);
    return sum;
  }

  public async forReadableStream(readableStream: stream.Readable): Promise<number> {
    const p: Promise<number> = new Promise((resolve, reject) => {
      let sum: number;
      readableStream.on('error', (err: Error) => {
        reject(err);
      });
      readableStream.on('data', (chunk: Buffer) => {
        sum = this.forBytes(chunk, sum);
      });
      readableStream.on('close', () => {
        resolve(sum);
      });
    });
    const checksum = await p;
    return checksum;
  }
}
