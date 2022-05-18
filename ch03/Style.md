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
