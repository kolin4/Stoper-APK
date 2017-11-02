import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

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
    render(){
        return (
            <View style={stylesStoper.main}>
                <View style={stylesStoper.frame}>
                    <Text style={stylesStoper.text}>{this.state.a}{this.state.b}:{this.state.c}{this.state.d}</Text>
                </View>

                <View style={stylesStoper.container}>
                    <Button
                        title='Start'
                        />
                    <Button

                        title='Stop'
                        />
                </View>
            </View>
            )
    }
}
const stylesStoper = StyleSheet.create({
    main :{
        display: 'flex',
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
      alignItems: 'center',
      justifyContent: 'space-around',

  },
  button:{

      width: 200,
      fontSize :50

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
