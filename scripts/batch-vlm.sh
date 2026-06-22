#!/bin/bash
DIR="/home/z/my-project/public/assets/brand"
OUT="/home/z/my-project/scripts/vlm-results.txt"
> "$OUT"

for i in $(seq -w 1 16); do
  img="$DIR/brand-asset-${i}.webp"
  if [ -f "$img" ]; then
    echo "Analyzing brand-asset-${i}..." >&2
    result=$(z-ai vision -p "Describe in 1 sentence. What is it? Colors? Text?" -i "$img" -o "/tmp/vlm-${i}.json" 2>/dev/null)
    desc=$(python3 -c "import json; d=json.load(open('/tmp/vlm-${i}.json')); print(d.get('choices',[{}])[0].get('message',{}).get('content','N/A'))" 2>/dev/null)
    echo "brand-asset-${i}: $desc" >> "$OUT"
  fi
done
cat "$OUT"
