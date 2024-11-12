import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmailScreen = () => {
  const navigation = useNavigation();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      {/* NavHeader */}
      <View style={[styles.navHeaderContainer, { backgroundColor: '#1790FC' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <Image
              source={require('../screens/image/back.png')}
              style={[styles.icon, { width: 15, height: 15 }]}
            />
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>New Message</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => console.log('Share button pressed')}
            style={{ marginRight: 12 }}>
            <Image
              source={require('../screens/image/share.png')}
              style={[styles.icon, styles.searchButton]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Send button pressed')}
            style={{ marginRight: 12 }}>
            <Image
              source={require('../screens/image/send.png')}
              style={[styles.icon, styles.searchButton]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Search button pressed')}>
            <Image
              source={require('../screens/image/delete.png')}
              style={[styles.icon, styles.searchButton]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>To :</Text>
          <TextInput
            style={styles.input}
            value={to}
            onChangeText={setTo}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Subject :</Text>
          <TextInput
            style={styles.input}
            value={subject}
            onChangeText={setSubject}
          />
        </View>
        <View style={styles.line} />
        <TextInput
          placeholder="Write message...."
          style={[styles.input, styles.textArea]}
          value={body}
          onChangeText={setBody}
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 14,
  },
  logoContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  logoText: {
    color: 'white',
    alignSelf: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  searchButton: {
    width: 12,
    height: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    color: 'black',
  },
  input: {
    flex: 1,
    padding: 4,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
    padding: 4,
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default EmailScreen;
