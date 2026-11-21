// news-image-20261121 entry: "The World in a Day", a front-page collage that sums up
// the world news of Saturday 21 November 2026 in a single image.
//
// The artwork lives in this repository as entry.png (JPEG bytes under a .png name;
// the gate tells the two apart by their first bytes, and both are welcome). This
// program copies that file to the output directory without touching a single byte,
// so the grader's two runs produce identical output and the judge sees the picture
// exactly as it was drawn.
//
// The output directory is /output on the grader. Elsewhere, set MAKEFUN_OUTPUT_DIR:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const picture = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// On the grader /output already exists; in a fresh checkout it may not, so create
// it first instead of letting the copy fail on a missing folder.
mkdirSync(outDir, { recursive: true });

copyFileSync(picture, join(outDir, 'entry.png'));
