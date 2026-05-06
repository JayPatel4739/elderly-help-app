import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors } from '../constants/colors';

const ChooseContactScreen = ({ navigation, t }) => {
  const contacts = [
    { id: 1, name: 'Rahul Sharma', relation: t('brother'), avatar: '👨‍💼' },
    { id: 2, name: 'Anita Gupta', relation: t('daughter'), avatar: '👩‍💼' },
    { id: 3, name: 'Vikram Kapoor', relation: t('grandson'), avatar: '👨‍🎓' },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surfaceBright} />
      <View style={styles.topBar}><TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backBtn}><Text style={styles.accountIcon}>👤</Text></TouchableOpacity><Text style={styles.topBarTitle}>{t('welcome')}</Text><Text style={styles.helpIcon}>❓</Text></View>
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.progressStepper}><View style={styles.stepContainer}><View style={styles.stepCircleActive}><Text style={styles.stepNumber}>1</Text></View><Text style={styles.stepLabel}>{t('stepOf')}</Text></View><View style={styles.progressLine}><View style={styles.progressLineActive} /></View></View>
        <View style={styles.instructions}><Text style={styles.title}>{t('whoToSend')}</Text><Text style={styles.subtitle}>{t('touchToChoose')}</Text></View>
        <View style={styles.contactList}>
          {contacts.map((contact) => (
            <TouchableOpacity key={contact.id} style={styles.contactCard} onPress={() => navigation.navigate('EnterAmount', { contact })} activeOpacity={0.8}>
              <View style={styles.avatarContainer}><Text style={styles.avatar}>{contact.avatar}</Text></View>
              <View style={styles.contactInfo}><Text style={styles.contactName}>{contact.name}</Text><Text style={styles.contactRelation}>{contact.relation}</Text></View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.contactCard} activeOpacity={0.8}><View style={[styles.avatarContainer, { backgroundColor: colors.secondaryContainer }]}><Text style={styles.addIcon}>➕</Text></View><View style={styles.contactInfo}><Text style={styles.contactName}>{t('addNewPerson')}</Text><Text style={styles.contactRelation}>{t('someoneNew')}</Text></View><Text style={styles.chevron}>+</Text></TouchableOpacity>
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
  backBtn: { padding: 8 },
  accountIcon: { fontSize: 28 },
  topBarTitle: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  helpIcon: { fontSize: 28 },
  content: { flex: 1 },
  contentContainer: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40 },
  progressStepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  stepContainer: { alignItems: 'center' },
  stepCircleActive: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' },
  stepNumber: { fontSize: 18, fontWeight: '600', color: colors.onPrimary },
  stepLabel: { marginTop: 4, fontSize: 18, fontWeight: '600', color: colors.onSurfaceVariant },
  progressLine: { flex: 1, height: 4, backgroundColor: colors.surfaceContainerHighest, marginHorizontal: 16, borderRadius: 2, marginTop: -20 },
  progressLineActive: { width: '33%', height: '100%', backgroundColor: colors.primary, borderRadius: 2 },
  instructions: { alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 32, fontWeight: '700', color: colors.onSurface, marginBottom: 8 },
  subtitle: { fontSize: 20, color: colors.onSurfaceVariant },
  contactList: { gap: 20 },
  contactCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surfaceContainerLow, padding: 24, borderRadius: 20 },
  avatarContainer: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.secondaryFixed, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  avatar: { fontSize: 32 },
  addIcon: { fontSize: 28, color: colors.onSecondaryContainer },
  contactInfo: { flex: 1 },
  contactName: { fontSize: 24, fontWeight: '600', color: colors.onSurface },
  contactRelation: { fontSize: 18, color: colors.onSurfaceVariant },
  chevron: { fontSize: 28, color: colors.outline },
  homeButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, height: 64, borderRadius: 16, gap: 12, marginTop: 32 },
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

export default ChooseContactScreen;
