// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {
  getItemAsync,
  setItemAsync,
  isAvailableAsync,
  deleteItemAsync
}

export default storage;

async function getItemAsync(key) {
  return await AsyncStorage.getItem(key);
}

async function setItemAsync(key, value) {
  return await AsyncStorage.setItem(key, value);
}

async function isAvailableAsync(key) {
  const res = await AsyncStorage.getItem(key);
  return res != null;
}

async function deleteItemAsync(key) {
  const res = await AsyncStorage.removeItem(key);
  return res != null;
}
