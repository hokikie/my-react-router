# SPA Routing
이 프로젝트는 React에서 SPA 라우팅의 간단한 구현입니다.

## Table of Contents

- [How It Works](#how-it-works)
  - [Router](#router)
  - [Route](#route)
  - [useRouter](#userouter)
- [Installation](#installation)

## How It Works
### Router
- `window.location.name`를 상태로 담아 현재 경로(`currentPath`)를 저장
- 저장된 경로는 `useCurrentPathContext` hooks로 사용할 수 있도록 함
- `popstate` 이벤트 리스너를 통해 브라우저 앞,뒤로가기를 탐색할 때 마다 현재 경로로 업데이트되도록 함
### Route
- `<Router />`의 하위 컴포넌트로서 특정 경로를 정의하여 지정된 경로와 일치할 때 해당 컴포넌트를 렌더링
### useRouter
- 다른 페이지로 라우팅할 수 있는 `push()` 기능 제공
- `window.history.pushState`를 사용하여 URL을 업데이트
- `popstate` 이벤트를 트리거하여 업데이트된 경로를 기반으로 컴포넌트를 렌더링

## Installation
1. Clone the repo
```
git clone https://github.com/hokikie/my-react-router.git
```
2. Install NPM packages
```
npm install
```
