import React, { Component } from 'react';
import axios from 'axios'
import {
  Container, Content, Card, CardItem, Text, Left, Body, Right, Button, Icon, Title, Thumbnail
} from 'native-base';
import { ActivityIndicator, ScrollView, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ImageSlider from 'react-native-image-slider';

export default class Film extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: {"messages":"Load Success","movies":{"total":48,"perPage":20,"page":1,"lastPage":3,"data":[{"id":43,"title":"The First Purge (2018) 720p WEB-DL 750MB","slug":"The-First-Purge-(2018)-720p-WEB-DL-750MB","category_id":1,"genre":"Action","release":" 04 Jul 2018","country":"United States of America","language":"English","rating":"5.3/10","description":"America's third political party, the New Founding Fathers of America, comes to power and conducts an experiment: no laws for 12 hours on Staten Island. No one has to stay on the island, but $5,000 is given anyone who does.","thumbnails":"https://ganol.si/wp-content/uploads/2018/07/The-First-Purge-2018-215x323.jpg","video_url":"https://www.rapidvideo.com/e/FVDYU91B0Y","created_at":"2018-12-17 15:21:22","updated_at":"2018-12-17 15:21:22"},{"id":44,"title":"Avengers: Infinity War (2018) BluRay 720p 1.20GB","slug":"Avengers:-Infinity-War-(2018)-BluRay-720p-1.20GB","category_id":1,"genre":"Action","release":" 2018-04-25","country":"United States of America","language":"English","rating":"8.7/10","description":"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.","thumbnails":"https://ganol.si/wp-content/uploads/2018/08/Avengers-Infinity-War-2018-BluRay-254x323.jpg","video_url":"https://www.rapidvideo.com/e/FUV5NLAN7X","created_at":"2018-12-17 15:21:22","updated_at":"2018-12-17 15:21:22"},{"id":45,"title":"Ocean’s Eight (2018) BluRay 720p 900MB","slug":"Ocean's-Eight-(2018)-BluRay-720p-900MB","category_id":1,"genre":"Action","release":" 08 Jun 2018","country":"United States of America","language":"English","rating":"6.3/10","description":"Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City's yearly Met Gala.","thumbnails":"https://ganol.si/wp-content/uploads/2018/08/Oceans-Eight-2018-BluRay-256x323.jpg","video_url":"https://www.rapidvideo.com/e/FUPCWXBFN7","created_at":"2018-12-17 15:21:22","updated_at":"2018-12-17 15:21:22"},{"id":46,"title":"Deadpool 2 (2018) UNRATED BluRay 720p 950MB","slug":"Deadpool-2-(2018)-UNRATED-BluRay-720p-950MB","category_id":1,"genre":"Action","release":" 2018-05-15","country":"United States of America","language":"English","rating":"8.0/10","description":"Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.","thumbnails":"https://ganol.si/wp-content/uploads/2018/08/Deadpool-2-2018-BluRay-1-255x323.jpg","video_url":"https://www.rapidvideo.com/e/FU4OXWJG2H","created_at":"2018-12-17 15:21:22","updated_at":"2018-12-17 15:21:22"},{"id":47,"title":"Upgrade (2018) HDTS 400MB","slug":"Upgrade-(2018)-HDTS-400MB","category_id":1,"genre":"Action","release":" 2018-06-01","country":"United States of America","language":"English","rating":"7.8/10","description":"Set in the near-future, technology controls nearly all aspects of life. But when Grey, a self-identified technophobe, has his world turned upside down, his only hope for revenge is an experimental computer chip implant called Stem.","thumbnails":"https://ganol.si/wp-content/uploads/2018/07/Upgrade-2018-218x323.jpg","video_url":"https://openload.co/embed/v7aJ24rtY7M/SHQUPGRDEHDTS.Ganol.ru.mkv.mp4","created_at":"2018-12-17 15:21:22","updated_at":"2018-12-17 15:21:22"},{"id":48,"title":"Jurassic World: Fallen Kingdom (2018) BluRay 720p 1GB x264","slug":"Jurassic-World:-Fallen-Kingdom-(2018)-BluRay-720p-1GB-x264","category_id":1,"genre":"Action","release":" 22 Jun 2018","country":"United States of America","language":"English","rating":"6.4/10","description":"When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.","thumbnails":"https://ganol.si/wp-content/uploads/2018/09/Jurassic-World-Fallen-Kingdom-2018-BluRay-251x323.jpg","video_url":"https://www.rapidvideo.com/e/FV0YCFEH87","created_at":"2018-12-17 15:21:22","updated_at":"2018-12-17 15:21:22"},{"id":36,"title":"Hotel Transylvania 3: Summer Vacation (2018) BluRay 720p 850MB","slug":"Hotel-Transylvania-3:-Summer-Vacation-(2018)-BluRay-720p-850MB","category_id":1,"genre":"Adventure","release":" 13 Jul 2018","country":"United States of America","language":"English","rating":"6.3/10","description":"Count Dracula and company participate in a cruise for sea-loving monsters, unaware that their boat is being commandeered by the monster-hating Van Helsing family.","thumbnails":"https://ganol.si/wp-content/uploads/2018/09/Hotel-Transylvania-3-Summer-Vacation-2018-BluRay-256x323.jpg","video_url":"https://www.rapidvideo.com/e/FVP8GMZCMH","created_at":"2018-12-17 15:21:21","updated_at":"2018-12-17 15:21:21"},{"id":37,"title":"Mamma Mia! Here We Go Again (2018) 720p HDRip 800MB","slug":"Mamma-Mia!-Here-We-Go-Again-(2018)-720p-HDRip-800MB","category_id":1,"genre":"Comedy","release":" 20 Jul 2018","country":"United States of America","language":"English","rating":"7.2/10","description":"Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past.","thumbnails":"https://ganol.si/wp-content/uploads/2018/07/Mamma-Mia-Here-We-Go-Again-2018-204x323.jpg","video_url":"https://www.rapidvideo.com/e/FVL2PYKFGF","created_at":"2018-12-17 15:21:21","updated_at":"2018-12-17 15:21:21"},{"id":38,"title":"Skyscraper (2018) BluRay 720p 850MB","slug":"Skyscraper-(2018)-BluRay-720p-850MB","category_id":1,"genre":"Action","release":" 13 Jul 2018","country":"United States of America","language":"English","rating":"5.9/10","description":"A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family are trapped inside by criminals.","thumbnails":"https://ganol.si/wp-content/uploads/2018/09/Skyscraper-2018-BluRay-251x323.jpg","video_url":"https://www.rapidvideo.com/e/FVP2TJ0D3H","created_at":"2018-12-17 15:21:21","updated_at":"2018-12-17 15:21:21"},{"id":39,"title":"The First Purge (2018) BluRay  720p 800MB","slug":"The-First-Purge-(2018)-BluRay-720p-800MB","category_id":1,"genre":"Action","release":" 04 Jul 2018","country":"United States of America","language":"English","rating":"5.2/10","description":"America's third political party, the New Founding Fathers of America, comes to power and conducts an experiment: no laws for 12 hours on Staten Island. No one has to stay on the island, but $5,000 is given to anyone who does.","thumbnails":"https://ganol.si/wp-content/uploads/2018/09/The-First-Purge-2018-BluRay-251x323.jpg","video_url":"https://www.rapidvideo.com/e/FVIIQGG0UM","created_at":"2018-12-17 15:21:21","updated_at":"2018-12-17 15:21:21"},{"id":40,"title":"Johnny English Strikes Again (2018) CAM 350MB","slug":"Johnny-English-Strikes-Again-(2018)-CAM-350MB","category_id":1,"genre":"Action","release":" 26 Oct 2018","country":"United States of America","language":"English","rating":"6.8/10","description":"After a cyber-attack reveals the identity of all of the active undercover agents in Britain, Johnny English is forced to come out of retirement to find the mastermind hacker.","thumbnails":"https://ganol.si/wp-content/uploads/2018/09/Johnny-English-Strikes-Again-2018-218x323.jpg","video_url":"https://www.rapidvideo.com/e/FVHPTEWTHA","created_at":"2018-12-17 15:21:21","updated_at":"2018-12-17 15:21:21"},{"id":41,"title":"Sicario: Day of the Soldado (2018) BluRay  720p 900MB","slug":"Sicario:-Day-of-the-Soldado-(2018)-BluRay-720p-900MB","category_id":1,"genre":"Action","release":" 29 Jun 2018","country":"United States of America","language":"English","rating":"7.3/10","description":"The drug war on the U.S.-Mexico border has escalated as the cartels have begun trafficking terrorists across the US border. To fight the war, federal agent Matt Graver re-teams with the mercurial Alejandro.","thumbnails":"https://ganol.si/wp-content/uploads/2018/09/Sicario-Day-of-the-Soldado-2018-BluRay-255x323.jpg","video_url":"https://www.rapidvideo.com/e/FVH8H4M13E","created_at":"2018-12-17 15:21:21","updated_at":"2018-12-17 15:21:21"},{"id":42,"title":"Solo: A Star Wars Story (2018) BluRay 720p 1GB x264","slug":"Solo:-A-Star-Wars-Story-(2018)-BluRay-720p-1GB-x264","category_id":1,"genre":"Action","release":" 25 May 2018","country":"United States of America","language":"English","rating":"7.1/10","description":"During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.","thumbnails":"https://ganol.si/wp-content/uploads/2018/09/Solo-A-Star-Wars-Story-2018-BluRay-1-255x323.jpg","video_url":"https://www.rapidvideo.com/e/FV77NPBWIS","created_at":"2018-12-17 15:21:21","updated_at":"2018-12-17 15:21:21"},{"id":27,"title":"The Meg (2018) BluRay 720p 900MB","slug":"The-Meg-(2018)-BluRay-720p-900MB","category_id":1,"genre":"Action","release":" 10 Aug 2018","country":"United States of America","language":"English","rating":"5.9/10","description":"After escaping an attack by what he claims was a 70-foot shark, Jonas Taylor must confront his fears to save those trapped in a sunken submersible.","thumbnails":"https://ganol.si/wp-content/uploads/2018/11/The-Meg-2018-BluRay-255x323.jpg","video_url":"https://www.rapidvideo.com/e/FWZATTIW4R","created_at":"2018-12-17 15:21:20","updated_at":"2018-12-17 15:21:20"},{"id":28,"title":"BlacKkKlansman (2018) BluRay 720p  950MB","slug":"BlacKkKlansman-(2018)-BluRay-720p-950MB","category_id":1,"genre":"Biography","release":" 10 Aug 2018","country":"United States of America","language":"English","rating":"7.7/10","description":"Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader. Based on actual events.","thumbnails":"https://ganol.si/wp-content/uploads/2018/11/BlacKkKlansman-2018-BluRay-251x323.jpg","video_url":"https://www.rapidvideo.com/e/FWUZ6KOT4B","created_at":"2018-12-17 15:21:20","updated_at":"2018-12-17 15:21:20"},{"id":29,"title":"Incredibles 2 (2018) BluRay 720p 850MB","slug":"Incredibles-2-(2018)-BluRay-720p-850MB","category_id":1,"genre":"Action","release":" 15 Jun 2018","country":"United States of America","language":"English","rating":"8.0/10","description":"Bob Parr (Mr. Incredible) is left to care for the kids while Helen (Elastigirl) is out saving the world.","thumbnails":"https://ganol.si/wp-content/uploads/2018/11/Incredibles-2-2018-BluRay-253x323.jpg","video_url":"https://www.rapidvideo.com/e/FWTQGMKTAH","created_at":"2018-12-17 15:21:20","updated_at":"2018-12-17 15:21:20"},{"id":30,"title":"The Nutcracker and the Four Realms (2018) HDCAM  350MB","slug":"The-Nutcracker-and-the-Four-Realms-(2018)-HDCAM-350MB","category_id":1,"genre":"Adventure","release":" 02 Nov 2018","country":"United States of America","language":"English","rating":"5.5/10","description":"A young girl is transported into a magical world of gingerbread soldiers and an army of mice.","thumbnails":"https://ganol.si/wp-content/uploads/2018/11/The-Nutcracker-and-the-Four-Realms-2018-226x323.jpg","video_url":"https://www.rapidvideo.com/e/FWU8TA2ES4","created_at":"2018-12-17 15:21:20","updated_at":"2018-12-17 15:21:20"},{"id":31,"title":"Halloween (2018) HDCAM 400MB","slug":"Halloween-(2018)-HDCAM-400MB","category_id":1,"genre":"Horror","release":" 19 Oct 2018","country":"United States of America","language":"English","rating":"7.6/10","description":"Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.","thumbnails":"https://ganol.si/wp-content/uploads/2018/10/Halloween-2018-1-215x323.jpg","video_url":"https://www.rapidvideo.com/e/FWG5DU4YW9","created_at":"2018-12-17 15:21:20","updated_at":"2018-12-17 15:21:20"},{"id":32,"title":"Bad Times at the El Royale (2018) 720p HDCAM 850MB","slug":"Bad-Times-at-the-El-Royale-(2018)-720p-HDCAM-850MB","category_id":1,"genre":"Crime","release":" 12 Oct 2018","country":"United States of America","language":"English","rating":"7.4/10","description":"","thumbnails":"https://ganol.si/wp-content/uploads/2018/10/Bad-Times-at-the-El-Royale-2018-1-218x323.jpg","video_url":"https://www.rapidvideo.com/e/FWQBPTIQ5H","created_at":"2018-12-17 15:21:20","updated_at":"2018-12-17 15:21:20"},{"id":33,"title":"Mamma Mia! Here We Go Again (2018) BluRay 720p 900MB","slug":"Mamma-Mia!-Here-We-Go-Again-(2018)-BluRay-720p-900MB","category_id":1,"genre":"Comedy","release":" 20 Jul 2018","country":"United States of America","language":"English","rating":"7.1/10","description":"Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past.","thumbnails":"https://ganol.si/wp-content/uploads/2018/10/Mamma-Mia-Here-We-Go-Again-2018-BluRay-251x323.jpg","video_url":"https://www.rapidvideo.com/e/FW6WTZGEQQ","created_at":"2018-12-17 15:21:20","updated_at":"2018-12-17 15:21:20"}]}}
,
      pages: 1,
      limit: 10,
      error: null,
      refreshing: false
    }
  }

  componentDidMount() {
    this.makeRemoteRequest()
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
      <Container style={{ backgroundColor: 'black' }}>
        <Content style={{ backgroundColor: 'black' }}>
          <View style={{ height: 250, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageSlider
              autoPlayWithInterval={3000}
              loop={true}
              images={[
                'https://iflix-images.akamaized.net/5c162114e4b0d897abc0fef5_l_carousel-landscape_s_3000x2250?jpeg[quality]=50&amp;jpeg[chromaSubsampling]=4:4:4&amp;transform=true&amp;resize[]=1440%22%3E',
                'https://iflix-images.akamaized.net/5c162114e4b0d897abc0fef6_l_carousel-landscape_s_3000x2250?jpeg[quality]=50&amp;jpeg[chromaSubsampling]=4:4:4&amp;transform=true&amp;resize[]=1440%22%3E',
                'https://iflix-images.akamaized.net/5c162114e4b0d897abc0fef7_l_carousel-portrait_s_2250x3000?jpeg[quality]=50&jpeg[chromaSubsampling]=4:4:4&transform=true&resize[]=1440',
              ]} />
          </View>
          <Text style={{ marginTop: -80, marginLeft: 8, marginBottom: 8, color: 'black', fontSize: 13 }}>Rekomendasi Untukmu</Text>
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
                      id: item.id
                    })
                  }
                >
                  <View style={styles.listMovies}>
                    <Image
                      source={{ uri: item.thumbnails }}
                      style={{ width: 100, height: 135 }}
                    />
                    <Text numberOfLines={1} style={{ fontSize: 10, color: '#2c3e50' }}>{item.title}</Text>
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
                      id: item.id
                    })
                  }
                >
                  <View style={styles.listMovies}>
                    <Image
                      source={{ uri: item.thumbnails }}
                      style={{ width: 100, height: 135 }}
                    />
                    <Text numberOfLines={1} style={{ fontSize: 10, color: 'grey' }}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              }
            /> : <ActivityIndicator size="large" color="#00ff00" />}
        </Content>
      </Container >
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