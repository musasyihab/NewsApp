import React from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput } from 'react-native'
import { connect } from 'react-redux'

import API from '../Services/Api'
import NewsActions from '../Redux/NewsRedux'
import Constants from '../Constants/Constants'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/NewsListScreenStyle'
import { Colors } from '../Themes';

class NewsListScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('headerTitle', 'News List')
  });
  
  constructor (props) {
    super(props)
  
    this.state = {
      isLoading: true,
      newsList: [],
      searchTerms: ''
    }
    this._getNews();
  }

  _getNews = async () => {
    const api = API.create();
    const res = await api.getNews(this.props.sourceId, this.state.searchTerms);
    console.log('res', res);
    this.setState({
      newsList: res.data.articles,
      isLoading: false
    })
  }

  _renderLoading = () => (
    <ActivityIndicator size="large" color={Colors.charcoal} />
  );

  _renderNewsList = () => (
    <FlatList
      contentContainerStyle={styles.listContent}
      data={this.state.newsList}
      renderItem={this._renderNewsItem.bind(this)}
      keyExtractor={this.keyExtractor}
      initialNumToRender={this.oneScreensWorth}
      ListEmptyComponent={this._renderEmptyList}
    />
  );

  _navigateToDetail = (selectedNews) => () => {
    const { selectNews, navigation: { navigate, getParam } } = this.props;
    const headerTitle = getParam('headerTitle', 'News List')
    selectNews(selectedNews.id);
    navigate(Constants.Routes.NewsDetailScreen, { headerTitle, sourceUrl: selectedNews.url });
  }

  _renderImage = (imageUrl) => {
    return (
      <Image
        style={styles.newsImage}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
    );
  }

  _renderEmptyList = () => (
    <Text style={styles.emptyText}>No news found</Text>
  );

  _renderNewsItem ({item}) {
    return (
      <TouchableOpacity style={styles.row} onPress={this._navigateToDetail(item)}>
        <View style={styles.newsContainer}>
          { item.urlToImage && this._renderImage(item.urlToImage) }
          <View style={styles.newsContent}>
            <Text style={styles.titleLabel}>{item.title}</Text>
            <Text style={styles.descriptionLabel}>{item.description}</Text>
          </View>
        </View>
    </TouchableOpacity>
    )
  }

  _onSearchInputChange = (value) => {
    this.setState({
      searchTerms: value
    });
  }

  _onSubmitSearch = () => {
    // alert(this.state.searchTerms);
    this.setState({isLoading: true}, this._getNews);
    // this._getNews();
  }

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <View
          style={styles.categoryContainer}>
          <Text style={styles.categoryLabel}>Search: </Text>
          <TextInput
            style={styles.searchInput}
            onChangeText={this._onSearchInputChange}
            onSubmitEditing={this._onSubmitSearch}
          />
        </View>
        <View style={styles.listContainer}>
          {this.state.isLoading ? this._renderLoading() : this._renderNewsList()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('NewsList >> state.news', state.news)
  return {
    sourceId: state.news.selectedSourceId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectNews: (newsId) => dispatch(NewsActions.selectNews(newsId)),
    clearState: () => dispatch(NewsActions.clearState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListScreen)
