import { json, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { storageManager, StorageItem } from "~/data.server";


export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const urlObject = new URL(request.url);
    let operation = urlObject.searchParams.get('operation');

    operation = JSON.parse(operation) // ex: ["volume", "up"]

    if (!operation) {
      throw new Error('Invalid operation parameter');
    }

    // Use the setStorage method to update the storageManager
    storageManager.setStorage(operation);

    return json({ success: true });
  } catch (error) {
    console.error('Error processing operation:', error);
    return json({ success: false, error: 'Failed to process operation' }, { status: 400 });
  }
};

