import { readFileSync } from 'fs';
import { join } from 'path';

console.log("🎤 V3GASBOI Independence Code: System Online");
console.log("🚀 Monitoring RapFame for the 10k play milestone...");

export default function handler(req, res) {
  // Serve HTML page for root path
  if (req.url === '/' || req.url === '') {
    try {
      const htmlPath = join(process.cwd(), 'public', 'index.html');
      const html = readFileSync(htmlPath, 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
    } catch (error) {
      console.error('Error reading HTML file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // API endpoint for status
    res.status(200).json({ 
      status: "Active", 
      brand: "88MOB",
      mission: "Road to 10k Plays" 
    });
  }
}
