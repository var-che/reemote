import { LoaderFunctionArgs, json } from "@remix-run/node";
import { storageManager, StorageItem } from "~/data.server";

export async function loader({
    request,
}: LoaderFunctionArgs) {

    let st = storageManager.storage;
    storageManager.deleteStorage();

    return json(
        st,
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        }
    );
}
