export type CustomError = Error & {
	status?: number;
	errorData?: unknown;
};
