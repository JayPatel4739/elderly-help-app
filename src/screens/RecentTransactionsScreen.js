import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors } from '../constants/colors';

const RecentTransactionsScreen = ({ navigation, t }) => {
  const transactions = [
    { id: 1, title: t('grocery'), time: t('todayAt'), amount: '₹500', icon: '🛒' },
    { id: 2, title: t('recharge'), time: t('yesterday'), amount: '₹200', icon: '⚡' },
    { id: 3, title: t('electricity'), time: t('daysAgo'), amount: '₹1,200', icon: '💡' },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <View style={styles.topBar}><View style={styles.topBarLeft}><Text style={styles.accountIcon}>👤</Text><Text style={styles.topBarTitle}>{t('recentSpendings')}</Text></View><Text style={styles.helpIcon}>❓</Text></View>
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.transactionList}>
          {transactions.map((item) => (
            <TouchableOpacity key={item.id} style={styles.transactionCard} activeOpacity={0.8}>
              <View style={styles.transactionLeft}><View style={styles.iconContainer}><Text style={styles.transactionIcon}>{item.icon}</Text></View><View><Text style={styles.transactionTitle}>{item.title}</Text><Text style={styles.transactionTime}>{item.time}</Text></View></View>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.infoBanner}><Text style={styles.infoIcon}>✓</Text><Text style={styles.infoText}>{t('allPaymentsSafe')}</Text></View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')} activeOpacity={0.8}><Text style={styles.backIcon}>🏠</Text><Text style={styles.backButtonText}>{t('backToHome')}</Text></TouchableOpacity>
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
  topBarLeft: { flexDirection: 'row', alignItems: 'center' },
  accountIcon: { fontSize: 28, marginRight: 12 },
  topBarTitle: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  helpIcon: { fontSize: 28 },
  content: { flex: 1 },
  contentContainer: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40 },
  transactionList: { gap: 16 },
  transactionCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFF4E5', padding: 24, borderRadius: 16 },
  transactionLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconContainer: { backgroundColor: colors.secondaryContainer, padding: 12, borderRadius: 24 },
  transactionIcon: { fontSize: 24 },
  transactionTitle: { fontSize: 18, fontWeight: '600', color: colors.onSurface },
  transactionTime: { fontSize: 18, color: colors.onSurfaceVariant },
  transactionAmount: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  infoBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surfaceContainerLow, padding: 24, borderRadius: 16, marginTop: 20, gap: 16 },
  infoIcon: { fontSize: 24, color: colors.primary },
  infoText: { flex: 1, fontSize: 18, color: colors.onSurfaceVariant },
  backButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, height: 64, borderRadius: 16, marginTop: 32, gap: 8 },
  backIcon: { fontSize: 24 },
  backButtonText: { fontSize: 18, fontWeight: '600', color: colors.onPrimary },
  footer: { marginTop: 32, backgroundColor: colors.errorContainer, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 16, alignItems: 'center' },
  footerContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  footerIcon: { fontSize: 20, marginRight: 8 },
  footerTitle: { fontSize: 18, fontWeight: '600', color: colors.error },
  footerLinks: { flexDirection: 'row', alignItems: 'center' },
  footerLink: { fontSize: 16, color: colors.onErrorContainer, opacity: 0.8 },
  footerDivider: { marginHorizontal: 16, opacity: 0.3 },
});

export default RecentTransactionsScreen;
