"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.panic = panic;
const worker_threads_1 = require("worker_threads");
function panic(error, errorCode = 1) {
    console.error(`Thread ${worker_threads_1.threadId} panicked at ${new Date().toISOString()} with:`);
    console.error(error.stack);
    process.exit(errorCode);
}
