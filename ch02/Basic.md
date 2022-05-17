### 배열을 JSX문으로 작성할 때 조심할 점

- XML문법에서 부모 요소 없이는 여러 개의 XML요소를 만들 수 없다.
- 배열 변수에 담긴 JSX문은 반드시 부모 component의 자식 component 형태로 작성되어야 한다.

### ScrollView core component

```ts
import {ScrollView} from 'react-native'
...
return
<SafeAreaView>
    <ScrollView>{children}</ScrollView>
</SafeAreaView>
```

- 위 코드처럼 작성하면 scroll로 모든 children값을 볼 수 있다.

### Button core component

- Button은 title과 color라는 속성이 있음. 이때 title은 반드시 설정해야 함.

```ts
<Button title='home' color='blue' onPress={() => console.log('Home pressed')} />
```

- Button은 디자인이 다르기 때문에 TouchableOpacity, TouchableHighlight를 제공한다.
- TouchableOpacity : 터치가 일어나면 component의 바탕의 투명도를 바꿈.

### TextInput core component

- defaultValue 속성에 초깃값을 설정할 수 있다.
- 입력된 text는 value값으로 얻을 수 있다.
- 텍스트가 입력될 때 onChangeText 이벤트 처리기를 실행한다.

```ts
onChangeText(text:string) => void
```

- editable 속성값을 false로 하면 입력을 막을 수있따.
- focus : 포커스를 가지게 함, onFocus 이벤트를 호출한다.
- blur : 포커스를 잃게 함, onBlur 이벤트를 호출한다.
- 텍스트 입력이 모두 끝나면 onEndEditing 이벤트를 호출한다.
- 자식 요소를 가지지 못한다.
