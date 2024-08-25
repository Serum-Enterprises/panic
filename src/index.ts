import { threadId } from "worker_threads";

/**
 * Panics the Thread or Process with the given error.
 */
export function panic(error: Error, errorCode: number = 1): never {
	console.error(`Thread ${threadId} panicked at ${new Date().toISOString()} with:`);
	console.error(error.stack);

	process.exit(errorCode);
}