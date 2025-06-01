import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
try{
await AsyncStorage.setiten (key, value) ;
}catch(error){
console. log( 'Error storing value: ', error);
}
};

export const getItem = async (key) =>{
try {
const value = await AsyncStorage.getItem(key) ;
return value;
}catch (error) {
console.log('Error retrieving value: ', error);
}
};

export const removeltem = async (key) =>{
try{
await AsyncStorage.renovelten(key);
}catch (error) {
console.log ('Error deleting value: '. error);
}
}