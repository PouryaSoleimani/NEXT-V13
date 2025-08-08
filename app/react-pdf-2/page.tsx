'use client';
import React from 'react';
import { Page, Text, View, Document, PDFViewer, Font, Image } from '@react-pdf/renderer';
import { _styles } from './styles';
import axios from 'axios';
import useSWR from 'swr';
import { SingleProductType } from '../swr/_hooks/useProductsFetch';
import DownloadPdf from './Download';

Font.register({ family: 'vazir', src: '/fonts/Vazir-Bold-UI.ttf', fontWeight: 700 });

type _SingleProductType = { id: number; title: string; price: number };
const _productsFetcher2 = () => axios.get('https://fakestoreapi.com/products').then((res) => res.data);

function ReactPdf2Component() {
  const { data: _Products } = useSWR('https://fakestoreapi.com/products', _productsFetcher2);
  const _total =
    _Products
      ?.map((item: any) => item.price)
      .reduce((a: number, b: number) => a + b)
      .toFixed(0) * 1000000;

  //^ RETURN =================================================================================================================================================================================
  return (
    <div className="mx-auto border-4 h-[90vh] flex flex-col items-center justify-between pt-10 border-red-500">
      <PDFViewer style={{ width: '100%', height: '80%' }}>
        <Document>
          <Page size="A5" style={_styles.page}>
            <View style={_styles.headerContainer}>
              <Image src="/ScreenShot-Tool-20250808130504.png" style={_styles.image} />
              <Text>فاکتور فروش</Text>
            </View>

            <View style={_styles.table}>
              <View style={_styles.row}>
                <Text style={[_styles.cell, _styles.header, { width: '45%' }]}>قیمت</Text>
                <Text style={[_styles.cell, _styles.header, { width: '10%' }]}>تعداد</Text>
                <Text style={[_styles.cell, _styles.header, { width: '45%' }]}>نام محصول</Text>
              </View>

              {_Products?.slice(0, 8).map((item: _SingleProductType) => (
                <View key={item.id} style={_styles.row}>
                  <Text style={[_styles.cell, { width: '45%' }]}>
                    {(item.price * 100000).toLocaleString('fa-IR')} تومان
                  </Text>
                  <Text style={[_styles.cell, { width: '10%' }]}>{Math.floor(Math.random() * 10) + 1}</Text>
                  <Text style={[_styles.cell, { width: '45%' }]}>{item.title.slice(0, 20)}</Text>
                </View>
              ))}
            </View>

            <View style={_styles.headerContainer}>
              <Text>{_total?.toLocaleString('fa-IR')} تومان</Text>
              <Text>جمع کل</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>

      {/* <DownloadPdf /> */}
    </div>
  );
}

export default ReactPdf2Component;
