import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, "public", "images");
fs.ensureDirSync(IMAGES_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, IMAGES_DIR);
  },
  filename: (req, file, cb) => {
    // Keep original filename but ensure it's safe
    const safeName = file.originalname.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
    cb(null, safeName);
  }
});

const upload = multer({ storage });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/images", async (req, res) => {
    try {
      const files = await fs.readdir(IMAGES_DIR);
      const images = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Failed to list images" });
    }
  });

  app.post("/api/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    res.json({ filename: req.file.filename });
  });

  app.delete("/api/images/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      const filePath = path.join(IMAGES_DIR, filename);
      if (await fs.pathExists(filePath)) {
        await fs.remove(filePath);
        res.json({ success: true });
      } else {
        res.status(404).json({ error: "File not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete image" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
