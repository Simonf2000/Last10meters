<<<<<<< HEAD
# Whattheheckisthis

React Native + Google Vision API mobile application to identify objects in pictures taken using an android phone. Technically could also be compiled into an ios app but needs testing.

I wrote about it at [hazlanrozaimi.com](http://www.hazlanrozaimi.com/2017/07/building-an-image-recognition-mobile-app/)

## Screenshots
![coffee](https://i.imgur.com/5MTzEz1.png)

![pepsi](http://i.imgur.com/WsRgp1t.png)

## Getting Started

First, install dependencies by running
```
npm install
```
Get an API key for Google Cloud Vision [here](https://console.cloud.google.com/apis/credentials), then replace it in config.json
```
"apiKey": "please_enter_your_api_key_here"
```

To run in debug mode (youd need to connect an actual android device that can be found with adb)
```
react-native run-android
```

### Prerequisites

You'd need 
* Android SDK (Easiest to download everything with [Android Studio](https://developer.android.com/studio/index.html)) 
* npm or yarn
* Your own Google Cloud Vision Api key. Get one [here](https://console.cloud.google.com/apis/credentials)

## Building an apk

You'd want to generate a signing key and build the apk like [here](https://facebook.github.io/react-native/docs/signed-apk-android.html)

## Built With

* [create-react-native-app](https://github.com/react-community/create-react-native-app) - Create a React Native app on any OS with no build config.
* [Google Cloud Vision API](https://cloud.google.com/vision/) - Allows developers to easily integrate vision detection features within applications, including image labeling, face and landmark detection, optical character recognition (OCR), and tagging of explicit content.

* [react-native-camera](https://github.com/lwansbrough/react-native-camera) - A Camera component for React Native.
* [react-native-image-resizer](https://github.com/bamlab/react-native-image-resizer) - Resize local images with React Native
* [react-native-image-to-base64](https://github.com/xfumihiro/react-native-image-to-base64) - React Native module to get Image's base64 string
* [react-native-spinkit](https://github.com/maxs15/react-native-spinkit) - A collection of animated loading indicators


## Contributing

I'm open to reasonable pull requests to just play around with the application for fun

## Authors

* **Hazlan Rozaimi** - *Initial work* - [dividezero](https://github.com/dividezero)


## License

This project is licensed under the MIT License 

## Acknowledgments

* Inspiration https://hackernoon.com/building-silicon-valleys-hot-dog-app-in-one-night-aab8969cef0b
=======
# Last10meters

GPS systems for blind people can provide useful guidance for most of the journey. However, currently available systems are not accurate enough to guide the user the last short distance (10 metres or so) to the entrance. An environmental information beacon could be placed at the entrance and guide the use, with for instance an infrared signal. However, these beacons are not widely used. Therefore, a technological solution, preferably in the form of an app on the user's phone or other mobile device, is required to solve this problem. The following is required of the app: 

• Compute an appropriate path from the user's currentlocation to the target entrance. 
• Guiding the user along this path to the target entrance, using appropriate sensors 
• Using appropriate sensors to identify and safely avoid obstacles and hazards along the path.
• Obtaining crowd-sourced information about the local area and using it to determine a safe path and the appropriate entrance if there is more than one.
• Have a user friendly interface with speech and gesture input and speech, non-speech audio and haptic output. Individual students will investigate, develop to 
  prototype level and, if time permits, test with endusersone (or more) of the following: • An appropriate guideance algorithm and combination of sensors to guide 
  the user to the target entrance while avoiding obstacles and hazards. • Different designs of end-user interface
• A crowd-sourcing algorithm
>>>>>>> 67d0f78b9e63bc12dee95786f0c8ccc5e50be6f2
