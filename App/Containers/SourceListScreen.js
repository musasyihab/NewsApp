import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'
import NewsActions from '../Redux/NewsRedux'
import Constants from '../Constants/Constants'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/SourceListScreenStyle'
import { Colors } from '../Themes';

class SourceListScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'News Sources',
    /* No more header config here! */
  };

  constructor (props) {
    super(props)
  
    this.state = {
      sourceList: [],
      selectedCategory: Constants.SOURCE_CATEGORIES[0]
    }
    this._getSources();
  }

  _getSources = async () => {
    const api = API.create();
    const res = await api.getSources(this.state.selectedCategory);
    if(res.data.sources){
      this.setState({
        sourceList: res.data.sources
      })
    }
  }

  _changeCategory = (item) => () => {
    this.setState({
      sourceList: [],
      selectedCategory: item
    }, this._getSources);
  }

  _navigateToDetail = (selectedNews) => () => {
    const { selectSource, navigation: { navigate } } = this.props;
    selectSource(selectedNews.id);
    navigate(Constants.Routes.NewsListScreen, { headerTitle: selectedNews.name });
  }

  _renderSourceItem ({item}) {
    return (
      <TouchableOpacity style={styles.row} onPress={this._navigateToDetail(item)}>
        <View style={styles.sourceContainer}>
          <Text style={styles.titleLabel}>{item.name}</Text>
          <Text style={styles.descriptionLabel}>{item.description}</Text>
        </View>
        <View style={styles.divider}/>
      </TouchableOpacity>
    )
  }

  _renderCategoryItem = ({item}) => {
    const isSelected = this.state.selectedCategory === item;
    return (
      <TouchableOpacity
        style={isSelected ? styles.categoryItemSelected : styles.categoryItem}
        onPress={this._changeCategory(item)}
      >
        <Text style={isSelected ? styles.categoryTextSelected : styles.categoryText}>{item}</Text>
      </TouchableOpacity>
    );
  }

  _renderSourceList = () => (
    <FlatList
      contentContainerStyle={styles.listContent}
      data={this.state.sourceList}
      renderItem={this._renderSourceItem.bind(this)}
      keyExtractor={this.keyExtractor}
      initialNumToRender={this.oneScreensWorth}
    />
  );

  _renderLoading = () => (
    <ActivityIndicator size="large" color={Colors.charcoal} />
  );

  keyExtractor = (item, index) => index

  oneScreensWorth = 20

  render () {
    return (
      <View style={styles.container}>
        <View
          style={styles.categoryContainer}>
          <Text style={styles.categoryLabel}>Categories: </Text>
          <FlatList
            data={Constants.SOURCE_CATEGORIES}
            renderItem={this._renderCategoryItem}
            horizontal
            extraData={this.state.selectedCategory}
          />
        </View>
        <View style={styles.listContainer}>
          {this.state.sourceList.length > 0 ? this._renderSourceList() : this._renderLoading()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('SourceList >> state.news', state.news)
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSource: (sourceId) => dispatch(NewsActions.selectSource(sourceId)),
    clearState: () => dispatch(NewsActions.clearState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceListScreen)
