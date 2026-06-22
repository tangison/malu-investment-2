from PIL import Image
import os

src = "/home/z/my-project/upload/unzipped"
dst = "/home/z/my-project/public/assets/brand"

os.makedirs(dst, exist_ok=True)

files = sorted(os.listdir(src))
results = []

for f in files:
    if not f.lower().endswith(('.png', '.jpeg', '.jpg')):
        continue
    src_path = os.path.join(src, f)
    
    if "Screenshot_20260619-180053" in f:
        webp_name = "brand-asset-01.webp"
    elif "Screenshot_20260619-180108" in f:
        webp_name = "brand-asset-02.webp"
    elif "Screenshot_20260619-180938" in f:
        webp_name = "brand-asset-03.webp"
    elif "Rebuild_image_1" in f:
        webp_name = "brand-asset-04.webp"
    elif "Rebuild_image_2" in f:
        webp_name = "brand-asset-05.webp"
    elif "Rebuild_image_3" in f:
        webp_name = "brand-asset-06.webp"
    elif "Rebuild_image_4" in f:
        webp_name = "brand-asset-07.webp"
    elif "Rebuild_image_5" in f:
        webp_name = "brand-asset-08.webp"
    elif "Rebuild_image_6" in f:
        webp_name = "brand-asset-09.webp"
    elif "Rebuild_image_7" in f:
        webp_name = "brand-asset-10.webp"
    elif "Rebuild_image_8" in f:
        webp_name = "brand-asset-11.webp"
    elif "Rebuild_image_9" in f:
        webp_name = "brand-asset-12.webp"
    elif "1782053072668" in f:
        webp_name = "brand-asset-13.webp"
    elif "1782053410158" in f:
        webp_name = "brand-asset-14.webp"
    elif "Screenshot_20260621" in f:
        webp_name = "brand-asset-15.webp"
    elif "Upscale" in f or "upscale" in f:
        webp_name = "brand-asset-16.webp"
    else:
        webp_name = f"{os.path.splitext(f)[0]}.webp"
    
    dst_path = os.path.join(dst, webp_name)
    
    try:
        img = Image.open(src_path)
        if img.mode in ('RGBA', 'LA', 'P'):
            img.save(dst_path, "WEBP", quality=85, method=6)
        else:
            img = img.convert("RGB")
            img.save(dst_path, "WEBP", quality=85, method=6)
        
        orig_size = os.path.getsize(src_path)
        webp_size = os.path.getsize(dst_path)
        results.append(f"OK: {f} -> {webp_name} ({img.size[0]}x{img.size[1]}) {orig_size//1024}KB -> {webp_size//1024}KB")
    except Exception as e:
        results.append(f"FAIL: {f}: {e}")

for r in results:
    print(r)
print(f"\nTotal: {len([r for r in results if r.startswith('OK')])} converted")
