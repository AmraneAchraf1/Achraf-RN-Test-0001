import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sizes from '../../constants/Sizes'

const Divider = ({
    horizontal = true,
    color = "#ddd",
    marginH = 0,
    strokeWidth = 0.5,
}) => {
  return (
    <View
      style={{
        width: horizontal ? "100%" : 1,
        height: horizontal ? 1 : "100%",
        backgroundColor: color,
        marginHorizontal: horizontal ? Sizes[marginH] : 0,
        marginVertical: horizontal ? 0 : Sizes[marginH],
        alignSelf: horizontal ? "center" : "flex-start",
        borderRadius: Sizes[4],
        borderWidth: strokeWidth,
        borderColor: color,
        
      }}
    />
  )
}

export default Divider
