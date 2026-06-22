import base64, json, subprocess, os

images_dir = "/home/z/my-project/public/assets/brand"
# Analyze key images
targets = [f"brand-asset-{i:02d}.webp" for i in range(1, 17)]

for img_name in targets:
    img_path = os.path.join(images_dir, img_name)
    if not os.path.exists(img_path):
        print(f"MISSING: {img_name}")
        continue
    
    with open(img_path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode()
    
    prompt = f"Describe this image in 1-2 sentences. What is it? Is it a logo, photo, illustration, icon, background, or something else? What colors are dominant? What text or symbols are visible?"
    
    try:
        result = subprocess.run(
            ["node", "-e", f"""
const {{ VLM }} = require('/home/z/my-project/malu-investment-original/skills/VLM/scripts/vlm.ts'.replace('.ts',''));
async function main() {{
    const {{ invoke }} = await import('z-ai-web-dev-sdk');
    const resp = await invoke('vlm', {{
        image: '{b64[:100]}...',
        prompt: `{prompt}`
    }});
    console.log(JSON.stringify(resp));
}}
main().catch(e => console.error(e));
"""],
            capture_output=True, text=True, timeout=30
        )
        print(f"{img_name}: {result.stdout.strip()[:200]}")
    except Exception as e:
        print(f"{img_name}: VLM error: {e}")
