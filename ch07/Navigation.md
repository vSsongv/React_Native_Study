### Stack Nav

```js
import { createStackNavigation } from '@react-navigation/stack';
import Home from './Home';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const Stack = createStackNavigator();

<Stack.Navigator>
  <Stack.Screen name='Home' component={Home} />
  <Stack.Screen name='HomeLeft' component={HomeLeft} />
  <Stack.Screen name='HomeRight' component={HomeRight} />
</Stack.Navigator>;
```

- `useNavigation()`훅을 호출하여 navigation 객체를 얻을 수 있고,
- 이 객체는 `navigator(routerName: string, params: object): void`, `goBack(void)`. `canGoBack(): boolean`을 제공한다.
- `navigation.navigate` 메서드는 `navigation.navigate('HomeLeft')` 처럼 원하는 컴포넌트로 이동시킬 수 있다.
- `<Stack.Navigator screenOptions={{headerShown: false}}>`는 헤더가 보이지 않도록 한다.
- 수평 방향으로 진입하는 에니메이션과 관련하여 options에는 `gestureDirection`과 `cardStyleInterpolator`가 있다.
  - `gestureDirection` : horizontal(오른쪽 -> 왼쪽), horizontal-inverted, vertical, vertical-inverted 4가지 종류가 있다.

### Tab Nav

- tabBarLabel : 탭 아래의 label text를 설정가능. 설정하지 않으면 name속성을 선택해서 사용 가능.
- tabBarBadge : 탭의 아이콘에 1,2,3 등의 숫자를 붙일 수 있음.(뱃지)

```js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

<Tab.Navigator>
  <Tab.Screen name="Login" component={Login}/>
  <Tab.Screen name="SignUp" component={SignUp}/>
  <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{tabBarLabel: 'Home', tabBadge: 3}}/>
</Tab.Navigator>
```

- bottom-tabs의 아이콘은 자유롭게 선택 가능
- focused 값에 따라 아이콘 바꾸기, 색상 변경 또한 가능하다.

```js
tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
  const name = route;
  const focusedColor = focused ? Colors.lightBlue500 : color;
  switch (name) {
    case 'Login':
      return <AntIcon name='login' size={size} color={color} />;
    case 'SignUp':
      return <FontAwesomeIcon name='sign-up' siez={size} color={color} />;
  }
};
```

- `navigation.navigate('HomeLeft')`로 이동시킬 수 있다.
