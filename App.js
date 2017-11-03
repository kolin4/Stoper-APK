import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';



class Stoper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a:0,
            b:0,
            c:0,
            d:0,
            buttonName: 'Stop'
        }

    }
    clickStart = (e) => {

        console.log(e);
        // dorzycam clearInterval poniewaz przy paru kliknieciach na start interval przyspiesza.
        clearInterval(this.interval);
        this.interval = setInterval( () => {
            let {a,b,c,d} = this.state;
            d++;

            if ( d == 10 ){
                c++;
                d = 0;
            }
            if ( c == 6)  {
                b++,
                c = 0,
                d= 0
            }
            if ( b == 10){
                a++;
                b = 0;
            }

            if ( a == 10 ){
                a = 9;
                b = 9;
                c = 9;
                d = 9;

                clearInterval(this.interval);

            }

            this.setState({
                a,
                b,
                c,
                d,
                buttonName: 'Stop'
            })

        },1000 )
    }
    clickStop = (e) => {

        if (this.state.buttonName == 'Stop') {
            clearInterval(this.interval);
            this.setState({
                buttonName: 'Reset'
            })
        } else if ( this.state.buttonName == 'Reset') {
            this.setState({
                a:0,
                b:0,
                c:0,
                d:0,
                buttonName: 'Stop'
            })
        }

    }


    componentWillUnmount(){
        clearInterval(this.interval);
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

                        onPress={this.clickStart}
                        title='Start'

                        fontSize = {30}
                        />
                    <Button
                        buttonStyle = {stylesStoper.btn}
                        onPress={this.clickStop}
                        title={this.state.buttonName}

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
