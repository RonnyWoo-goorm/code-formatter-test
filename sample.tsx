import React from "react";

// 함수형 컴포넌트
function Greeting(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}

// 클래스형 컴포넌트
class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// JSX를 사용한 렌더링
function App() {
  return (
    <div>
      <Greeting name="ronny" />
      <Counter />
    </div>
  );
}

export default App;
