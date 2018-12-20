import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class VideoItem extends Component {
    render() {
        return (
          <View style={{backgroundColor:"black"}}>
            <TouchableOpacity style={{ marginBottom: 5, backgroundColor: "black" }} onPress={() => this.props.navigation.navigate('Video', { id: id, data: video })}>
                <Image source={{ uri:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NTQ2NjMwMV5BMl5BanBnXkFtZTgwOTk3Njk0ODE@._V1_SX178.jpg" }} style={{ height: 200 }} />

                <View style={styles.container}>
                    <View style={styles.videoDesc}>
                        <Image source={{uri:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NTQ2NjMwMV5BMl5BanBnXkFtZTgwOTk3Njk0ODE@._V1_SX178.jpg"}} style={{ width: 50, height: 50, borderRadius: 25 }} />

                        <View style={styles.detail}>
                            <Text numberOfLines={2} style={styles.videoTitle}>Nonton Love And Friendship</Text>
                            {
                                        <Text style={styles.stats}>
                                        Jane Austen based on her novella "Lady Susan", Whit Stillman
                                        </Text>
                            }
                        </View>
                    </View>

                </View>

            </TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(VideoItem);

styles = StyleSheet.create({
    container: {
        padding: 15
    },

    videoDesc: {
        flexDirection: "row"
    },

    detail: {
        paddingHorizontal: 15,
        flex: 1
    },

    videoTitle: {
        fontSize: 16,
        color: "#202020",
    },

    stats: {
        fontSize: 15,
        paddingTop: 3
    }
})