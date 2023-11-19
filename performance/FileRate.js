const fs = require('fs');
const path = require('path');
const { CRC32Streams } = require('../dist/cjs/CRC32Streams');


class FileRate {

  /**
   * 
   * @param {number} MB 
   * @returns {number}
   */
  MBToBytes(MB) {
    return 1000 * 1000 * MB;
  }

  /**
   * @returns {string}
   */
  get filePath() {
    const filePath = path.join(__dirname, 'file.txt');
    return filePath;
  }

  /**
   * @returns {number}
   */
  get fileSizeBytes() {
    return this.MBToBytes(100);
  }

  async createFile() {
    const data = Buffer.allocUnsafe(this.fileSizeBytes);
    fs.writeFileSync(this.filePath, data, { flag: 'w' });
  }

  async deleteFile() {
    fs.unlinkSync(this.filePath);
  }

  /**
   * 
   * @param {Date} startTime 
   * @param {Date} endTime 
   * @returns number
   */
  calcRate(startTime, endTime) {
    const msec = endTime.getTime() - startTime.getTime();
    const MB = (this.fileSizeBytes / 1000000).toFixed(4);
    console.log(`Processed ${MB} MB in ${msec} msec. `);
    const rateBitsMs = (this.fileSizeBytes * 8) / msec;
    const rateBitsSec = (rateBitsMs * 1000);
    const rateMbSec = rateBitsSec / 1000000;
    console.log(`Rate: ${rateMbSec.toFixed(4)} Mbit/s`);
    return rateMbSec;
  }

  async run() {
    await this.createFile();
    const stream = fs.createReadStream(this.filePath);
    const crc = new CRC32Streams();
    const startTime = new Date();
    await crc.forReadableStream(stream);
    const endTime = new Date();
    this.calcRate(startTime, endTime);
    await this.deleteFile();
  }
}

const rate = new FileRate();
rate.run().catch(console.error);
