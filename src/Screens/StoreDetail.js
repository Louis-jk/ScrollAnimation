import * as React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Platform,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navDate, menus} from '../../data';
import StoreInfo from './StoreInfo';
import TopNavigation from '../Components/TopNavigation';

const StoreDetail = () => {
  const [selectedId, setSelectedId] = React.useState(0); // 선택 메뉴 아이디 저장
  const refContainer = React.useRef(null); // FlatList Ref 생성
  const scrolling = React.useRef(new Animated.Value(0)).current; // Animated 이벤트 생성

  const translation = scrolling.interpolate({
    inputRange: [100, 200, 250, 500],
    outputRange: [-200, -200, 0, 0],
    extrapolate: 'clamp',
  });

  // 메뉴(카테고리) 리스트 렌더러(FlatList)
  const renderItem = (menu, index) => {
    return (
      <View key={menu.item.index}>
        <View
          style={{
            paddingVertical: 18,
            paddingHorizontal: 20,
            backgroundColor: '#851D41',
          }}>
          <Text style={{color: '#fff'}}>{menu.item.name}</Text>
        </View>
        {menu.item.details?.map((detail, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: '#EDF7FA',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                marginRight: 10,
                resizeMode: 'cover',
                backgroundColor: '#ccc',
              }}
              source={{
                uri: `${detail.img}`,
              }}
            />
            {/* <Text>{detail.img}</Text> */}
            <Text style={{fontSize: 14, marginRight: 10}}>{detail.name}</Text>
            <Text style={{fontSize: 14}}>{detail.price}</Text>
          </View>
        ))}
      </View>
    );
  };

  const getItemLayout = (data, index) => {
    console.log('getItemLayout data', data);
    console.log('getItemLayout data[0].name :: ', data[0].name);
    return {
      length: styles.listItem.height,
      offset: styles.listItem.height * index,
      index,
    };
  };

  const ScrollComponent = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 10,
        }}>
        {navDate?.map((menu, index) => (
          <TouchableOpacity
            key={menu.id}
            activeOpacity={1}
            onPress={() => {
              refContainer.current.scrollToIndex({
                animated: true,
                index: menu.id,
                viewOffset: 60,
                viewPosition: 0,
              });
              setSelectedId(menu.id);
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                backgroundColor:
                  selectedId === menu.id ? '#851D41' : 'transparent',
                color: selectedId === menu.id ? '#fff' : '#222',
                borderRadius: 15,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              {menu.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  // 상단 컴포넌트
  const ListHeaderComponent = () => {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <StoreInfo animatedValue={scrolling} />
        <View style={{height: 10, backgroundColor: '#ececec'}} />
        <ScrollComponent />
      </View>
    );
  };

  const onViewRef = React.useRef(viewableItems => {
    console.log('viewableItems', viewableItems);

    if (viewableItems) {
      let selectId = viewableItems.viewableItems[0].item.id;
      setSelectedId(selectId);
    } else {
      setSelectedId(0);
    }

    // Use viewable items in state or as intended
  });

  const viewConfigRef = React.useRef({
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
  });

  console.log('selectedId', selectedId);

  return (
    <>
      <TopNavigation title="한끼한죽" animatedValue={scrolling} />
      <View style={{zIndex: -1}}>
        <Animated.FlatList
          ref={refContainer}
          data={menus}
          renderItem={renderItem}
          initialScrollIndex={0}
          keyExtractor={item => item.id}
          // getItemLayout={getItemLayout}
          ListHeaderComponent={<ListHeaderComponent />}
          // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrolling}}}],
            {
              useNativeDriver: true,
            },
          )}
          scrollEventThrottle={16}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
        />
      </View>
      {/* <Animated.View
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? 25 : 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#fff',
          transform: [
            {
              translateY: translation,
            },
          ],
        }}>
        <ScrollComponent />
      </Animated.View> */}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  listItem: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
});

export default StoreDetail;
