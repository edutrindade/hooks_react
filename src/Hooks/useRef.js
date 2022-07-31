import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';

export default function UseRef() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF1' }}>
            <TextInput
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType='next'
                value={name}
                onChangeText={setName}
                onSubmitEditing={() => emailRef.current.focus()}
                style={{ width: '80%', borderColor: '#333', borderWidth: 1, padding: 10, marginBottom: 10 }}
            />

            <TextInput
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType='next'
                value={email}
                onChangeText={setEmail}
                ref={emailRef}
                onSubmitEditing={() => passwordRef.current.focus()}
                style={{ width: '80%', borderColor: '#333', borderWidth: 1, padding: 10, marginBottom: 10 }}
            />

            <TextInput
                placeholder="E-mail"
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType='send'
                value={password}
                onChangeText={setPassword}
                ref={passwordRef}
                style={{ width: '80%', borderColor: '#333', borderWidth: 1, padding: 10 }}
            />

        </View>
    );
}


