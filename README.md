# Frontend 개발에 앞서 알아둬야할 내용

Created: May 11, 2020 10:27 AM\
Created By: SOOJEONG OH\
Last Edited By: SOOJEONG OH\
Last Edited Time: May 11, 2020 3:18 PM

# Node.js

### LTS(Long Term Suppor) 와 현재 버전의 차이

1. LTS : 안정적, 신뢰도 높음
오랜 기간 지원이 가능함을 의미하며, 지원은 취약점 패치, 개선사항에 대한 패치를 의미
2. Current : 최신 기능

    개발이 진행중인 버전\
    해당 버전에 존재하는 기능이 패치를 통해 사라지거나 변경되어\
    새로 코드를 작성해야할 가능성이 존재하는 버전\

## NPM (Node Package Manager)

Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 \
패키지 설치 및 관리를 위한 CLI(Command Line Interface)를 제공한다.\
:Node.js의 의존성과 패키지 관리를 위한 패키지 매니저

### 지역설치와 전역설치

npm intall 명령어에는 지역(local)설치와 전역(global)설치가 있다.\
옵션을 별도로 지정하지 않으면 지역으로 설치되며, 프로젝트 루트 디렉터리에\
node_modules 디렉터리가 자동 생성되고 그 안에 패키지가 설치된다.\
지역으로 설치된 패키지는 해당 프로젝트 내에서만 사용할 수 있다.

```bash
#지역설치
$ npm install <package>
```

```bash
#전역설치
$ npm install -g <package>
```

모든 프로젝트가 공통 사용하는 패키지는 지역으로 설치하지 않고 전역에 설치한다.

전역에 설치된 패키지는 OS에 따라 설치장소가 다른다.

- macOS
/usr/local/lib/node_modules
- Windows
C:\Users\%USERNAME%\AppData\Roaming\npm\node_modules

### NPX

- Node패키지를 실행시키는 하나의 도구
- npm 5.2 버전부터 사용가능
- 패키지를 설치하지 않고, npm 패키지를 1회성으로 즉석 실행해 볼 수 있는 도구\
; 모듈을 로컬에 저장하지 않고, 매번 최신 버전의 파일만을 임시로 불러와 실행시킨 후, 다시 그 파일이 없어지는 방식
- npm global 설치로 pc에 의존성 라이브러리를 설치하는 것은 \
이후에 패치나 업데이트 등 변경사항이 있을때마다\ 
삭제→ 설치 라는 번거로운 작업일 수반할 수 있음.
- 테스트가 빈번하게 일어나는 상황에서 일일이 설치, 실행, 제거를 반복하기 보다\ 
1회성으로 실행하기 위한 도구가 있으면 좋겠다는 취지에서 나온 것이 npx
- create-react-app 같은 보일러 플레이트 모델에 효과적. (CRA는 변경이 잦은 모듈)

---

# CRA(create-react-app)

## Creating an App

### npm 5.2 이전

```bash
#1. 전역 설치
npm install -g create-react-app

#2. 프로젝트를 생성할 폴더로 이동
cd [프로젝트 폴더]

#3. cra project 생성
create-react-app my-app

#4. 생성한 폴더로 이동
cd my-app

#4. start
npm start
```

### npm 5.2 이후

```bash
# 1. 본인 프로젝트 폴더로 이동
cd [프로젝트 폴더로 이동]

# 2. 설치
npx create-react-app my-app

# 3. 생성한 my-app 폴더로 이동
cd my-app

# 4. start
npm start
```

### Script

```bash
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app-default
  yarn start

Happy hacking!
```

**yarn eject**

npm 패키지 내에 포함된 설정파일과 스크립트를 직접 수정할 수 있게 추출해주는 명령어\
여기서는 CRA로 생성한 앱의 설정파일을 보기위해 실행해봄

**yarn start**
webpack이 개발서버를 내장하고 있어 스크립트를 실행하게되면 브라우저에서 실행\
기본 포트 는 3000

포트중복 등 어떤 이유로 포트변경이 필요하면 package.json > script에 start에 포트 설정해주면 됨.

```json
...,
"scripts": {
    "start": "set PORT=9090 && node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js"
  },
```

---

# Bundler

### 뭔가요?

- 번들러는 지정한 단위로 파일들을 하나로 만들어서 \
요청에 대한 응답으로 전달할 수 있는 환경을 만들어주는 역할을 한다.
- 번들러를 사용하면 소스 코드를 모듈별로 작성할 수 있고 \
모듈간 또는 외부 라이브러리의 의존성도 쉽게 관리할 수 있다.

⇒ 파일 묶음. 일종의 컴파일 행위

### 왜?

웹 환경에서는 요청-응답에 시간적 갭이 큼.\
머신의 성능과 관계없이 인터넷 속도나 거리 등에 의해서 영향을 받을 수 있음.\
가능하면 파일을 나누어 요청받기 보다 하나로 합쳐서 보내는게 나음.

**그 외**

난독화, 모듈시스템 구성, 로더 사용 등

### 종류

webpack, parcel, rollup, Browserfiy 등

### 특징

...

## Webpack

- 웹팩(Webpack)은 자바스크립트 정적 모듈 번들러(Static Module Bundler)이다
- 웹팩에서 모든 것은 모듈이다. 자바스크립트, 스타일시트, 이미지 등 모든 것을 \
자바스크립트 모듈로 로딩해서 사용한다.
- 웹팩의 주요 네 가지 개념으로 **Entry**, **Output**, **Loader**, **Plugin**이 있다.

### 1. Entry

- 의존성 그래프의 시작점을 웹팩에서는 엔트리(Entry)라고 한다.
- 웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다.
- 여러개의 엔트리가 존재할 수 있다.

### 2. Output

- 엔트리에 설정한 자바스크립트 파일을 시작으로 하나로 묶는다. \
그후 번들된 결과물을 처리할 위치를 output에 기록한다.

### 3. Loader

- 웹팩은 오직 JavaScript와 Json만 이해할 수 있다.
- 로더는 다른 Type의 파일(img, font, stylesheet 등)을 웹팩이 이해하고 처리 가능한 모듈로 
변환 시키는 작업을 한다.

### 4. Plugin

- 로더가 파일단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다.
- 로더가 변환하는 동안 플러그인은 
bundle optimization, asset management and injection of environment과 같은 일을 
진행할 수 있다.

### webpack 문서

- 설정

[https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/)

- 플러그인

[https://webpack.js.org/plugins/](https://webpack.js.org/plugins/)

# Module

### AMD / UMD 개요, 차이, 사용방법

[https://d2.naver.com/helloworld/591319](https://d2.naver.com/helloworld/591319)

### UMD 사용 이유?

사용 모듈이 react가 아닌경우가 있음.\
모듈의 방향성이 commonJS인지 아닌지에 따라 사용 \
더 찾아보기.. 

### AMD / common.js

출처: https://iam-song.tistory.com/28 [내맘대로] 

모듈화된 코드를 로딩하는 역할

**차이점**

모든 모듈의 로딩이 완료된 후에 실행할 것인가,

로딩 완료 이전에 실행하는 것인가

(동기 vs 비동기)

**Common.js**

모든 모듈이 로컬에 다운로드가 된 아후에 실행하는 방식

node.js에서 사용하는 방식

server 환경에서 외부 모듈을 가져올 때 유리한 방식

```jsx
var lib = require("package/lib");

function foo() {
  lib.log("hello world!");
} 

exports.foobar = foo;
```

하지만 모든 모듈을 다운로드 할 때까지 페이지를 동작할 수 없음.

이를 해결하기 위해 새롭게 탄생한 방식이 AMD

**AMD**

비동기적으로 필요한 파일을 다운로드하는 방식

client에서 외부 모듈을 가져올 때 유리한 방식

```jsx
define(["package/lib"], function (lib) {
 function foo() {
  lib.log("hello world!");
 } 

 return {
   foobar : foo
 }
}
```

**UMD**

어떤 방식으로 외부모듈을 로딩하는 것과 무관하게

각 모듈을 선언하는 방식

```jsx
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {

        // AMD
        define(['jquery', 'underscore'], factory);

    } else if (typeof exports === 'object') {

        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));

    } else {

        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);

    }

}(this, function ($, _) {

    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
}));
```

---

### 그 외

npm i : 인스톨
(= yarn install) 기호에 맞게 사용하세요.

node_module이 있고, lock 이 있는 경우 yarn을 실행하면?\
다시 install 하면서 일부 소실이 발생하는 경우가 종종있다.\
그래서 npm으로 설치하는걸 권유한다.

yarn.lock : 재설치 하지 않게하기위해 존재 (속도)\
package-lock.js도 비슷

package.json:

- devDependenices : 번들링할때 포함되지 않음

hmr : hot module replace
