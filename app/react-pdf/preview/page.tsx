
'use client'
import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({ family: 'vazir', src: '/fonts/Vazir-Bold-UI.ttf', fontWeight: 700, })

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 14, fontFamily: 'vazir', textAlign: 'center', border: '2px solid #ccc' },
  section: { marginBottom: 10, borderBottom: '1px solid #ccc', paddingBottom: 10 },
});

function PdfPreview() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>این یک فایل PDF است</Text>
        </View>
        <View style={styles.section}>
          <Text>این یک فایل PDF ساده است با react-pdf</Text>
        </View>
        <View>
          <Text>با استفاده از این کتابخانه می‌توانید فایل‌های PDF را در برنامه‌های React خود ایجاد کنید.</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PdfPreview