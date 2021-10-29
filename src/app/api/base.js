import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyEnQjrhkEQnhqdr' }).base(
  'appN1AdyLVMf0SyNT',
);
console.log('base connection ', base);
export default base;
