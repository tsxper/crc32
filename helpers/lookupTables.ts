import { CRC32 } from '../src/CRC32';

export class CRC32LookupTables extends CRC32 {

  /**
   * Base class is using polynomial 0xEDB88320
   */
  generateLookupTables(polynomial: number): number[] {
    const table: number[] = [];
    for (let n = 0; n < 256; n++) {
      let crc = n;
      // process input as 8-bits sequence
      for (let i = 0; i < 8; i++) {
        if (crc & 1) {
          crc = (crc >>> 1) ^ polynomial;
        } else {
          crc = crc >>> 1;
        }
      }
      table.push(this.toUint32(crc));
    }
    return table;
  }
}
