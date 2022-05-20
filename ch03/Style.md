스타일 속성은 컴포넌트의 style 속성에 설정되는 객체의 속성.

```css
<SafeAreaView style={{flex:1, backgroundColor: 'blue'}}>
```

- 리액트 네이티브의 'View'자가 들어간 component들은 bg속성으로 바탕색을 설정할 수 있고, Text component는 color속성으로 글자 색상을 바꿀 수 있다.

```css
<SafeAreaView style={{flex:1, backgroundColor: 'blue'}}>
<Text style={[{color:white}]}>Hello world!</Text>
</SafeAreaView>
```

- Platform API로 현재 실행 중인 OS를 알 수 있다.

```js
import { Platform } from 'react-native';
console.log(Platform.OS); //android 혹은 ios
```

- Dimensions API로 현재 실행된 폰의 크기 또한 알 수 있다.

```js
import { Dimensions } from 'react-native';
const { width, height } = Dimension.get('window');
```

- flex: 1와 height: 100은 같은 효과를 내지만, 같이 쓰게 되면 height가 우선순위가 높다.
- height가 화면 크기와 같을 때 margin을 10을 줘도 아래에는 margin이 생기지 않는다.

- margin/padding 모두 Horizontal,Vertical 이 존재

- IOS는 padding이 동작하지 않는다. 따라서 위의 `paddingLeft: Platform.select({ios: 0, android: 50})`를 사용하여 운영체제별로 다른 값을 설정할 수 있다.

### Image

- Image와 ImageBackground는 반드시 width와 height속성값을 설정해야 한다.

```js
import * as D from './src/data'

const avatarUrl = D.randomAvatarUrl()

<image source={{uri: avatarUrl}} style={{style.image}}>
```

### Text

- 부모 요소에 text관련 스타일 속성을 지정해도 자식 요소에게 반영되지 않음.
- flex 지정 불가.
- fontFamily: font종류, fontWeight: 글꼴 두께, textAlign: text 정렬 위치

### Icon

```js
import Icon from 'react-native-vector-icons/아이콘_세트_이름';

<Icon name='아이콘_이름' size={아이콘_크기} color='아이콘_색상' onPress={콜백_함수} />;
```

### alighItems 속성

- left, right, center, stretch(부모 컴포넌트 크기에 여분이 있으면 자식 컴포넌트 크기 늘림.)

### ScrollView의 contentContainerStyle

- view 버전에서는 overflow로 컨트롤 가능.
- flex 1부분이 없어야 스크롤이 정상 동작함.

### Fragment conponent

- 가상 부모 컴포넌트. `<> </>`로 사용 가능.

```js
<>
  <SafeAreaView style={[styles.flex]}>
    <TopBar />
    <Content />
    <BottomBar />
  </SafeAreaView>
  <View style={[styles.absoluteView]}>
    <Icon name='feather' size={50} color='white' onPress={iconPressed} />
  </View>
</>
```

### FlatList conponent

- 똑같은 component를 여러 개 렌더링할 때는 FlatList를 사용하는 것이 속도가 빠름
- data라는 속성을 제공하는데, 출력하고 싶은 데이터를 data속성에 설정
- `keyExtractor` : renderItem에 설정한 콜백 함수가 반환하는 component의 key 속성에 설정할 값을 얻는다.
- `ItemSeparatorComponent` : 아이템과 아이템 간의 구분자 역할을 하는 component로 삽입

```js
<FlatList
  data={people}
  renderItem{({item}) => <Person person={item}/>}
  keyExtractor = {(item, index) => item.id}
  ItemSeparatorComponent = {() => <View style={styles.itemSeparator}>}
/>
```

### moment

- Date 클래스가 제공하지 않는 몇 가지 유용한 기능을 제공한다.

```js
console.log(moment(person.createDate).startOf('day').fromNow()); //20 hours ago
```

### reusable component

```js
import type { FC, ReactNode } from 'react';

type SomeComponentProps = {
  children?: ReactNode,
};

export const SomeComponent: FC<SomeComponentProps> = ({ children }) => {
  return <View>{children}</View>;
};
```

- 컴포넌트의 style 에 배열이나 조건에 따른 다른 값을 넣는 식으로 하는 것을 그대로 내가 만든 재사용 가능한 컴포넌트에도 사용할 수 있도록 하려면 StyleProp<ViewStyle> 과 같이 타입을 지정해야 한다.
- ViewStyle?: StyleProp<ViewStyle>

```js
<IconText viewStyle={styles.touchableIcon} onPress={onPress}
name="comment" size={24} color={Colors.deepPurple100}
textStyle={styles.iconText} text={person.counts.comment}/>

// IconText.tsx
import React from 'react'
import type {FC, ComponentProps} from 'react'
import {Text} from 'react-native'
import type {TextStyle, StyleProp} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TouchableView} from './TouchableView'
import type {TouchableViewProps} from './TouchableView'

export type IconTextProps = TouchableViewProps &
  ComponentProps<typeof Icon> & {
    text: number | string
    textStyle: StyleProp<TextStyle>
  }

export const IconText: FC<IconTextProps> = ({
  name,
  size,
  color,
  textStyle,
  text,
  ...touchableViewProps
}) => {
  return (
    <TouchableView {...touchableViewProps}>
      <Icon name={name} size={size} color={color} />
      <Text style={textStyle}>{text}</Text>
    </TouchableView>
  )
}
```

### Text core component

```js
// 렌더링할 텍스트 줄을 3줄로 제한
<Text numberOfLines={3}>text</Text>
```

- ellipsizeMode 속성 : head, middle, tail, clip
- textDecorationLine, textDecorationColor 속성 가능
