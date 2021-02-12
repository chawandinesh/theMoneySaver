import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import {TextInput} from 'react-native-gesture-handler';
import {height, width} from '../components/dimensions';
import {SalaryContext} from './context';
export default function Form(props) {
  const {state, setState} = React.useContext(SalaryContext);
  const {data, index} = props.route.params;
  const [formState, setFormState] = React.useState({
    name: '',
    dateOfJoining: '',
    Designation: '',
    selectCategory: '',
    amount: '',
    image: '',
  });

  React.useEffect(() => {
    if (index === 0 || index) {
      setFormState(state[data][index]);
    }
  }, []);

  const handleDelete = () => {
    setState({...state, [data]: state[data].filter((e, idx) => idx !== index)});
    props.navigation.goBack();
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log('error');
      });
  };

  const handleSubmit = () => {
    //update

    if (index === 0 || index) {
      console.log('update');
      [...state[data].splice(index, 1, formState)];
      setState(state);

      //update
    } else {
      //create
      console.log('create');
      setState({...state, [data]: [...state[data], formState]});
      console.log(data);
    }
    props.navigation.goBack();
  };
  return (
    <ImageBackground source={require('../assets/bg1.jpeg')} style={{flex: 1}}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View
          style={{
            width,
            paddingTop: height * 0.05,
            height: height * 0.15,
            backgroundColor: '#000',
            flexDirection: 'row',
            //   backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Icon
              onPress={() => props.navigation.goBack()}
              name="ios-arrow-back-outline"
              type="ionicon"
              size={height * 0.05}
              style={{paddingLeft: 5}}
              color="#fff"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: height * 0.04,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {index === 0 || index ? 'Edit Details' : 'Add Details'}
          </Text>
          {index === 0 || index ? (
            <Icon
              onPress={() => handleDelete()}
              name="trash"
              type="ionicon"
              color="red"
              size={height * 0.03}
              style={{paddingLeft: height * 0.01, padding: 3}}
              activeOpacity={0.5}
            />
          ) : (
            <View></View>
          )}
        </View>
        <View style={{marginTop: height * 0.1}}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: height * 0.08,
                justifyContent: 'center',
                width: width * 0.94,
                backgroundColor: '#affafa',
                marginBottom: height * 0.02,
              }}>
              <TextInput
                onChangeText={(text) =>
                  setFormState({...formState, name: text})
                }
                value={formState.name}
                placeholder="Name"
                style={{backgroundColor: '#fff', height: height * 0.05}}
              />
            </View>

            <View
              style={{
                height: height * 0.08,
                justifyContent: 'center',
                width: width * 0.94,
                backgroundColor: '#a0fafa',
                marginBottom: height * 0.02,
              }}>
              <TextInput
                onChangeText={(text) =>
                  setFormState({...formState, dateOfJoining: text})
                }
                value={formState.dateOfJoining}
                placeholder="Date of joining"
                style={{backgroundColor: '#fff', height: height * 0.05}}
              />
            </View>

            <View
              style={{
                height: height * 0.08,
                justifyContent: 'center',
                width: width * 0.94,
                backgroundColor: '#a0fafa',
                marginBottom: height * 0.02,
              }}>
              <TextInput
                onChangeText={(text) =>
                  setFormState({...formState, Designation: text})
                }
                value={formState.Designation}
                placeholder="Designation"
                style={{backgroundColor: '#fff', height: height * 0.05}}
              />
            </View>

            <View
              style={{
                height: height * 0.08,
                justifyContent: 'center',
                width: width * 0.94,
                backgroundColor: '#a0fafa',
                marginBottom: height * 0.02,
              }}>
              <TextInput
                onChangeText={(text) =>
                  setFormState({...formState, selectCategory: text})
                }
                value={formState.selectCategory}
                placeholder="Select Currency"
                style={{backgroundColor: '#fff', height: height * 0.05}}
              />
            </View>

            <View
              style={{
                height: height * 0.08,
                justifyContent: 'center',
                width: width * 0.94,
                backgroundColor: '#a0fafa',
                marginBottom: height * 0.02,
              }}>
              <TextInput
                onChangeText={(text) =>
                  setFormState({...formState, amount: text})
                }
                value={formState.amount}
                placeholder="Amount"
                style={{backgroundColor: '#fff', height: height * 0.05}}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: width * 0.9,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                height: height * 0.1,
                width: height * 0.1,
                borderWidth: 2,
                backgroundColor: '#fdd',
              }}>
              {formState.image.length ? (
                <Image
                  source={{uri: formState.image}}
                  style={{height: height * 0.1, width: height * 0.1}}
                />
              ) : (
                <View
                  style={{
                    height: height * 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text> No Image</Text>
                </View>
              )}
            </TouchableOpacity>
            <View>
              <Icon
                name="ios-arrow-back-outline"
                type="ionicon"
                size={height * 0.05}
                style={{paddingLeft: 5}}
                color="#fff"
              />
            </View>

            <View>
              <Text
                style={{
                  fontSize: height * 0.04,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Add Image
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: height * 0.03,
            }}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                width: width * 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.09,
                borderBottomWidth: 8,
                borderLeftWidth: 4, 
                borderRightWidth: 4,
                backgroundColor: '#787',
                borderRadius: height * 0.03,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: height * 0.04,
                  color: '#fff',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
