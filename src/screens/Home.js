import React from 'react'
import Text from '../components/text/text'
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planetHeader';
import { colors } from '../theme/colors';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { PLANET_LIST } from '../data/planetList';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const PlanetItem = ({item}) => {
  const { name, color } = item;

  const navigation = useNavigation();
 return (
  <Pressable onPress={() => {
    navigation.navigate("Details", { planet: item });
  }} style={styles.item}>
    <View style={styles.itemsAlign}>
      <View style={[styles.circle, { backgroundColor: color }]} />

      <Text preset='h4' style={styles.itemName}>{name}</Text>
    </View>
    <AntDesign name="right" size={18} color="white" />
  </Pressable>
 )
}

export default function Home({ navigation }) {
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separetor} />}

      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  list: {
    padding: spacing[4]
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between"
  },
  itemsAlign: {
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[7],
  },
  separetor: {
    borderBottomColor: colors.white,
    borderWidth: 0.5
  }
})

