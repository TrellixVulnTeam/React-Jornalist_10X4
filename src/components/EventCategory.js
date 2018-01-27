import React, {PureComponent} from 'react'
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import * as Font from '../constants/Font'
import * as Color from '../constants/Color'

type Props = {
  name: string,
  coverImg: string,
  checked?: string,
  onPress: () => void,
  index: number,
}

const BORDER_RADIUS = 12.5
export default class EventCategory extends PureComponent {
  props: Props

  render() {
    const {name, coverImg, checked, onPress, index = 0} = this.props
    const maskStyle = [styles.mask, {borderRadius: BORDER_RADIUS}]
    const containerStyle = [styles.container]

    if (checked) {
      maskStyle.push(styles.activeState)
    }

    if (index > 0) {
      containerStyle.push(styles.spacing)
    }

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
          <ImageBackground style={styles.image} source={coverImg}
                 borderRadius={BORDER_RADIUS}>
            <View style={maskStyle}>
              <Text style={styles.name}>{name.toUpperCase()}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 77,
    overflow: 'hidden',
    position: 'relative',
  },
  spacing: {
    marginLeft: 10,
  },
  image: {
    // borderRadius: 12.5, //won't work on Android as RN 0.44
    width: 90,
    height: 77,
    overflow: 'hidden',
  },
  mask: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeState: {
    backgroundColor: 'rgba(30,150,255,0.8)',
  },
  name: {
    ...Font.FONT_EXTRA_BOLD,
    textAlign: 'center',
    color: Color.CONTRAST_COLOR,
    backgroundColor: 'transparent',
    fontSize: 13,
    letterSpacing: 0.5,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 1,
      height: 2,
    },
  },
})