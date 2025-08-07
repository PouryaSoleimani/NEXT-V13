
'use client'
import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { Texts } from '../data/db'; // FAKE DB
Font.register({ family: 'vazir', src: '/fonts/Vazir-Bold-UI.ttf', fontWeight: 700, })

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 14,
    fontFamily: 'vazir',
    textAlign: 'center',
    border: '2px solid #ccc'
  },
  section: {
    marginBottom: 10,
    borderBottom: '1px solid #ccc',
    paddingBottom: 10
  },
});

// COMPONENT =======================================================================================================================
function PdfPreview() {
  return (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.section}>
          <Text>{Texts.firstText}</Text>
        </View>
        <View style={styles.section}>
          <Text>{Texts.secondText}</Text>
        </View>
        <View>
          <Text>{Texts.thirdText}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PdfPreview