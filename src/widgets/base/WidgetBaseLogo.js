import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const WidgetBaseLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/corebird-icon.png",
        }}
      />
      <Text variant="titleMedium">Mobile SISFO Purchasing</Text>
      <Text variant="bodySmall">By Arianto {new Date().getFullYear()}</Text>
    </View>
  );
};

export default WidgetBaseLogo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    resizeMode: "center",
    width: 160,
    height: 160,
    alignSelf: "center",
  },
});