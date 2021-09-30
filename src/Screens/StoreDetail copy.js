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
  Dimensions,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navDate, menus, storeName} from '../../data';
import StoreInfo from './StoreInfo';
import TopNavigation from '../Components/TopNavigation';
import Tab02 from '../Components/Tab02';

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
            backgroundColor: '#FDF6F0',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#222'}}>
            {menu.item.name}
          </Text>
        </View>
        {menu.item.details?.map((detail, index) => (
          <>
            <View
              key={index}
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 15,
                paddingHorizontal: 10,
                backgroundColor: '#fff',
              }}>
              <View style={{flex: 3.5, marginRight: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}
                  numberOfLines={1}>
                  {detail.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#666',
                    lineHeight: 20,
                    marginBottom: 5,
                  }}>
                  {detail.description}
                </Text>
                <Text style={{fontSize: 14}}>{detail.price}원</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 5,
                    marginRight: 10,
                    resizeMode: 'cover',
                    backgroundColor: '#ccc',
                  }}
                  source={{
                    uri: `${detail.img}`,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                height: 1,
                width: Dimensions.get('window').width,
                backgroundColor: '#ececec',
              }}
            />
          </>
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
        <StoreInfo storeName={storeName} animatedValue={scrolling} />
        <View style={{height: 1, backgroundColor: '#e5e5e5'}} />
        <View style={{height: 10, backgroundColor: '#f5f5f5'}} />
        <Tab02 animatedValue={scrolling} />
        <ScrollComponent />
      </View>
    );
  };

  const onViewRef = React.useRef(viewableItems => {
    console.log('viewableItems', viewableItems);
    // let selectId = viewableItems.viewableItems[0].item.id;
    let selectId = viewableItems.changed[0].item.id;
    setSelectedId(selectId);
  });

  const viewConfigRef = React.useRef({
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
  });

  console.log('selectedId', selectedId);

  return (
    <>
      <TopNavigation title={storeName} animatedValue={scrolling} />
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
