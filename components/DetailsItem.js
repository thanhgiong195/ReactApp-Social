import React, { Component } from 'react'
import { View, Text, Image } from "react-native";
import { Button, Header, Title, Content, Card, CardItem, Left, Body, Icon, Right, Container } from 'native-base';

export default class DetailsItem extends Component {
  render() {

    const { navigation } = this.props;
    const title = navigation.getParam('title', 'NO-ID');
    const img_url = navigation.getParam('img_url');
    const releaseYear = navigation.getParam('releaseYear', '');
    const description = navigation.getParam('description');

    return (
      <Container>
        <Header noShadow style={{height: 45}}>
          <Left>
            <Button transparent button onPress={() => this.props.navigation.navigate('Home') }>
              <Icon name="arrow-back" size={10}/>
              <Text style={{fontSize: 16, color: 'white'}}> Back</Text>
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Text style={{fontSize: 24}}>{title}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Image source={{uri: img_url}} 
                style={{height: 300, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Text>
                {description}
              </Text>
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
        </Content>
      </Container>
    )
  }
}
