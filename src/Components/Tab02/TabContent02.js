import React from 'react';
import {View, Text} from 'react-native';

const TabContent03 = () => {
  return (
    <>
      <View style={{paddingHorizontal: 20, marginVertical: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20}}>
          가게소개
        </Text>
        <Text style={{fontSize: 14, lineHeight: 20}}>
          사장과 직원들은 항상 고객님들에게 맛있는 식사를 대접해드리기 위해서
          노력하고 연구하는 마인드를 가지고 매장운영에 임하겠으며 항상 매장
          청결을 위해서 노력을 기울이겠습니다!
        </Text>
      </View>
      {/* 구분선 */}
      <View style={{height: 1, backgroundColor: '#e5e5e5'}} />
      <View style={{height: 10, backgroundColor: '#f5f5f5'}} />
      {/* //구분선 */}
      <View style={{paddingHorizontal: 20, marginVertical: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20}}>
          영업정보
        </Text>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginBottom: 13,
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 14}}>상호명</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontSize: 14}}>집밥한끼</Text>
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
            <Text style={{fontSize: 14}}>운영시간</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontSize: 14}}>매일 - 오전 11:00 ~ 오후 8:30</Text>
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
            <Text style={{fontSize: 14}}>휴무일</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontSize: 14}}>연중무휴</Text>
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
            <Text style={{fontSize: 14}}>전화번호</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontSize: 14}}>050-37505-8214</Text>
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
            <Text style={{fontSize: 14}}>배달지역</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontSize: 14}}>북정동, 신기동, 북부동</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default TabContent03;
