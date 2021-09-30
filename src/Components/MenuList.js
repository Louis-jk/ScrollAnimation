import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {navDate, menus, storeName} from '../../data';

const MenuList = () => {
  const refContainer = React.useRef(null); // FlatList Ref 생성
  const [selectedId, setSelectedId] = React.useState(0); // 선택 메뉴 아이디 저장

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

  return (
    <View>
      {/* <ScrollComponent /> */}
      <FlatList
        ref={refContainer}
        data={menus}
        renderItem={renderItem}
        initialScrollIndex={0}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
};

export default MenuList;
