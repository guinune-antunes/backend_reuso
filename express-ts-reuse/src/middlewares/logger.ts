import { Resquest, Response, NextFunction } from "express";

export function logger(req: Resquest, res: Response, next: NextFunction): void {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}