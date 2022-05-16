### 배열을 JSX문으로 작성할 때 조심할 점

- XML문법에서 부모 요소 없이는 여러 개의 XML요소를 만들 수 없다.
- 배열 변수에 담긴 JSX문은 반드시 부모 component의 자식 component 형태로 작성되어야 한다.

## ScrollView core component

```ts
import {ScrollView} from 'react-native'
...
return
<SafeAreaView>
    <ScrollView>{children}</ScrollView>
</SafeAreaView>
```

- 위 코드처럼 작성하면 scroll로 모든 children값을 볼 수 있다.
