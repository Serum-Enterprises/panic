"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.panic = panic;
const worker_threads_1 = require("worker_threads");
function panic(errorCode = 1) {
    var _a;
    console.error(`Thread ${worker_threads_1.threadId} panicked at ${new Date().toISOString()}\n${(_a = new Error().stack) === null || _a === void 0 ? void 0 : _a.split("\n").slice(1).join("\n")}`);
    process.exit(errorCode);
}
