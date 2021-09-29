import React from 'react';
import {View, Text} from 'react-native';

const TabContent02 = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: 13,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14, marginRight: 10}}>할인</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#DF711B'}}>
            500원
          </Text>
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
          <Text style={{fontSize: 14, marginRight: 10}}>최소주문금액</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14}}>없음</Text>
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
          <Text style={{fontSize: 14, marginRight: 10}}>이용방법</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14}}>포장</Text>
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
          <Text style={{fontSize: 14, marginRight: 10}}>조리시간</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14}}>7~17분 소요 예상</Text>
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
          <Text style={{fontSize: 14, marginRight: 10}}>위치안내</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14, lineHeight: 18}}>
            {`경상남도 양산시 북정동 887-4 102호\n(배달주소로부터 약 1.5km)`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TabContent02;
