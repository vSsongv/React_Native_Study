함수 컴포넌트 몸통이 아닌, 몸통 안 복합 실행문의 {}안에서는 호출할 수 없다.
비동기 함수(async가 붙은 함수)는 콜백 함수로 사용할 수 없다.

### useMemo

```
useMemo<T>(() => T, [의존성1, 의존성2, ...]): T
```

### useState

```
const [yes, setYes] = useState<Boolean>(false)

useState<S>(initialState:S | (() => S)): [S, Dispatch<SetStateAction<S>>]
```
