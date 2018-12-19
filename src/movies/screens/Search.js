import React, {Component} from 'react';
import { 
  View,Container,Content,Card,CardItem,Right,Icon 
} from 'native-base';
import { ScrollView,Image,Text,FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getmovies } from '../../publics/redux/actions/movies' 

export default class Search extends Component {
    data = [{
        "id": 43,
        "title": "The First Purge (2018) 720p WEB-DL 750MB",
        "slug": "The-First-Purge-(2018)-720p-WEB-DL-750MB",
        "category_id": 1,
        "genre": "Action",
        "release": " 04 Jul 2018",
        "country": "United States of America",
        "language": "English",
        "rating": "5.3/10",
        "description": "America's third political party, the New Founding Fathers of America, comes to power and conducts an experiment: no laws for 12 hours on Staten Island. No one has to stay on the island, but $5,000 is given anyone who does.",
        "thumbnails": "https://ganol.si/wp-content/uploads/2018/07/The-First-Purge-2018-215x323.jpg",
        "video_url": "https://www.rapidvideo.com/e/FVDYU91B0Y",
        "created_at": "2018-12-17 15:21:22",
        "updated_at": "2018-12-17 15:21:22"
        }]
    _renderItem(item){
        return(
            <Image 
                style={{width:120,height:180,marginHorizontal:5,borderRadius:2}} source={{uri:item.thumbnails}}
            />
        )
    }


  render() {
    return (
        <Container style={{backgroundColor:"#e8e8e8"}}>
            <Content >
                <Text style={{ fontSize: 15, left: 12,marginTop:10,marginBottom:10 }}>Rekomendasi untuk kamu</Text>
                <View style={{flex:1}}>
                    <FlatList
                      horizontal
                      ItemSeparatorComponent={() => <View style={{width:3}}/>}
                      renderItem={({item}) => this._renderItem(item)}
                      data={this.data}
                      keyExtractor={(item, index) => index.toString()}
                      showsHorizontalScrollIndicator={false}
                    />
                </View>
            </Content>
        </Container>
        );
    }
}
