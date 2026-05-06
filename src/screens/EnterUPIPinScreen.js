import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors } from '../constants/colors';

const EnterUPIPinScreen = ({ navigation, route, t }) => {
  const contact = route?.params?.contact || null;
  const amount = route?.params?.amount || '';
  const [pin, setPin] = useState([]);
  const handleNumberPress = (num) => {
    if (pin.length < 4) {
      const newPin = [...pin, num];
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => navigation.navigate('MoneySent', { contact, amount }), 500);
      }
    }
  };
  const handleDelete = () => { setPin(pin.slice(0, -1)); };
  const handleClear = () => { setPin([]); };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <View style={styles.topBar}><TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Text style={styles.backIcon}>↩️</Text></TouchableOpacity><Text style={styles.topBarTitle}>{t('welcome')}</Text><Text style={styles.helpIcon}>❓</Text></View>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.progressStepper}><View style={styles.stepCircleActive}><Text style={styles.stepNumber}>1</Text></View><View style={styles.stepLineActive} /><View style={styles.stepCircleActive}><Text style={styles.stepNumber}>2</Text></View><View style={styles.stepLineActive} /><View style={styles.stepCircleActive}><Text style={styles.stepNumber}>3</Text></View></View>
        <View style={styles.instructions}><Text style={styles.title}>{t('enterUPI')}</Text><Text style={styles.subtitle}>{t('transactionFor')} ₹{amount || '1,250'}.00</Text></View>
        <View style={styles.pinContainer}>{[0,1,2,3].map((index) => <View key={index} style={[styles.pinDot, pin.length > index && styles.pinDotFilled]} />)}</View>
        <View style={styles.safetyCard}><Text style={styles.safetyIcon}>🛡️</Text><View><Text style={styles.safetyTitle}>{t('safetyFirst')}</Text><Text style={styles.safetyText}>{t('neverSharePIN')}</Text></View></View>
        <View style={styles.keypad}>
          {[['1','2','3'],['4','5','6'],['7','8','9'],['✕','0','⌫']].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.keypadRow}>
              {row.map((key) => <TouchableOpacity key={key} style={styles.key} onPress={key === '⌫' ? handleDelete : key === '✕' ? handleClear : () => handleNumberPress(key)}><Text style={styles.keyText}>{key}</Text></TouchableOpacity>)}
            </View>
          ))}
        </View>
        <TouchableOpacity style={[styles.payButton, pin.length < 4 && styles.payButtonDisabled]} onPress={() => navigation.navigate('MoneySent', { contact, amount })} disabled={pin.length < 4} activeOpacity={0.8}><Text style={styles.payIcon}>🔒</Text><Text style={styles.payButtonText}>{t('payNow')}</Text></TouchableOpacity>
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
  contentContainer: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 40, alignItems: 'center' },
  progressStepper: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  stepCircleActive: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primaryContainer, justifyContent: 'center', alignItems: 'center' },
  stepNumber: { fontSize: 18, fontWeight: '600', color: colors.onPrimaryContainer },
  stepLineActive: { width: 32, height: 4, backgroundColor: colors.primaryContainer, marginHorizontal: 4 },
  instructions: { alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '600', color: colors.onSurface, marginBottom: 8 },
  subtitle: { fontSize: 18, color: colors.onSurfaceVariant },
  pinContainer: { flexDirection: 'row', justifyContent: 'center', gap: 24, marginBottom: 32 },
  pinDot: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: colors.outline, backgroundColor: colors.surfaceContainerHighest },
  pinDotFilled: { backgroundColor: colors.tertiary, borderColor: colors.tertiaryFixed },
  safetyCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.tertiaryContainer, padding: 24, borderRadius: 16, marginBottom: 20, borderLeftWidth: 8, borderLeftColor: colors.tertiary, gap: 16, width: '100%' },
  safetyIcon: { fontSize: 36 },
  safetyTitle: { fontSize: 18, fontWeight: '600', color: colors.onTertiaryFixed },
  safetyText: { fontSize: 18, color: colors.onTertiaryFixedVariant },
  keypad: { width: '100%', marginBottom: 16 },
  keypadRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  key: { width: 80, height: 64, borderRadius: 16, backgroundColor: colors.surfaceContainer, justifyContent: 'center', alignItems: 'center' },
  keyText: { fontSize: 28, fontWeight: '600', color: colors.onSurface },
  payButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, width: '100%', height: 64, borderRadius: 16, gap: 12 },
  payButtonDisabled: { opacity: 0.5 },
  payIcon: { fontSize: 24 },
  payButtonText: { fontSize: 18, fontWeight: '600', color: colors.onPrimary },
  footer: { marginTop: 32, backgroundColor: colors.errorContainer, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 16, alignItems: 'center', width: '100%' },
  footerContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  footerIcon: { fontSize: 20, marginRight: 8 },
  footerTitle: { fontSize: 18, fontWeight: '600', color: colors.error },
  footerLinks: { flexDirection: 'row', alignItems: 'center' },
  footerLink: { fontSize: 16, color: colors.onErrorContainer, opacity: 0.8 },
  footerDivider: { marginHorizontal: 16, opacity: 0.3 },
});

export default EnterUPIPinScreen;
