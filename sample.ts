// 변수 선언
let message: string = "Hello, TypeScript!";

// 함수 선언
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 클래스 정의
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(): string {
    return `Hello, my name is ${this.name}.`;
  }
}

// 인터페이스 정의
interface Shape {
  area(): number;
}

// 클래스가 인터페이스를 구현
class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// 배열과 반복문
const numbers: number[] = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// 함수 호출
console.log(message);
console.log(greet("Alice"));

// 클래스 인스턴스 생성
const person = new Person("Bob");
console.log(person.sayHello());

// 인터페이스를 구현한 클래스 사용
const circle = new Circle(5);
console.log(`The area of the circle is ${circle.area()}.`);
