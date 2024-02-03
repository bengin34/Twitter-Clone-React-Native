import { StyleSheet, Image, Text, View } from "react-native";
import { TweetType } from "@/types";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />

      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    backgroundColor: "white",
  },

  userImage: { width: 50, height: 50, borderRadius: 50 },
  mainContainer: { marginLeft: 10, flex: 1 },
  name: {
    fontWeight: "bold",
  },
  content: {
    lineHeight: 22,
    marginTop: 10,
  },
});

export default Tweet;
