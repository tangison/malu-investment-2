import fs from 'fs';
import path from 'path';

const imagesDir = '/home/z/my-project/public/assets/brand';
const targets = [];
for (let i = 1; i <= 16; i++) {
  const name = `brand-asset-${String(i).padStart(2,'0')}.webp`;
  const p = path.join(imagesDir, name);
  if (fs.existsSync(p)) targets.push({name, path: p});
}

async function analyzeImage(imgPath, imgName) {
  try {
    const imageData = fs.readFileSync(imgPath);
    const base64 = imageData.toString('base64');
    
    const response = await fetch('https://api.z.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'glm-4v-plus',
        messages: [{
          role: 'user',
          content: [
            { type: 'text', text: `Describe this image briefly (1-2 sentences). What is it? Is it a logo, photo, illustration, icon, background? What colors dominate? What text or symbols are visible?` },
            { type: 'image_url', image_url: { url: `data:image/webp;base64,${base64}` } }
          ]
        }],
        max_tokens: 150
      })
    });
    
    const data = await response.json();
    const desc = data.choices?.[0]?.message?.content || 'No description';
    console.log(`${imgName}: ${desc}`);
  } catch (e) {
    console.log(`${imgName}: ERROR - ${e.message}`);
  }
}

// Analyze the small/icon ones first (likely brand logos)
const priority = [1, 2, 3, 8, 11, 14, 16, 15, 4, 5, 6, 7, 9, 10, 12, 13];
for (const i of priority) {
  const t = targets.find(t => t.name === `brand-asset-${String(i).padStart(2,'0')}.webp`);
  if (t) await analyzeImage(t.path, t.name);
}
