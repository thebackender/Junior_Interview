# Задания «SQL»

Для решения задач вам потребуется перейти по ссылке https://sql-academy.org/ru/sandbox. 
Там вы будете выполнять все запросы для теста. По ссылке будет доступна схема `Air travels`, в которой есть
4 таблицы: `TRIP`, `PASS_IN_TRIP`, `PASSENGER`, `COMPANY`. Ответы (SQL запросы) будет необходимо сохранить в этом файле `README`
после каждого задания.

### Задание 1.

C помощью SELECT выведите всех пассажиров, которые летят на самолете `Boeing` от компании `air_France`.
Обязательные поля для вывода: ID пассажира, Имя пассажира как `PASSENGER_NAME`, Название самолета и название компании
как `COMPANY_NAME`.

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 1 ЗАДАНИЯ ЗДЕСЬ -->
`SELECT P.id, P.name AS PASSENGER_NAME, T.plane, C.name AS COMPANY_NAME FROM Passenger AS P JOIN Pass_in_trip AS PT ON P.id = PT.passenger JOIN Trip AS T ON PT.trip = T.id AND T.plane = 'Boeing' JOIN Company AS C ON T.company = C.id AND C.name = 'air_France';`

### Задание 2.

C помощью SELECT выведите количество пассажиров относительно каждого полета(`Pass_in_trip.trip`).
Отсортируйте записи относительно количество пассажиров в порядке убывания(от большего к меньшему).
Обязательные поля для вывода: Номер полета и Количество пассажиров.

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 2 ЗАДАНИЯ ЗДЕСЬ -->
`SELECT trip AS Trip, COUNT(*) AS Count FROM Pass_in_trip GROUP BY trip ORDER BY Count DESC;`

### Задание 3.

С помощью SELECT выведите количество всех пассажиров из таблицы PASSENGER, имена которых начинаются с одной и той же буквы.
Отсортируйте записи по убыванию(от большего к меньшему) относительно количества пассажиров. Показывать только те записи,
где количество больше 1. Обязательные поля для вывода: `FIRST_CHAR`(Первая буква имени) 
и `COUNT` (Количество пассажиров, имена которых начинаются с этой буквы).

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 3 ЗАДАНИЯ ЗДЕСЬ -->
`SELECT UPPER(LEFT(name, 1)) as FIRST_CHAR, COUNT(*) as COUNT FROM Passenger GROUP BY FIRST_CHAR HAVING COUNT > 1 ORDER BY COUNT DESC;`

<!-- После выполнения всех заданий, необходимо сделать push в репозиторий и отправить ссылку на него -->
