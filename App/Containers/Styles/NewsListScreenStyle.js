import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingBottom: Metrics.baseMargin,
    marginBottom: Metrics.doubleBaseMargin,
    borderRadius: 6,
    borderColor: Colors.divider,
    borderWidth: 1,
    overflow: 'hidden'
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondaryText,
    marginBottom: Metrics.smallMargin
  },
  descriptionLabel: {
    color: Colors.secondaryText
  },
  newsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  newsContent: {
    flex: 1,
    flexDirection: 'column',
    padding: 16
  },
  newsImage: {
    width: '100%',
    height: 120
  },
  divider: {
    flex: 1,
    height: 1,
    marginTop: 16,
    backgroundColor: Colors.divider
  },
  listContent: {
    margin: Metrics.baseMargin,
    paddingTop: 16
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.darkPrimary,
    padding: Metrics.padding
  },
  categoryItem: {
    padding: 5
  },
  categoryText: {
    fontSize: 16,
    color: Colors.white
  },
  categoryLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow
  },
  emptyText: {
    color: Colors.secondaryText,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: Colors.white,
    color: Colors.primaryText
  }
})
