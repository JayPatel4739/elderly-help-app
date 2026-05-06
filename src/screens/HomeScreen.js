import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Image } from 'react-native';
import { colors } from '../constants/colors';

const HomeScreen = ({ navigation, t }) => {
  const MenuCard = ({ title, subtitle, icon, onPress, bgColor }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: bgColor }]} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.cardContent}>
        <View>
          <Text style={[styles.cardTitle, { color: colors.onPrimaryContainer }]}>{title}</Text>
          <Text style={[styles.cardSubtitle, { color: colors.onPrimaryContainer }]}>{subtitle}</Text>
        </View>
        <View style={[styles.iconCircle, { backgroundColor: 'rgba(255,255,255,0.5)' }]}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}><Text style={styles.accountIcon}>👤</Text><Text style={styles.topBarTitle}>{t('welcome')}</Text></View>
        <Text style={styles.helpIcon}>❓</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.welcomeText}>{t('welcomeUser')} - {t('safePracticeMode')}</Text>
          <View style={styles.instructionBox}><Text style={styles.instructionText}>{t('touchToBegin')}</Text></View>
        </View>

        <View style={styles.cardsContainer}>
          <MenuCard title={t('myBalance')} subtitle={t('checkMyMoney')} icon="💰" bgColor={colors.primaryContainer} onPress={() => navigation.navigate('CheckBalance')} />
          <MenuCard title={t('transactions')} subtitle={t('recentSpending')} icon="📋" bgColor={colors.secondaryFixed} onPress={() => navigation.navigate('RecentTransactions')} />
          <MenuCard title={t('upiPayments')} subtitle={t('practicePayBills')} icon="📱" bgColor={colors.tertiaryFixed} onPress={() => navigation.navigate('ScanQRCode')} />
          <MenuCard title={t('sendToFamily')} subtitle={t('sendMoneyToFamily')} icon="👨‍👩‍👧" bgColor={colors.secondaryContainer} onPress={() => navigation.navigate('ChooseContact')} />
        </View>

        <View style={styles.featuredImage}>
          <Image source={require('../../assets/images/laptop-safety.jpg')} style={styles.featuredImg} resizeMode="cover" />
          <View style={styles.imageOverlay}><Text style={styles.overlayText}>{t('safetyPriority')}</Text></View>
        </View>

        <TouchableOpacity style={styles.langButton} onPress={() => navigation.navigate('LanguageSelection')} activeOpacity={0.8}>
          <Text style={styles.langIcon}>🌐</Text>
          <Text style={styles.langButtonText}>{t('chooseLanguage')}</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.footerIcon}>🛡️</Text>
            <Text style={styles.footerTitle}>{t('noRealMoneyAtRisk')}</Text>
          </View>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>{t('safetyFirstLabel')}</Text>
            <Text style={styles.footerDivider}>•</Text>
            <Text style={styles.footerLink}>{t('practiceMode')}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surfaceBright },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, backgroundColor: colors.surfaceBright, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  topBarLeft: { flexDirection: 'row', alignItems: 'center' },
  accountIcon: { fontSize: 32, marginRight: 12 },
  topBarTitle: { fontSize: 24, fontWeight: '600', color: colors.primary },
  helpIcon: { fontSize: 28 },
  content: { flex: 1 },
  contentContainer: { paddingHorizontal: 24, paddingBottom: 40 },
  heroSection: { marginTop: 16, marginBottom: 20 },
  welcomeText: { fontSize: 32, fontWeight: '700', color: colors.onSurface, marginBottom: 8 },
  instructionBox: { backgroundColor: `${colors.secondaryContainer}66`, padding: 16, borderLeftWidth: 4, borderLeftColor: colors.secondary, borderRadius: 8 },
  instructionText: { fontSize: 20, color: colors.onSurfaceVariant },
  cardsContainer: { gap: 20 },
  card: { borderRadius: 20, padding: 24, minHeight: 120 },
  cardContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 24, fontWeight: '600', marginBottom: 4 },
  cardSubtitle: { fontSize: 18, opacity: 0.9 },
  iconCircle: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  iconText: { fontSize: 32 },
  featuredImage: { marginTop: 20, height: 180, borderRadius: 20, overflow: 'hidden' },
  featuredImg: { width: '100%', height: '100%' },
  imageOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: 'rgba(0,0,0,0.4)' },
  overlayText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  langButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surfaceContainerHigh, height: 56, borderRadius: 16, gap: 12, marginTop: 20 },
  langIcon: { fontSize: 24 },
  langButtonText: { fontSize: 18, fontWeight: '600', color: colors.onSurfaceVariant },
  footer: { marginTop: 32, backgroundColor: colors.errorContainer, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 16, alignItems: 'center' },
  footerContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  footerIcon: { fontSize: 20, marginRight: 8 },
  footerTitle: { fontSize: 18, fontWeight: '600', color: colors.error },
  footerLinks: { flexDirection: 'row', alignItems: 'center' },
  footerLink: { fontSize: 16, color: colors.onErrorContainer, opacity: 0.8 },
  footerDivider: { marginHorizontal: 16, opacity: 0.3 },
});

export default HomeScreen;
