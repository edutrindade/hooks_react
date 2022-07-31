import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function UseState() {
    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contador: {count}</Text>
            <Button title="Incrementar" onPress={() => setCount(count + 1)} />
            <Button title="Decrementar" onPress={() => setCount(count - 1)} />
        </View>
    );
}


