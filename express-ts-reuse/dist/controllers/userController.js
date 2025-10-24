"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
const getUsers = (req, res) => {
    res.json(users);
};
exports.getUsers = getUsers;
