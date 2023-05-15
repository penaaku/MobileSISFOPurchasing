import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenBarangList from "../screens/barang/ScreenBarangList";
import ScreenBarangCreate from "../screens/barang/ScreenBarangCreate";

const Stack = createNativeStackNavigator();

export const RouterBarangAuthenticated = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScreenBarangList" component={ScreenBarangList} />
      <Stack.Screen name="ScreenBarangCreate" component={ScreenBarangCreate} />
    </Stack.Navigator>
  );
};


