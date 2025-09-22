SELECT * 
FROM movies
WHERE title LIKE '%harry potter%'
ORDER BY year;
--LIMIT 10;

SELECT *
FROM directors
WHERE movie_id = 241527;

SELECT *
FROM people
WHERE id = 1060;

SELECT movies.title AS 'movie', people.name AS 'directed by'
FROM directors
JOIN movies ON directors.movie_id = movies.id
JOIN people ON directors.person_id = people.id
WHERE movies.title LIKE '%Harry Potter%';

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


