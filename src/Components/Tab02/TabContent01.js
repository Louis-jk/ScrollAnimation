import React from 'react';
import {View, Text} from 'react-native';
import MenuList from '../MenuList';
import {useSelector} from 'react-redux';

const TabContent01 = () => {
  const {isView} = useSelector(state => state.page);

  return (
    <>
      {isView && <View style={{marginTop: 52}} />}
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Text style={{fontSize: 14, lineHeight: 20}}>
          {`배달/포장 메뉴에 문제가 있을 경우 010-9213-3299로 불편사항을 문자로 주시면 최대한 빠르게 피드백 드리겠습니다.\n*거리가 먼 지역은 최하단에 배달비 관련 결제창(2500원추가)있습니다.\n*꼭 선택 후 결제 진행해주세요.*\n*배달 주문이 취소가 될 수 있습니다.* \n(추가 배달비 관련 지역은 어곡동, 산막동, 대석주공, 대우마리나 입니다.) \n※6월 1일부터 배달대행비가 인상됨에 따라 기본 배달금액이 3500원으로 인상됩니다.※`}
        </Text>
      </View>
      <MenuList />
    </>
  );
};

export default TabContent01;
