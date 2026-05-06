import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors } from '../constants/colors';

const MoneySentScreen = ({ navigation, route, t }) => {
  const contact = route?.params?.contact || null;
  const amount = route?.params?.amount || '';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <View style={styles.topBar}><Text style={styles.accountIcon}>👤</Text><Text style={styles.topBarTitle}>{t('welcome')}</Text><Text style={styles.helpIcon}>❓</Text></View>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.successSection}>
          <View style={styles.successCircle}><Text style={styles.checkmark}>✓</Text></View>
          <Text style={styles.successTitle}>{t('moneySentSuccessfully')}</Text>
          <Text style={styles.successSubtitle}>{t('practiceTransaction')}</Text>
        </View>
        <View style={styles.summaryCard}>
          <View style={styles.recipientRow}><View style={styles.recipientAvatar}><Text style={styles.recipientAvatarText}>👨‍💼</Text></View><View><Text style={styles.recipientLabel}>{t('sentTo')}</Text><Text style={styles.recipientName}>{contact?.name || 'Rahul Sharma'}</Text></View></View>
          <View style={styles.amountRow}><Text style={styles.amountLabel}>{t('amountLabel')}</Text><Text style={styles.amountValue}>₹{amount || '5,000'}.00</Text></View>
        </View>
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
  accountIcon: { fontSize: 28 },
  topBarTitle: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  helpIcon: { fontSize: 28 },
  contentContainer: { paddingHorizontal: 24, paddingVertical: 20, paddingBottom: 40 },
  successSection: { alignItems: 'center', paddingVertical: 32, gap: 16 },
  successCircle: { backgroundColor: colors.successLight, padding: 24, borderRadius: 48 },
  checkmark: { fontSize: 64, color: colors.success },
  successTitle: { fontSize: 32, fontWeight: '700', color: colors.onSurface, textAlign: 'center' },
  successSubtitle: { fontSize: 20, color: colors.onSurfaceVariant, fontStyle: 'italic' },
  summaryCard: { backgroundColor: colors.surfaceContainerLow, padding: 24, borderRadius: 16, marginVertical: 20, borderWidth: 1, borderColor: colors.outlineVariant },
  recipientRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  recipientAvatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.secondaryFixed, justifyContent: 'center', alignItems: 'center', marginRight: 16, overflow: 'hidden' },
  recipientAvatarText: { fontSize: 32 },
  recipientLabel: { fontSize: 18, fontWeight: '600', color: colors.onSurfaceVariant },
  recipientName: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  amountRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: colors.outlineVariant, paddingTop: 16 },
  amountLabel: { fontSize: 18, color: colors.onSurfaceVariant },
  amountValue: { fontSize: 24, fontWeight: '600', color: colors.primary },
  homeButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, height: 64, borderRadius: 16, gap: 12 },
  homeIcon: { fontSize: 24 },
  homeButtonText: { fontSize: 18, fontWeight: '600', color: colors.onPrimary },
  footer: { marginTop: 32, backgroundColor: colors.errorContainer, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 16, alignItems: 'center' },
  footerContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  footerIcon: { fontSize: 20, marginRight: 8 },
  footerTitle: { fontSize: 18, fontWeight: '600', color: colors.error },
  footerLinks: { flexDirection: 'row', alignItems: 'center' },
  footerLink: { fontSize: 16, color: colors.onErrorContainer, opacity: 0.8 },
  footerDivider: { marginHorizontal: 16, opacity: 0.3 },
});

export default MoneySentScreen;
