import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';

interface Props {
  navigation: any;
}

const EmailContent: React.FC<Props> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* NavHeader */}
      <View style={styles.navHeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <Image
              source={require('../screens/image/back.png')}
              style={styles.backIcon}
            />
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.navIconsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddPersonScreen')}
            style={styles.navIcon}>
            <Image
              source={require('../screens/image/addperson.png')}
              style={styles.addPersonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.navIcon}>
            <Image
              source={require('../screens/image/Group.png')}
              style={styles.groupIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Email Content */}
      <View style={styles.emailContentContainer}>
        {/* Title */}
        <Text style={styles.title}>Important Message</Text>

        {/* Grey Line */}
        <View style={styles.greyLine} />

        {/* Sender Info */}
        <View style={styles.senderInfo}>
          <View style={styles.senderDetails}>
            <Image
              source={require('../screens/image/profile.png')}
              style={styles.profileIcon}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.senderName}>Zaheer</Text>
              <Image
                source={require('../screens/image/person.png')}
                style={styles.rightIcon}
              />
            </View>
          </View>
          <Text style={styles.time}>9:30 AM</Text>
        </View>
        {/* Email Text */}
        <Text style={styles.emailText}>
          Time to check your bank information...
        </Text>
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => console.log('Pin option pressed')}>
              <Text style={styles.modalButtonText}>Pin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => console.log('Delete option pressed')}>
              <Text style={styles.modalButtonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Bottom Reply Section */}
      <View style={styles.bottomReplyContainer}>
        <View style={styles.greyLine} />
        <View style={styles.replyMinimizeContainer}>
          <TouchableOpacity style={styles.replyContainer}>
            <Image
              source={require('../screens/image/reply.png')}
              style={styles.replyIcon}
            />
            <Text style={styles.replyText}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1790FC',
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
  backIcon: {
    width: 15,
    height: 15,
  },
  navIconsContainer: {
    flexDirection: 'row',
  },
  navIcon: {
    marginRight: 10,
  },
  addPersonIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  groupIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  emailContentContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  greyLine: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  senderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  toMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toMeText: {
    fontSize: 14,
    color: '#555555',
    marginRight: 5,
  },
  downArrowIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  rightIcon: {
    width: 20,
    height: 20,
    marginLeft: 5, // Adjust the spacing between the name and the icon as needed
  },
  time: {
    fontSize: 14,
    color: '#555555',
  },
  emailText: {
    fontSize: 16,
    marginTop: 10,
  },
  bottomReplyContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  replyMinimizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  replyText: {
    fontSize: 16,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 250,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#1D1B20',
  },
  modalCloseButton: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default EmailContent;
