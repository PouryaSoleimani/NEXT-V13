
'use client'
import React, { useEffect } from 'react'
import { Document, Page, Text, View, Font } from '@react-pdf/renderer';
import { Texts } from '../data/db'; // FAKE DB
import { styles } from './../styles/styles';
import axios from 'axios';
import useSWR from 'swr';

type SingleProductType = { id: number, title: string, price: number, category: string, }

Font.register({ family: 'vazir', src: '/fonts/Vazir-Bold-UI.ttf', fontWeight: 700, })
const _productsFetcher = () => axios.get('https://fakestoreapi.com/products').then(res => res.data).catch(err => console.error(err));


// COMPONENT =======================================================================================================================
function PdfPreview() {
  const { data: Products } = useSWR('https://fakestoreapi.com/products', _productsFetcher);
  const total = Products?.reduce((acc: number, product: SingleProductType) => acc + product.price, 0)
  return (
    <Document>
      <Page size="A5" style={styles.page}>

        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Text>{new Date(Date.now()).toLocaleDateString('fa-IR')}</Text>
          <Text style={styles.headerText}>فاکتور فروش </Text>
        </View>

        {/* TABLE */}
        <View style={styles.table}>

          {/* TABLE HEADER */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.header, { width: '45%' }]}>قیمت</Text>
            <Text style={[styles.cell, styles.header, { width: '10%' }]}>تعداد</Text>
            <Text style={[styles.cell, styles.header, { width: '45%' }]}>نام محصول</Text>
          </View>

          {/* TABLE ROWS --> FAKE STORE API */}
          {Products?.slice(0, 11).map((product: SingleProductType) => (
            <View key={product.id} style={styles.row}>
              <Text style={[styles.cell, { width: '45%', backgroundColor: "#05df7220" }]}>{product.price.toLocaleString('fa-IR')} تومان</Text>
              <Text style={[styles.cell, { width: '10%' }]}>{Math.floor(Math.random() * 10) + 1}</Text>
              <Text style={[styles.cell, { width: '45%' }]}>{product.title.slice(0, 20)}</Text>
            </View>
          ))}

          <View style={[styles.row, styles.totalRow]}>
            <Text style={[styles.cell, { width: '75%', fontWeight: 'bold' }]}>
              {Number(total).toLocaleString('fa-IR')} تومان
            </Text>
            <Text style={[styles.cell, styles.header, { width: '25%', fontWeight: 'bold' }]}>جمع کل</Text>
          </View>
        </View>

      </Page>
    </Document>
  )
}

export default PdfPreview