import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import ThemeContext from '../contexts/ThemeContext';
import AppTheme from '../themes/AppTheme';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <View style={AppTheme[themeMode + "Container"]}>
            <Text style={{ color: AppTheme[themeMode].textColor, fontSize: 70 }}>
                {themeMode === 'light' ? '☀️' : '🌙'}
            </Text>

            <Switch
                style={{ top: 30, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                value={themeMode === 'light'}
                onValueChange={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
            />
        </View>
    );
}

export default ThemeToggler;