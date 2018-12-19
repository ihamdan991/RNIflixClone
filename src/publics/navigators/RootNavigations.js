import React from 'react';
import { Icon, Input,Button,Text,Thumbnail } from 'native-base'
import { View, ScrollView, Animated,Image } from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation';

import Semua from '../../movies/screens/Beranda/Semua';
import BoxOffice from '../../movies/screens/Beranda/BoxOffice';
import TvSeries from '../../movies/screens/Beranda/TvSeries';
import Anime from '../../movies/screens/Beranda/Anime';
import Kids from '../../movies/screens/Kids';
import Headermovie from '../../movies/components/Header'
import Feed from '../../movies/screens/Feed';
import Others from '../../movies/screens/Others';
import Search from '../../movies/screens/Search';
import MovieInfo from '../../movies/screens/MovieInfo';
import FirstPage from '../../movies/screens/Auth/LoginForm';
import Register from '../../movies/screens/Auth/Register';
import Welcome from '../../movies/screens/Welcome'

const BerandaTop = createMaterialTopTabNavigator({
  Semua: Semua,
  BoxOffice: {
    screen : BoxOffice,
    navigationOptions : {
      title : "Box Office"
    }
  },
  TvSeries: {
    screen : TvSeries,
    navigationOptions : {
      title : "Tv series"
    }
  },
  Anime: Anime

},
  {
    swipeEnabled : true,
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "white",
      fontSize: 15,
      scrollEnabled : true,
      style: {
        backgroundColor: "black",
      },
      indicatorStyle: {
        backgroundColor: "red"
      },
      tabStyle: {
        width: 110,
      },
    }
  });

const OtherScreens = createStackNavigator({
  MovieInfo: {
    screen: MovieInfo,
    navigationOptions: {
      header: null
    }
  },
})
const App = createMaterialBottomTabNavigator({
  Beranda: {
    screen: BerandaTop,
    navigationOptions: {
      title: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ color: tintColor, fontSize: 25 }} type="Octicons" name="home" />
      )
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: "Feed",
      tabBarIcon: ({ tintColor }) => (
      <Icon style={{ color: tintColor, fontSize: 25 }} name='subtitles' type="MaterialIcons" />
      )
    }
  },
  Kids: {
    screen: Kids,
    navigationOptions: {
      title: "Kids",
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ color: tintColor, fontSize: 24 }} type="Octicons" name="octoface" />
      )
    }
  },
  Others: {
    screen: Others,
    navigationOptions: {
      title: "More",
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ color: tintColor, fontSize: 25 }} type="MaterialCommunityIcons" name="menu" />
      )
    }
  }
}, {
    initialRouteName: 'Beranda',
    activeColor: 'red',
    inactiveColor: 'white',
    barStyle: { backgroundColor: 'black',height:55 },
  });

const RootNavigator = createStackNavigator({
  
  App: {
    screen: App,
    navigationOptions: {
      header: (
        <View style={{ height: 55 }}>
          <ScrollView>
            <Headermovie style={{ elevation: 0 }} />
          </ScrollView>
        </View>
      )
    }
  },
  BerandaTop: {
    screen: BerandaTop
  },
  OtherScreens: {
    screen: OtherScreens,
    navigationOptions: {
      header: null
    }
  },
  First: {
    screen: FirstPage,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTitle: <Image 
      source={{uri:'https://fontmeme.com/permalink/181218/ee8f475c180be9f61ff15b7e52e3225e.png'}}
      resizeMode="cover"
      style={{ width:'50%',height:'100%',marginLeft:40,justifyContent:"center",alignContent:'center',alignSelf:'center'}}
      />
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTitle: <Image 
      source={{uri:'https://fontmeme.com/permalink/181218/ee8f475c180be9f61ff15b7e52e3225e.png'}}
      resizeMode="cover"
      style={{ width:'50%',height:'100%',marginLeft:40,justifyContent:"center",alignContent:'center',alignSelf:'center'}}
      />
    },
  },
  Welcome: {
    screen: Welcome,  
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerTitle: <Input placeholder="Search" />,
  },
}
});
export default createAppContainer(RootNavigator);