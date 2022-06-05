함수 컴포넌트 몸통이 아닌, 몸통 안 복합 실행문의 {}안에서는 호출할 수 없다.
비동기 함수(async가 붙은 함수)는 콜백 함수로 사용할 수 없다.

### useMemo

```js
useMemo<T>(() => T, [의존성1, 의존성2, ...]): T
```

### useState

```js
const [yes, setYes] = useState<Boolean>(false)

useState<S>(initialState:S | (() => S)): [S, Dispatch<SetStateAction<S>>]

//useMemo를 사용했던 코드를
const People = useMemo(()=>D.makeArray(10).map(D.createRandomPerson), [])
//useState를 이용해 변경 가능.
const [people, setPeople] = useState<D.IPerson[]>([])
```

### LayoutChangeEvent

- onLayout 이벤트 속성에 설정하는 이벤트 처리기의 매개변수 타입이다.
- onLayout 이벤트를 호출했다는 것은 컴포넌트의 렌더링이 끝났다는 것을 의미한다.

```js
const onLayout = (e: LayoutChangeEvent) => {};
```

### ActivityIndicator

- 회전 아이콘.

```js
import { ActivityIndicator } from 'react-native';

<ActivityIndicator size='large' color='black' />;
```

- 작업이 끝났을 때는 화면에서 사라져야 한다.

```js
export default function Timer() {
  const [loadin, setLoading] = useState(false)
  return (
    {loading && (
      <ActivityIndicator size="large" color="black" />
    )}
  )
}
```
