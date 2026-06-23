from PIL import Image
import os, json

brand_dir = "/home/z/my-project/public/assets/brand"
results = []

for f in sorted(os.listdir(brand_dir)):
    if not f.endswith('.webp'):
        continue
    path = os.path.join(brand_dir, f)
    img = Image.open(path)
    w, h = img.size
    ratio = h / w
    results.append({"file": f, "width": w, "height": h, "ratio": round(ratio, 2)})
    
    # If portrait/phone ratio (height > width * 1.3), crop into two landscapes
    if ratio > 1.3:
        print(f"PORTRAIT: {f} ({w}x{h}, ratio={ratio:.2f}) — cropping into 2 landscapes")
        
        # Top half crop
        top_h = int(w * 0.65)  # landscape ratio
        top_crop = img.crop((0, 0, w, min(top_h, h)))
        top_name = f.replace('.webp', '-crop-top.webp')
        top_crop.save(os.path.join(brand_dir, top_name), "WEBP", quality=85, method=6)
        print(f"  -> {top_name} ({top_crop.size[0]}x{top_crop.size[1]})")
        
        # Bottom half crop  
        bottom_y = max(0, h - int(w * 0.65))
        bottom_crop = img.crop((0, bottom_y, w, h))
        bottom_name = f.replace('.webp', '-crop-bottom.webp')
        bottom_crop.save(os.path.join(brand_dir, bottom_name), "WEBP", quality=85, method=6)
        print(f"  -> {bottom_name} ({bottom_crop.size[0]}x{bottom_crop.size[1]})")
    else:
        print(f"LANDSCAPE: {f} ({w}x{h}, ratio={ratio:.2f})")

print("\nAll image ratios:")
for r in results:
    print(f"  {r['file']}: {r['width']}x{r['height']} (ratio={r['ratio']})")
