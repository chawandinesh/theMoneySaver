import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Categories(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#64E88F',
      },
      headerTitle: 'Category',
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: '18%',
        fontFamily: 'Cochin',
        fontSize: 25,

      },
    });
  }, [props.navigation]);
  return (
    <ImageBackground
      source={require('../assets/bg55.jpg')}
      style={Styles.bckImg}>
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.col1}
          onPress={() => props.navigation.navigate('Details', {data: "Full Time"})}>
          <Image
            style={Styles.Image}
            source={require('../assets/icon1.png')}></Image>
          <Text style={Styles.headingtext}>Full Time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.col2}
          onPress={() => props.navigation.navigate('Details', {data: 'Part Time'})}>
          <Image
            style={Styles.Image}
            source={require('../assets/icon1.png')}></Image>
          <Text style={Styles.headingtext}>Part Time</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.col1}
          onPress={() => props.navigation.navigate('Details', {data: 'Casual'})}>
          <Image
            style={Styles.Image}
            source={require('../assets/icon1.png')}></Image>
          <Text style={Styles.headingtext}>Casual</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.col2}
          onPress={() => props.navigation.navigate('Details', {data:"Fixed Terms"})}>
          <Image
            style={Styles.Image}
            source={require('../assets/icon1.png')}></Image>
          <Text style={Styles.headingtext}>Fixed Ter..</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.col1}
          onPress={() => props.navigation.navigate('Details', {data:"Others"})}>
          <Image
            style={Styles.Image}
            source={require('../assets/icon1.png')}></Image>
          <Text style={Styles.headingtext}>Others</Text>
        </TouchableOpacity>
{/* 
        <TouchableOpacity
          style={Styles.col1}
          onPress={() => props.navigation.navigate('JerryG')}>
          <Image
            style={Styles.Image}
            source={require('../assets/icon1.png')}></Image>
          <Text style={Styles.headingtext}>Shift Worker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.col2}
          onPress={() => props.navigation.navigate('Plife')}>
          <Image
            style={Styles.Image}
            source={require('../assets/icon1.png')}></Image>
          <Text style={Styles.headingtext}>Daily Hire</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
}

// import React from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import {Icon} from 'react-native-elements';
// import {width, height} from '../components/dimensions';
// import {SalaryContext} from './context';
// export default function Categories(props) {
//   const {state, setState, fathima} = React.useContext(SalaryContext);
//   console.log(state, fathima);
//   const Header = () => {
//     return (
//       <View
//         style={{
//           width,
//           paddingTop: height * 0.05,
//           height: height * 0.15,
//           backgroundColor: '#121',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//         <TouchableOpacity>
//           <Icon
//             onPress={() => props.navigation.goBack()}
//             name="ios-arrow-back-outline"
//             type="ionicon"
//             size={height * 0.05}
//             style={{paddingLeft: 5}}
//             color="#fff"
//           />
//         </TouchableOpacity>
//         <View>
//           <Text
//             style={{
//               color: '#fff',
//               fontWeight: 'bold',
//               fontSize: height * 0.04,
//             }}>
//             Categories
//           </Text>
//         </View>
//         <View></View>
//       </View>
//     );
//   };
//   const renderContent = ({item, index}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate('Details', {data: item})}
//         style={{
//           width: width * 0.9,
//           height: height * 0.17,
//           backgroundColor: 'darkred',
//           borderColor: '#fff',
//           borderTopRightRadius: height * 0.05,
//           borderBottomLeftRadius: height * 0.05,
//           borderWidth: height * 0.02,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: height * 0.035,
//         }}>
//         <View
//           style={{
//             backgroundColor: '#61aad4',
//             borderWidth: 3,
//             borderTopRightRadius: height * 0.02,
//             borderBottomLeftRadius: height * 0.02,
//             width: width * 0.7,
//             borderLeftWidth: height * 0.009,
//             borderRightWidth: height * 0.009,
//             borderBottomWidth: height * 0.008,
//             height: height * 0.1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               color: '#000',
//               fontSize: height * 0.04,
//               fontWeight: 'bold',
//             }}>
//             {item}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const Content = () => {
//     return (
//       <FlatList
//         contentContainerStyle={{alignItems: 'center'}}
//         data={['Full Time', 'Part Time', 'Casual', 'Fixed Terms']}
//         renderItem={renderContent}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     );
//   };
//   return (
//     <ImageBackground source={require('../assets/bg5.jpg')} style={{flex: 1}}>
//       <Header />
//       <Content />
//     </ImageBackground>
//   );
// }

// import React from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import {Icon} from 'react-native-elements';
// import {width, height} from '../components/dimensions';
// import {SalaryContext} from './context';
// export default function Categories(props) {
//   const {state, setState, fathima} = React.useContext(SalaryContext);
//   console.log(state, fathima);
//   const Header = () => {
//     return (
//       <View
//         style={{
//           width,
//           paddingTop: height * 0.05,
//           height: height * 0.15,
//           backgroundColor: '#121',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//         <TouchableOpacity>
//           <Icon
//             onPress={() => props.navigation.goBack()}
//             name="ios-arrow-back-outline"
//             type="ionicon"
//             size={height * 0.05}
//             style={{paddingLeft: 5}}
//             color="#fff"
//           />
//         </TouchableOpacity>
//         <View>
//           <Text
//             style={{
//               color: '#fff',
//               fontWeight: 'bold',
//               fontSize: height * 0.04,
//             }}>
//             Categories
//           </Text>
//         </View>
//         <View></View>
//       </View>
//     );
//   };
//   const renderContent = ({item, index}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate('Details', {data: item})}
//         style={{
//           width: width * 0.9,
//           height: height * 0.17,
//           backgroundColor: 'darkred',
//           borderColor: '#fff',
//           borderTopRightRadius: height * 0.05,
//           borderBottomLeftRadius: height * 0.05,
//           borderWidth: height * 0.02,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: height * 0.035,
//         }}>
//         <View
//           style={{
//             backgroundColor: '#61aad4',
//             borderWidth: 3,
//             borderTopRightRadius: height * 0.02,
//             borderBottomLeftRadius: height * 0.02,
//             width: width * 0.7,
//             borderLeftWidth: height * 0.009,
//             borderRightWidth: height * 0.009,
//             borderBottomWidth: height * 0.008,
//             height: height * 0.1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               color: '#000',
//               fontSize: height * 0.04,
//               fontWeight: 'bold',
//             }}>
//             {item}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const Content = () => {
//     return (
//       <FlatList
//         contentContainerStyle={{alignItems: 'center'}}
//         data={['Full Time', 'Part Time', 'Casual', 'Fixed Terms']}
//         renderItem={renderContent}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     );
//   };
//   return (
//     <ImageBackground source={require('../assets/bg5.jpg')} style={{flex: 1}}>
//       <Header />
//       <Content />
//     </ImageBackground>
//   );
// }

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    //   backgroundColor:'white'
  },

  col1: {
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    shadowOpacity: 0.7,
    width: '90%',
    height: '15%',
    //marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#993366',
    borderWidth: 5,
    borderBottomColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    borderBottomEndRadius: 15,
    borderTopStartRadius: 55,
    // borderBottomWidth:5,
    // borderBottomColor:'black',

    marginTop: '2%',

    //flexDirection:'row'
  },
  col2: {
    shadowOffset: {height: 2, width: 2},
    marginTop: '2%',
    justifyContent: 'center',
    shadowColor: 'black',
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderBottomColor: 'blue',
    shadowOpacity: 0.7,
    width: '90%',
    height: '15%',
    //marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    display: 'flex',

    //borderBottomEndRadius:55,
    //borderTopStartRadius:55,
    borderBottomWidth: 5,
    borderBottomColor: 'black',

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
    height: '30%',
    // marginTop:'20%',
    backgroundColor: '#64E88F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {height: 2, width: 2},
    shadowColor: 'black',
    shadowOpacity: 0.7,
    borderBottomEndRadius: 55,
    borderTopStartRadius: 55,
    borderBottomWidth: 25,
    borderBottomColor: '#EB3B9C',
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
    backgroundColor: 'white',
    width: 200,
    // marginBottom:'10%',
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
    backgroundColor: 'black',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight:'30%',
    shadowOffset: {height: 2, width: 3},
    shadowOpacity: 0.9,
    borderWidth: 5,
    borderColor: 'red',
    borderBottomColor: 'white',
    borderBottomWidth: 5,
  },

  appText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'white',
    shadowOpacity: 0.7,
    fontFamily: 'Cochin',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 35,
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
    shadowColor: 'white',
    shadowOpacity: 0.7,
    fontFamily: 'Cochin',
    marginBottom: -20,
  },
  Image: {
    height: '80%',
    //position:'absolute',
    width: '20%',
    marginRight: '30%',
    //marginBottom: '10%',
    resizeMode: 'contain',
    // marginTop:'15%',
    //tintColor:'red',

    shadowOpacity: 0.7,
    shadowOffset: {width: 1, height: 1},
    tintColor: 'white',
  },
});
