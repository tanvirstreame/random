class LocalStorage {
  addItem(data, key) {
    // Set local storage with key
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key) {
    // Get local storage with key
    const items = JSON.parse(localStorage.getItem(key) || "[]");
    return items;
  }

  removeItem(key) {
    // Remove local storage with key
     localStorage.removeItem(key);
  }

  removeAllItem() {
    // Clear all from local storage
     localStorage.clear();
  }
}