import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Divider, AirbnbRating} from 'react-native-elements';
//import moment from "moment"
const {height, width} = Dimensions.get('window');
export default function HomeScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: 'Home',
      headerStyle: {
        backgroundColor: '#64E88F',
        //headerTransparent: true,
        //Sets Header color
      },
      headerTintColor: 'black',
      //Sets Header text color
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        // marginLeft: '18%',
        fontFamily: 'Cochin',
        fontSize: 25,

        //Sets Header text style
      },
    });
  }, [props.navigation]);

  const ModalItem = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Image
              style={{
                width: width * 0.2,
                height: width * 0.2,
                margin: height * 0.01,
              }}
              resizeMode="stretch"
              source={require('../assets/icon1.png')}
            />
            <Text
              style={[{...Styles.modalText, fontSize: 20, fontWeight: 'bold'}]}>
              Enjoying Salary Asset?
            </Text>
            <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
            <Text style={{fontSize: 15}}>App Store.</Text>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            <View style={{paddingVertical: 10}}>
              <AirbnbRating showRating={false} />
            </View>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            {/* <View style={{borderWidth:1,width: width * 0.9, borderColor:'gray'}}></View> */}
            <TouchableOpacity
              // style={{...Styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={[
                  {
                    ...Styles.textStyle,
                    color: '#000',
                    fontSize: height * 0.024,
                    paddingTop: height * 0.012,
                  },
                ]}>
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/bg55.jpg')}
      style={Styles.bckImg}>
      <View style={Styles.container}>
        <View style={Styles.TopView}>
          <TouchableOpacity
            style={Styles.col3}
            onPress={() => props.navigation.navigate('All')}>
            <Text style={Styles.headingtext}>The Money Saver</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.container1}>
          <View>
            <TouchableOpacity
              style={Styles.col1}
              onPress={() => props.navigation.navigate('CategoriesScreen')}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                Category
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.col2}
              onPress={() => props.navigation.navigate('AboutScreen')}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                About Us
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={Styles.col1}
              onPress={() => props.navigation.navigate('AllDetails')}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                All Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.col2}
              onPress={() => setModalVisible(true)}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                Rate Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ModalItem/>
    </ImageBackground>
  );
}
const Styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    // change the color property for better output
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  //......
  container: {
    width: '100%',
    height: '100%',
    //marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'white'
  },
  container1: {
    width: '90%',
    height: '40%',
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'black',
    borderTopWidth: 25,
    borderRadius: 50,
    opacity: 0.9,
    backgroundColor: '#AECE9A',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 25,
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    shadowOpacity: 0.7,
  },
  col1: {
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    marginBottom: '20%',
    // shadowOpacity:0.7,
    color: 'white',
    width: width * 0.4,
    height: height * 0.1,
    //marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

    display: 'flex',
    borderLeftWidth: 15,
    borderLeftColor: 'red',
    //borderBottomEndRadius:55,
    //borderTopStartRadius:55,
    borderBottomWidth: 15,
    borderBottomColor: 'red',
    //color:'white',
    //flexDirection:'row'
  },
  col2: {
    //borderBottomEndRadius:55,
    //borderTopStartRadius:55,
    borderBottomWidth: 15,
    borderBottomColor: 'red',
    borderRightWidth: 15,
    borderRightColor: 'red',
    //  backgroundColor:'#5F8945',

    width: width * 0.4,
    height: height * 0.1,
    //marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    shadowOpacity: 0.7,
    //flexDirection:'row'
  },
  col3: {
    //borderBottomEndRadius:55,
    //borderTopStartRadius:55,
    borderBottomWidth: 15,
    borderBottomColor: 'red',
    borderRightWidth: 15,
    borderRightColor: 'red',
    borderLeftColor: 'red',
    borderLeftWidth: 15,
    //  backgroundColor:'#5F8945',

    width: '75%',
    height: '80%',
    //marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    shadowOpacity: 0.7,
    //flexDirection:'row'
  },

  appName: {
    width: '95%',
    height: '10%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopView: {
    width: '90%',
    borderLeftColor: 'black',
    borderLeftWidth: 15,
    height: '35%',
    marginTop: '20%',
    backgroundColor: '#9BE1DB',
    borderTopColor: 'red',
    //     backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    shadowOpacity: 0.7,
    borderBottomEndRadius: 55,
    borderTopStartRadius: 55,
    borderBottomWidth: 25,
    borderBottomColor: 'red',
    justifyContent: 'space-around',
  },
  headingtext: {
    fontSize: 40,
    fontWeight: 'bold',
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'white',
    shadowOpacity: 0.7,
    fontFamily: 'Cochin',
    justifyContent: 'center',
    textAlign: 'center',
  },
  HeadingView: {
    width: '90%',
    height: '30%',
    // marginTop:'20%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    shadowOpacity: 0.7,
  },
  btnStyles1: {
    width: '70%',
    height: '100%',
    backgroundColor: 'white',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    // color:'white',
    tintColor: 'white',
    // marginRight:'30%',
    shadowOffset: {height: 2, width: 3},
    shadowOpacity: 0.9,
    borderWidth: 5,
    borderColor: 'red',
  },

  appText: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'white',
    shadowOpacity: 0.7,
    fontFamily: 'Cochin',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 55,
    fontWeight: 'bold',
    fontFamily: 'cochin',
    color: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  bckImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnbck: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    shadowOffset: {width: 3, height: 3},
    // shadowColor:'white',
    shadowOpacity: 0.7,
    fontFamily: 'Cochin',
    marginBottom: -40,
  },
  Image: {
    height: '100%',
    width: '100%',
    //marginBottom: '10%',
    resizeMode: 'contain',
    //tintColor:'red',
    marginTop: -100,
    backgroundColor: '#D9FAF1',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderRightColor: '#B0B0B0',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomColor: 'black',
    // borderBottomColor:'red black',

    borderLeftColor: '#B0B0B0',

    shadowOpacity: 0.7,
    shadowOffset: {width: 1, height: 1},
  },
});

// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Image,
//   ImageBackground,
//   Alert,
//   Dimensions,
//   StyleSheet,
// } from 'react-native';
// import {Divider, AirbnbRating} from 'react-native-elements';
// import {height, width} from '../components/dimensions';
// export default function HomeScreen(props) {
//   const [modalVisible, setModalVisible] = React.useState(false);
//   const handlePress = () => {
//     alert('pressed');
//   };

//   const Header = () => {
//     return (
//       <View
//         style={{
//           paddingTop: height * 0.05,
//           height: height * 0.15,
//           width: width,
//           backgroundColor: '#121',
//           justifyContent: 'center',
//           // flexDirection: 'row',
//           alignItems: 'center',
//         }}>
//         <View>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: height * 0.035,
//               fontWeight: 'bold',
//             }}>
//             Home
//           </Text>
//         </View>
//       </View>
//     );
//   };
//   const ButtonItem = ({text}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           switch (text) {
//             case 'Job Details':
//               props.navigation.navigate('CategoriesScreen');
//               break;
//             case 'All Details':
//               props.navigation.navigate('AllDetails');
//               break;
//             case 'About Us':
//               props.navigation.navigate('AboutScreen');
//               break;
//             case 'Rate Us':
//               setModalVisible(true);
//               break;
//             default:
//               break;
//           }
//         }}
//         style={{
//           width: width * 0.6,
//           height: height * 0.08,
//           backgroundColor: '#fff',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderBottomWidth: 4,
//           borderRadius: 10,
//           marginVertical: 10,
//         }}>
//         <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
//           {text}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   const ModalItem = () => {
//     return (
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//         }}>
//         <View style={Styles.centeredView}>
//           <View style={Styles.modalView}>
//             <Image
//               style={{
//                 width: width * 0.2,
//                 height: width * 0.2,
//                 margin: height * 0.01,
//               }}
//               resizeMode="stretch"
//               source={require('../assets/icon1.png')}
//             />
//             <Text
//               style={[{...Styles.modalText, fontSize: 20, fontWeight: 'bold'}]}>
//               Enjoying Salary Asset?
//             </Text>
//             <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
//             <Text style={{fontSize: 15}}>App Store.</Text>
//             <Divider
//               style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
//             />

//             <View style={{paddingVertical: 10}}>
//               <AirbnbRating showRating={false} />
//             </View>
//             <Divider
//               style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
//             />

//             {/* <View style={{borderWidth:1,width: width * 0.9, borderColor:'gray'}}></View> */}
//             <TouchableOpacity
//               // style={{...Styles.openButton, backgroundColor: '#2196F3'}}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}>
//               <Text
//                 style={[
//                   {
//                     ...Styles.textStyle,
//                     color: '#000',
//                     fontSize: height * 0.024,
//                     paddingTop: height * 0.012,
//                   },
//                 ]}>
//                 Not Now
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     );
//   };
//   return (
//     <ImageBackground source={require('../assets/bg55.jpg')} style={{flex: 1}}>
//       <Header />
//       {/* <View
//         style={{
//           flex: 1,
//           width,
//           backgroundColor: 'transparent',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <View
//           style={{
//             height: height * 0.15,
//             borderBottomWidth: 10,
//             borderLeftWidth: 5,
//             borderBottomColor: '#3955a8',
//             borderLeftColor: '#f33',
//             width: width * 0.95,
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: 3,
//             borderTopRightRadius: height * 0.03,
//             borderBottomLeftRadius: height * 0.03,
//             backgroundColor: 'rgb(135, 114, 61)',
//           }}>
//           <Text
//             style={{
//               fontSize: height * 0.05,
//               fontWeight: 'bold',
//               color: '#fffc45',
//             }}>
//             Salary
//           </Text>
//           <Text
//             style={{
//               fontSize: height * 0.04,
//               fontWeight: 'bold',
//               color: '#5afa4f',
//             }}>
//             - A Valuable Asset
//           </Text>
//         </View>
//       </View> */}
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <View
//           style={{
//             height: height * 0.25,
//             width: width * 0.9,
//             backgroundColor: '#09f',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderTopLeftRadius: height * 0.07,
//             borderBottomRightRadius: height * 0.07,
//             borderLeftWidth: 15,
//             borderBottomWidth: 10,
//             borderBottomColor: 'red',
//           }}>
//           <View
//             style={{
//               height: height * 0.17,
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderWidth: 10,
//               borderTopWidth: 0,
//               borderColor: 'red',
//               width: width * 0.8,
//               backgroundColor: '#fff',
//             }}>
//             <Text
//               style={{
//                 fontSize: height * 0.04,
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//               }}>
//               The Money Saver
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View
//         style={{
//           flex: 1,
//           width,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             height: height * 0.53,
//             backgroundColor: 'rgba(217, 176, 72,0.5)',
//             borderTopWidth: height * 0.03,
//             borderRightWidth: height * 0.02,
//             borderLeftWidth: height * 0.02,
//             borderTopColor: 'red',
//             borderRightColor: 'black',
//             borderLeftColor: 'black',
//             // borderColor:'black',
//             width: width * 0.85,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <View
//             style={{
//               height: height * 0.5,
//               backgroundColor: 'rgba(0,0,0,0.5)',
//               width: width * 0.8,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <ButtonItem text="Job Details" even={true} />
//             <ButtonItem text="All Details" even={false} />
//             <ButtonItem text="About Us" />
//             <ButtonItem text="Rate Us" />
//           </View>
//         </View>
//       </View>
//       <ModalItem />
//     </ImageBackground>
//   );
// }

// const Styles = StyleSheet.create({
//   // rest of the Styles
//   svgCurve: {
//     position: 'absolute',
//     width: Dimensions.get('window').width,
//   },
//   headerText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     // change the color property for better output
//     color: '#fff',
//     textAlign: 'center',
//     marginTop: 35,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     width: width * 0.9,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
