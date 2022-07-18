import React from 'react';
import './App.css';
import Data from "./data.json"; //名前は任意でつけれる
import TestComponent from './TestComponent';

//Json
type USERS = typeof Data;　//USERSにJsonデータが格納される

//TypeScript学習
const name: string = "hello";

let username: string = "Hello";

interface NAME {
  first: string | null;
  last: string | null;
}

let nameObj: NAME = {first: "yamada", last: "taro"};

const func1 = (x: number, y: number): number => {
  return x * y;
}

type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

let arrayUni: (number | string)[];
arrayUni = [0,1,2,"hello"];

let company: "Facebook" | "Google" | "Amazon"
company = "Amazon"; //上記３つのリテラルのみに制限できる

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello"; //stringのみ受け付ける

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};

//keyof
type KEYS = {
  primary: string,
  secondary: string,
};

let key: keyof KEYS
key = "primary"; //primaryかsecondaryしか受け付けない

//typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports ="baseball"; //soccerかbaseballしか受け付けなくなる

//enum 自動で連番をつけてくれる
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id:1,
  OSType: OS.Linux,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

//Generics
interface GEN<T>{ //Tは定まっていない
  item: T
}
const gen0: GEN<string> = {item: "hello"}; //使用するときに型を明記する

interface GEN1<T = string> { //デフォルトで指定することもできる
  item: T;
}
const gen3: GEN1 = { item: "hello"};

//Genericsで型を複数指定
interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "hello"};

function funcGen<T>(props: T){
  return {item: props}
}
const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);

//関数でextendsを利用
function funcGen1<T extends string | null>(props: T){
  return {value: props}
}
const gen8 = funcGen1("hello");

//関数でprops
interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return {value: props.price}
}
const gen10 = funcGen3({price: 10});

//アロー関数で書く
const funcGen4 = <T extends Props>(props: T) => {
  return {value: props.price};
}



//React.FC
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
}

export default App;
