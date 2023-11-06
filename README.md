# Portfolio

프론트엔드 개발자 박민정의 포트폴리오 사이트입니다

## Requirement

```
typescript+swc, react, vite,  ESLint, prettier, commitLint, husky, emotion
```

## How to run?

```bash
yarn
yarn dev
```

## Project structure

```
📦src
 ┣ 📂assets // 미디어 파일
 ┣ 📂components // 컴포넌트
 ┃ ┣ 📂atoms // 세분화 된 컴포넌트
 ┃ ┣ 📂molecules // atom을 결합한 컴포넌트
 ┃ ┣ 📂organisms // atom + molecules 컴포넌트
 ┃ ┗ 📂templates // 프리젠테이셔널 컴포넌트
 ┣ 📂constants // 상수 데이터
 ┣ 📂Pages // 컨테이너 컴포넌트
 ┣ 📜App.tsx
 ┣ 📜main.tsx
```

## Commit rule

```
feat        새로운 기능을 제공합니다.
fix         버그 수정.
docs        문서만 변경됩니다.
style       코드 작동에 영향을 미치지 않는 스타일 변경(빈 공간, 코드 포멧팅, 누락된 세미콜론 등)
refactor    버그를 수정하거나 기능을 추가하지 않는 코드 변경입니다.
test        테스트 코드를 추가하거나 기존 테스트 코드를 수정합니다.
chore       빌드 프로세스 또는 보조 도구 및 라이브러리(예: 문서 생성)에 대한 변경 사항.
perf        성능을 향상시키는 코드 변경입니다.
ci          CI 구성 파일 및 스크립트의 변경 사항.
build       빌드 시스템 또는 외부 디펜던시에 영향을 미치는 변경 사항(예: gulp, broccli, npm).
temp        변경사항에 포함되지 않는 임시 커밋입니다.
```


feat: 새로운 기능 제공
fix: 버그 수정
docs: 문서만 변경
style: 코드 작동에 영향을 미치지 않는 스타일 변경
refactor: 버그를 수정하거나 기능을 추가하지 않는 코드 변경
test: 테스트 코드를 추가하거나 기존 테스트 코드를 수정
chore: 빌드 프로세스 또는 보조 도구및 라이브러리에 대한 변경 사항
perf: 성능을 향상시키는 코드 변경
ci: CI 구성 파일 및 스크립트의 변경 사항
build: 빌드 시스템 또는 외부 디펜던시에 영향을 미치는 변경 사항
temp: 변경사항에 포함되지 않는 임시 커밋

