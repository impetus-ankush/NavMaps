import AsyncStorage from '@react-native-community/async-storage';

const TAG_ASYNC_STORAGE = 'AsyncStorageUtil';
class AsyncStorageUtil {
	static async getAsyncStorage(key) {
		return await AsyncStorage.getItem(key).then(
			(response) => {
				return response;
			}
		);
	}
	static async setAsyncStorage(key, value) {
		await AsyncStorage.setItem(key, value)
			.catch((err) => {
				Log.e(TAG_ASYNC_STORAGE, 'setAsyncStorage:error: ' + err.message, true)
			});
	}

	static async removeAsyncstorage(key) {
		return await AsyncStorage.removeItem(key).then(
			(response) => {
				return response;
			}
		);
	}

	static async clearAllStorageElement() {
		return await AsyncStorage.clear().then(
			(response) => {
				return response;
			}
		);
	}
}
export default AsyncStorageUtil;
