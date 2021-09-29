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

// const MyPager = () => {
//   return (
//     <PagerView style={styles.pagerView} initialPage={0}>
//       <View key="1">
//         <Text>First page</Text>
//       </View>
//       <View key="2">
//         <Text>Second page</Text>
//       </View>
//     </PagerView>
//   );
// };

const StoreInfo = ({animatedValue, storeName}) => {
  return (
    <View>
      <View style={styles.bannerContainer}>
        <Animated.Image
          source={require('../images/main01.jpg')}
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
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>맛</Text>이
                최고에요!
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
                최근리뷰 35
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
                최근사장님댓글 34
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
                <Text style={{fontSize: 15}}>전화</Text>
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
                <Text style={{fontSize: 15}}>찜 275</Text>
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
                <Text style={{fontSize: 15}}>공유</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* 쿠폰 */}
      <View style={{paddingHorizontal: 20, marginBottom: 20}}>
        <Image
          source={require('../images/visual_welcome.jpg')}
          style={{width: '100%', height: 80}}
          resizeMode="contain"
        />
      </View>
      {/* //쿠폰 */}
      {/* 가게 정보 탭 */}
      <Tab01 />
      {/* <MyPager /> */}
      {/* //가게 정보 탭 */}
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
