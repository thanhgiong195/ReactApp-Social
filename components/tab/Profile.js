import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Content, Thumbnail, Header, Left, Right, Body, Icon, Button} from 'native-base'
import CardComponent from '../CardComponent'

var images = [
  require('../../images/img(1).jpg'),
  require('../../images/img(2).jpg'),
  require('../../images/img(3).jpg'),
  require('../../images/img(4).jpg'),
  require('../../images/img(5).jpg'),
  require('../../images/img(6).jpg'),
  require('../../images/img(7).jpg'),
  require('../../images/img(8).jpg'),
  require('../../images/img(9).jpg'),
  require('../../images/img(10).jpg'),
  require('../../images/img(11).jpg'),
  require('../../images/img(12).jpg')
]

var {width,height} = Dimensions.get('window')

export default class Settings extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-person" size={20} color={tintColor}></Ionicons>
    )
  }

  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  segmentClicker = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {
    return images.map((image,index) => {
      return(
        <View key={index} style={[ {width: (width) / 3}, {height: (width) / 3}, {marginBottom: 2},
          index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}
        ]}>
          <Image style={{flex:1, width:undefined, height:undefined}}
            source={image}
          ></Image>
        </View>
      )
    })
  }

  renderSection = () => {
    if(this.state.activeIndex == 0){
      return(
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex == 1){
      return (
        <View>
          <CardComponent imageSource="1" likes="100"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="302"/>
          <CardComponent imageSource="4" likes="403"/>
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={{flex:1, backgroundColor: 'while'}}>
          <Header>
             <Left><Ionicons name="ios-camera" size={25} color={'white'} style={{paddingLeft: 10}}></Ionicons></Left> 
             <Body center><Text style={{color: '#fff'}}>BebeGalaxy</Text></Body>
             <Right><Ionicons name="ios-send" size={25} color={'white'} style={{paddingRight: 10}}></Ionicons></Right>
          </Header>
          <Content>
            <View style={{paddingTop: 10}}>
              <View style={{ flexDirection: 'row'}}>
                <View style={{flex:1, alignItems: 'center'}}>
                  <Image source={require('../../images/avarta1.jpg')} style={{width:75,height:75, borderRadius: 50}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <View style={{alignItems: 'center'}}>
                      <Text>20</Text>
                      <Text style={{fontSize: 10, color: 'grey'}}>posts</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text>200</Text>
                      <Text style={{fontSize: 10, color: 'grey'}}>followers</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text>201</Text>
                      <Text style={{fontSize: 10, color: 'grey'}}>following</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', paddingTop: 10}}>
                    <Button bordered dark style={{flex:3, marginLeft:10, justifyContent: 'center', height:30}}>
                      <Text>Edit profile</Text>
                    </Button>
                    <Button bordered dark style={{flex:1, marginRight:10, marginLeft: 5, justifyContent: 'center', height:30}}>
                      <Icon name="settings"></Icon>
                    </Button>
                  </View>
                </View>
              </View>

              <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
                <Text style={{fontWeight: 'bold'}}>BebeGalaxy</Text>
                <Text>Lark | Dev ReactNative</Text>
                <Text>www.fb.com/giongbt</Text>
              </View>

              <View>
                <View style={{flexDirection:'row', justifyContent: 'space-around', borderTopWidth:1, borderTopColor:'#eae5e5'}}>
                  <Button transparent 
                    onPress={()=>this.segmentClicker(0)}
                    active={this.state.activeIndex == 0}  
                  >
                    <Icon name="ios-apps"
                      style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}
                    />
                  </Button>
                  <Button transparent 
                    onPress={()=>this.segmentClicker(1)}
                    active={this.state.activeIndex == 1}  
                  >
                    <Icon name="ios-list"
                      style={[this.state.activeIndex == 1 ? {} : {color: 'grey'}]}
                    />
                  </Button>
                  <Button transparent 
                    onPress={()=>this.segmentClicker(2)}
                    active={this.state.activeIndex == 2}  
                  >
                    <Icon name="ios-people"
                      style={[this.state.activeIndex == 2 ? {} : {color: 'grey'}]}
                    />
                  </Button>
                  <Button transparent 
                    onPress={()=>this.segmentClicker(3)}
                    active={this.state.activeIndex == 3}  
                  >
                    <Icon name="ios-bookmark"
                      style={[this.state.activeIndex == 3 ? {} : {color: 'grey'}]}
                    />
                  </Button>
                </View>
              </View>
            </View>
            {this.renderSection()}
          </Content>
      </Container>
    )
  }
}
