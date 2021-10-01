import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {navDate, menus, storeName} from '../../data';
import pageAction from '../redux/actions';
import {TOPNAVI_H} from '../constans';

const MenuList = () => {
  const refContainer = React.useRef(null); // FlatList Ref 생성
  const [selectedId, setSelectedId] = React.useState(0); // 선택 메뉴 아이디 저장
  const {selectMenuId} = useSelector(state => state.page);
  const dispatch = useDispatch();
  const {isView} = useSelector(state => state.page);
  const safeArea = useSafeAreaInsets();

  console.log('selectMenuId', selectMenuId);

  const onViewRef = React.useRef((viewableItems, changed) => {
    console.log(viewableItems);
    let selectId = viewableItems?.viewableItems[0].item.id;
    dispatch(pageAction.setTab02MenuId(selectId));

    // Use viewable items in state or as intended
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 95});

  // index(id)값으로 flatlist안 해당 메뉴 바로 가기
  const goSelectElmHandler = () => {
    refContainer.current.scrollToIndex({
      animated: true,
      index: selectMenuId,
      viewOffset: 60,
      viewPosition: 0,
    });
  };

  // React.useEffect(() => {
  //   // goSelectElmHandler();
  //   refContainer.current.scrollToIndex({
  //     animated: true,
  //     index: selectMenuId,
  //     viewOffset: 60,
  //     viewPosition: 0,
  //   });
  // }, [selectMenuId]);

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
  // const renderItem = (menu, index) => {
  //   return (
  //     <View key={menu.item.index}>
  //       <View
  //         style={{
  //           paddingVertical: 18,
  //           paddingHorizontal: 20,
  //           backgroundColor: '#FFF6DD',
  //           borderWidth: 1,
  //           borderLeftWidth: 0,
  //           borderRightWidth: 0,
  //           borderColor: '#ececec',
  //         }}>
  //         <Text style={{fontSize: 15, fontWeight: 'bold', color: '#222'}}>
  //           {menu.item.name}
  //         </Text>
  //       </View>
  //       {menu.item.details?.map((detail, index) => (
  //         <>
  //           <View
  //             key={index}
  //             style={{
  //               flexWrap: 'wrap',
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //               alignItems: 'center',
  //               paddingVertical: 15,
  //               paddingHorizontal: 10,
  //               backgroundColor: '#fff',
  //             }}>
  //             <View style={{flex: 3.5, marginRight: 10}}>
  //               <Text
  //                 style={{
  //                   fontSize: 15,
  //                   fontWeight: 'bold',
  //                   marginBottom: 5,
  //                 }}
  //                 numberOfLines={1}>
  //                 {detail.name}
  //               </Text>
  //               <Text
  //                 style={{
  //                   fontSize: 14,
  //                   color: '#666',
  //                   lineHeight: 20,
  //                   marginBottom: 5,
  //                 }}>
  //                 {detail.description}
  //               </Text>
  //               <Text style={{fontSize: 14}}>{detail.price}원</Text>
  //             </View>
  //             <View
  //               style={{
  //                 flex: 1,
  //                 alignSelf: 'flex-end',
  //               }}>
  //               <Image
  //                 style={{
  //                   width: 80,
  //                   height: 80,
  //                   borderRadius: 5,
  //                   marginRight: 10,
  //                   resizeMode: 'cover',
  //                   backgroundColor: '#ccc',
  //                 }}
  //                 source={{
  //                   uri: `${detail.img}`,
  //                 }}
  //               />
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               height: 1,
  //               width: Dimensions.get('window').width,
  //               backgroundColor: '#ececec',
  //             }}
  //           />
  //         </>
  //       ))}
  //     </View>
  //   );
  // };

  const getItemLayout = (data, index) => {
    console.log('data', data);
  };

  const ListHeaderComponent = () => {
    return (
      // {isView && <View style={{marginTop: 42}} />}
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Text style={{fontSize: 14, lineHeight: 20}}>
          {`배달/포장 메뉴에 문제가 있을 경우 010-9213-3299로 불편사항을 문자로 주시면 최대한 빠르게 피드백 드리겠습니다.\n*거리가 먼 지역은 최하단에 배달비 관련 결제창(2500원추가)있습니다.\n*꼭 선택 후 결제 진행해주세요.*\n*배달 주문이 취소가 될 수 있습니다.* \n(추가 배달비 관련 지역은 어곡동, 산막동, 대석주공, 대우마리나 입니다.) \n※6월 1일부터 배달대행비가 인상됨에 따라 기본 배달금액이 3500원으로 인상됩니다.※`}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* <ScrollComponent /> */}
      {menus?.map((menu, index) => (
        <View key={menu.index}>
          <View
            style={{
              paddingVertical: 18,
              paddingHorizontal: 20,
              backgroundColor: '#FFF6DD',
              borderWidth: 1,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderColor: '#ececec',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#222'}}>
              {menu.name}
            </Text>
          </View>
          {menu.details?.map((detail, index) => (
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
                borderWidth: 1,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: '#ececec',
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
          ))}
        </View>
      ))}
    </View>
  );
};

export default MenuList;
