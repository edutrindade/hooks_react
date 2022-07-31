import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import ThemeContext from '../contexts/ThemeContext';
import AppTheme from '../themes/AppTheme';

const Footer = () => {
    const theme = useContext(ThemeContext)[0];

    return (
        <View style={AppTheme[theme + "Container"]}>
            <Text style={{ color: AppTheme[theme].textColor, fontSize: 30 }}>
                useContext na prática
            </Text>
        </View>
    );
}

export default Footer;






