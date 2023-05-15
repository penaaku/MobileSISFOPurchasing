import {
    DrawerContentScrollView,
    DrawerItemList,
  } from "@react-navigation/drawer";
  import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
  import { Divider, MD2Colors } from "react-native-paper";
  
  const WidgetBaseSidebar = (props) => {
    const imageLogo =
      "https://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/128/Users-icon.png";
  
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Image style={styles.imageLogo} source={{ uri: imageLogo }} />
        <Text style={styles.title}>Mobile SISFO Purchasing</Text>
  
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <Divider />
        <Text style={styles.copyright}>Arianto © {new Date().getFullYear()}</Text>
      </SafeAreaView>
    );
  };
  
  export default WidgetBaseSidebar;
  
  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      marginTop: 0,
    },
  
    imageLogo: {
      resizeMode: "center",
      width: "100%",
      height: "10%",
      alignSelf: "center",
      backgroundColor: MD2Colors.blueGrey700,
    },
    title: {
      textAlign: "center",
      paddingVertical: 16,
      fontSize: 16,
      backgroundColor: MD2Colors.blueGrey700,
      color:"white"
    },
    copyright: {
      fontSize: 12,
      textAlign: "center",
      color: "gray",
      paddingVertical: 16,
    },
  });