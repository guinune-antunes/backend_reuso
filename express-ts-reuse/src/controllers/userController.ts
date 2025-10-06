import {
    Request, Response } from "express";
import { user } from "../models/User";

let users: user[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
export const getUsers = (req: Request, res: Response): void => {
    res.json(users);
    
}