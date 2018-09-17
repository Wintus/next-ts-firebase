const functions = require("firebase-functions");
const next = require("next");
import { Request, Response } from "express";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: { distDir: "next" } });
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest(
  async (req: Request, res: Response) => {
    // log the page.js file that is being requested
    console.log(`File: ${req.originalUrl}`);

    await app.prepare();
    await handle(req, res);
  }
);
