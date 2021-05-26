import React, {Component} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Text, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AccountSummary extends Component {
  state = {
    click: false,
    click1: false,
    data: [
      {
        id: 1,
        date: '28-01-2021',
        message: 'First Payment',
        price: '$ 20000',
      },
      {
        id: 2,
        date: '04-02-2021',
        message: 'First Payment',
        price: '$ 10000',
      },
      {
        id: 3,
        date: '19-02-2021',
        message: 'First Payment',
        price: '$ 10000',
      },
      {
        id: 4,
        date: '01-03-2021',
        message: 'First Payment',
        price: '$ 15500',
      },
      {
        id: 5,
        date: '09-05-2021',
        message: 'First Payment',
        price: '$ 11110',
      },
    ],
  };
  render() {
    return (
      <View>
        {this.state.click ? (
          <Modal animationType="fade" visible={true} transparent={true}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex: 1, backgroundColor: '#000000aa'}}>
              <ScrollView>
                <View
                  style={{
                    backgroundColor: '#ff8080',
                    marginTop: Platform.OS == 'android' ? 200 : 240,
                    marginLeft: 20,
                    marginRight: 20,
                    // marginBottom: Platform.OS == 'android' ? 280 : 240,
                    padding: 40,
                    borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25,
                    flex: 1,
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>Expenses</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      borderBottomWidth: 1,
                      paddingBottom: 5,
                      padding: 10,
                      borderBottomColor: 'black',
                      marginTop: 10,
                    }}>
                    <TextInput
                      selectionColor={'rgb(255, 140, 16)'}
                      placeholder="Amount "
                      placeholderTextColor="white"
                      style={{
                        flex: 1,
                        marginTop: Platform.OS === 'ios' ? 0 : -12,
                        padding: 5,
                        color: '#05375a',
                      }}
                      autoCapitalize="none"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      borderBottomWidth: 1,
                      paddingBottom: 5,
                      padding: 10,
                      borderBottomColor: 'black',
                      marginTop: 10,
                    }}>
                    <TextInput
                      selectionColor={'rgb(255, 140, 16)'}
                      placeholder="Description "
                      placeholderTextColor="white"
                      style={{
                        flex: 1,
                        marginTop: Platform.OS === 'ios' ? 0 : -12,
                        padding: 5,
                        color: '#05375a',
                      }}
                      autoCapitalize="none"
                    />
                  </View>

                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Button
                      onPress={() => this.setState({click: false})}
                      transparent>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 80,
                          fontWeight: 'bold',
                          alignItems: 'center',
                          color: 'white',
                        }}>
                        Cancel
                      </Text>
                    </Button>

                    <Button transparent>
                      <Text
                        style={{
                          fontSize: 12,
                          borderWidth: 1,
                          marginLeft: 10,
                          borderColor: 'red',
                          fontWeight: 'bold',
                          alignItems: 'center',
                          backgroundColor: 'red',
                          color: 'white',
                          padding: 7,
                        }}>
                        Save
                      </Text>
                    </Button>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </Modal>
        ) : null}

        {this.state.click1 ? (
          <Modal animationType="fade" visible={true} transparent={true}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex: 1, backgroundColor: '#000000aa'}}>
              <ScrollView>
                <View
                  style={{
                    backgroundColor: '#99ff99',
                    marginTop: Platform.OS === 'android' ? 200 : 240,
                    marginLeft: 20,
                    marginRight: 20,
                    // marginBottom: Platform.OS == 'android' ? 280 : 240,
                    padding: 40,
                    borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25,
                    flex: 1,
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>Income</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      borderBottomWidth: 1,
                      paddingBottom: 5,
                      padding: 10,
                      borderBottomColor: 'black',
                      marginTop: 10,
                    }}>
                    <TextInput
                      selectionColor={'rgb(255, 140, 16)'}
                      placeholder="Amount "
                      placeholderTextColor="white"
                      style={{
                        flex: 1,
                        marginTop: Platform.OS === 'ios' ? 0 : -12,
                        padding: 5,
                        color: '#05375a',
                      }}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      borderBottomWidth: 1,
                      paddingBottom: 5,
                      padding: 10,
                      borderBottomColor: 'black',
                      marginTop: 10,
                    }}>
                    <TextInput
                      selectionColor={'rgb(255, 140, 16)'}
                      placeholder="Description "
                      placeholderTextColor="white"
                      style={{
                        flex: 1,
                        marginTop: Platform.OS === 'ios' ? 0 : -12,
                        padding: 5,
                        color: '#05375a',
                      }}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                    />
                  </View>

                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Button
                      onPress={() => this.setState({click1: false})}
                      transparent>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 80,
                          fontWeight: 'bold',
                          alignItems: 'center',
                          color: 'white',
                        }}>
                        Cancel
                      </Text>
                    </Button>

                    <Button transparent>
                      <Text
                        style={{
                          fontSize: 12,
                          borderWidth: 1,
                          marginLeft: 10,
                          borderColor: 'green',
                          fontWeight: 'bold',
                          alignItems: 'center',
                          backgroundColor: 'green',
                          color: 'white',
                          padding: 7,
                        }}>
                        Save
                      </Text>
                    </Button>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </Modal>
        ) : null}

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
                Account and Summary
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 30, marginBottom: 20}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon name="add-circle" size={40} color="green" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Income</Text>
                <Text style={{color: 'grey', fontSize: 12}}>$10,000</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon name="remove-circle" size={40} color="red" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Expenses</Text>
                <Text style={{color: 'grey', fontSize: 12}}>-$2,500</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon name="ios-logo-codepen" size={40} color="blue" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Balance</Text>
                <Text style={{color: 'grey', fontSize: 12}}>$7,500</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView>
          <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>
            Transactions
          </Text>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    backgroundColor: 'white',
                    marginTop: index === 0 ? 0 : 10,
                    justifyContent: 'space-evenly',
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                  key={index}>
                  <Text>{item.date}</Text>
                  <Text>{item.message}</Text>
                  <Text style={{color: index === 0 ? 'green' : 'red'}}>
                    {item.price}
                  </Text>
                </View>
              );
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 30,
              marginTop: 20,
            }}>
            <Icon
              onPress={() => this.setState({click: true})}
              name="remove-circle"
              size={60}
              color="red"
            />
            <Icon
              onPress={() => this.setState({click1: true})}
              name="add-circle"
              size={60}
              color="green"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}


