var movies = [
    {
        title: 'The Shawshank Redemption',
        year: '1994',
        director: 'Frank Darabont',
        duration: '2h 22min',
        genres: ['Crime', 'Drama'],
        rating: '9.3'
    },
    {
        title: 'The Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genres: ['Crime', 'Drama'],
        rating: '9.2'
    },
    {
        title: 'The Godfather: Part II',
        year: '1974',
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genres: ['Crime', 'Drama'],
        rating: '9.0'
    },
    {
        title: 'The Dark Knight',
        year: '2008',
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genres: ['Action', 'Crime', 'Drama', 'Thriller'],
        rating: '9.0'
    },
    {
        title: '12 Angry Men',
        year: '1957',
        director: 'Sidney Lumet',
        duration: '1h 36min',
        genres: ['Crime', 'Drama'],
        rating: '8.9'
    },
    {
        title: 'Schindler\'s List',
        year: '1993',
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genres: ['Biography', 'Drama', 'History'],
        rating: '8.9'
    },
    {
        title: 'Pulp Fiction',
        year: '1994',
        director: 'Quentin Tarantino',
        duration: '2h 34min',
        genres: ['Crime', 'Drama'],
        rating: '8.9'
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: '2003',
        director: 'Peter Jackson',
        duration: '3h 21min',
        genres: ['Adventure', 'Drama', 'Fantasy'],
        rating: '8.9'
    },
    {
        title: 'Il buono, il brutto, il cattivo',
        year: '1966',
        director: 'Sergio Leone',
        duration: '3h 2min',
        genres: ['Western'],
        rating: '8.9'
    },
    {
        title: 'Fight Club',
        year: '1999',
        director: 'David Fincher',
        duration: '2h 19min',
        genres: ['Drama'],
        rating: '8.8'
    },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: '2001',
        director: 'Peter Jackson',
        duration: '2h 58min',
        genres: ['Adventure', 'Drama', 'Fantasy'],
        rating: '8.8'
    },
    {
        title: 'Forrest Gump',
        year: '1994',
        director: 'Robert Zemeckis',
        duration: '2h 22min',
        genres: ['Comedy', 'Drama', 'Romance'],
        rating: '8.8'
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: '1980',
        director: 'Irvin Kershner',
        duration: '2h 4min',
        genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        rating: '8.8'
    },
    {
        title: 'Inception',
        year: '2010',
        director: 'Christopher Nolan',
        duration: '2h 28min',
        genres: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        rating: '8.8'
    },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: '2002',
        director: 'Peter Jackson',
        duration: '2h 59min',
        genres: ['Adventure', 'Drama', 'Fantasy'],
        rating: '8.7'
    },
    {
        title: 'One Flew Over the Cuckoo\'s Nest',
        year: '1975',
        director: 'Milos Forman',
        duration: '2h 13min',
        genres: ['Drama'],
        rating: '8.7'
    },
    {
        title: 'Goodfellas',
        year: '1990',
        director: 'Martin Scorsese',
        duration: '2h 26min',
        genres: ['Crime', 'Drama'],
        rating: '8.7'
    },
    {
        title: 'The Matrix',
        year: '1999',
        director: 'Lana Wachowski',
        duration: '2h 16min',
        genres: ['Action', 'Sci-Fi'],
        rating: '8.7'
    },
    {
        title: 'Shichinin no samurai',
        year: '1954',
        director: 'Akira Kurosawa',
        duration: '3h 27min',
        genres: ['Adventure', 'Drama'],
        rating: '8.7'
    },
    {
        title: 'Star Wars',
        year: '1977',
        director: 'George Lucas',
        duration: '2h 1min',
        genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        rating: '8.7'
    },
    {
        title: 'Cidade de Deus',
        year: '2002',
        director: 'Fernando Meirelles',
        duration: '2h 10min',
        genres: ['Crime', 'Drama'],
        rating: '8.7'
    },
    {
        title: 'Se7en',
        year: '1995',
        director: 'David Fincher',
        duration: '2h 7min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.6'
    },
    {
        title: 'The Silence of the Lambs',
        year: '1991',
        director: 'Jonathan Demme',
        duration: '1h 58min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.6'
    },
    {
        title: 'It\'s a Wonderful Life',
        year: '1946',
        director: 'Frank Capra',
        duration: '2h 10min',
        genres: ['Drama', 'Family', 'Fantasy'],
        rating: '8.6'
    },
    {
        title: 'La vita è bella',
        year: '1997',
        director: 'Roberto Benigni',
        duration: '1h 56min',
        genres: ['Comedy', 'Drama', 'War'],
        rating: '8.6'
    },
    {
        title: 'The Usual Suspects',
        year: '1995',
        director: 'Bryan Singer',
        duration: '1h 46min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.6'
    },
    {
        title: 'Léon',
        year: '1988',
        director: 'Luc Besson',
        duration: '1h 50min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.6'
    },
    {
        title: 'Saving Private Ryan',
        year: '1998',
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genres: ['Drama', 'War'],
        rating: '8.6'
    },
    {
        title: 'Sen to Chihiro no kamikakushi',
        year: '2001',
        director: 'Hayao Miyazaki',
        duration: '2h 5min',
        genres: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
        rating: '8.6'
    },
    {
        title: 'American History X',
        year: '1998',
        director: 'Tony Kaye',
        duration: '1h 59min',
        genres: ['Crime', 'Drama'],
        rating: '8.5'
    },
    {
        title: 'C\'era una volta il West',
        year: '1968',
        director: 'Sergio Leone',
        duration: '2h 44min',
        genres: ['Western'],
        rating: '8.6'
    },
    {
        title: 'Interstellar',
        year: '2014',
        director: 'Christopher Nolan',
        duration: '2h 49min',
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        rating: '8.6'
    },
    {
        title: 'Psycho',
        year: '1960',
        director: 'Alfred Hitchcock',
        duration: '1h 49min',
        genres: ['Horror', 'Mystery', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'The Green Mile',
        year: '1999',
        director: 'Frank Darabont',
        duration: '3h 9min',
        genres: ['Crime', 'Drama', 'Fantasy', 'Mystery'],
        rating: '8.5'
    },
    {
        title: 'Casablanca',
        year: '1942',
        director: 'Michael Curtiz',
        duration: '1h 42min',
        genres: ['Drama', 'Romance', 'War'],
        rating: '8.5'
    },
    {
        title: 'City Lights',
        year: '1931',
        director: 'Charles Chaplin',
        duration: '1h 27min',
        genres: ['Comedy', 'Drama', 'Romance'],
        rating: '8.6'
    },
    {
        title: 'Intouchables',
        year: '2011',
        director: 'Olivier Nakache',
        duration: '1h 52min',
        genres: ['Biography', 'Comedy', 'Drama'],
        rating: '8.6'
    },
    {
        title: 'Modern Times',
        year: '1936',
        director: 'Charles Chaplin',
        duration: '1h 27min',
        genres: ['Comedy', 'Drama', 'Family', 'Romance'],
        rating: '8.5'
    },
    {
        title: 'Raiders of the Lost Ark',
        year: '1981',
        director: 'Steven Spielberg',
        duration: '1h 55min',
        genres: ['Action', 'Adventure'],
        rating: '8.5'
    },
    {
        title: 'The Pianist',
        year: '2002',
        director: 'Roman Polanski',
        duration: '2h 30min',
        genres: ['Biography', 'Drama', 'Music', 'War'],
        rating: '8.5'
    },
    {
        title: 'The Departed',
        year: '2006',
        director: 'Martin Scorsese',
        duration: '2h 31min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'Rear Window',
        year: '1954',
        director: 'Alfred Hitchcock',
        duration: '1h 52min',
        genres: ['Mystery', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'Terminator 2: Judgment Day',
        year: '1991',
        director: 'James Cameron',
        duration: '2h 17min',
        genres: ['Action', 'Sci-Fi', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'Back to the Future',
        year: '1985',
        director: 'Robert Zemeckis',
        duration: '1h 56min',
        genres: ['Adventure', 'Comedy', 'Sci-Fi'],
        rating: '8.5'
    },
    {
        title: 'Whiplash',
        year: '2014',
        director: 'Damien Chazelle',
        duration: '1h 47min',
        genres: ['Drama', 'Music'],
        rating: '8.5'
    },
    {
        title: 'Gladiator',
        year: '2000',
        director: 'Ridley Scott',
        duration: '2h 35min',
        genres: ['Action', 'Adventure', 'Drama'],
        rating: '8.5'
    },
    {
        title: 'The Prestige',
        year: '1994',
        director: 'Christopher Nolan',
        duration: '2h 10min',
        genres: ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'The Lion King',
        year: '1994',
        director: 'Roger Allers',
        duration: '1h 28min',
        genres: ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
        rating: '8.5'
    },
    {
        title: 'Memento',
        year: '2000',
        director: 'Christopher Nolan',
        duration: '1h 53min',
        genres: ['Mystery', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'Apocalypse Now',
        year: '1979',
        director: 'Francis Ford Coppola',
        duration: '2h 27min',
        genres: ['Drama', 'War'],
        rating: '8.5'
    },
    {
        title: 'Alien',
        year: '1979',
        director: 'Ridley Scott',
        duration: '1h 57min',
        genres: ['Horror', 'Sci-Fi'],
        rating: '8.5'
    },
    {
        title: 'The Great Dictator',
        year: '1940',
        director: 'Charles Chaplin',
        duration: '2h 5min',
        genres: ['Comedy', 'Drama', 'War'],
        rating: '8.5'
    },
    {
        title: 'Sunset Blvd.',
        year: '1950',
        director: 'Billy Wilder',
        duration: '1h 50min',
        genres: ['Drama', 'Film-Noir'],
        rating: '8.5'
    },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: '1964',
        director: 'Stanley Kubrick',
        duration: '1h 35min',
        genres: ['Comedy'],
        rating: '8.5'
    },
    {
        title: 'Nuovo Cinema Paradiso',
        year: '1988',
        director: 'Giuseppe Tornatore',
        duration: '2h 35min',
        genres: ['Drama'],
        rating: '8.5'
    },
    {
        title: 'Das Leben der Anderen',
        year: '2006',
        director: 'Florian Henckel von Donnersmarck',
        duration: '2h 17min',
        genres: ['Drama', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'Hotaru no haka',
        year: '1988',
        director: 'Isao Takahata',
        duration: '1h 29min',
        genres: ['Animation', 'Drama', 'War'],
        rating: '8.5'
    },
    {
        title: 'Blade Runner 2049',
        year: '2017',
        director: 'Denis Villeneuve',
        duration: '2h 44min',
        genres: ['Mystery', 'Sci-Fi', 'Thriller'],
        rating: '8.5'
    },
    {
        title: 'Paths of Glory',
        year: '1957',
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genres: ['Drama', 'War'],
        rating: '8.4'
    },
    {
        title: 'Django Unchained',
        year: '2012',
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genres: ['Drama', 'Western'],
        rating: '8.4'
    },
    {
        title: 'The Shining',
        year: '1980',
        director: 'Stanley Kubrick',
        duration: '2h 26min',
        genres: ['Drama', 'Horror'],
        rating: '8.4'
    },
    {
        title: 'WALL·E',
        year: '2008',
        director: 'Andrew Stanton',
        duration: '1h 38min',
        genres: ['Animation', 'Adventure', 'Family', 'Sci-Fi'],
        rating: '8.4'
    },
    {
        title: 'American Beauty',
        year: '1999',
        director: 'Sam Mendes',
        duration: '2h 2min',
        genres: ['Drama', 'Romance'],
        rating: '8.4'
    },
    {
        title: 'The Dark Knight Rises',
        year: '2012',
        director: 'Christopher Nolan',
        duration: '2h 44min',
        genres: ['Action', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'Mononoke-hime',
        year: '1997',
        director: 'Hayao Miyazaki',
        duration: '2h 14min',
        genres: ['Animation', 'Adventure', 'Fantasy'],
        rating: '8.4'
    },
    {
        title: 'Oldeuboi',
        year: '2003',
        director: 'Chan-wook Park',
        duration: '2h',
        genres: ['Action', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'Aliens',
        year: '1986',
        director: 'James Cameron',
        duration: '2h 17min',
        genres: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'Witness for the Prosecution',
        year: '1957',
        director: 'Billy Wilder',
        duration: '1h 56min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'Once Upon a Time in America',
        year: '1984',
        director: 'Sergio Leone',
        duration: '3h 49min',
        genres: ['Crime', 'Drama'],
        rating: '8.4'
    },
    {
        title: 'Das Boot',
        year: '1981',
        director: 'Wolfgang Petersen',
        duration: '2h 29min',
        genres: ['Adventure', 'Drama', 'Thriller', 'War'],
        rating: '8.4'
    },
    {
        title: 'Citizen Kane',
        year: '1941',
        director: 'Orson Welles',
        duration: '1h 59min',
        genres: ['Drama', 'Mystery'],
        rating: '8.4'
    },
    {
        title: 'Dangal',
        year: '2016',
        director: 'Nitesh Tiwari',
        duration: '2h 41min',
        genres: ['Action', 'Biography', 'Drama', 'Sport'],
        rating: '8.6'
    },
    {
        title: 'Vertigo',
        year: '2001',
        director: 'Alfred Hitchcock',
        duration: '2h 8min',
        genres: ['Mystery', 'Romance', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'North by Northwest',
        year: '1959',
        director: 'Alfred Hitchcock',
        duration: '2h 16min',
        genres: ['Action', 'Adventure', 'Mystery', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: '1983',
        director: 'Richard Marquand',
        duration: '2h 11min',
        genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        rating: '8.4'
    },
    {
        title: 'Braveheart',
        year: '1995',
        director: 'Mel Gibson',
        duration: '2h 58min',
        genres: ['Biography', 'Drama', 'History', 'War'],
        rating: '8.4'
    },
    {
        title: 'Reservoir Dogs',
        year: '1992',
        director: 'Quentin Tarantino',
        duration: '1h 39min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.3'
    },
    {
        title: 'M',
        year: '1931',
        director: 'Fritz Lang',
        duration: '1h 57min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'Requiem for a Dream',
        year: '2000',
        director: 'Darren Aronofsky',
        duration: '1h 42min',
        genres: ['Drama'],
        rating: '8.3'
    },
    {
        title: 'Le fabuleux destin d\'Amélie Poulain',
        year: '2001',
        director: 'Jean-Pierre Jeunet',
        duration: '2h 2min',
        genres: ['Comedy', 'Romance'],
        rating: '8.4'
    },
    {
        title: 'Taare Zameen Par',
        year: '2007',
        director: 'Aamir Khan',
        duration: '2h 45min',
        genres: ['Drama', 'Family'],
        rating: '8.5'
    },
    {
        title: 'A Clockwork Orange',
        year: '1971',
        director: 'Stanley Kubrick',
        duration: '2h 16min',
        genres: ['Crime', 'Drama', 'Sci-Fi'],
        rating: '8.3'
    },
    {
        title: 'Kimi no na wa.',
        year: '2016',
        director: 'Makoto Shinkai',
        duration: '1h 46min',
        genres: ['Animation', 'Drama', 'Fantasy', 'Romance'],
        rating: '8.5'
    },
    {
        title: 'Lawrence of Arabia',
        year: '1962',
        director: 'David Lean',
        duration: '3h 36min',
        genres: ['Adventure', 'Biography', 'Drama', 'History', 'War'],
        rating: '8.3'
    },
    {
        title: 'Double Indemnity',
        year: '1944',
        director: 'Billy Wilder',
        duration: '1h 47min',
        genres: ['Crime', 'Drama', 'Film-Noir', 'Mystery', 'Thriller'],
        rating: '8.3'
    },
    {
        title: 'Amadeus',
        year: '1984',
        director: 'Milos Forman',
        duration: '2h 40min',
        genres: ['Biography', 'Drama', 'History', 'Music'],
        rating: '8.3'
    },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: '2004',
        director: 'Michel Gondry',
        duration: '1h 48min',
        genres: ['Drama', 'Romance', 'Sci-Fi'],
        rating: '8.3'
    },
    {
        title: 'Taxi Driver',
        year: '1976',
        director: 'Martin Scorsese',
        duration: '1h 53min',
        genres: ['Crime', 'Drama'],
        rating: '8.3'
    },
    {
        title: 'To Kill a Mockingbird',
        year: '1962',
        director: 'Robert Mulligan',
        duration: '2h 9min',
        genres: ['Crime', 'Drama'],
        rating: '8.3'
    },
    {
        title: 'Dunkirk',
        year: '2017',
        director: 'Christopher Nolan',
        duration: '1h 46min',
        genres: ['Action', 'Drama', 'History', 'Thriller', 'War'],
        rating: '8.3'
    },
    {
        title: 'Full Metal Jacket',
        year: '1987',
        director: 'Stanley Kubrick',
        duration: '1h 56min',
        genres: ['Drama', 'War'],
        rating: '8.3'
    },
    {
        title: '2001: A Space Odyssey',
        year: '1968',
        director: 'Stanley Kubrick',
        duration: '2h 29min',
        genres: ['Adventure', 'Sci-Fi'],
        rating: '8.3'
    },
    {
        title: 'Singin\' in the Rain',
        year: '1952',
        director: 'Stanley Donen',
        duration: '1h 43min',
        genres: ['Comedy', 'Musical', 'Romance'],
        rating: '8.3'
    },
    {
        title: 'Toy Story 3',
        year: '2010',
        director: 'Lee Unkrich',
        duration: '1h 43min',
        genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
        rating: '8.3'
    },
    {
        title: 'Toy Story',
        year: '1995',
        director: 'John Lasseter',
        duration: '1h 21min',
        genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
        rating: '8.3'
    },
    {
        title: 'The Sting',
        year: '1973',
        director: 'George Roy Hill',
        duration: '2h 9min',
        genres: ['Comedy', 'Crime', 'Drama'],
        rating: '8.3'
    },
    {
        title: '3 Idiots',
        year: '2009',
        director: 'Rajkumar Hirani',
        duration: '2h 50min',
        genres: ['Adventure', 'Comedy', 'Drama', 'Romance'],
        rating: '8.4'
    },
    {
        title: 'Ladri di biciclette',
        year: '1948',
        director: 'Vittorio De Sica',
        duration: '1h 29min',
        genres: ['Drama'],
        rating: '8.3'
    },
    {
        title: 'Inglourious Basterds',
        year: '2009',
        director: 'Quentin Tarantino',
        duration: '2h 33min',
        genres: ['Adventure', 'Drama', 'War'],
        rating: '8.3'
    },
    {
        title: 'The Kid',
        year: '1921',
        director: 'Charles Chaplin',
        duration: '1h 8min',
        genres: ['Comedy', 'Drama', 'Family'],
        rating: '8.3'
    },
    {
        title: 'Snatch',
        year: '2000',
        director: 'Guy Ritchie',
        duration: '1h 44min',
        genres: ['Comedy', 'Crime'],
        rating: '8.3'
    },
    {
        title: 'Monty Python and the Holy Grail',
        year: '1975',
        director: 'Terry Gilliam',
        duration: '1h 31min',
        genres: ['Adventure', 'Comedy', 'Fantasy'],
        rating: '8.3'
    },
    {
        title: 'Good Will Hunting',
        year: '1997',
        director: 'Gus Van Sant',
        duration: '2h 6min',
        genres: ['Drama'],
        rating: '8.3'
    },
    {
        title: 'Jagten',
        year: '2012',
        director: 'Thomas Vinterberg',
        duration: '1h 55min',
        genres: ['Drama'],
        rating: '8.3'
    },
    {
        title: 'Per qualche dollaro in più',
        year: '1965',
        director: 'Sergio Leone',
        duration: '2h 12min',
        genres: ['Western'],
        rating: '8.3'
    },
    {
        title: 'L.A. Confidential',
        year: '1997',
        director: 'Curtis Hanson',
        duration: '2h 18min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.3'
    },
    {
        title: 'Scarface',
        year: '1983',
        director: 'Brian De Palma',
        duration: '2h 50min',
        genres: ['Crime', 'Drama'],
        rating: '8.3'
    },
    {
        title: 'The Apartment',
        year: '1960',
        director: 'Billy Wilder',
        duration: '2h 5min',
        genres: ['Comedy', 'Drama', 'Romance'],
        rating: '8.3'
    },
    {
        title: 'Metropolis',
        year: '1927',
        director: 'Fritz Lang',
        duration: '2h 33min',
        genres: ['Drama', 'Sci-Fi'],
        rating: '8.3'
    },
    {
        title: 'Jodaeiye Nader az Simin',
        year: '2011',
        director: 'Asghar Farhadi',
        duration: '2h 3min',
        genres: ['Drama', 'Mystery'],
        rating: '8.4'
    },
    {
        title: 'Rashômon',
        year: '1950',
        director: 'Akira Kurosawa',
        duration: '1h 28min',
        genres: ['Crime', 'Drama', 'Mystery'],
        rating: '8.3'
    },
    {
        title: 'Indiana Jones and the Last Crusade',
        year: '1989',
        director: 'Steven Spielberg',
        duration: '2h 7min',
        genres: ['Action', 'Adventure', 'Fantasy'],
        rating: '8.3'
    },
    {
        title: 'All About Eve',
        year: '1950',
        director: 'Joseph L. Mankiewicz',
        duration: '2h 18min',
        genres: ['Drama'],
        rating: '8.3'
    },
    {
        title: 'Yôjinbô',
        year: '1961',
        director: 'Akira Kurosawa',
        duration: '1h 50min',
        genres: ['Action', 'Drama', 'Thriller'],
        rating: '8.3'
    },
    {
        title: 'Babam ve Oglum',
        year: '2005',
        director: 'Çagan Irmak',
        duration: '1h 48min',
        genres: ['Drama'],
        rating: '8.5'
    },
    {
        title: 'Up',
        year: '2009',
        director: 'Pete Docter',
        duration: '1h 36min',
        genres: ['Animation', 'Adventure', 'Comedy', 'Family'],
        rating: '8.3'
    },
    {
        title: 'Batman Begins',
        year: '2005',
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genres: ['Action', 'Adventure', 'Thriller'],
        rating: '8.3'
    },
    {
        title: 'Some Like It Hot',
        year: '1959',
        director: 'Billy Wilder',
        duration: '2h 1min',
        genres: ['Comedy', 'Romance'],
        rating: '8.3'
    },
    {
        title: 'The Treasure of the Sierra Madre',
        year: '1948',
        director: 'John Huston',
        duration: '2h 6min',
        genres: ['Adventure', 'Drama', 'Western'],
        rating: '8.3'
    },
    {
        title: 'Unforgiven',
        year: '1992',
        director: 'Clint Eastwood',
        duration: '2h 10min',
        genres: ['Drama', 'Western'],
        rating: '8.2'
    },
    {
        title: 'Der Untergang',
        year: '2004',
        director: 'Oliver Hirschbiegel',
        duration: '2h 36min',
        genres: ['Biography', 'Drama', 'History', 'War'],
        rating: '8.2'
    },
    {
        title: 'Die Hard',
        year: '1988',
        director: 'John McTiernan',
        duration: '2h 11min',
        genres: ['Action', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Raging Bull',
        year: '1980',
        director: 'Martin Scorsese',
        duration: '2h 9min',
        genres: ['Biography', 'Drama', 'Sport'],
        rating: '8.2'
    },
    {
        title: 'Heat',
        year: '1995',
        director: 'Michael Mann',
        duration: '2h 50min',
        genres: ['Action', 'Crime', 'Drama', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'The Third Man',
        year: '1949',
        director: 'Carol Reed',
        duration: '1h 44min',
        genres: ['Film-Noir', 'Mystery', 'Thriller'],
        rating: '8.3'
    },
    {
        title: 'Bacheha-Ye aseman',
        year: '1997',
        director: 'Majid Majidi',
        duration: '1h 29min',
        genres: ['Drama', 'Family'],
        rating: '8.4'
    },
    {
        title: 'The Great Escape',
        year: '1963',
        director: 'John Sturges',
        duration: '2h 52min',
        genres: ['Adventure', 'Drama', 'History', 'Thriller', 'War'],
        rating: '8.2'
    },
    {
        title: 'Ikiru',
        year: '1952',
        director: 'Akira Kurosawa',
        duration: '2h 23min',
        genres: ['Drama'],
        rating: '8.3'
    },
    {
        title: 'Chinatown',
        year: '1974',
        director: 'Roman Polanski',
        duration: '2h 10min',
        genres: ['Drama', 'Mystery', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'El laberinto del fauno',
        year: '2006',
        director: 'Guillermo del Toro',
        duration: '1h 58min',
        genres: ['Drama', 'Fantasy', 'War'],
        rating: '8.2'
    },
    {
        title: 'Tonari no Totoro',
        year: '1988',
        director: 'Hayao Miyazaki',
        duration: '1h 26min',
        genres: ['Animation', 'Family', 'Fantasy'],
        rating: '8.2'
    },
    {
        title: 'Incendies',
        year: '2010',
        director: 'Denis Villeneuve',
        duration: '2h 11min',
        genres: ['Drama', 'Mystery', 'War'],
        rating: '8.2'
    },
    {
        title: 'Ran',
        year: '1985',
        director: 'Akira Kurosawa',
        duration: '2h 42min',
        genres: ['Action', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'The Gold Rush',
        year: '1925',
        director: 'Charles Chaplin',
        duration: '1h 35min',
        genres: ['Adventure', 'Comedy', 'Drama', 'Family'],
        rating: '8.2'
    },
    {
        title: 'El secreto de sus ojos',
        year: '2009',
        director: 'Juan José Campanella',
        duration: '2h 9min',
        genres: ['Drama', 'Mystery', 'Romance', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Inside Out',
        year: '2014',
        director: 'Pete Docter',
        duration: '1h 35min',
        genres: ['Animation', 'Adventure', 'Comedy', 'Drama', 'Family', 'Fantasy'],
        rating: '8.2'
    },
    {
        title: 'Judgment at Nuremberg',
        year: '1961',
        director: 'Stanley Kramer',
        duration: '3h 6min',
        genres: ['Drama', 'War'],
        rating: '8.3'
    },
    {
        title: 'On the Waterfront',
        year: '1954',
        director: 'Elia Kazan',
        duration: '1h 48min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Hauru no ugoku shiro',
        year: '2004',
        director: 'Hayao Miyazaki',
        duration: '1h 59min',
        genres: ['Animation', 'Adventure', 'Family', 'Fantasy'],
        rating: '8.2'
    },
    {
        title: 'The Bridge on the River Kwai',
        year: '1957',
        director: 'David Lean',
        duration: '2h 41min',
        genres: ['Adventure', 'Drama', 'War'],
        rating: '8.2'
    },
    {
        title: 'Room',
        year: '2015',
        director: 'Lenny Abrahamson',
        duration: '1h 58min',
        genres: ['Drama'],
        rating: '8.2'
    },
    {
        title: 'Det sjunde inseglet',
        year: '1957',
        director: 'Ingmar Bergman',
        duration: '1h 36min',
        genres: ['Drama', 'Fantasy'],
        rating: '8.2'
    },
    {
        title: 'Lock, Stock and Two Smoking Barrels',
        year: '1998',
        director: 'Guy Ritchie',
        duration: '1h 47min',
        genres: ['Comedy', 'Crime'],
        rating: '8.2'
    },
    {
        title: 'Mr. Smith Goes to Washington',
        year: '1939',
        director: 'Frank Capra',
        duration: '2h 9min',
        genres: ['Comedy', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'Blade Runner',
        year: '1982',
        director: 'Ridley Scott',
        duration: '1h 57min',
        genres: ['Sci-Fi', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Casino',
        year: '1995',
        director: 'Martin Scorsese',
        duration: '2h 58min',
        genres: ['Crime', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'A Beautiful Mind',
        year: '2001',
        director: 'Ron Howard',
        duration: '2h 15min',
        genres: ['Biography', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'The Elephant Man',
        year: '1980',
        director: 'David Lynch',
        duration: '2h 4min',
        genres: ['Biography', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'Smultronstället',
        year: '1957',
        director: 'Ingmar Bergman',
        duration: '1h 31min',
        genres: ['Drama', 'Romance'],
        rating: '8.2'
    },
    {
        title: 'V for Vendetta',
        year: '2005',
        director: 'James McTeigue',
        duration: '2h 12min',
        genres: ['Action', 'Drama', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'The Wolf of Wall Street',
        year: '2013',
        director: 'Martin Scorsese',
        duration: '3h',
        genres: ['Biography', 'Comedy', 'Crime', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'The General',
        year: '1926',
        director: 'Clyde Bruckman',
        duration: '1h 7min',
        genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'War', 'Western'],
        rating: '8.2'
    },
    {
        title: 'Warrior',
        year: '2011',
        director: 'Gavin O\'Connor',
        duration: '2h 20min',
        genres: ['Drama', 'Sport'],
        rating: '8.2'
    },
    {
        title: 'Trainspotting',
        year: '1996',
        director: 'Danny Boyle',
        duration: '1h 34min',
        genres: ['Drama'],
        rating: '8.2'
    },
    {
        title: 'Dial M for Murder',
        year: '1954',
        director: 'Alfred Hitchcock',
        duration: '1h 45min',
        genres: ['Crime', 'Film-Noir', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Gran Torino',
        year: '2008',
        director: 'Clint Eastwood',
        duration: '1h 56min',
        genres: ['Drama'],
        rating: '8.2'
    },
    {
        title: 'Sunrise: A Song of Two Humans',
        year: '1927',
        director: 'F.W. Murnau',
        duration: '1h 34min',
        genres: ['Drama', 'Romance'],
        rating: '8.2'
    },
    {
        title: 'Gone with the Wind',
        year: '1939',
        director: 'Victor Fleming',
        duration: '3h 58min',
        genres: ['Drama', 'History', 'Romance', 'War'],
        rating: '8.2'
    },
    {
        title: 'Andrey Rublev',
        year: '1966',
        director: 'Andrei Tarkovsky',
        duration: '3h 25min',
        genres: ['Biography', 'Drama', 'History'],
        rating: '8.3'
    },
    {
        title: 'The Deer Hunter',
        year: '1978',
        director: 'Michael Cimino',
        duration: '3h 3min',
        genres: ['Drama', 'War'],
        rating: '8.2'
    },
    {
        title: 'Fargo',
        year: '1996',
        director: 'Joel Coen',
        duration: '1h 38min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'The Sixth Sense',
        year: '1999',
        director: 'M. Night Shyamalan',
        duration: '1h 47min',
        genres: ['Drama', 'Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'The Thing',
        year: '2004',
        director: 'John Carpenter',
        duration: '1h 49min',
        genres: ['Horror', 'Mystery', 'Sci-Fi'],
        rating: '8.2'
    },
    {
        title: 'No Country for Old Men',
        year: '2007',
        director: 'Ethan Coen',
        duration: '2h 2min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'The Big Lebowski',
        year: '1998',
        director: 'Joel Coen',
        duration: '1h 57min',
        genres: ['Comedy', 'Crime'],
        rating: '8.2'
    },
    {
        title: 'Eskiya',
        year: '1996',
        director: 'Yavuz Turgul',
        duration: '2h 8min',
        genres: ['Crime', 'Drama', 'Thriller'],
        rating: '8.4'
    },
    {
        title: 'Finding Nemo',
        year: '2003',
        director: 'Andrew Stanton',
        duration: '1h 40min',
        genres: ['Animation', 'Adventure', 'Comedy', 'Family'],
        rating: '8.1'
    },
    {
        title: 'Tôkyô monogatari',
        year: '1953',
        director: 'Yasujirô Ozu',
        duration: '2h 16min',
        genres: ['Drama'],
        rating: '8.2'
    },
    {
        title: 'There Will Be Blood',
        year: '2007',
        director: 'Paul Thomas Anderson',
        duration: '2h 38min',
        genres: ['Drama', 'History'],
        rating: '8.1'
    },
    {
        title: 'Cool Hand Luke',
        year: '1967',
        director: 'Stuart Rosenberg',
        duration: '2h 6min',
        genres: ['Crime', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'Rebecca',
        year: '1940',
        director: 'Alfred Hitchcock',
        duration: '2h 10min',
        genres: ['Drama', 'Mystery', 'Romance', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Hacksaw Ridge',
        year: '2016',
        director: 'Mel Gibson',
        duration: '2h 19min',
        genres: ['Biography', 'Drama', 'History', 'War'],
        rating: '8.2'
    },
    {
        title: 'La La Land',
        year: '2016',
        director: 'Damien Chazelle',
        duration: '2h 8min',
        genres: ['Comedy', 'Drama', 'Music', 'Musical', 'Romance'],
        rating: '8.2'
    },
    {
        title: 'Idi i smotri',
        year: '1992',
        director: 'Elem Klimov',
        duration: '2h 22min',
        genres: ['Drama', 'War'],
        rating: '8.2'
    },
    {
        title: 'Kill Bill: Vol. 1',
        year: '2003',
        director: 'Quentin Tarantino',
        duration: '1h 51min',
        genres: ['Action', 'Crime', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Rang De Basanti',
        year: '2006',
        director: 'Rakeysh Omprakash Mehra',
        duration: '2h 37min',
        genres: ['Comedy', 'Drama', 'History', 'Romance'],
        rating: '8.3'
    },
    {
        title: 'How to Train Your Dragon',
        year: '2010',
        director: 'Dean DeBlois',
        duration: '1h 38min',
        genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
        rating: '8.1'
    },
    {
        title: 'La passion de Jeanne d\'Arc',
        year: '1928',
        director: 'Carl Theodor Dreyer',
        duration: '1h 50min',
        genres: ['Biography', 'Drama', 'History'],
        rating: '8.2'
    },
    {
        title: 'Mary and Max',
        year: '2009',
        director: 'Adam Elliot',
        duration: '1h 32min',
        genres: ['Animation', 'Comedy', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'Gone Girl',
        year: '2014',
        director: 'David Fincher',
        duration: '2h 29min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Into the Wild',
        year: '2007',
        director: 'Sean Penn',
        duration: '2h 28min',
        genres: ['Adventure', 'Biography', 'Drama'],
        rating: '8.1'
    },
    {
        title: 'Shutter Island',
        year: '2010',
        director: 'Martin Scorsese',
        duration: '2h 18min',
        genres: ['Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Logan',
        year: '2017',
        director: 'James Mangold',
        duration: '2h 17min',
        genres: ['Action', 'Drama', 'Sci-Fi', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'It Happened One Night',
        year: '1934',
        director: 'Frank Capra',
        duration: '1h 45min',
        genres: ['Comedy', 'Romance'],
        rating: '8.2'
    },
    {
        title: 'Life of Brian',
        year: '1979',
        director: 'Terry Jones',
        duration: '1h 34min',
        genres: ['Comedy'],
        rating: '8.1'
    },
    {
        title: 'Relatos salvajes',
        year: '2014',
        director: 'Damián Szifron',
        duration: '2h 2min',
        genres: ['Comedy', 'Drama', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'A Wednesday',
        year: '2008',
        director: 'Neeraj Pandey',
        duration: '1h 44min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.3'
    },
    {
        title: 'Platoon',
        year: '1986',
        director: 'Oliver Stone',
        duration: '2h',
        genres: ['Drama', 'War'],
        rating: '8.1'
    },
    {
        title: 'Hotel Rwanda',
        year: '2004',
        director: 'Terry George',
        duration: '2h 1min',
        genres: ['Biography', 'Drama', 'History', 'War'],
        rating: '8.1'
    },
    {
        title: 'Le salaire de la peur',
        year: '1953',
        director: 'Henri-Georges Clouzot',
        duration: '2h 11min',
        genres: ['Adventure', 'Drama', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Network',
        year: '1976',
        director: 'Sidney Lumet',
        duration: '2h 1min',
        genres: ['Drama'],
        rating: '8.1'
    },
    {
        title: 'Rush',
        year: '2013',
        director: 'Ron Howard',
        duration: '2h 3min',
        genres: ['Action', 'Biography', 'Drama', 'History', 'Sport'],
        rating: '8.1'
    },
    {
        title: 'In the Name of the Father',
        year: '1993',
        director: 'Jim Sheridan',
        duration: '2h 13min',
        genres: ['Biography', 'Drama'],
        rating: '8.1'
    },
    {
        title: 'Stand by Me',
        year: '1986',
        director: 'Rob Reiner',
        duration: '1h 29min',
        genres: ['Adventure', 'Drama'],
        rating: '8.1'
    },
    {
        title: 'Persona',
        year: '1966',
        director: 'Ingmar Bergman',
        duration: '1h 25min',
        genres: ['Drama', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Ben-Hur',
        year: '1959',
        director: 'William Wyler',
        duration: '3h 32min',
        genres: ['Adventure', 'Drama', 'History'],
        rating: '8.1'
    },
    {
        title: 'The Grand Budapest Hotel',
        year: '2014',
        director: 'Wes Anderson',
        duration: '1h 39min',
        genres: ['Adventure', 'Comedy', 'Drama'],
        rating: '8.1'
    },
    {
        title: 'Les quatre cents coups',
        year: '1959',
        director: 'François Truffaut',
        duration: '1h 32min',
        genres: ['Crime', 'Drama'],
        rating: '8.1'
    },
    {
        title: 'Salinui chueok',
        year: '2003',
        director: 'Joon-ho Bong',
        duration: '2h 11min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: '12 Years a Slave',
        year: '2013',
        director: 'Steve McQueen',
        duration: '2h 14min',
        genres: ['Biography', 'Drama', 'History'],
        rating: '8.1'
    },
    {
        title: 'Mad Max: Fury Road',
        year: '2015',
        director: 'George Miller',
        duration: '2h',
        genres: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Jurassic Park',
        year: '2000',
        director: 'Steven Spielberg',
        duration: '2h 7min',
        genres: ['Adventure', 'Sci-Fi', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Spotlight',
        year: '2015',
        director: 'Tom McCarthy',
        duration: '2h 8min',
        genres: ['Crime', 'Drama', 'History'],
        rating: '8.1'
    },
    {
        title: 'Million Dollar Baby',
        year: '2004',
        director: 'Clint Eastwood',
        duration: '2h 12min',
        genres: ['Drama', 'Sport'],
        rating: '8.1'
    },
    {
        title: 'Stalker',
        year: '1979',
        director: 'Andrei Tarkovsky',
        duration: '2h 42min',
        genres: ['Drama', 'Sci-Fi'],
        rating: '8.1'
    },
    {
        title: 'Butch Cassidy and the Sundance Kid',
        year: '1969',
        director: 'George Roy Hill',
        duration: '1h 50min',
        genres: ['Biography', 'Crime', 'Drama', 'Western'],
        rating: '8.1'
    },
    {
        title: 'Amores perros',
        year: '2000',
        director: 'Alejandro González Iñárritu',
        duration: '2h 34min',
        genres: ['Drama', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'The Truman Show',
        year: '1990',
        director: 'Peter Weir',
        duration: '1h 43min',
        genres: ['Comedy', 'Drama', 'Sci-Fi'],
        rating: '8.1'
    },
    {
        title: 'Hachi: A Dog\'s Tale',
        year: '1983',
        director: 'Lasse Hallström',
        duration: '1h 33min',
        genres: ['Drama', 'Family'],
        rating: '8.1'
    },
    {
        title: 'The Maltese Falcon',
        year: '1941',
        director: 'John Huston',
        duration: '1h 40min',
        genres: ['Film-Noir', 'Mystery'],
        rating: '8.1'
    },
    {
        title: 'Kaze no tani no Naushika',
        year: '1984',
        director: 'Hayao Miyazaki',
        duration: '1h 57min',
        genres: ['Animation', 'Adventure', 'Fantasy', 'Sci-Fi'],
        rating: '8.1'
    },
    {
        title: 'The Princess Bride',
        year: '1987',
        director: 'Rob Reiner',
        duration: '1h 38min',
        genres: ['Adventure', 'Family', 'Fantasy', 'Romance'],
        rating: '8.1'
    },
    {
        title: 'Before Sunrise',
        year: '1995',
        director: 'Richard Linklater',
        duration: '1h 41min',
        genres: ['Drama', 'Romance'],
        rating: '8.1'
    },
    {
        title: 'Le notti di Cabiria',
        year: '1957',
        director: 'Federico Fellini',
        duration: '1h 50min',
        genres: ['Drama'],
        rating: '8.2'
    },
    {
        title: 'Paper Moon',
        year: '1973',
        director: 'Peter Bogdanovich',
        duration: '1h 42min',
        genres: ['Comedy', 'Crime', 'Drama'],
        rating: '8.2'
    },
    {
        title: 'Prisoners',
        year: '2013',
        director: 'Denis Villeneuve',
        duration: '2h 33min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Harry Potter and the Deathly Hallows: Part 2',
        year: '2011',
        director: 'David Yates',
        duration: '2h 10min',
        genres: ['Adventure', 'Drama', 'Fantasy', 'Mystery'],
        rating: '8.1'
    },
    {
        title: 'The Grapes of Wrath',
        year: '1940',
        director: 'John Ford',
        duration: '2h 9min',
        genres: ['Drama', 'History'],
        rating: '8.1'
    },
    {
        title: 'Rocky',
        year: '1976',
        director: 'John G. Avildsen',
        duration: '2h',
        genres: ['Drama', 'Sport'],
        rating: '8.1'
    },
    {
        title: 'Catch Me If You Can',
        year: '2002',
        director: 'Steven Spielberg',
        duration: '2h 21min',
        genres: ['Biography', 'Crime', 'Drama'],
        rating: '8.1'
    },
    {
        title: 'Touch of Evil',
        year: '1958',
        director: 'Orson Welles',
        duration: '1h 35min',
        genres: ['Crime', 'Drama', 'Film-Noir', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Les diaboliques',
        year: '1955',
        director: 'Henri-Georges Clouzot',
        duration: '1h 57min',
        genres: ['Crime', 'Drama', 'Horror', 'Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Gandhi',
        year: '1982',
        director: 'Richard Attenborough',
        duration: '3h 11min',
        genres: ['Biography', 'Drama', 'History'],
        rating: '8.1'
    },
    {
        title: 'Donnie Darko',
        year: '2001',
        director: 'Richard Kelly',
        duration: '1h 53min',
        genres: ['Drama', 'Sci-Fi', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Munna Bhai M.B.B.S.',
        year: '2003',
        director: 'Rajkumar Hirani',
        duration: '2h 36min',
        genres: ['Comedy', 'Drama', 'Romance'],
        rating: '8.2'
    },
    {
        title: 'Monsters, Inc.',
        year: '2001',
        director: 'Pete Docter',
        duration: '1h 32min',
        genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
        rating: '8.1'
    },
    {
        title: 'Star Wars: Episode VII - The Force Awakens',
        year: '2015',
        director: 'J.J. Abrams',
        duration: '2h 16min',
        genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        rating: '8.1'
    },
    {
        title: 'Annie Hall',
        year: '1977',
        director: 'Woody Allen',
        duration: '1h 33min',
        genres: ['Comedy', 'Romance'],
        rating: '8.1'
    },
    {
        title: 'The Terminator',
        year: '1984',
        director: 'James Cameron',
        duration: '1h 47min',
        genres: ['Action', 'Sci-Fi'],
        rating: '8.0'
    },
    {
        title: 'Barry Lyndon',
        year: '1975',
        director: 'Stanley Kubrick',
        duration: '3h 4min',
        genres: ['Adventure', 'Drama', 'History', 'War'],
        rating: '8.1'
    },
    {
        title: 'The Bourne Ultimatum',
        year: '2007',
        director: 'Paul Greengrass',
        duration: '1h 55min',
        genres: ['Action', 'Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'The Wizard of Oz',
        year: '1939',
        director: 'Victor Fleming',
        duration: '1h 42min',
        genres: ['Adventure', 'Family', 'Fantasy', 'Musical'],
        rating: '8.1'
    },
    {
        title: 'Groundhog Day',
        year: '1993',
        director: 'Harold Ramis',
        duration: '1h 41min',
        genres: ['Comedy', 'Fantasy', 'Romance'],
        rating: '8.0'
    },
    {
        title: 'La haine',
        year: '1995',
        director: 'Mathieu Kassovitz',
        duration: '1h 38min',
        genres: ['Crime', 'Drama'],
        rating: '8.1'
    },
    {
        title: '8½',
        year: '1963',
        director: 'Federico Fellini',
        duration: '2h 18min',
        genres: ['Drama'],
        rating: '8.1'
    },
    {
        title: 'Jaws',
        year: '1975',
        director: 'Steven Spielberg',
        duration: '2h 4min',
        genres: ['Adventure', 'Drama', 'Thriller'],
        rating: '8.0'
    },
    {
        title: 'Twelve Monkeys',
        year: '1995',
        director: 'Terry Gilliam',
        duration: '2h 9min',
        genres: ['Mystery', 'Sci-Fi', 'Thriller'],
        rating: '8.0'
    },
    {
        title: 'The Best Years of Our Lives',
        year: '1946',
        director: 'William Wyler',
        duration: '2h 50min',
        genres: ['Drama', 'Romance', 'War'],
        rating: '8.1'
    },
    {
        title: 'Mou gaan dou',
        year: '2002',
        director: 'Wai-Keung Lau',
        duration: '1h 41min',
        genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Paris, Texas',
        year: '1984',
        director: 'Wim Wenders',
        duration: '2h 25min',
        genres: ['Drama'],
        rating: '8.1'
    },
    {
        title: 'The Help',
        year: '2011',
        director: 'Tate Taylor',
        duration: '2h 26min',
        genres: ['Drama'],
        rating: '8.1'
    },
    {
        title: 'Faa yeung nin wa',
        year: '2000',
        director: 'Kar-Wai Wong',
        duration: '1h 38min',
        genres: ['Drama', 'Romance'],
        rating: '8.1'
    },
    {
        title: 'Sholay',
        year: '1975',
        director: 'Ramesh Sippy',
        duration: '3h 18min',
        genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Musical', 'Thriller'],
        rating: '8.2'
    },
    {
        title: 'Beauty and the Beast',
        year: '1991',
        director: 'Gary Trousdale',
        duration: '1h 24min',
        genres: ['Animation', 'Family', 'Fantasy', 'Musical', 'Romance'],
        rating: '8.0'
    },
    {
        title: 'La battaglia di Algeri',
        year: '1966',
        director: 'Gillo Pontecorvo',
        duration: '2h 1min',
        genres: ['Drama', 'War'],
        rating: '8.1'
    },
    {
        title: 'Ah-ga-ssi',
        year: '2016',
        director: 'Chan-wook Park',
        duration: '2h 24min',
        genres: ['Crime', 'Drama', 'Mystery', 'Romance', 'Thriller'],
        rating: '8.1'
    },
    {
        title: 'Piratings of the Caribbean: The Curse of the Black Pearl',
        year: '2003',
        director: 'Gore Verbinski',
        duration: '2h 23min',
        genres: ['Action', 'Adventure', 'Fantasy'],
        rating: '8.0'
    },
    {
        title: 'PK',
        year: '2014',
        director: 'Rajkumar Hirani',
        duration: '2h 33min',
        genres: ['Comedy', 'Drama', 'Fantasy', 'Sci-Fi'],
        rating: '8.2'
    },
    {
        title: 'Dog Day Afternoon',
        year: '1975',
        director: 'Sidney Lumet',
        duration: '2h 5min',
        genres: ['Biography', 'Crime', 'Drama', 'Thriller'],
        rating: '8.0'
    },
    {
        title: 'Dead Poets Society',
        year: '1989',
        director: 'Peter Weir',
        duration: '2h 8min',
        genres: ['Comedy', 'Drama'],
        rating: '8.0'
    }
];

module.exports = movies