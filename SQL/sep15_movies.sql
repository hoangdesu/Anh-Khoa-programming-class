-- nested query / sub-query
SELECT name
FROM people
WHERE id = (
    SELECT person_id
    FROM directors
    WHERE movie_id = ( 
        SELECT id
        FROM movies
        WHERE title LIKE '%f1%' AND year = 2025
    )
);

-- joining tables
SELECT movies.title, movies.year, people.name
FROM movies
JOIN directors ON movies.id = directors.movie_id
JOIN people ON directors.person_id = people.id
WHERE title LIKE '%top gun%'
;

/*SELECT *
FROM directors
JOIN movies ON movies.id = directors.movie_id
WHERE title LIKE '%top gun%'*/


-- 1
SELECT title
FROM movies
WHERE year = 2008;

-- 2
SELECT *
FROM people
WHERE name = 'Emma Stone';

-- 3
SELECT *
FROM movies
WHERE year >= 2018
ORDER BY title;

-- 4
SELECT title, year, rating
FROM movies
JOIN ratings ON movies.id = ratings.movie_id
WHERE ratings.rating = 10.0;

-- 5
SELECT title, year
FROM movies
WHERE title LIKE '%harry potter%'
ORDER BY year;