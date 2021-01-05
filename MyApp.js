import React, { Component } from "react";
import Matter from "matter-js"
import { GameEngine } from "react-native-game-engine"
import { Dimensions, StatusBar, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen")
const boxSize = Math.trunc(Math.max(width, height) * 0.75)
export class MyApp extends Component {
  render() {
    return (
      <GameRngine>
        <StatusBar hidden={true}/>
      </GameRngine>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flez: 1, backgroundColor: "#fff"
  }
})