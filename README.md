<h1 align="center">PROФинанс - Тестовое задание Frontend React</h1>

В данном приложении используется локальный useState. Такое же приложение, но с использованием глобального стейта Redux Toolkit, можно посмотреть здесь <b><a href="https://github.com/AlexanderMorugin/react-test-pro-finance-redux">react-test-pro-finance-redux</a></b>.

![PROFinance Demo](/ТЗ.png)

## Задание

Сверстать страницу.
Внизу таблицы должна быть строка итого:
По нажатию кнопки «загрузить данные из csv», заполнить таблицу из произвольного data.json файла (в корне проекта), по нажатию «экспорт», сохранить данные в формате json или csv на диске.
По двойному щелчку изменять содержимое ячейки, проверять валидность данных (на число)
Пересчитывать итого при изменении данных.
Использовать React, ts, open source UI компоненты.
Будет плюсом:
-реализовать фильтр по кнопке сформировать
-сортировку по нажатию стрелочки рядом с заголовком.
Тесты приветствуются!
Верстка плюс минус похожа, изображение продублировано в архиве в лучшем качестве,
данные таблицы произвольные, можно использовать DATA.json из архива.

## Выполнено

Все, кроме тестов, а именно:

- Сверстана неадаптированная страница.
- Сделан роутинг.
- При загрузке приложения нажимае кнопку "Загрузить данные из csv" - появляется таблица с данными из JSON.
- В таблице можно делать сортировку колонок, кликая по названию колонки. Также любую ячейку можно редактировать двойным кликом.
- Ячейки с цифрами валидируются только на числа.
- Внизу таблицы отображаются итоговые данные по количеству и цене, которые меняются при редактировании ячеек.
- Над таблицей расположена форма фильтрации, инпуты которой работают по своим колонкам. Сначала загружаем таблицу кнопкой "Загрузить данные из csv", затем вводим данные в поля фильтра и нажимаем кнопку "Сформировать".
- После фильтрации или редактирования таблицы, ее можно сохранить на диске, нажав кнопку "Экспорт". Данные сохраняются в формате CSV.
- Кнопка "Очистить", возвращает таблицу в исходное положение, если ее редактировали.

## В планах

Сделать тесты и прикрутить Redux

## Используемые технологии и решения

- React Router
- Typescript в качестве основного языка проекта
- Файлы стилей имеют расширение SCSS
- Tanstack table
- React Icons

## Как запустить проект:

Клонирование репозитория

```
git clone https://github.com/AlexanderMorugin/react-test-pro-finance.git
```

Установка зависимостей

```
npm i
```

Запуск проекта

```
npm run dev
```

---

Александр Моругин\
сентябрь 2024г
