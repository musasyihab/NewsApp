import { StackNavigator } from 'react-navigation'
import NewsDetailScreen from '../Containers/NewsDetailScreen'
import NewsListScreen from '../Containers/NewsListScreen'
import SourceListScreen from '../Containers/SourceListScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Constants from '../Constants/Constants'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  NewsDetailScreen: { screen: NewsDetailScreen },
  NewsListScreen: { screen: NewsListScreen },
  SourceListScreen: { screen: SourceListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: Constants.INITIAL_ROUTE_NAME,
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  }
})

export default PrimaryNav
