const { CRC32 } = require('../dist/cjs/CRC32');

class Operations {

  payloadSizeBytes = 1024;

  numItems = 10000;

  /**
   * @returns {Uint8Array[]}
   */
  generateData() {
    const data = [];
    for (let i = 0; i < this.numItems; i++) {
      data.push(Buffer.allocUnsafe(this.payloadSizeBytes));
    }
    return data;
  }

  /**
   * 
   * @param {Date} startTime 
   * @param {Date} endTime 
   * @param {number} len 
   * @returns {number}
   */
  calcOps(startTime, endTime, len) {
    const msec = endTime.getTime() - startTime.getTime();
    console.log(`Processed ${len} items of ${this.payloadSizeBytes} random Bytes in ${msec} msec. `);
    const opsMs = len / msec;
    const opsSec = (opsMs * 1000);
    console.log(`Operations: ${opsSec.toFixed(0)} CRC32OPS`);
    const rateGbSec = (opsSec * this.payloadSizeBytes * 8)  / 1000000000;
    console.log(`Rate: ${rateGbSec.toFixed(4)} Gbit/s`);
    return opsSec;
  }

  async run() {
    const data = this.generateData();
    const crc = new CRC32();
    const startTime = new Date();
    for (const input of data) {
      crc.forBytes(input);
    }
    const endTime = new Date();
    this.calcOps(startTime, endTime, data.length);
  }
}

const ops = new Operations();
ops.run().catch(console.error);
