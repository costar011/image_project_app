import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 50}}>
        <Text style={{fontSize: 30, fontWeight: `700`, color: `#999`}}>
          4LEAF SOFTWARE
        </Text>
      </View>
      <TextInput style={styles.inputstyle} placeholder="ID" />
      <TextInput style={styles.inputstyle} placeholder="PASSWORD" />

      <View style={styles.findBox}>
        <TouchableOpacity>
          <Text style={styles.findText}>Forget Your ID?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.findText}>Find Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.findBox}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: `center`,
    justifyContent: `center`,
  },
  inputstyle: {
    width: `80%`,
    height: 45,

    marginBottom: 15,

    borderColor: `#999`,
    borderBottomWidth: 1,
    borderBottomWidth: 1,

    padding: 10,
    borderRadius: 5,
    shadowColor: `#777`,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  findBox: {
    width: `80%`,
    padding: 5,
    flexDirection: `row`,
    justifyContent: `space-between`,
    marginBottom: 100,
  },

  findText: {
    color: `#1e3799`,
    fontWeight: `600`,
  },

  btn1: {
    width: `50%`,
    height: 40,
    marginRight: 5,
    borderRadius: 5,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `#54a0ff`,
  },

  btn2: {
    width: `50%`,
    height: 40,
    marginLeft: 5,
    borderRadius: 5,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `#2e86de`,
  },
  btnText: {
    fontSize: 20,
    fontWeight: `600`,
    color: `#fff`,
  },
});

export default App;
