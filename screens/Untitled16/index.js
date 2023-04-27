import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled16 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><Text style={styles.ifzJyBlN}>{"notification"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ifzJyBlN: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled16;