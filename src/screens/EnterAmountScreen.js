import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, StatusBar } from 'react-native';
import { colors } from '../constants/colors';

const EnterAmountScreen = ({ navigation, route, t }) => {
  const contact = route?.params?.contact || null;
  const [amount, setAmount] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <View style={styles.topBar}><TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Text style={styles.backIcon}>↩️</Text></TouchableOpacity><Text style={styles.topBarTitle}>{t('welcome')}</Text><Text style={styles.helpIcon}>❓</Text></View>
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.progressStepper}><View style={styles.stepCircleActive}><Text style={styles.stepNumber}>1</Text></View><View style={styles.stepLineActive} /><View style={styles.stepCircleActive}><Text style={styles.stepNumber}>2</Text></View><View style={styles.stepLineInactive} /><View style={styles.stepCircleInactive}><Text style={styles.stepNumberInactive}>3</Text></View></View>
        <View style={styles.instructions}><Text style={styles.title}>{t('howMuchToSend')}</Text><Text style={styles.subtitle}>{t('stepEnterAmount')}</Text></View>
        <View style={styles.recipientCard}><View style={styles.recipientAvatar}><Text style={styles.recipientAvatarText}>👤</Text></View><View><Text style={styles.recipientLabel}>{t('sendingTo')}</Text><Text style={styles.recipientName}>{contact?.name || 'Rohan Sharma'}</Text></View></View>
        <View style={styles.amountInputContainer}><Text style={styles.inputLabel}>{t('enterAmount')}</Text><View style={styles.amountInputWrapper}><Text style={styles.currencySymbol}>₹</Text><TextInput style={styles.amountInput} value={amount} onChangeText={setAmount} keyboardType="numeric" placeholder="0" placeholderTextColor={colors.outlineVariant} /></View><Text style={styles.limitText}>{t('maxPracticeLimit')}</Text></View>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('EnterUPIPin', { contact, amount })} activeOpacity={0.8}><Text style={styles.nextButtonText}>{t('next')}</Text><Text style={styles.nextIcon}>→</Text></TouchableOpacity>
        <View style={styles.safetyCard}><Text style={styles.safetyIcon}>🛡️</Text><Text style={styles.safetyText}>{t('onlyPractice')}</Text></View>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')} activeOpacity={0.8}><Text style={styles.homeIcon}>🏠</Text><Text style={styles.homeButtonText}>{t('backToHome')}</Text></TouchableOpacity>
        <View style={styles.footer}>
          <View style={styles.footerContent}><Text style={styles.footerIcon}>🛡️</Text><Text style={styles.footerTitle}>{t('noRealMoneyAtRisk')}</Text></View>
          <View style={styles.footerLinks}><Text style={styles.footerLink}>{t('safetyFirstLabel')}</Text><Text style={styles.footerDivider}>•</Text><Text style={styles.footerLink}>{t('practiceMode')}</Text></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surfaceBright },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, backgroundColor: colors.surfaceBright, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  backBtn: { padding: 8 },
  backIcon: { fontSize: 24 },
  topBarTitle: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  helpIcon: { fontSize: 28 },
  content: { flex: 1 },
  contentContainer: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40 },
  progressStepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  stepCircleActive: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' },
  stepCircleInactive: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.outlineVariant, justifyContent: 'center', alignItems: 'center' },
  stepNumber: { fontSize: 18, fontWeight: '700', color: colors.onPrimary },
  stepNumberInactive: { fontSize: 18, fontWeight: '700', color: colors.onSurfaceVariant },
  stepLineActive: { width: 48, height: 4, backgroundColor: colors.primary, marginHorizontal: 4 },
  stepLineInactive: { width: 48, height: 4, backgroundColor: colors.outlineVariant, marginHorizontal: 4 },
  instructions: { alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '700', color: colors.onSurface, marginBottom: 8 },
  subtitle: { fontSize: 18, color: colors.onSurfaceVariant },
  recipientCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.tertiaryContainer, padding: 24, borderRadius: 16, marginBottom: 20, gap: 16 },
  recipientAvatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.tertiary, justifyContent: 'center', alignItems: 'center' },
  recipientAvatarText: { fontSize: 28 },
  recipientLabel: { fontSize: 18, fontWeight: '600', color: colors.onTertiaryFixedVariant },
  recipientName: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  amountInputContainer: { backgroundColor: colors.surfaceContainerLowest, borderWidth: 2, borderColor: colors.primaryContainer, padding: 32, borderRadius: 20, marginBottom: 20 },
  inputLabel: { fontSize: 18, fontWeight: '600', color: colors.primary, marginBottom: 16 },
  amountInputWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 4, borderBottomColor: colors.primary, paddingBottom: 16 },
  currencySymbol: { fontSize: 48, fontWeight: '700', color: colors.onSurface },
  amountInput: { fontSize: 56, fontWeight: '700', color: colors.onSurface, textAlign: 'center', minWidth: 150 },
  limitText: { textAlign: 'center', marginTop: 16, fontSize: 16, color: colors.onSurfaceVariant },
  nextButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, height: 56, borderRadius: 16, gap: 8 },
  nextButtonText: { fontSize: 24, fontWeight: '600', color: colors.onPrimary },
  nextIcon: { fontSize: 24, color: colors.onPrimary },
  safetyCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: `${colors.primaryContainer}50`, padding: 24, borderRadius: 16, marginTop: 20, borderWidth: 2, borderColor: colors.primaryContainer, gap: 12 },
  safetyIcon: { fontSize: 36 },
  safetyText: { flex: 1, fontSize: 18, fontWeight: '600', color: colors.onPrimaryContainer, textAlign: 'center' },
  homeButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surfaceContainerHigh, height: 56, borderRadius: 16, gap: 12, marginTop: 16 },
  homeIcon: { fontSize: 24 },
  homeButtonText: { fontSize: 18, fontWeight: '600', color: colors.onSurfaceVariant },
  footer: { marginTop: 32, backgroundColor: colors.errorContainer, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 16, alignItems: 'center' },
  footerContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  footerIcon: { fontSize: 20, marginRight: 8 },
  footerTitle: { fontSize: 18, fontWeight: '600', color: colors.error },
  footerLinks: { flexDirection: 'row', alignItems: 'center' },
  footerLink: { fontSize: 16, color: colors.onErrorContainer, opacity: 0.8 },
  footerDivider: { marginHorizontal: 16, opacity: 0.3 },
});

export default EnterAmountScreen;
