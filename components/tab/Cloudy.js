import React, { Component } from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Button, Title, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Right, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../images/img(4).jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../../images/img(5).jpg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../../images/img(6).jpg'),
  }
];
export default class DeckSwiperExample extends Component {

  static navigationOptions = {
    // tabBarLabel: 'Cloudy',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-cloudy" size={20} color={tintColor}></Ionicons>
    )
  }

  render() {
    return (
      <Container>
        <Header style={{height: 45}}>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='add' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}