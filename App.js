import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations } from './src/constants/translations';
import { colors } from './src/constants/colors';

import LanguageSelectionScreen from './src/screens/LanguageSelectionScreen';
import HomeScreen from './src/screens/HomeScreen';
import CheckBalanceScreen from './src/screens/CheckBalanceScreen';
import RecentTransactionsScreen from './src/screens/RecentTransactionsScreen';
import ScanQRCodeScreen from './src/screens/ScanQRCodeScreen';
import ChooseContactScreen from './src/screens/ChooseContactScreen';
import EnterAmountScreen from './src/screens/EnterAmountScreen';
import EnterUPIPinScreen from './src/screens/EnterUPIPinScreen';
import MoneySentScreen from './src/screens/MoneySentScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.surfaceContainer,
    text: colors.onSurface,
    border: colors.outlineVariant,
  },
};

const defaultT = (key) => translations['en'][key] || key;

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('appLanguage');
      if (savedLanguage && typeof savedLanguage === 'string') {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.log('Error loading language:', error);
    }
    setIsReady(true);
  };

  const changeLanguage = useCallback(async (lang) => {
    try {
      await AsyncStorage.setItem('appLanguage', String(lang));
      setLanguage(lang);
    } catch (error) {
      console.log('Error saving language:', error);
    }
  }, []);

  const t = useCallback((key) => {
    const langTranslations = translations[language] || translations['en'];
    return langTranslations[key] || translations['en'][key] || key;
  }, [language]);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <Stack.Navigator 
        initialRouteName="LanguageSelection"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LanguageSelection">
          {(props) => <LanguageSelectionScreen {...props} changeLanguage={changeLanguage} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} t={t} />}
        </Stack.Screen>
        <Stack.Screen name="CheckBalance">
          {(props) => <CheckBalanceScreen {...props} t={t} />}
        </Stack.Screen>
        <Stack.Screen name="RecentTransactions">
          {(props) => <RecentTransactionsScreen {...props} t={t} />}
        </Stack.Screen>
        <Stack.Screen name="ScanQRCode">
          {(props) => <ScanQRCodeScreen {...props} t={t} />}
        </Stack.Screen>
        <Stack.Screen name="ChooseContact">
          {(props) => <ChooseContactScreen {...props} t={t} />}
        </Stack.Screen>
        <Stack.Screen name="EnterAmount">
          {(props) => <EnterAmountScreen {...props} t={t} />}
        </Stack.Screen>
        <Stack.Screen name="EnterUPIPin">
          {(props) => <EnterUPIPinScreen {...props} t={t} />}
        </Stack.Screen>
        <Stack.Screen name="MoneySent">
          {(props) => <MoneySentScreen {...props} t={t} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surfaceBright,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: colors.onSurfaceVariant,
  },
});

export default App;