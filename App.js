import React,{Compnent} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Compnent() {
  constructor(){
    super();
    this.state = {
      weather:''
    }
  }
  getWeather=()=>{
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return(
      fetch(url).then(response=>response.json())
      .then(responseJson=>{
        this.setState({
          weather:responseJson
        })
      })
      .catch(error=>{
        console.error(error)
      })
    )
  }
  CompnentDidMount=()=>{
    this.getWeather()
  }
  render(){
    if(this.state.weather===''){
      return(
        <View>
          <Text> Loading.... </Text>
        </View>
      )
    }
    else{
      return (
        <View style={styles.container} >
          <View style={styles.subContainer}>
            <Text style={styles.title}> Weather Forcast </Text>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 18}} > {this.state.weather.main.temp}&deg;C </Text>
              <Text style={{ fontSize: 20, margin:10}} > humidity:{this.state.weather.main.humidity} </Text>
            </View>

          </View>
        </View>
       );
    }
    
  }
  
}

const styles = StyleSheet.create({ 
  container: { flex:1 }, 
  subContainer : { flex: 1, borderWidth: 1, alignItems: 'center' }, 
  title:{ marginTop: 50, fontSize: 30, fontWeight: '550' }, 
  cloudImage :{ width: 200, height: 200, marginTop: 30 }, 
  textContainer,
})