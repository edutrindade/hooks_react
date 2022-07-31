import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import ThemeContext from '../contexts/ThemeContext';
import AppTheme from '../themes/AppTheme';

const Header = () => {
    const theme = useContext(ThemeContext)[0];

    return (
        <View style={AppTheme[theme + "Container"]}>
            <Text style={{ color: AppTheme[theme].textColor, fontSize: 30 }}>
                {theme.toUpperCase()} MODE
            </Text>
        </View>
    );
}

export default Header;




