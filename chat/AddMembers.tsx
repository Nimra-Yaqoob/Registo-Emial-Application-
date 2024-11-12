import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { handleFetchUserMessages } from '../screens/apiService';

interface Item {
  id: string;
  name: string;
  email: string;
  checked: boolean;
}

const AddPersonScreen: React.FC = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<Item[]>(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: (i + 1).toString(),
      name: 'Same Name',
      email: 'same.email@example.com',
      checked: false,
    }))
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckboxChange = (id: string) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleAddMemberPress = () => {
    // Logic to add member and show modal
    //setModalVisible(true);
    //check UserMessage response
    handleFetchUserMessages();
  };

  const handleDonePress = () => {
    // Logic when "Done" button is pressed
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* NavHeader */}
      <View style={styles.navHeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <Image source={require('../screens/image/back.png')} style={[styles.icon, { width: 15, height: 15 }]} />
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* List of Emails */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.emailItem}>
            <View style={styles.emailDetails}>
              <Text style={styles.emailName}>{item.name}</Text>
              <Text style={styles.emailEmail}>{item.email}</Text>
            </View>
            <CheckBox
              value={item.checked}
              onValueChange={() => handleCheckboxChange(item.id)}
              style={styles.checkbox}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.emailList}
      />

      {/* Add Member Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddMemberPress}>
        <Text style={styles.addButtonText}>Add Member</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Member has been added successfully</Text>
            <Text style={styles.subText}>Invitations are sent to the group members.</Text>
            <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
  },
  navHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1790FC',
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
  icon: {
    width: 30,
    height: 30,
  },
  emailList: {
    flexGrow: 1,
  },
  emailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  emailDetails: {
    flex: 1,
  },
  emailName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailEmail: {
    fontSize: 14,
    color: '#555555',
  },
  checkbox: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginLeft: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1790FC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
  },
  subText: {
    fontSize: 14,
    color: '#555555',
    marginTop: 10,
  },
  doneButton: {
    backgroundColor: '#1790FC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddPersonScreen;
