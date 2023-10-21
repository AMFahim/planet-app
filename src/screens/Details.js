import { Pressable, ScrollView, StyleSheet, View, Linking } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import PlanetHeader from '../components/planetHeader'
import { spacing } from '../theme/spacing'


const PlanetSection = ({title, value}) => {
  return (
    <View style={styles.planetSection}>
      <Text preset='small' style={{textTransform: 'uppercase'}}>{title}</Text>
      <Text preset='h2' >{value}</Text>
    </View>
  )
}

export default function Details({route}) {
  const planet = route.params.planet;
  const {name, color, description, rotationTime, radius, avgTemp, revolutionTime, wikiLink} = planet;


  const onPressLink = () => {
    Linking.openURL(wikiLink);
  }
  return (
    <SafeAreaView style={styles.container}>
    <PlanetHeader backBtn={true}/>
    <ScrollView>
      <View style={[styles.circle, { backgroundColor: color }]}></View>

      <View style={styles.detailView}>
        <Text preset='h1' style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable onPress={onPressLink} style={styles.source}>
          <Text>Source: </Text>
          <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
        </Pressable>
      </View>
      <PlanetSection title="ROTATION TIME" value={rotationTime}/>
      <PlanetSection title="REVOLUTION TIME" value={revolutionTime}/>
      <PlanetSection title="RADIUS" value={radius}/>
      <PlanetSection title="AVERAGE TEMP" value={avgTemp}/>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black
    },
    circle: {
      height: 300,
      width: 300,
      borderRadius: 150,
      marginTop: spacing[8],
      left: 50
    },
    detailView: {
      marginTop: spacing[10],
      marginHorizontal: spacing[6],
      alignItems: 'center'
    },
    name: {
      textTransform: 'uppercase',
    },
    description: {
      lineHeight: 21,
      marginTop: spacing[5],
      textAlign: 'center'
    },
    source: {
      flexDirection: 'row',
      marginTop: spacing[5],
      marginBottom: spacing[10]
    },
    wikipedia: {
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },

    planetSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: colors.grey,
      marginBottom: spacing[4],
      paddingHorizontal: spacing[5],
      paddingVertical: spacing[4],
      marginHorizontal: spacing[6]

    }

  })