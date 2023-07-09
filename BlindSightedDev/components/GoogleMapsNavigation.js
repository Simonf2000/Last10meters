import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Linking,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GoogleMapsNavigation = () => {
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
  const [locationStatus, setLocationStatus] = useState();
  const [destinationLatitude, setDestinationLatitude] = useState();
  const [destinationLongitude, setDestinationLongitude] = useState();
  const [destinationAddress, setDestinationAddress] = useState();

  // TO REQUEST FOR DEVICE or USER'S PERMISSION
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your Location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // TO CHECK IF PERMISSION IS GRANTED
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  // WILL PROVIDE THE USER'S CURRENT LOCATION
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      position => {
        setLocationStatus('You are Here');

        //GETTING THE LATITUDE and LONGITUDE FROM THE LOCATION JSON
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);

        // SETTINT LATITUDE and LONGITUDE STATES
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  // TO GET THE LOCATION ANYTIME THE USER CHANGES POSITION
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setLocationStatus('You are Here');
        console.log(position);
        //GETTING THE CURRENT LATITUDE and LONGITUDE FROM THE LOCATION JSON
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);

        // SETTING CURRENT LATITUDE and LONGITUDE STATES
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  // GEOCODING LOCATIONS BY ADDRESS
  useEffect(() => {
    Geocoder.init('AIzaSyAcK-jzHI4oPCuwjkzzGp5l-lzejTnKET0');
    Geocoder.from('Glasgow')
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);

        // TO GET DESTINATION LATITUDE AND LONGITUDE
        const destinationLatitude = JSON.stringify(location.lat);
        const destinationLongitude = JSON.stringify(location.lng);

        // SETTING DESTINATION LATITUDE and LONGITUDE STATES
        setDestinationLatitude(destinationLatitude);
        setDestinationLongitude(destinationLongitude);
      })
      .catch(error => console.warn(error));
  }, []);

  // TO OPEN GOOGLE MAPS
  const openMaps = () => {
    const origin = {
      latitude: currentLatitude,
      longitude: currentLongitude,
    };

    const destination = {
      latitude: destinationLatitude,
      longitude: destinationLongitude,
    };
    if ((origin.latitude, origin.longitude)) {
      const url = `https://www.google.com/maps/search/?api=1&query=${origin.latitude},${origin.longitude}`;
      Linking.openURL(url);
    } else {
      alert('Location not available');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.strikethroughText}>BLINDSIGHTED</Text>
      </View>
      <View style={{flex: 3}}>
        <TextInput style={styles.input} placeholder="Search" />
        {/* <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAcK-jzHI4oPCuwjkzzGp5l-lzejTnKET0',
            language: 'en',
          }}
          styles={{
            textInput: styles.input,
            listView: styles.listView,
            container: styles.autocompleteContainer,
            separator: styles.separator,
          }}
          listViewDisplayed={false}
        /> */}
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity style={styles.button} onPress={openMaps}>
          <Text style={styles.buttonText}>OPEN GOOGLE MAPS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// STYLESHEET FOR THE HOMEPAGE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  strikethroughText: {
    textDecorationLine: 'line-through',
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  //   input: {
  //     backgroundColor: '#ffffff',
  //     borderRadius: 8,
  //     padding: 10,
  //     fontSize: 16,
  //     width: '100%',
  //   },
  //   autocompleteContainer: {
  //     flex: 1,
  //     padding: 10,
  //     shadowColor: 'black',
  //     shadowOffset: {width: 2, height: 2},
  //     shadowOpacity: 0.5,
  //     width: '100%',
  //     height: '20%',
  //     padding: 8,
  //     borderRadius: 8,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   listView: {
  //     backgroundColor: '#ffffff',
  //     borderRadius: 8,
  //     marginTop: 5,
  //   },
  //   separator: {
  //     height: 0.5,
  //     backgroundColor: '#c8c8c8',
  //   },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default GoogleMapsNavigation;
