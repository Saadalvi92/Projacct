import React, {useState} from "react";
import {AsyncStorage, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const userInfo = {email: "test@gmail.com", password: "1234567"}

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = () => {

        if (email === userInfo.email && password === userInfo.password) {
            alert("login succeed")
        } else {
            alert("not valid")
        }
    }

    const signUp = () => {
        console.log(email);
        console.log(password);
        let item = {email, password}
        fetch("https://accounting.suretostop.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).then(res => res.json()).then(resData => {

            if (resData.detail) {
                console.log(resData.detail)
            } else {

                let token = 'JWT' + resData.accessToken
                console.log(token)
                try {
                    AsyncStorage.setItem(
                        'token',
                        accessToken
                    );
                    AsyncStorage.setItem(
                        'refresh',
                        resData.refresh
                    );
                    console.log("rakha geya ha")

                } catch (error) {
                    console.log(error)
                    // Error saving data
                }

                // const value =  AsyncStorage.getItem('token');
                //console.log("geting value")
                //console.log(_retrieveData());
                props.navigation.navigate("Projacct")
            }

        }).catch(error => console.log(error))


    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white"/>
            <View>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={[
                            styles.text,
                            {marginTop: 10, fontSize: 22, fontWeight: "bold"},
                        ]}
                    >
                        Sign In
                    </Text>
                </View>
                <View style={{flex: 1, marginTop: 100}}>
                    <Text>Sign in with</Text>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: "row",
                            justifyContent: 'space-between',
                        }}
                    >
                        <TouchableOpacity>
                            <View style={[styles.socialButtons, {backgroundColor: "#0000ff"}]}>
                                <Text style={[styles.text, {color: 'white'}]}> Facebook </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[styles.socialButtons, {backgroundColor: 'red'}]}>
                                <Text style={[styles.text, {color: 'white'}]}> Google </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text
                        style={[
                            styles.text,
                            {
                                color: "black",
                                fontSize: 15,
                                fontWeight: 'bold',

                                marginTop: 30,
                                marginBottom: 30,
                            },
                        ]}
                    >
                        or
                    </Text>

                    <View>
                        <TextInput
                            placeholderTextColor='grey'
                            placeholder='enter your email'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input}
                        />
                        <View
                            style={{borderBottomWidth: 1, borderBottomColor: "#D8D8D8"}}
                        ></View>

                        <View style={{marginTop: 32, marginBottom: 8}}>
                            <TextInput
                                placeholderTextColor='grey'
                                placeholder='enter your password'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                style={styles.input}
                            />
                            <View
                                style={{borderBottomWidth: 1, borderBottomColor: "#D8D8D8"}}
                            ></View>
                        </View>
                    </View>

                    <TouchableOpacity style={[styles.submitContainer]} onPress={() => {
                        signUp()
                    }}>
                        <Text
                            style={[
                                styles.text,
                                {color: "#fff", fontWeight: "600", fontSize: 16},
                            ]}
                        >
                            Sign In
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('SignUpOption')}>
                        <Text
                            style={[
                                styles.text,
                                {
                                    fontSize: 14,
                                    marginTop: 24,
                                    color: "#ABB4BD",
                                },
                            ]}
                        >
                            need an account?
                            <Text style={[styles.text, styles.link]}> Sign Up</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Text
                            style={[
                                styles.text,
                                {
                                    fontSize: 14,
                                    marginTop: 24,
                                    color: "#ABB4BD",
                                },
                            ]}
                        >
                            forget your password?
                            <Text style={[styles.text, styles.link]}> Retrive </Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

export default Login;


const styles = StyleSheet.create({
    inputTitle: {
        color: "#ABB4BA",
        fontSize: 14,
    },
    input: {
        paddingVertical: 12,
        color: "#1D2020",
        fontSize: 14,
    },
    text: {
        color: "black",
    },
    socialButtons: {
        flexDirection: "row",
        // marginHorizontal: 12,
        marginVertical: 0,
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171,180,189,0.65)",
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowColor: "rgba(171,180,189,0.35)",
        shadowOffset: {width: 0, height: 12},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
    socialLogo: {
        marginRight: 8,
    },
    link: {
        color: "orange",
        fontSize: 14,
        fontWeight: "500",
    },
    submitContainer: {
        backgroundColor: "orange",
        fontSize: 16,
        borderRadius: 10,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgba(255,22,84,0.24)",
        shadowOffset: {width: 0, height: 9},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
    },
});

