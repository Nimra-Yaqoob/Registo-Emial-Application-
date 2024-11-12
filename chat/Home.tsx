import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Home');
 // const [messages, setMessages] = useState<any[]>([]); // State to hold messages

  // useEffect(() => {
  //   // Fetch initial messages when component mounts
  //   fetchMessages();
  // }, []);

  // const fetchMessages = async () => {
  //   try {
  //     const response = await fetch('https://localhost:44332/api/UserMessage');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch messages');
  //     }
  //     const data = await response.json();
  //     setMessages(data); // Update messages state with fetched data
  //   } catch (error) {
  //     console.error('Error fetching messages:', error);
  //   }
  // };

  const handleTabSelect = (tabName: string) => {
    setSelectedTab(tabName);
    if (tabName === 'Home') {
      navigation.navigate('LoginScreen'); // Navigate to the Login screen
    } else if (tabName === 'Message') {
      navigation.navigate('Inbox');
    }
  };

  const handleBackButtonClick = () => {
   // fetchMessages(); // Example: Re-fetch messages on back button click
    console.log('Back button pressed');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* NavHeader */}
      <View style={styles.navHeaderContainer}>
        <TouchableOpacity onPress={handleBackButtonClick}>
          <View style={styles.backButton}>
            <Image
              source={require('../screens/image/back.png')}
              style={styles.backIcon}
            />
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Message</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Search button pressed')}>
          <Image
            source={require('../screens/image/search.png')}
            style={styles.searchButton}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Image
          source={require('../screens/image/nomsg.png')}
          style={styles.homeImage}
        />
        <Text style={styles.title}>No Messages</Text>
        <Text style={styles.subText}>
          No messages available right now. To create a new message, click on the
          create message button.
        </Text>
      </View>

      {/* FAB Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('EmailScreen')} style={styles.fabContainer}>
        <Image
          source={require('../screens/image/FAB.png')}
          style={styles.fabIcon}
        />
      </TouchableOpacity>

      {/* BottomNavBar */}
      <View style={styles.bottomNavBar}>
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
            ]}>
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
            ]}>
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
            ]}>
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
            ]}>
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
  navHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    alignSelf: 'center',
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
  searchButton: {
    width: 40,
    height: 40,
  },
  backIcon: {
    width: 12,
    height: 12,
  },
  homeImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    borderRadius: 30,
    padding: 10,
  },
  fabIcon: {
    width: 50,
    height: 50,
  },
});

export default Home;
