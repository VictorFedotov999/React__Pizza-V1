![](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![](https://img.shields.io/badge/Redux-5.0-764ABC?style=for-the-badge&logo=redux)
![](https://img.shields.io/badge/React_Router-7.9-CA4245?style=for-the-badge&logo=reactrouter)
# React__Pizza-V1 (Classic Redux)🍕

## 📋 О проекте

React Pizza — это интернет-магазин пиццы, построенный на классической архитектуре Redux с использованием классовых компонентов и концепции "контейнер/презентация". 
Проект был создан этапе моего обучения, чтобы глубоко понять базовые принципы React, Redux и архитектуру SPA-приложений, без хуков и т.д.

> ⚡ Учебный проект — специально создан для освоения архитектурных концепций




## 🚀 Стек технологий

### Frontend:

- React (Class Components)

- TypeScript

- Redux (classic: actions, reducers, store)

- React Router

- Axios


### Backend:

- json-server

## 🏗 Архитектура проекта

```
Pizza__React V1
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ empty-cart.png
│  ├─ logoPizza.png
│  └─ vite.svg
├─ README.md
├─ Server
│  └─ db.json
├─ src
│  ├─ api
│  │  └─ api.ts
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ img
│  │  │  ├─ arrow-top.svg
│  │  │  ├─ c.gif
│  │  │  ├─ cart.svg
│  │  │  ├─ empty-cart.png
│  │  │  ├─ grey-arrow-left.svg
│  │  │  ├─ pizza-logo.svg
│  │  │  ├─ plus.svg
│  │  │  ├─ preloader.gif
│  │  │  └─ trash.svg
│  │  └─ react.svg
│  ├─ components
│  │  ├─ AboutOrder
│  │  │  ├─ AboutOrder.tsx
│  │  │  ├─ CartOrderButtons
│  │  │  │  ├─ ButtonExit.tsx
│  │  │  │  ├─ ButtonPay.tsx
│  │  │  │  └─ CartOrderButtons.tsx
│  │  │  └─ CartOrderDetails
│  │  │     └─ CartOrderDetails.tsx
│  │  ├─ BasketEmpy.tsx
│  │  ├─ CartClear
│  │  │  ├─ CartClear.tsx
│  │  │  └─ CartClearSvg.tsx
│  │  ├─ CartItem
│  │  │  ├─ CartItem.tsx
│  │  │  ├─ CartItemCount
│  │  │  │  ├─ CartItemButtonMinus.tsx
│  │  │  │  ├─ CartItemButtonPlus.tsx
│  │  │  │  ├─ CartItemCount.tsx
│  │  │  │  └─ CartItemRemoveSvg.tsx
│  │  │  ├─ CartItemImg.tsx
│  │  │  ├─ CartItemInfo.tsx
│  │  │  ├─ CartItemPrice.tsx
│  │  │  └─ CartItemRemove.tsx
│  │  ├─ CartsItems
│  │  │  └─ CartsItems.tsx
│  │  ├─ Categories
│  │  │  ├─ Categories.tsx
│  │  │  ├─ CategoriesPagination
│  │  │  │  └─ CategoriesPagination.tsx
│  │  │  └─ CategoriesSortirovka
│  │  │     ├─ CategoriesSortirovka.tsx
│  │  │     └─ CategoriesSortirovkaSvg.tsx
│  │  ├─ Header
│  │  │  ├─ Header.tsx
│  │  │  ├─ HeaderBtn
│  │  │  │  ├─ HeaderBtn.tsx
│  │  │  │  └─ HeaderBtnSvg.tsx
│  │  │  ├─ HeaderContainer.tsx
│  │  │  └─ HeaderLogo
│  │  │     └─ HeaderLogo.tsx
│  │  ├─ ItemProduct
│  │  │  ├─ ItemProduct.tsx
│  │  │  └─ ItemProductButton
│  │  │     ├─ ItemProductButton.tsx
│  │  │     └─ ItemProductButtonSvg.tsx
│  │  ├─ ItemsProducts
│  │  │  ├─ AddProducts.tsx
│  │  │  └─ ItemsProducts.tsx
│  │  ├─ PageProducts
│  │  │  ├─ PageProducts.tsx
│  │  │  └─ PageProductsContainer.tsx
│  │  ├─ TitleBasket
│  │  │  ├─ TitleBasket.tsx
│  │  │  └─ TitleBasketSvg.tsx
│  │  └─ TitleProducts
│  │     └─ TitleProducts.tsx
│  ├─ main.tsx
│  ├─ PageBasket
│  │  ├─ PageBasket.tsx
│  │  └─ PageBasketContainer.tsx
│  ├─ Preloader
│  │  └─ Preloader.jsx
│  ├─ Redux
│  │  ├─ actions
│  │  │  ├─ basketActions.ts
│  │  │  └─ productsActions.ts
│  │  ├─ reducers
│  │  │  ├─ basketReducer.ts
│  │  │  └─ productsReducer.ts
│  │  ├─ reduxStore.ts
│  │  ├─ selectors
│  │  │  ├─ basketSelectors.ts
│  │  │  └─ productsSelector.ts
│  │  └─ thunks
│  │     ├─ basketThunks.ts
│  │     └─ productsThunks.ts
│  ├─ scss
│  │  ├─ app.scss
│  │  ├─ components
│  │  │  ├─ _all.scss
│  │  │  ├─ _button.scss
│  │  │  ├─ _categories.scss
│  │  │  ├─ _header.scss
│  │  │  ├─ _pizza-block.scss
│  │  │  └─ _sort.scss
│  │  ├─ fonts
│  │  │  ├─ ProximaNova-Black.eot
│  │  │  ├─ ProximaNova-Black.ttf
│  │  │  ├─ ProximaNova-Black.woff
│  │  │  ├─ ProximaNova-Bold.eot
│  │  │  ├─ ProximaNova-Bold.ttf
│  │  │  ├─ ProximaNova-Bold.woff
│  │  │  ├─ ProximaNova-Extrabld.eot
│  │  │  ├─ ProximaNova-Extrabld.ttf
│  │  │  ├─ ProximaNova-Extrabld.woff
│  │  │  ├─ ProximaNova-Regular.eot
│  │  │  ├─ ProximaNova-Regular.ttf
│  │  │  ├─ ProximaNova-Regular.woff
│  │  │  ├─ ProximaNova-Semibold.eot
│  │  │  ├─ ProximaNova-Semibold.ttf
│  │  │  └─ ProximaNova-Semibold.woff
│  │  ├─ libs
│  │  │  └─ _normalize.scss
│  │  ├─ _fonts.scss
│  │  └─ _variables.scss
│  └─ ts
│     └─ types
│        ├─ basketType.ts
│        ├─ commonTypes
│        │  └─ commonPropsType.ts
│        ├─ componentsTypes
│        │  ├─ HeaderContainerType.tsx
│        │  ├─ pageBasketContainerType.ts
│        │  ├─ PageProductsType.ts
│        │  └─ productsContainerType.ts
│        └─ productsType.ts
└─ vite.config.js
```


## 🧩 Функциональность

- Получение списка пицц с сервера

- Фильтрация по категориям

- Сортировка (по рейтингу, цене, названию)

### 🛒 Корзина:

- добавление товаров

- увеличение / уменьшение количества

- удаление товаров

- подсчёт общей суммы и количества

- Асинхронные запросы через Axios

- Централизованное управление состоянием через Redux

### ▶️ Запуск проекта
```
# Установка зависимостей
npm install

# Запуск проекта и сервера
npm run dev

```
## 📌 Примечание

### Этот проект — осознанный учебный этап.
В этом проекте я `специально усложнил` работу с API:
использовал JSON Server и делал много запросов на сервер для обновления данных и интерфейса. Я понимаю, что так не делают в реальных проектах, но мне было важно разобраться, как работает клиент-серверное взаимодействие и асинхронная логика на практике.

## 👨‍💻 Автор

### V.Fedotov

### React / TypeScript / Redux

