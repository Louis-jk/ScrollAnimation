import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Alert,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import pageAction from '../../redux/actions';
import {TAB_TITLE, TOPNAVI_H} from '../../constans';
import TabContent01 from '../Tab02/TabContent01';
import TabContent02 from '../Tab02/TabContent02';
import TabContent03 from '../Tab02/TabContent03';

const index = ({animatedValue}) => {
  const [type, setType] = useState(0);
  const [tabY, setTabY] = useState(0);
  const viewRef = useRef(null);
  const safeArea = useSafeAreaInsets();
  const isFloating = !!animatedValue;
  const [isFixed, setFixed] = useState(isFloating); // true상태

  const {isView, selectType} = useSelector(state => state.page);
  const dispatch = useDispatch();

  console.log('isView', isView);

  const doMeasure = () => {
    viewRef.current.measure((x, y, width, height, pageX, pageY) => {
      setTabY(pageY);
      if (pageY <= TOPNAVI_H + safeArea.top + 2) {
        dispatch(pageAction.setTab02View(true));
      } else {
        dispatch(pageAction.setTab02View(false));
      }
    });
  };

  useEffect(() => {
    if (!animatedValue) {
      return;
    }
    const listenerId = animatedValue.addListener(a => {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        setTabY(pageY);
        if (pageY <= TOPNAVI_H + safeArea.top + 2) {
          dispatch(pageAction.setTab02View(true));
        } else {
          dispatch(pageAction.setTab02View(false));
        }
      });
    });
    return () => animatedValue.removeListener(listenerId);
  }, [tabY]);

  return (
    <View style={{position: 'relative'}}>
      <View
        ref={viewRef}
        // onLayout={e => console.log(e.nativeEvent.layout)}
        // onLayout={doMeasure}
        style={styles.tabContainer(isView)}>
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

      <View style={{marginBottom: 10}}>
        {selectType === 0 ? (
          <TabContent01 />
        ) : selectType === 1 ? (
          <TabContent02 />
        ) : (
          <TabContent03 />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: isView => ({
    display: isView ? 'none' : 'flex',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: 50,
    backgroundColor: '#fff',
  }),
});

export default index;
