import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {Text, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function AccountSummary({navigation, route}) {
  const user_id = route.params;
  // console.log(user_id);
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     date: '28-01-2021',
  //     message: 'First Payment',
  //     price: '$ 20000',
  //   },
  //   {
  //     id: 2,
  //     date: '04-02-2021',
  //     message: 'First Payment',
  //     price: '$ 10000',
  //   },
  //   {
  //     id: 3,
  //     date: '19-02-2021',
  //     message: 'First Payment',
  //     price: '$ 10000',
  //   },
  //   {
  //     id: 4,
  //     date: '01-03-2021',
  //     message: 'First Payment',
  //     price: '$ 15500',
  //   },
  //   {
  //     id: 5,
  //     date: '09-05-2021',
  //     message: 'First Payment',
  //     price: '$ 11110',
  //   },
  // ]);
  const [trans_cat, setTrans_cat] = useState(true);
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [TotalIncome, setTotalIncome] = useState();
  const [TotalExpense, setTotalExpense] = useState();
  const [icome, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const data = [...icome, ...expense];
  console.log(data);
  useEffect(() => {
    console.log(user_id);
    var config = {
      method: 'post',
      url: 'https://suretostop.com/accounting/getData/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        id: user_id,
      }),
    };
    axios(config)
      .then(function (response) {
        setTotalExpense(response.data.TotalExpense);
        setTotalIncome(response.data.TotalIncome);
        setIncome(response.data.income);
        setExpense(response.data.expense);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const Addincome = () => {
    setClick1(false);
    setTrans_cat(true);
  };
  const AddExpense = () => {
    setClick(false);
    setTrans_cat(false);
  };

  const Submit = () => {
    var data = JSON.stringify({
      user_id: user_id,
      TransactionAmmount: amount,
      transaction_name: desc,
      TransactionCategory: trans_cat,
    });
    var config = {
      method: 'post',
      url: 'https://suretostop.com/accounting/add/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View>
      {console.log(TotalExpense)}
      {click ? (
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
                    keyboardType="numeric"
                    onChangeText={setAmount}
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
                    onChangeText={setDesc}
                  />
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <Button onPress={AddExpense} transparent>
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

                  <Button transparent onPress={() => Submit()}>
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

      {click1 ? (
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
                    keyboardType="numeric"
                    onChangeText={setAmount}
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
                    onChangeText={setDesc}
                  />
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <Button onPress={() => Addincome()} transparent>
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

                  <Button transparent onPress={() => Submit()}>
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
            onPress={() => navigation.goBack()}
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
              <Text style={{color: 'grey', fontSize: 12}}>${TotalIncome}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Icon name="remove-circle" size={40} color="red" />
            <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Expenses</Text>
              <Text style={{color: 'grey', fontSize: 12}}>
                -${TotalExpense}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Icon name="ios-logo-codepen" size={40} color="blue" />
            <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Balance</Text>
              <Text style={{color: 'grey', fontSize: 12}}>
                ${TotalIncome - TotalExpense}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>
          Transactions
        </Text>
        <FlatList
          data={data}
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
                <Text>{item.TransactionAmmount}</Text>
                <Text>{item.transaction_name}</Text>
                <Text style={{color: item.income ? 'green' : 'red'}}>
                  {item.TransactionAmmount}
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
            onPress={() => setClick(true)}
            name="remove-circle"
            size={60}
            color="red"
          />
          <Icon
            onPress={() => setClick1(true)}
            name="add-circle"
            size={60}
            color="green"
          />
        </View>
      </ScrollView>
    </View>
  );
}
