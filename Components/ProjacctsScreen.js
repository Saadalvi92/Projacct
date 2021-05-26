import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DonutCharts from './DonutCharts';
export default class ProjacctsScreen extends Component {
  render() {
    return (
      <>
        <View
          style={{
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0ad41',
          }}>
          <StatusBar backgroundColor="#f0ad41" />
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                marginLeft: 90,
                width: 50,
                height: 50,
                backgroundColor: 'white',
                borderRadius: 30,
              }}
              source={require('../assests/fingerprint.png')}
            />
            <View
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>Projacct</Text>
              <Text style={{color: 'grey'}}>Project and Account Tracker</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{width: '100%', marginLeft: 20, marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Project Status
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon name="add-circle" size={30} color="red" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>To Do</Text>
                <Text style={{color: 'grey', fontSize: 12}}>1 Projects</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon name="disc-sharp" size={30} color="blue" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>In Progress</Text>
                <Text style={{color: 'grey', fontSize: 12}}>1 Projects</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon name="checkmark-done-circle" size={30} color="green" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>Done</Text>
                <Text style={{color: 'grey', fontSize: 12}}>0 Projects</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Account')}
            style={{
              borderBottomRightRadius: 50,
              borderTopRightRadius: 50,
              height: 180,
              backgroundColor: 'silver',
              width: '100%',
              marginTop: 20,
            }}>
            <View style={{marginLeft: 20, marginTop: 8}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Account Summary
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon name="add-circle" size={30} color="green" />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontWeight: 'bold'}}>Income</Text>
                  <Text style={{color: 'grey', fontSize: 12}}>$10,000</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon name="remove-circle" size={30} color="red" />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontWeight: 'bold'}}>Expenses</Text>
                  <Text style={{color: 'grey', fontSize: 12}}>-$2,500</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon name="ios-logo-codepen" size={30} color="blue" />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontWeight: 'bold'}}>Balance</Text>
                  <Text style={{color: 'grey', fontSize: 12}}>$7,500</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <Text style={{marginTop: 15, fontSize: 20, fontWeight: 'bold'}}>
                My Projects
              </Text>
              <View>
                <Icon name="add-circle-sharp" size={50} color="green" />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditProject')}
                style={{
                  borderRadius: 30,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'blue',
                  opacity: 0.6,
                }}>
                <View>
                  <DonutCharts percentage={8} color="white" max={10} />
                  <View style={{marginTop: 10}}>
                    <Text style={{color: 'white'}}>Masjid Renovation</Text>
                    <Text style={{color: 'silver'}}>Mohammad</Text>
                  </View>
                </View>
                <Icon
                  name="md-ellipsis-vertical"
                  size={25}
                  color="white"
                  style={{top: 10, right: 10, position: 'absolute'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditProject')}
                style={{
                  opacity: 0.7,
                  borderRadius: 30,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'red',
                }}>
                <View>
                  <DonutCharts percentage={14} color="white" max={20} />
                  <View style={{marginTop: 10}}>
                    <Text style={{color: 'white'}}>40 House Projects</Text>
                    <Text style={{color: 'silver'}}>Govt</Text>
                  </View>
                </View>
                <Icon
                  name="md-ellipsis-vertical"
                  size={25}
                  color="white"
                  style={{top: 10, right: 10, position: 'absolute'}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditProject')}
                style={{
                  borderRadius: 30,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'green',
                  opacity: 0.6,
                }}>
                <View>
                  <DonutCharts percentage={20} color="white" max={30} />
                  <View style={{marginTop: 10}}>
                    <Text style={{color: 'white'}}>Payment Projects</Text>
                    <Text style={{color: 'silver'}}>Smith</Text>
                  </View>
                </View>
                <Icon
                  name="md-ellipsis-vertical"
                  size={25}
                  color="white"
                  style={{top: 10, right: 10, position: 'absolute'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditProject')}
                style={{
                  opacity: 0.6,
                  borderRadius: 30,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'blue',
                }}>
                <View>
                  <DonutCharts percentage={80} color="white" max={100} />
                  <View style={{marginTop: 10}}>
                    <Text style={{color: 'white'}}>2 Stories Buildings</Text>
                    <Text style={{color: 'silver'}}>Abdul</Text>
                  </View>
                </View>
                <Icon
                  name="md-ellipsis-vertical"
                  size={25}
                  color="white"
                  style={{top: 10, right: 10, position: 'absolute'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
