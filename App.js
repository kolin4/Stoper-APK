import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements'

class Stoper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a:0,
            b:0,
            c:0,
            d:0
        }

    }
    start = () => {

    }
    render(){
        return (
            <View style={stylesStoper.main}>
                <View style={stylesStoper.frame}>
                    <Text style={stylesStoper.text}>{this.state.a}{this.state.b}:{this.state.c}{this.state.d}</Text>
                </View>

                <View style={stylesStoper.container}>
                    <Button
                        buttonStyle = {stylesStoper.btn}

                        onPress={this.start}
                        title='START'

                        fontSize = {30}
                        />
                    <Button
                        buttonStyle = {stylesStoper.btn}
                        onPress={this.start}
                        title='STOP'

                        fontSize = {30}
                        />
                </View>
            </View>
            )
    }
}
const stylesStoper = StyleSheet.create({
    main :{
        display: 'flex',
        alignItems: 'center',
        alignContent:'space-between',
        // alignItems:'space-between'
    },
    frame: {

        display : 'flex',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 200,
        backgroundColor: 'rgba(3,3,3,0.25)',
        borderRadius: 5,
        elevation:2     // boxShadow: 1 1 50 'black'
    },
    text:{
        fontSize: 120,
        color: 'white',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-around',

  },
  btn:{
      width:150,
      marginBottom: 50,
      backgroundColor: 'rgba(3,3,3,0.25)',
      borderRadius: 5

  }

})





export default class App extends React.Component {
  render() {
    return (
    <Image source={require('./images/img.jpg')} style={styles.image}>
      <View style={styles.container}>
        <Stoper />
      </View>

    </Image>
    );
  }
}

const styles = StyleSheet.create({
  image:{
      flex: 1,
      width:null,
      height:null
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

});
