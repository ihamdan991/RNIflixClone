import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Alert, Image,
  StyleSheet, StatusBar, ImageBackground
}
  from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Button, Container, Content, Body, Form, Item, Input, Label, Icon
} from 'native-base';

import { connect } from 'react-redux';
import { login } from '../../../publics/redux/actions/auth';

// create a component
class LoginForm extends Component {
  state = {
    toHome: false,
    id:'',
    username:'',
    password:''

  }


  handleLogin = (value) => {
    const username     =value.username
    const password =value.password
    const data = {
      id :uuidv1(),
      username :username,
      password :password
  }
    this.props.dispatch(login(data))
      .then(() => {
        this.setState({ toHome: true });
      })
      .catch(err =>console.log(err));
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Icon style={{ color: "white", margin: 8 }}
          name='chevron-thin-left'
          type='Entypo' size={10}
          onPress={() => navigation.goBack()}
        />
      )
    }
  }

  render() {
    if (this.state.toHome === true) {
      const { navigate } = this.props.navigation;
      navigate('Semua')
    }
    return (

      <View style={styles.containers}>
       <ScrollView>
        <View style={styles.loginContainer}>
        </View>
        <View>
          <View style={styles.container}>
            <TextInput style={styles.input}
              autoCapitalize="none"
              autoCorrect={true}
              keyboardType='email-address'
              returnKeyType="next"
              placeholder='Username'
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
              placeholderTextColor='rgba(225,225,225,0.7)' />

            <TextInput style={styles.input}
              returnKeyType="go"
              placeholder='Password'
              onChangeText={(text) => this.setState({password: text})} 
              value={this.state.password}
              placeholderTextColor='rgba(225,225,225,0.7)'
              secureTextEntry />
            {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleLogin()}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
            <View style={{ flex: 1, flexDirection: "row",justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:19,color:'white'}}>Don't have an account yet </Text>
                <Text onPress={() => this.props.navigation.navigate('Register')} 
                style={{fontSize:19,color:'white'}}>Sign Up Now</Text>
            </View>
        </View>
        </ScrollView>
        </View>

    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  input: {
    width: 300,
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 5
  },
  buttonContainer: {
    width: 300,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderColor: "#FFF",
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: '#2980b6',
    color: '#fff'
  },
  containers: {
    flex:1,
    backgroundColor: '#0E0E0E',
 },
  loginContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo: {
    position: 'relative',
    width: 700,
    height: 120,
  },
  title: {
    color: "#FFF",
    marginTop: 120,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
  }

});
export default connect()(LoginForm);