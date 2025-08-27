"use client";
import React, { useEffect } from "react";
import { Document, Page, Text, View, Font, Image } from "@react-pdf/renderer";
import { Texts } from "../data/db"; // FAKE DB
import { styles } from "./../styles/styles";
import axios from "axios";
import useSWR from "swr";

type SingleProductType = { id: number; title: string; price: number; category: string };

Font.register({ family: "vazir", src: "/fonts/Vazir-Bold-UI.ttf", fontWeight: 700 });

const _productsFetcher = () =>
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((err) => console.error(err));

// COMPONENT =======================================================================================================================
function PdfPreview() {
  // SWR
  const { data: Products } = useSWR("https://fakestoreapi.com/products", _productsFetcher);

  const total = Products?.reduce(
    (acc: number, product: SingleProductType) => acc + product.price,
    0
  );

  // RETURN =======================================================================================================================
  return (
    <Document>
      <Page size="A5" style={styles.page}>
        {/* LOGO */}
        <Image src="/ScreenShot-Tool-20250808130504.png" style={styles.image} />

        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Text>{new Date(Date.now()).toLocaleDateString("fa-IR")}</Text>
          <Text>فاکتور فروش </Text>
        </View>

        <View style={styles.infos}>
          <Text>شرکت : {Texts.company}</Text>
          <Text>نام : {Texts.name}</Text>
        </View>
        <View style={[styles.infos, { marginBottom: 10 }]}>
          <Text>تلفن : {Texts.phone}</Text>
          <Text>آدرس : {Texts.address}</Text>
        </View>

        {/* TABLE */}
        <View style={styles.table}>
          {/* TABLE HEADER */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.header, { width: "45%" }]}>قیمت</Text>
            <Text style={[styles.cell, styles.header, { width: "10%" }]}>تعداد</Text>
            <Text style={[styles.cell, styles.header, { width: "45%" }]}>نام محصول</Text>
          </View>

          {/* TABLE ROWS --> FAKE STORE API */}
          {Products?.slice(0, 8).map((product: SingleProductType) => (
            <View key={product.id} style={styles.row}>
              <Text style={[styles.cell, { width: "45%" }]}>
                {(product.price * 100000).toLocaleString("fa-IR")} تومان
              </Text>
              <Text style={[styles.cell, { width: "10%" }]}>
                {Math.floor(Math.random() * 10) + 1}
              </Text>
              <Text style={[styles.cell, { width: "45%" }]}>{product.title.slice(0, 20)}</Text>
            </View>
          ))}

          {/* TOTAL PRICE ROW */}
          <View style={[styles.row, { backgroundColor: "#ddd", padding: 0, fontWeight: "bold" }]}>
            <Text style={[styles.cell, { width: "75%", fontWeight: "bold" }]}>
              {(total * 100000).toLocaleString("fa-IR")} تومان
            </Text>
            <Text
              style={[
                styles.cell,
                { width: "25%", fontWeight: "bold", backgroundColor: "#d84040", color: "white" },
              ]}
            >
              جمع کل
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PdfPreview;
