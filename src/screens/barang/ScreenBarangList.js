import _ from "lodash";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Appbar, DataTable } from "react-native-paper";
import { ServiceBarangList } from "../../services/ServiceBarang";
import WidgetBaseLoader from "../../widgets/base/WidgetBaseLoader";
import WidgetBaseFABCreate from "../../widgets/base/WidgetBaseFABCreate";

const ScreenBarangList = ({navigation}) => {
    const [query, setQuery] = useState();
  const [complete, setComplete] = useState(false);
  const [daftarBarang, setDaftarBarang] = useState([]);
  const [pagination, setPagination] = useState({});

  const barangList = (page, terms) => {
    setComplete(false);
    const debounce = _.debounce(() => {
      ServiceBarangList(page, terms)
        .then(({ results, pagination }) => {
          setDaftarBarang(results);
          setPagination(pagination);
        })
        .catch((error) => console.log(error))
        .finally(() => setComplete(true));
    }, 500);

    debounce();
  };

  useEffect(() => {
    barangList();
  }, []);

  //Tugas kelompok
  const openBarangCreate = _.debounce(() => {
    navigation.navigate("ScreenBarangCreate");
  }, 100);

  const refresh = () => {
    setQuery("");
    barangList(1, "");
  };

  const openBarangEdit = _.debounce((barang) => {
    navigation.navigate("ScreenBarangEdit", { barang });
  }, 100);


  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <Appbar.Content title="Daftar Barang" />
        <Appbar.Action icon="refresh" onPress={refresh} />
      </Appbar.Header>
      <ScrollView style={{ paddingBottom: 30 }}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Kode Barang</DataTable.Title>
            <DataTable.Title>Nama Barang</DataTable.Title>
            <DataTable.Title numeric>Harga Beli</DataTable.Title>
            <DataTable.Title numeric>Jumlah Barang</DataTable.Title>
          </DataTable.Header>
          {complete &&
            daftarBarang.map((barang, index) => (
              <DataTable.Row key={index} onPress={() => openBarangEdit(barang)}>
                <DataTable.Cell>{barang.kodeBarang}</DataTable.Cell>
                <DataTable.Cell>{barang.namaBarang}</DataTable.Cell>
                <DataTable.Cell numeric>{barang.hargaBeli}</DataTable.Cell>
                <DataTable.Cell numeric>{barang.jumlahBarang}</DataTable.Cell>
              </DataTable.Row>
            ))}
        </DataTable>
      </ScrollView>

      <WidgetBaseFABCreate action={() => openBarangCreate()} />
      <WidgetBaseLoader complete={complete} />
    </SafeAreaView>
    </>
  );
};

export default ScreenBarangList;