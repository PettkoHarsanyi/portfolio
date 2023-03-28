// pages/api/docs/[filename].js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filename = "dokumentacio.docx";   
  const filePath = path.join(process.cwd(), 'public', 'docs', filename);
  const fileContent = fs.readFileSync(filePath);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.send(fileContent);
}