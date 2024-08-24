import { threadId } from "worker_threads";

export function panic(errorCode: number = 1): never {
	console.error(`Thread ${threadId} panicked at ${new Date().toISOString()}\n${new Error().stack?.split("\n").slice(1).join("\n")}`);

	process.exit(errorCode);
}