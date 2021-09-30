import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BANNER_H, TOPNAVI_H} from '../constans';

const TopNavigation = props => {
  const {title, navigation, animatedValue} = props;
  const isFloating = !!animatedValue;
  const [isTransparent, setTransparent] = useState(isFloating);
  const safeArea = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!animatedValue) {
      return;
    }
    const listenerId = animatedValue.addListener(a => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => animatedValue.removeListener(listenerId);
  });

  return (
    <>
      <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Animated.View
        style={styles.container(safeArea, isFloating, isTransparent, fadeAnim)}>
        <TouchableOpacity>
          <Image
            source={
              isTransparent
                ? require('../images/top_back_wh.png')
                : require('../images/top_back.png')
            }
            style={{width: 30, height: 25}}
            resizeMode="cover"
          />
        </TouchableOpacity>
        {isTransparent ? null : (
          <Text style={styles.title(isTransparent)}>{title}</Text>
        )}
        <TouchableOpacity>
          <Image
            source={
              isTransparent
                ? require('../images/ico_search_wh.png')
                : require('../images/ico_search.png')
            }
            style={{width: 30, height: 25}}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: (safeArea, isFloating, isTransparent, fadeAnim) => ({
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingTop: safeArea.top + 10,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    shadowOffset: {y: 0},
    backgroundColor: isTransparent ? '#0001' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0,
    elevation: isTransparent ? 0.01 : 0,
    zIndex: 100,
  }),
  title: isTransparent => ({
    fontWeight: 'bold',
    fontSize: 18,
    color: isTransparent ? '#FFF' : '#000',
    marginTop: 3,
  }),
});

export default TopNavigation;
