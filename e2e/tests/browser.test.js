import { Selector } from 'testcafe';
import path from 'path';

fixture('Browser test')
  .page(`file:///${path.join(__dirname, './browser.html')}`);

test('Load module and calculate checksum', async t => {
  await t.expect(Selector('#placeholder').innerText).eql('2560021400');
});
