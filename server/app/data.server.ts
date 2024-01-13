export type StorageItem = [string, string];

class StorageManager {
  private _storage: StorageItem[] = [];

  get storage() {
    return this._storage;
  }

  setStorage(data: StorageItem): void {
    this._storage.push(data);
  }
  deleteStorage(): void {
    this._storage = []
  }
}

// Export an instance of the StorageManager class
export const storageManager = new StorageManager();