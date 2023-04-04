// pages/api/covidampark/[filename].js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filename = "covidampark.zip";   
  const filePath = path.join(process.cwd(), 'public', 'covidampark', filename);
  const fileContent = fs.readFileSync(filePath);

  res.setHeader('Content-Type', 'application/zip');
  res.send(fileContent);
}