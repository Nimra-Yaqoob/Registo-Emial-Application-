import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

interface Props {
  navigation: any;
}

const Inbox: React.FC<Props> = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Home');
  const [selectedMessageTab, setSelectedMessageTab] = useState('Group');

  const handleTabSelect = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const handleMessageTabSelect = (tabName: string) => {
    setSelectedMessageTab(tabName);
  };

  const emails = Array(10).fill({
    id: 1,
    profileImage: require('../screens/image/profile.png'), // Assuming profile icon is in PNG format
    senderName: 'Zaheer',
    subject: 'Meeting Reminder',
    snippet: 'Don’t forget our meeting tomorrow at 10am...',
    date: 'May 18',
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require('../screens/image/searchgrey.png')}
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Search message</Text>
      </View>

      <View style={styles.messageTabs}>
        <TouchableOpacity onPress={() => handleMessageTabSelect('Group')} style={[styles.messageTab, selectedMessageTab === 'Group' && styles.selectedMessageTab]}>
          <Text style={[styles.messageTabText, selectedMessageTab === 'Group' && styles.selectedMessageTabText]}>Group</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMessageTabSelect('Private')} style={[styles.messageTab, selectedMessageTab === 'Private' && styles.selectedMessageTab]}>
          <Text style={[styles.messageTabText, selectedMessageTab === 'Private' && styles.selectedMessageTabText]}>Private</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMessageTabSelect('Tickets')} style={[styles.messageTab, selectedMessageTab === 'Tickets' && styles.selectedMessageTab]}>
          <Text style={[styles.messageTabText, selectedMessageTab === 'Tickets' && styles.selectedMessageTabText]}>Tickets</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.mainContent}>
        {emails.map((email, index) => (
          <TouchableOpacity key={index} style={styles.emailItem} onPress={() => navigation.navigate('EmailContent')}>
            <Image source={email.profileImage} style={styles.profileImage} />
            <View style={styles.emailContent}>
              <Text style={styles.senderName}>{email.senderName}</Text>
              <Text style={styles.emailSubject}>{email.subject}</Text>
              <Text style={styles.emailSnippet}>{email.snippet}</Text>
            </View>
            <Text style={styles.emailDate}>{email.date}</Text>
            <Image
              source={require('../screens/image/pingrey.png')} // Assuming you have a pin image
              style={styles.pinIcon}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('EmailScreen')} style={styles.fabContainer}>
        <Image
          source={require('../screens/image/FAB.png')}
          style={styles.fabIcon}
        />
      </TouchableOpacity>

      <View style={[styles.bottomNavBar, styles.bottomTabBar]}>
        <TouchableOpacity onPress={() => handleTabSelect('Home')}>
          <Image
            source={
              selectedTab === 'Home'
                ? require('../screens/image/homeblue.png')
                : require('../screens/image/homegrey.png')
            }
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Home'
                ? styles.selectedTab
                : styles.unselectedTab,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('Message')}>
          <Image
            source={
              selectedTab === 'Message'
                ? require('../screens/image/msgblue.png')
                : require('../screens/image/msggrey.png')
            }
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Message'
                ? styles.selectedTab
                : styles.unselectedTab,
            ]}
          >
            Message
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('Notification')}>
          <Image
            source={
              selectedTab === 'Notification'
                ? require('../screens/image/notiblue.png')
                : require('../screens/image/notigrey.png')
            }
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Notification'
                ? styles.selectedTab
                : styles.unselectedTab,
            ]}
          >
            Notification
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('Task')}>
          <Image
            source={
              selectedTab === 'Task'
                ? require('../screens/image/taskblue.png')
                : require('../screens/image/taskgrey.png')
            }
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Task'
                ? styles.selectedTab
                : styles.unselectedTab,
            ]}
          >
            Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  searchIcon: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  searchText: {
    color: '#49454F',
    fontSize: 14,
  },
  messageTabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  messageTab: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#E6F7FF',
    marginHorizontal: 3,
    alignItems: 'center',
  },
  selectedMessageTab: {
    borderWidth: 1,
    borderColor: '#1790FC',
  },
  messageTabText: {
    fontSize: 12,
    color: '#49454F',
  },
  selectedMessageTabText: {
    color: '#1790FC',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  emailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10, // Added margin to create space between items
    position: 'relative', // Ensure the emailDate can be positioned absolutely
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  emailContent: {
    flex: 1,
  },
  senderName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  emailSubject: {
    fontSize: 12,
    color: '#49454F',
  },
  emailSnippet: {
    fontSize: 12,
    color: '#757575',
  },
  emailDate: {
    position: 'absolute',
    right: 0,
    fontSize: 12,
    color: '#757575',
  },
  pinIcon: {
    width: 12,
    height: 12,
    //tintColor: 'blue',
    marginTop: 60,
    marginRight: 8, // Reduced margin
    marginLeft: 10, // Moved the pin icon to the left
  },
  fabContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    //backgroundColor: '#1790FC',
    borderRadius: 30,
    padding: 10,
  },
  fabIcon: {
    width: 50,
    height: 50,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  selectedTab: {
    color: '#1790FC',
  },
  unselectedTab: {
    color: '#B9BCBE',
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Inbox;
