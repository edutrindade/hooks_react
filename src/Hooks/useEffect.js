import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#FFF');

    useEffect(() => {
        if (count > 0) {
            setBackgroundColor('#90EE90');
        } else if (count < 0) {
            setBackgroundColor('#F08080');
        } else {
            setBackgroundColor('#FFF');
        }
    }, [count]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor }}>
            <Text style={{ fontSize: 30 }}>Contador: {count}</Text>
            <View style={{ width: '75%', top: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button title="Incrementar" onPress={() => setCount(count + 1)} />
                <Button title="Decrementar" onPress={() => setCount(count - 1)} />
            </View>
        </View>
    );
}


