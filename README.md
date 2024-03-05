<h1 style="color:yellowgreen">Puru Puru - FE</h1>

![Title](https://github.com/puru-puru/puru-puru-FE/assets/105138020/bd9ef7a4-60b7-48a8-b303-3b9fb2777c9f)

> 안녕하세요, 푸릇푸릇은 개인 성향에 맞는 반려 식물을 추천해주고, 키우는데 도움을 주는 서비스를 만들고 있습니다.  
> 자신이 키우는 식물 일지를 작성하며 같이 성장하는 특별한 즐거움을 경험해요!

</br>

## **🌱 푸릇 푸릇**

<table width="80%;">
  <tr align="center">
    <td><strong>구분</strong></td>
    <td><strong>링크</strong></td>
    <td><strong>구분</strong></td>
    <td><strong>링크</strong></td>
  </tr>
  <tr align="center">
    <td><img src="https://velog.velcdn.com/images/eorb0717/post/6682ca3c-bf5c-4fa9-b0c4-06dc58e26a60/image.svg" alt="푸릇푸릇 아이콘" style="width: 25px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://puru-puru.vercel.app/">Puru-Puru</a></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" alt="노션 아이콘" style="width: 20px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="">브로슈어</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://user-images.githubusercontent.com/389021/165723723-c93929a5-01d9-49e1-907b-43669d8089e6.png" alt="리액트 아이콘" style="width: 25px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/puru-puru/puru-puru-FE">FE Github</a></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" alt="노션 아이콘" style="width: 20px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.notion.so/91b7d59443d148179ded8245e0955e73?v=0df2dc36063a456280a629049691d5af">팀 SA</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="노드js 아이콘" style="width: 20px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/puru-puru/puru-puru-BE">BE Github</a></td>
    <td><img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="피그마 아이콘" style="width: 20px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.figma.com/file/MpRPSQs04dB82pUN4HvOf0/%5B%ED%91%B8%EB%A6%87%ED%91%B8%EB%A6%87%5D_v2_0215_HI?type=design&node-id=2-2&mode=design&t=kPdyiXOJzqpCPn6h-0">Figma</a></td>
  </tr>
</table>

## FrontEnd 개발
<table>
  <tbody>
    <tr>
      <td>강혜성</td>
      <td> 정적 타입 지원으로 타입 안정성을 확보할 수 있습니다. | 인증( 회원가입, 유효성 검사, 로그인, 비로그인 처리, 인가 / 토큰 관리,  이용약관, 닉네임 설정)<br>반려 식물 페이지 ( 반려 식물 카드 / 일지, 반려 식물 등록 및 삭제, 식물 검색, 이미지 압축 업로드)<br>UX/UI ( 전반적인 배경, 스플래쉬 페이지, 하단 바 제작(Footer), 로딩 spiner)<br>커뮤니티 (CRUD중 CR)<br>마이 페이지 </td>
     <td>pig10326@naver.com</td>
    </tr>
   <tr>
       <td>이대규</td>
      <td>
        1. 메인 페이지 (추천 미션 및 추천 식물)
        2. 보드 테스트 페이지 (테스트 및 결과 페이지)
        3. 상단의 Navbar
        4. 커뮤니티 메인 페이지 ( 사용자 정보 추가 및 게시글 디자인 수정, 좋아요, 댓글, 전체, 인기순, 최신순 정렬) (현재 구현중)
        5. 커뮤니티 내정보 페이지 (CRUD 중 UD) (현재 구현중)
        6. 댓글 페이지 (CRUD) (현재 구현중)
      </td>
      <td>eorb0717@naver.com</td>   
   </tr>
  </tbody>
</table>

## 주요기능 소개

## 서비스 아키텍처
<img width="1378" alt="아키텍처" src="https://github.com/puru-puru/puru-puru-FE/assets/105138020/29bd9cc7-2367-4c31-859f-82ff6cb30ba8">

## 기술적 의사결정

<table>
  <tbody>
    <tr>
      <td>TypeScript</td>
      <td>정적 타입 지원으로 타입 안정성을 확보할 수 있습니다.</td>
    </tr>
    <tr>
      <td>Axios</td>
      <td>HTTP 클라이언트 라이브러리로, 네트워크 요청을 처리할 때 사용됩니다.</td>
    </tr>
    <tr>
      <td>React-Router</td>
      <td>페이지 간의 이동 및 라우팅을 관리하기 위한 React 라이브러리입니다.</td>
    </tr>
    <tr>
      <td>React-Query</td>
      <td>데이터 요청을 관리하고 캐싱하여 상태 관리를 용이하게 합니다.</td>
    </tr>
    <tr>
      <td>Recoil</td>
      <td>React 상태 관리 라이브러리로, 상태 전역 관리를 쉽게 구현할 수 있습니다.</td>
    </tr>
    <tr>
      <td>Styled-Components</td>
      <td>컴포넌트 기반의 스타일링을 위한 CSS-in-JS 라이브러리입니다.</td>
    </tr>
    <tr>
      <td>browser-image-compression</td>
      <td>클라이언트 측에서 이미지 압축을 수행하는 라이브러리입니다.</td>
    </tr>
    <tr>
      <td>react-slick</td>
      <td>React 기반의 이미지 슬라이더 컴포넌트 라이브러리로, 이미지 슬라이더를 구현할 때 사용됩니다.</td>
    </tr>
    <tr>
      <td>react-ga4</td>
      <td>Google Analytics 4를 React 앱에서 사용하기 쉽게하는 라이브러리입니다.</td>
    </tr>
  </tbody>
</table>

## 트러블슈팅
<details>
<summary>구글 애널리틱스</summary>

구글 애널리틱스를 이용하여 사용자가 어떤 페이지에 접속을 많이했고 어떤 이벤트를 했는지 분석 했습니다.  
그러한 분석으로 페이지의 우선 순위를 두어 QA기반 코드 리팩토링을 하였습니다.
  
![캡처](https://github.com/puru-puru/puru-puru-FE/assets/105138020/3f2f62bc-6f84-4ac0-95d7-b0e922aceabd)
  
![캡처2](https://github.com/puru-puru/puru-puru-FE/assets/105138020/78e38168-4cfd-4463-b8f1-71bbfeff5330)

</details>

<details>
<summary>식물 검색 기능</summary>

> #### 문제
>동일한 검색을 여러 번 수행할 때마다 또 다시 동일한 API 요청을 하는 비효율적인 문제가 있었습니다.

> #### 해결
>useCallback 및 useMemo와 같은 메모이제이션 기법을 고려했으나, 비동기 데이터 로딩 및 관리에 대한 복잡성으로 인해 이러한 방법을 적용하기 어려웠습니다. 대신에 리액트 쿼리를 사용하여 데이터 요청, 캐싱, 재로딩 등과 같은 고급 기능을 내장하고 있는 라이브러리를 채택하여 검색 기능을 구현했습니다. >이를 통해 API 요청의 중복을 방지하고 효율적으로 검색을 처리할 수 있었습니다.
</details>

<details>
<summary>서버로의 이미지 전송 비효율적인 문제</summary>

> #### 문제
>이미지의 크기에 관계없이 서버로 이미지를 전송하는 데 비효율적인 문제가 발생했습니다.

> #### 해결
>이미지 압축과 관련된 여러 방안과 라이브러리를 조사한 후, browser-image-compression 라이브러리를 사용하여 이미지를 압축하고 서버에 전송했습니다. 이 과정에서 maxSizeMB 및 maxWidthOrHeight 옵션을 사용하여 이미지를 적절하게 압축했습니다.
</details>
<details>
<summary>페이지 초기화 문제</summary>

> #### 문제
>여러 반려 식물이 있는 경우 특정 반려 식물에 대한 내용을 보다 페이지를 이동하면 초기화되어 첫 식물로 돌아가는 문제가 발생했습니다.

> #### 해결
>부모-자식 관계가 아닌 경우 상태를 전달하는 것이 어려워졌습니다. 이를 해결하기 위해 recoil을 사용하여 상태를 저장하고 관리했습니다. 이를 통해 페이지 간에 상태를 유지할 수 있었습니다.
</details>

## 유저 피드백 & 반영
<details>
<summary>소셜 로그인</summary>
   <br/>
  - 피드백 - <br/>요즘은 대부분이 다 소셜로그인으로 돌아가는게 더 많기 때문에 남은 기간동안 소셜로그인을 넣는것을 추천드립니다.<br/>
  -> 리다이렉트 페이지를 만들어 인가코드와 페이지 네이션을 구현 하였습니다.
  
  ![소셜](https://github.com/puru-puru/puru-puru-FE/assets/105138020/8ea51d33-5f63-425c-839a-68d4cc3f8bdd)
  
  ![리다이렉트](https://github.com/puru-puru/puru-puru-FE/assets/105138020/015c2418-27f5-4476-8120-4d48b28feaac)

</details>

<details>
<summary>UX/UI</summary>
   <br/>
  - 피드백 - <br/>전체적으로 디자인이 너무 무난하며 저렴한(?) 느낌이 조금 나는 거 같습니다. 폰트 크기가 너무 작아서 크기를 좀 키우셔도 괜찮을 거 같고 폰트도 딱딱한 폰트 말고 꽃과 관련된 프로젝트이기 때문에 따듯한 느낌이 드는 폰트도 괜찮아보입니다.

  -> **변경 전**
  
  ![변경전 디자인](https://github.com/puru-puru/puru-puru-FE/assets/105138020/34b4e302-7448-4430-90c1-075cc7a2d6a3)

  -> **변경 후**
  
  ![변경 후 디자인](https://github.com/puru-puru/puru-puru-FE/assets/105138020/7ff54ed6-bf6b-4ec5-a348-dbdc1a1f13aa)

  
</details>

<details>
<summary>이미지 파일을 등록할 때 사진 위에 ‘+’ 버튼</summary>
   <br/>
  - 피드백 - <br/>반려식물 등록할때 이미지를 등록했는데도 이미지 위에 + 버튼이 그대로 노출됩니다. 이미지가 있다면 사라지게 해주세요.
  
  -> **변경 전**

  ![변경전 이미지 업로드](https://github.com/puru-puru/puru-puru-FE/assets/105138020/dff837cf-4bb7-4cf4-a027-ebe69bee1d41)

  -> **변경 후**
  
  ![변경 후 이미지 업로드](https://github.com/puru-puru/puru-puru-FE/assets/105138020/5b4fd510-94ad-4d90-ac35-660693c642e3)

  ![이미지 업로드 코드](https://github.com/puru-puru/puru-puru-FE/assets/105138020/cef3c04a-46cc-441c-9a6b-eced7c6de1a6)
  
  이미지가 있는 경우 없는경우를 놔두고, 이미지가 있다면 container하나를 주었습니다. 또한 그 영역을 클릭해서 재 업로드 할 수 있게 하였습니다.

</details>
