import { fetchWithAuth } from './fetch-base';

export const downloadPdf = async (
	resourceUrl: string,
	filename: string,
	getToken?: (options?: { template?: string }) => Promise<string | null>
): Promise<void> => {
	const response = await fetchWithAuth(
		{
			resourceUrl,
			cache: 'no-store',
		},
		getToken
	);

	// Get the blob from the response
	const blob = await response.blob();

	// Create a URL for the blob
	const url = window.URL.createObjectURL(blob);

	// Create a temporary anchor element to trigger the download
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();

	// Cleanup
	document.body.removeChild(link);
	window.URL.revokeObjectURL(url);
};
