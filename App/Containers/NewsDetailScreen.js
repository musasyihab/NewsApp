import React, { Component } from 'react'
import { Text, View, ActivityIndicator, WebView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NewsDetailScreenStyle'
import { Colors } from '../Themes';

class NewsDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('headerTitle', 'News Detail')
  });

  constructor (props) {
    super(props)
  
    this.state = {
      isLoading: true
    };
  }

  renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={Colors.white} />
      <Text style={styles.loadingText}>Loading web page..</Text>
    </View>
  );

  render () {
    const { navigation }  = this.props;
    const newsTitle = navigation.getParam('headerTitle', 'News Detail');
    const sourceUrl = navigation.getParam('sourceUrl', 'https://github.com/facebook/react-native');
    return (
      <View style={styles.container}>
        {this.state.isLoading && this.renderLoading()}
        <WebView
          source={{uri: sourceUrl}}
          style={styles.newsContainer}
          onLoadEnd={() => { this.setState({ isLoading: false }); }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailScreen)
