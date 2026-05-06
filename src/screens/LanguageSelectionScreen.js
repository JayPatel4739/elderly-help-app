import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { colors } from '../constants/colors';
import { translations } from '../constants/translations';

const en = (key) => translations['en'][key] || key;

const LanguageSelectionScreen = ({ navigation, changeLanguage }) => {
  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.progressStepper}>
          <View style={styles.stepActive}><Text style={styles.stepText}>1</Text></View>
          <View style={styles.stepLine}><View style={styles.stepLineActive} /><View style={styles.stepLineInactive} /></View>
          <View style={styles.stepInactive}><Text style={styles.stepTextInactive}>2</Text></View>
        </View>

        <View style={styles.imageContainer}><Image source={require('../../assets/images/group-people.jpg')} style={styles.image} resizeMode="cover" /></View>

        <Text style={styles.title}>{en('chooseLanguage')}</Text>
        <Text style={styles.subtitle}>{en('touchToChoose')}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.languageButton} onPress={() => handleLanguageSelect('en')} activeOpacity={0.8}>
            <Text style={styles.languageIcon}>🌐</Text>
            <Text style={styles.languageText}>{en('english')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageButton} onPress={() => handleLanguageSelect('hi')} activeOpacity={0.8}>
            <Text style={styles.languageIcon}>🌐</Text>
            <Text style={styles.languageText}>{en('hindi')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageButton} onPress={() => handleLanguageSelect('kn')} activeOpacity={0.8}>
            <Text style={styles.languageIcon}>🌐</Text>
            <Text style={styles.languageText}>{en('kannada')}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.helpText}>{en('changeLater')}</Text>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.footerIcon}>🛡️</Text>
            <Text style={styles.footerTitle}>{en('noRealMoneyAtRisk')}</Text>
          </View>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>{en('safetyFirstLabel')}</Text>
            <Text style={styles.footerDivider}>•</Text>
            <Text style={styles.footerLink}>{en('practiceMode')}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surfaceBright },
  scrollContent: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  progressStepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 40 },
  stepActive: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' },
  stepText: { color: colors.onPrimary, fontSize: 20, fontWeight: '700' },
  stepLine: { flexDirection: 'row', width: 48, height: 4, marginHorizontal: 8 },
  stepLineActive: { flex: 1, backgroundColor: colors.primary },
  stepLineInactive: { flex: 1, backgroundColor: colors.outlineVariant },
  stepInactive: { width: 48, height: 48, borderRadius: 24, borderWidth: 2, borderColor: colors.outlineVariant, justifyContent: 'center', alignItems: 'center' },
  stepTextInactive: { color: colors.outline, fontSize: 20, fontWeight: '700' },
  imageContainer: { width: '100%', height: 180, borderRadius: 20, overflow: 'hidden', marginBottom: 32 },
  image: { width: '100%', height: '100%' },
  title: { fontSize: 32, fontWeight: '700', color: colors.onSurface, textAlign: 'center', marginBottom: 16 },
  subtitle: { fontSize: 20, color: colors.onSurfaceVariant, textAlign: 'center', marginBottom: 40 },
  buttonContainer: { gap: 20 },
  languageButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.secondaryContainer, paddingHorizontal: 32, height: 88, borderRadius: 20 },
  languageIcon: { fontSize: 32 },
  languageText: { flex: 1, fontSize: 24, fontWeight: '600', color: colors.onSecondaryContainer, marginLeft: 16 },
  helpText: { marginTop: 48, fontSize: 18, color: colors.onSurfaceVariant, textAlign: 'center', opacity: 0.7 },
  footer: { marginTop: 48, backgroundColor: colors.errorContainer, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 16, alignItems: 'center' },
  footerContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  footerIcon: { fontSize: 20, marginRight: 8 },
  footerTitle: { fontSize: 18, fontWeight: '600', color: colors.error },
  footerLinks: { flexDirection: 'row', alignItems: 'center' },
  footerLink: { fontSize: 16, color: colors.onErrorContainer, opacity: 0.8 },
  footerDivider: { marginHorizontal: 16, opacity: 0.3 },
});

export default LanguageSelectionScreen;
