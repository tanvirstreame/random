class LocalStorage {
  addItem(data, key) {
    // Set local storage with key
    return localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key) {
    // Get local storage with key
    var items = JSON.parse(localStorage.getItem(key) || "[]");
    return items;
  }

  removeItem(key) {
    // Remove local storage with key
    return localStorage.removeItem(key);
  }

  removeAllItem() {
    // Clear all from local storage
    return localStorage.clear();
  }
}