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
    justifyContent: 'center'
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
    textAlign: 'left',
    marginBottom: Metrics.smallMargin
  },
  descriptionLabel: {
    color: Colors.secondaryText
  },
  sourceContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },
  divider: {
    flex: 1,
    height: 1,
    marginVertical: 16,
    backgroundColor: Colors.divider
  },
  listContent: {
    marginTop: Metrics.baseMargin,
    paddingTop: 16,
    backgroundColor: Colors.white
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.darkPrimary,
    padding: Metrics.padding
  },
  categoryItem: {
    padding: 5,
    backgroundColor: Colors.transparent
  },
  categoryItemSelected: {
    padding: 5,
    backgroundColor: Colors.white
  },
  categoryText: {
    fontSize: 16,
    color: Colors.white
  },
  categoryTextSelected: {
    fontSize: 16,
    color: Colors.primary
  },
  categoryLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow
  }
})
