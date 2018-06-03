import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

let ScreenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  loadingContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: Colors.darkPrimary
  },
  loadingText: {
    marginLeft: Metrics.baseMargin,
    color: Colors.white
  },
  newsContainer: {
    height: ScreenHeight,
    flex: 1
  }
})
