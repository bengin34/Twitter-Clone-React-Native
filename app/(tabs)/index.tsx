import { StyleSheet, Image, View, FlatList, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import tweets from "@/assets/data/tweets";
import Tweet from "@/components/Tweet";
import { Link } from "expo-router";
const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable style={styles.button}>
        <Link href="/new-tweet" asChild>
          <Entypo name="plus" size={24} color="white" />
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#1c9bf0",
    padding: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    lineHeight: 50,
    bottom: 20,
    right: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
