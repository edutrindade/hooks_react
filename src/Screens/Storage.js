import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Storage() {

    const saveUserId = async (id) => {
        try {
            await AsyncStorage.setItem('@USER_ID', id)
        } catch (e) {
            console.log(e)
        }
    }

    const saveData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('@USER', jsonValue)
        } catch (e) {
            console.log(e)
        }
    }


    const getUserId = async () => {
        try {
            const value = await AsyncStorage.getItem('@USER_ID')
            return value;
        } catch (e) {
            console.log(e);
        }
    }

    const getUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@USER')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Salvando ID no Async Storage</Text>
            <Button title="Salvar" onPress={() => saveUserId('123')} />
            <Button title="Salvar" onPress={() => saveData({ name: 'João', age: '30' })} />
        </View>
    );
}

