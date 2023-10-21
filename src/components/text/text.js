import { View, Text as RNText, StyleSheet} from 'react-native'
import React from 'react'
import { presets } from './text.preset.js'

export default function Text({children, preset = "default", style}) {
    const textStyles = StyleSheet.compose(presets[preset], style);
  return (
 
      <RNText style={textStyles}>{children}</RNText>
  )
}