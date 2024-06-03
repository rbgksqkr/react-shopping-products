# react-shopping-products

1. 상품 목록 조회
- MSW를 이용하여 `/products` API를 모킹하고 상품 목록 데이터를 가져온다.
- 상품 목록을 `무한스크롤` 방식으로 표시한다.
  - IntersectionObserver 로 무한스크롤을 구현한다.
  - 맨 처음 불러 오는 갯수는 20개다.
  - 이 후 추가로는 4개씩 불러온다.

2. 상품 정렬 및 필터링
- 상품 필터링
  - 카테고리 기준으로 필터링한다 (fashion, beverage, electronics, kitchen, fitness, books)
- 상품 정렬
  - 낮은 가격 순으로 정렬한다.
  - 높은 가격 순으로 정렬한다.
  
3. 상품 장바구니 담기

- 사용자가 담기 버튼을 누르면 장바구니에 추가된다. 
- 장바구니 담기 요청 중 에러가 발생한 경우, 에러 메시지를 사용자에게 알려주는 UI를 표시한다.  
- 장바구니에 담긴 아이템 '종류' 의 갯수를 숫자로 표시한다.
- 장바구니에서 빼기 버튼을 누르면, 장바구니에서 해당 아이템이 제거된다.
