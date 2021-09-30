import React from 'react';
import {View, Text} from 'react-native';

const TabContent02 = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: 13,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14}}>최소주문금액</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14}}>7,000원</Text>
        </View>
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: 13,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14}}>결제방법</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14}}>바로결제, 만나서결제</Text>
        </View>
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: 13,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14}}>배달시간</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14}}>20~35분 소요 예상</Text>
        </View>
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: 13,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14}}>배달팁</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14}}>0원 ~ 3,500원</Text>
        </View>
      </View>
    </View>
  );
};

export default TabContent02;
