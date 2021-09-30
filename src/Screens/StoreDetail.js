import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navDate, menus, storeName} from '../../data';
import {TAB_TITLE, TOPNAVI_H} from '../constans';
import StoreInfo from './StoreInfo';
import TopNavigation from '../Components/TopNavigation';
import Tab02 from '../Components/Tab02';
import pageAction from '../redux/actions';

const StoreDetail = () => {
  const [selectedId, setSelectedId] = React.useState(0); // 선택 메뉴 아이디 저장
  const scrolling = React.useRef(new Animated.Value(0)).current; // Animated 이벤트 생성
  const {isView, selectType} = useSelector(state => state.page);
  const [type, setType] = React.useState(0);
  const safeArea = useSafeAreaInsets();
  const dispatch = useDispatch();

  return (
    <>
      <TopNavigation title={storeName} animatedValue={scrolling} />
      {isView && (
        <View style={styles.fixedTabContainer(safeArea.top)}>
          <View
            style={{
              flex: 1,
              height: '100%',
              borderWidth: 1,
              borderBottomWidth: selectType === 0 ? 0 : 1,
              borderLeftWidth: 0,
              borderRightWidth: selectType === 0 ? 1 : 0,
              borderColor: '#e6e6e6',
              borderTopColor: '#222',
              borderTopWidth: selectType === 0 ? 2 : 0,
            }}>
            <TouchableWithoutFeedback
              onPress={() => dispatch(pageAction.setTab02Type(0))}>
              <View style={{paddingTop: 15}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: TAB_TITLE,
                    fontWeight: selectType === 0 ? 'bold' : 'normal',
                    color: selectType === 0 ? '#222' : '#666',
                    marginTop: selectType === 0 ? 0 : 2,
                  }}>
                  메뉴
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              borderWidth: 1,
              borderBottomWidth: selectType === 1 ? 0 : 1,
              borderLeftWidth: selectType === 1 ? 1 : 0,
              borderRightWidth: selectType === 1 ? 1 : 0,
              borderColor: '#e6e6e6',
              borderTopColor: '#222',
              borderTopWidth: selectType === 1 ? 2 : 0,
            }}>
            <TouchableWithoutFeedback
              onPress={() => dispatch(pageAction.setTab02Type(1))}>
              <View style={{paddingTop: 15}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: TAB_TITLE,
                    fontWeight: selectType === 1 ? 'bold' : 'normal',
                    color: selectType === 1 ? '#222' : '#666',
                    marginTop: selectType === 1 ? 0 : 2,
                  }}>
                  정보
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              borderWidth: 1,
              borderBottomWidth: selectType === 2 ? 0 : 1,
              borderRightWidth: 0,
              borderLeftWidth: selectType === 2 ? 1 : 0,
              borderColor: '#e6e6e6',
              borderTopColor: '#222',
              borderTopWidth: selectType === 2 ? 2 : 0,
            }}>
            <TouchableWithoutFeedback
              onPress={() => dispatch(pageAction.setTab02Type(2))}>
              <View style={{paddingTop: 15}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: TAB_TITLE,
                    fontWeight: selectType === 2 ? 'bold' : 'normal',
                    color: selectType === 2 ? '#222' : '#666',
                    marginTop: selectType === 2 ? 0 : 2,
                  }}>
                  리뷰
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
      <View style={{zIndex: -1}}>
        <Animated.ScrollView
          nestedScrollEnabled
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrolling}}}],
            {
              useNativeDriver: true,
            },
          )}
          scrollEventThrottle={16}>
          <View style={{backgroundColor: '#fff'}}>
            <StoreInfo storeName={storeName} animatedValue={scrolling} />
            <View style={{height: 1, backgroundColor: '#e5e5e5'}} />
            <View style={{height: 10, backgroundColor: '#f5f5f5'}} />
            <Tab02 animatedValue={scrolling} />
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fixedTabContainer: safeAreaTop => ({
    // paddingTop: safeAreaTop + 10,
    position: 'absolute',
    top: TOPNAVI_H + safeAreaTop,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: 50,
    backgroundColor: '#fff',
    zIndex: 100,
  }),
});

export default StoreDetail;
