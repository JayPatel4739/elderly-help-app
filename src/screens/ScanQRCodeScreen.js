import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Image } from 'react-native';
import { colors } from '../constants/colors';

const ScanQRCodeScreen = ({ navigation, t }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
    <View style={styles.topBar}><View style={styles.topBarLeft}><Text style={styles.accountIcon}>👤</Text><Text style={styles.topBarTitle}>{t('welcome')}</Text></View><Text style={styles.helpIcon}>❓</Text></View>
    <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.progressStepper}>
        <View style={styles.stepItem}><View style={styles.stepCircleActive}><Text style={styles.stepNumber}>1</Text></View><Text style={styles.stepLabelActive}>{t('scanStep')}</Text></View>
        <View style={styles.stepLine} />
        <View style={styles.stepItem}><View style={styles.stepCircleInactive}><Text style={styles.stepNumberInactive}>2</Text></View><Text style={styles.stepLabel}>{t('amountStep')}</Text></View>
        <View style={styles.stepLine} />
        <View style={styles.stepItem}><View style={styles.stepCircleInactive}><Text style={styles.stepNumberInactive}>3</Text></View><Text style={styles.stepLabel}>{t('pinStep')}</Text></View>
      </View>
      <View style={styles.instructions}><Text style={styles.title}>{t('scanQRCode')}</Text><Text style={styles.subtitle}>{t('pointYourPhone')}</Text></View>
      <View style={styles.qrContainer}><Image source={require('../../assets/images/qr-code.png')} style={styles.qrImg} resizeMode="contain" /></View>
      <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('EnterAmount', { contact: { name: 'Shop Owner', id: 0 } })} activeOpacity={0.8}><Text style={styles.scanIcon}>📷</Text><Text style={styles.scanButtonText}>{t('scanDone')}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')} activeOpacity={0.8}><Text style={styles.homeIcon}>🏠</Text><Text style={styles.homeButtonText}>{t('backToHome')}</Text></TouchableOpacity>
      <View style={styles.footer}>
        <View style={styles.footerContent}><Text style={styles.footerIcon}>🛡️</Text><Text style={styles.footerTitle}>{t('noRealMoneyAtRisk')}</Text></View>
        <View style={styles.footerLinks}><Text style={styles.footerLink}>{t('safetyFirstLabel')}</Text><Text style={styles.footerDivider}>•</Text><Text style={styles.footerLink}>{t('practiceMode')}</Text></View>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surfaceBright },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, backgroundColor: colors.surfaceBright, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  topBarLeft: { flexDirection: 'row', alignItems: 'center' },
  accountIcon: { fontSize: 28, marginRight: 12 },
  topBarTitle: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  helpIcon: { fontSize: 28 },
  contentContainer: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40, alignItems: 'center' },
  progressStepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 32 },
  stepItem: { alignItems: 'center' },
  stepCircleActive: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.tertiary, justifyContent: 'center', alignItems: 'center' },
  stepCircleInactive: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.surfaceContainerHighest, justifyContent: 'center', alignItems: 'center' },
  stepNumber: { fontSize: 20, fontWeight: '700', color: colors.onTertiary },
  stepNumberInactive: { fontSize: 20, fontWeight: '700', color: colors.onSurfaceVariant },
  stepLabelActive: { marginTop: 8, fontSize: 18, fontWeight: '600', color: colors.tertiary },
  stepLabel: { marginTop: 8, fontSize: 18, fontWeight: '600', color: colors.onSurfaceVariant },
  stepLine: { width: 40, height: 2, backgroundColor: colors.outlineVariant, marginHorizontal: 8, marginTop: -20 },
  instructions: { alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 32, fontWeight: '700', color: colors.onSurface, marginBottom: 8 },
  subtitle: { fontSize: 20, color: colors.onSurfaceVariant },
  qrContainer: { width: 280, height: 280, backgroundColor: colors.tertiaryContainer, borderRadius: 20, overflow: 'hidden', marginBottom: 40 },
  qrImg: { width: '100%', height: '100%' },
  scanButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.tertiary, width: '100%', height: 64, borderRadius: 16, gap: 12 },
  scanIcon: { fontSize: 24 },
  scanButtonText: { fontSize: 24, fontWeight: '600', color: colors.onTertiary },
  homeButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, width: '100%', height: 64, borderRadius: 16, gap: 12, marginTop: 16 },
  homeIcon: { fontSize: 24 },
  homeButtonText: { fontSize: 18, fontWeight: '600', color: colors.onPrimary },
  footer: { marginTop: 32, backgroundColor: colors.errorContainer, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 16, alignItems: 'center', width: '100%' },
  footerContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  footerIcon: { fontSize: 20, marginRight: 8 },
  footerTitle: { fontSize: 18, fontWeight: '600', color: colors.error },
  footerLinks: { flexDirection: 'row', alignItems: 'center' },
  footerLink: { fontSize: 16, color: colors.onErrorContainer, opacity: 0.8 },
  footerDivider: { marginHorizontal: 16, opacity: 0.3 },
});

export default ScanQRCodeScreen;
