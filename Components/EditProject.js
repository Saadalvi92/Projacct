import React, {Component} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Text, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import Moment from 'moment';

export default class EditProject extends Component {
  state = {
    trackLength: 300,
    timeElapsed: '0.00',
    timeRemaining: '5:00',
  };

  changeTime = seconds => {
    this.setState({timeElapsed: Moment.utc(seconds * 1000).format('m:ss')});
    this.setState({
      timeRemaining: Moment.utc(
        (this.state.trackLength - seconds) * 1000,
      ).format('m:ss'),
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#f0ad41',
          }}>
          <StatusBar backgroundColor="#f0ad41" />
          <View style={{flexDirection: 'row', margin: 10}}>
            <Icon
              onPress={() => this.props.navigation.goBack()}
              name="md-chevron-back-outline"
              size={30}
              color="black"
            />
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                Edit Project
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 30, marginBottom: 20}}>
            <Text style={{marginLeft: 15, fontSize: 14}}>Project Name</Text>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                margin: 10,
                paddingBottom: 5,
                borderBottomColor: 'black',
                marginTop: 10,
              }}>
              <TextInput
                selectionColor={'rgb(255, 140, 16)'}
                placeholder="Masjid Renovation "
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  marginTop: Platform.OS === 'ios' ? 0 : -12,
                  padding: 5,
                  color: '#05375a',
                  fontSize: 18,
                }}
                autoCapitalize="none"
              />
            </View>

            <Text style={{marginLeft: 15, marginTop: 10, fontSize: 14}}>
              Planned Completion at
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 5,
                borderBottomColor: 'black',
                marginTop: 10,
                margin: 10,
              }}>
              <TextInput
                selectionColor={'rgb(255, 140, 16)'}
                placeholder="28-02-2021"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  marginTop: Platform.OS === 'ios' ? 0 : -12,
                  padding: 5,
                  color: '#05375a',
                  fontSize: 18,
                }}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>

        <ScrollView>
          <Text style={{marginLeft: 25, marginTop: 20, fontSize: 14}}>
            Client
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 5,
              borderBottomColor: 'black',
              marginTop: 10,
              margin: 20,
            }}>
            <TextInput
              selectionColor={'rgb(255, 140, 16)'}
              placeholder="Mohammad"
              placeholderTextColor="grey"
              style={{
                flex: 1,
                marginTop: Platform.OS === 'ios' ? 0 : -12,
                padding: 5,
                color: '#05375a',
                fontSize: 18,
              }}
              autoCapitalize="none"
            />
          </View>

          <Text style={{marginLeft: 25, marginTop: 10, fontSize: 14}}>
            Location
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 5,
              borderBottomColor: 'black',
              marginTop: 10,
              margin: 20,
            }}>
            <TextInput
              selectionColor={'rgb(255, 140, 16)'}
              placeholder="#10, Eat Avenue, Chennai"
              placeholderTextColor="grey"
              style={{
                flex: 1,
                marginTop: Platform.OS === 'ios' ? 0 : -12,
                padding: 5,
                color: '#05375a',
                fontSize: 18,
              }}
              autoCapitalize="none"
            />
          </View>

          <Text style={{marginLeft: 25, marginTop: 10, fontSize: 14}}>
            Estimated Budget in $
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 5,
              borderBottomColor: 'black',
              marginTop: 10,
              margin: 20,
            }}>
            <TextInput
              selectionColor={'rgb(255, 140, 16)'}
              placeholder="20000"
              placeholderTextColor="grey"
              style={{
                flex: 1,
                marginTop: Platform.OS === 'ios' ? 0 : -12,
                padding: 5,
                color: '#05375a',
                fontSize: 18,
              }}
              autoCapitalize="none"
            />
          </View>

          <Text style={{marginLeft: 25, marginTop: 10, fontSize: 14}}>
            Status
          </Text>
          <Slider
            minimunValue={2}
            maximumValue={this.state.trackLength}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimunTrackTintColor="#93A8B3"
            onValueChange={seconds => this.changeTime(seconds)}
            style={{marginTop: 10, marginLeft: 20, marginRight: 20}}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#0099ff',
              borderRadius: 20,
              marginTop: 50,
              padding: 10,
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Save Project</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
