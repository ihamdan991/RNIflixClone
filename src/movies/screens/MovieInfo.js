import React, { Component } from 'react';
import axios from 'axios'
import { Header, Text, Left, Body, Right, Button, Icon, Thumbnail, Content, Container } from 'native-base';
import { TouchableOpacity, ImageBackground, Dimensions, Image, View } from 'react-native';

export default class MovieInfo extends Component {
    constructor() {
        super();
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            data: null
        }
    }

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest = () => {
        const { page, limit } = this.state
        const url = 'http://192.168.0.62:3333/movies/' + this.props.navigation.state.params.id
        this.setState({ loading: true })
        axios.get(url)
            .then(async res => {
                await this.setState({
                    data: res.data
                })
                console.warm(this.state.data)
            })
            .catch(error => {
                this.setState({ error, loading: false, refreshing: false })
            });
    }
    render() {
        return (
            <Container>
                <ImageBackground
                    source={{ uri: 'https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg' }}
                    style={{ width: '100%', height: '100%', filter: 'blur' }}
                    blurRadius={3}
                >
                    <Header
                        transparent
                        androidStatusBarColor="#d1d1d1"
                        toolbarDefaultBorder="#ffffff"
                        style={{ zIndex: 1000 }}
                    >
                        <Left>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.pop()}
                            >
                                <Icon style={{ color: "#fff", fontSize: 25 }} name="chevron-left" type="Feather" />
                            </TouchableOpacity>
                        </Left>
                        <Body />
                        <Right>
                            <Button transparent>
                                <Icon style={{ color: "#fff", fontSize: 25 }} name='cast' type="Feather" />
                            </Button>
                            <Button transparent>
                                <Icon style={{ color: "#fff", fontSize: 25 }} name='search' type="Feather" />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <View>
                            <Body>
                                <Text></Text>
                                
                                <Image source={{ uri: 'https://ganol.si/wp-content/uploads/2018/12/Spider-Man-Into-the-Spider-Verse-2018-218x323.jpg' }} style={{ width: 218, height: 323, }} />
                                <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 10 }}>Spider-Man</Text>
                                <Text style={{ color: '#fff', marginTop: 10 }}>2014 | Action, Adventure, Family | 1 jam 30 menit</Text>
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                    <Button style={{ borderRadius: 10, shadowColor: 'none', marginLeft: 8, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        <Icon name="share" />
                                    </Button>
                                    <Button style={{ borderRadius: 10, shadowColor: 'none', marginLeft: 8, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        <Icon name="download" type="FontAwesome" />
                                    </Button>
                                    <Button style={{ borderRadius: 10, shadowColor: 'none', marginLeft: 8, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        <Icon name="controller-play" type="Entypo" />
                                    </Button>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                />

                            </Body>
                        </View>

                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}