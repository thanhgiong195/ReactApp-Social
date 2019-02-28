import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import {Card,CardItem, Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'

export default class CardComponent extends Component {
  render() {
    return (
      <Card>
          <CardItem>
              <Left>
                  <Thumbnail source={require('../images/avarta1.jpg')} />
                  <Body>
                    <Text>BebeGalaxy</Text>
                    <Text note style={{fontSize:12}}>Jan 15, 2018</Text>
                  </Body>
              </Left>
          </CardItem>
          <CardItem>
            <Image source={this.props.imageSource}
              style={{height: 200, width: null, flex: 1}}
            />
          </CardItem>
      </Card>
    )
  }
}
