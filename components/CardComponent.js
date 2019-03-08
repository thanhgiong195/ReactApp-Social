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
              <Text>{this.props.userName}</Text>
              <Text note style={{fontSize:12}}>Jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Image source={this.props.imageSource}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}
