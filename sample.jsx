// JSX 컴포넌트
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// JSX를 사용한 렌더링
const element = <Welcome name="ronny" />;

// 렌더링된 요소를 문서에 추가
ReactDOM.render(element, document.getElementById('root'));
