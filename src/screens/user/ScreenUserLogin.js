import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import _ from "lodash"
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const ScreenUserLogin = ({ navigation }) => {
  // TODO: tambahkan context
  // const [, setIsAuthenticated] = useContext(ContextUserAuthentication)
  const [user, setUser] = useState({}); // TODO add schema user
  const [complete, setComplete] = useState(false);

  const handleChange = (name, value) => {
    setUser((values) => ({ ...values, [name]: value }));
  };

  const useLogin = () => {
    //TODO add services
  };

  useEffect(() => {
    setComplete(false);
    const debounce = _.debounce(() => {
      setComplete(true);
    }, 500);

    debounce();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {complete && (
        <ScrollView>
          <Text style={{ marginTop: 30 }}>Form Login</Text>
        </ScrollView>
      )}

      {!complete && <Text style={{ marginTop: 30 }}>Loading...</Text>}
    </SafeAreaView>
  );
};
export default ScreenUserLogin;
