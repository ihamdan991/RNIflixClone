import React, { Component } from 'react';
import axios from 'axios'
import {
  Container, Content, Card, CardItem, Text, Left, Body, Right, Button, Icon, Title, Thumbnail
} from 'native-base';
import { ActivityIndicator, ScrollView, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ImageSlider from 'react-native-image-slider';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class Film extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: null,
      pages: 1,
      limit: 10,
      error: null,
      refreshing: false
    }
  }

  componentDidMount() {
    // this.makeRemoteRequest()
  }
  makeRemoteRequest = () => {
    const { page, limit } = this.state
    const url = 'http://192.168.0.62:3333/movies?pages=' + this.state.pages + '&limit=' + this.state.limit
    this.setState({ loading: true })
    axios.get(url)
      .then(async res => {
        await this.setState({
          data: res.data
        })
      })
      .catch(error => {
        this.setState({ error, loading: false, refreshing: false })
      });
  }

  handleRefreshing = () => {
    this.setState({
      page: 1,
      refreshing: true,
      limit: this.state.limit + 1
    }),
      this.makeRemoteRequest()
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.makeRemoteRequest()
    })
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor="#000"
        contentBackgroundColor="#f5f5f5"
        fadeOutForeground={true}
        parallaxHeaderHeight={350}
        renderForeground={() => (
          <ImageSlider
            autoPlayWithInterval={3000}
            loop={true}
            images={[
              'https://ganol.si/wp-content/uploads/2018/09/The-First-Purge-2018-BluRay-251x323.jpg',
              'https://ganol.si/wp-content/uploads/2018/09/Sicario-Day-of-the-Soldado-2018-BluRay-255x323.jpg',
              'https://ganol.si/wp-content/uploads/2018/09/Jurassic-World-Fallen-Kingdom-2018-BluRay-251x323.jpg',
              'https://ganol.si/wp-content/uploads/2018/09/Hotel-Transylvania-3-Summer-Vacation-2018-BluRay-256x323.jpg',
              'https://ganol.si/wp-content/uploads/2018/07/Mamma-Mia-Here-We-Go-Again-2018-204x323.jpg',
              'https://ganol.si/wp-content/uploads/2018/09/Skyscraper-2018-BluRay-251x323.jpg',
              'https://iflix-images.akamaized.net/5c162114e4b0d897abc0fef5_l_carousel-landscape_s_3000x2250?jpeg[quality]=50&amp;jpeg[chromaSubsampling]=4:4:4&amp;transform=true&amp;resize[]=1440%22%3E',
              'https://iflix-images.akamaized.net/5c162114e4b0d897abc0fef6_l_carousel-landscape_s_3000x2250?jpeg[quality]=50&amp;jpeg[chromaSubsampling]=4:4:4&amp;transform=true&amp;resize[]=1440%22%3E',
              'https://iflix-images.akamaized.net/5c162114e4b0d897abc0fef7_l_carousel-portrait_s_2250x3000?jpeg[quality]=50&jpeg[chromaSubsampling]=4:4:4&transform=true&resize[]=1440',
            ]} />
        )}>
        <View>
          <View>
            <Text style={{ marginTop: -80, marginLeft: 8, marginBottom: 8, color: '#fff', fontSize: 13 }}>Rekomendasi Untukmu</Text>
            {this.state.data !== null ?
              <FlatList
                data={this.state.data.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSepactator}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("MovieInfo", {
                        id: item.id,
                        thumbnails: item.thumbnails
                      })
                    }
                  >
                    <View style={styles.listMovies}>
                      <Image
                        source={{ uri: item.thumbnails }}
                        style={{ width: 100, height: 135 }}
                      />
                      <Text numberOfLines={1} style={{ fontSize: 10, color: 'grey' }}>{item.title.split(' (')[0]}</Text>
                    </View>
                  </TouchableOpacity>
                }
              /> : <ActivityIndicator size="large" color="#00ff00" />}
            <Text style={{ marginLeft: 8, marginBottom: 8, marginTop: 10, fontSize: 13 }}>Film Terpopuler</Text>
            {this.state.data !== null ?
              <FlatList
                data={this.state.data.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSepactator}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("MovieInfo", {
                        id: item.id,
                        thumbnails: item.thumbnails
                      })
                    }
                  >
                    <View style={styles.listMovies}>
                      <Image
                        source={{ uri: item.thumbnails }}
                        style={{ width: 100, height: 135 }}
                      />
                      <Text numberOfLines={1} style={{ fontSize: 10, color: 'grey' }}>{item.title.split(' (')[0]}</Text>
                    </View>
                  </TouchableOpacity>
                }
              /> : <ActivityIndicator size="large" color="#00ff00" />}
            <Text style={{ marginLeft: 8, marginBottom: 8, marginTop: 10, fontSize: 13 }}>Box Office</Text>
            {this.state.data !== null ?
              <FlatList
                data={this.state.data.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSepactator}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("MovieInfo", {
                        id: item.id,
                        thumbnails: item.thumbnails
                      })
                    }
                  >
                    <View style={styles.listMovies}>
                      <Image
                        source={{ uri: item.thumbnails }}
                        style={{ width: 100, height: 135 }}
                      />
                      <Text numberOfLines={1} style={{ fontSize: 10, color: 'grey' }}>{item.title.split(' (')[0]}</Text>
                    </View>
                  </TouchableOpacity>
                }
              /> : <ActivityIndicator size="large" color="#00ff00" />}
            <Text style={{ marginLeft: 8, marginBottom: 8, marginTop: 10, fontSize: 13 }}>Tv Series</Text>
            {this.state.data !== null ?
              <FlatList
                data={this.state.data.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSepactator}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("MovieInfo", {
                        id: item.id,
                        thumbnails: item.thumbnails
                      })
                    }
                  >
                    <View style={styles.listMovies}>
                      <Image
                        source={{ uri: item.thumbnails }}
                        style={{ width: 100, height: 135 }}
                      />
                      <Text numberOfLines={1} style={{ fontSize: 10, color: 'grey' }}>{item.title.split(' (')[0]}</Text>
                    </View>
                  </TouchableOpacity>
                }
              /> : <ActivityIndicator size="large" color="#00ff00" />}
            <Text style={{ marginLeft: 8, marginBottom: 8, marginTop: 10, fontSize: 13 }}>Anime</Text>
            {this.state.data !== null ?
              <FlatList
                data={this.state.data.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSepactator}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("MovieInfo", {
                        id: item.id,
                        thumbnails: item.thumbnails
                      })
                    }
                  >
                    <View style={styles.listMovies}>
                      <Image
                        source={{ uri: item.thumbnails }}
                        style={{ width: 100, height: 135 }}
                      />
                      <Text numberOfLines={1} style={{ fontSize: 10, color: 'grey' }}>{item.title.split(' (')[0]}</Text>
                    </View>
                  </TouchableOpacity>
                }
              /> : <ActivityIndicator size="large" color="#00ff00" />}
          </View>

        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 5,
    minHeight: 100,
  },

  listMovies: {
    width: 100,
    height: 150,
    backgroundColor: '#fff',
    marginLeft: 8
  }
});