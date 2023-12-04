import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import service1 from "../assets/service1.jpg";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function ServiceScreen() {
  return (
    <ScrollView style={styles.viewStyle}>
      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={service1} style={styles.img} />
        <Card.Actions></Card.Actions>
      </Card>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://www.pexels.com/photo/engineers-looking-at-blueprint-3862135/",
          }}
          style={styles.img}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.img}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.img}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cardBox: {
    margin: 10,
  },
  img: {
    padding: 10,
  },
  view: {
    height: "auto",

    backgroundColor: "red",
  },
  viewStyle: { flex: 1 },
});
