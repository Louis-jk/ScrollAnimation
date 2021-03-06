import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Tab01 from '../Components/Tab01';
import {BANNER_H} from '../constans';

const StoreInfo = ({animatedValue, storeName}) => {
  return (
    <View>
      <View style={styles.bannerContainer}>
        <Animated.Image
          source={{
            uri: 'https://i.pinimg.com/originals/c4/ca/24/c4ca24ea9bb19c7dd6f44aaf0a636cb4.jpg',
          }}
          style={styles.banner(animatedValue)}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          position: 'relative',
          height: 220,
        }}>
        <View
          style={{
            position: 'absolute',
            top: -35,
            width: Dimensions.get('window').width - 40,
            paddingVertical: 20,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginVertical: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 25, marginBottom: 15}}>
              {storeName}
            </Text>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Image
                source={require('../images/thumbup.png')}
                style={{width: 35, height: 35}}
                resizeMode="cover"
              />
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>???</Text>???
                ????????????!
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Text style={{textAlign: 'center', fontSize: 14, color: '#666'}}>
                ???????????? 35
              </Text>
              <View
                style={{
                  height: '65%',
                  width: 1,
                  backgroundColor: '#666',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{textAlign: 'center', fontSize: 14, color: '#666'}}>
                ????????????????????? 34
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/phone-call.png')}
                  style={{width: 15, height: 15, marginRight: 5}}
                  resizeMode="contain"
                />
                <Text style={{fontSize: 15}}>??????</Text>
              </TouchableOpacity>
              <View
                style={{width: 1, height: '65%', backgroundColor: '#e6e6e6'}}
              />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/heart.png')}
                  style={{width: 15, height: 15, marginRight: 5}}
                  resizeMode="contain"
                />
                <Text style={{fontSize: 15}}>??? 275</Text>
              </TouchableOpacity>
              <View
                style={{width: 1, height: '65%', backgroundColor: '#e6e6e6'}}
              />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/share.png')}
                  style={{width: 15, height: 15, marginRight: 5}}
                  resizeMode="contain"
                />
                <Text style={{fontSize: 15}}>??????</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* ?????? */}
      <View style={{paddingHorizontal: 20, marginBottom: 20}}>
        <Image
          source={require('../images/visual_welcome.jpg')}
          style={{width: '100%', height: 80}}
          resizeMode="contain"
        />
      </View>
      {/* //?????? */}
      {/* ?????? ?????? ??? */}
      <Tab01 />
      {/* //?????? ?????? ??? */}
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: 200,
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: animatedValue => ({
    height: BANNER_H,
    width: '100%',
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: animatedValue.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 1, 0.5],
        }),
      },
    ],
  }),
});

export default StoreInfo;
