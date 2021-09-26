import React, {Component} from 'react';
import {View,StyleSheet,Text,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';


const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            textValue: '',
            textValue2: '',
            message: '',
        }
    }

    changeTextInput = text =>{
        this.setState({textValue: text});
    };
    
    changeTextInput2 = text =>{
        this.setState({textValue2: text});
    };

    onPress = () => {
        this.setState({message:''})
        if (this.state.textValue=="admin" && this.state.textValue2=="12345"){
          this.textPassword.clear()
          this.props.navigation.navigate('Movies')
        } else {
          this.setState({message: "contraseña o usuario incorrecto. Vuelva a intentar"})
        }
    };

    render() {
        return ( 
            <LinearGradient colors={['#0F2027', '#203A43', '#2C5364']} style={styles.linearGradient}>
                <View style={styles.logoContainer}>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        onChangeText={text => this.changeTextInput(text)}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        ref={input => { this.textPassword = input }}
                        secureTextEntry={true}
                        onChangeText={text => this.changeTextInput2(text)}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableOpacity style={styles.btnLogin} onPress={this.onPress}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.message}> {this.state.message} </Text>

            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5,
    },
    inputsContainer: {
        marginTop: 10,
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
    },
    icon: {
        position: 'absolute',
        top: 5,
        left: 34,
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        left: 37,
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
    message: {
        color: 'red',
    },
});