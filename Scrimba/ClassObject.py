class Movie:
    def __init__(self,title,year,imdb_score,have_seen):
        self.title = title
        self.year = year
        self.imdb_score = imdb_score
        self.have_seen = have_seen
    
    def nice_print(self):
        print(f"Title: {self.title}")
        print(f"Year of production: {self.year}")
        print(f"IMDB Score: {self.imdb_score}")
        print(f"I have seen it: {self.have_seen}")

objFilm1 = Movie("Life of Brian", 1979, 8.1, True)
objFilm2 = Movie("The Holy Grail", 1975, 8.2, True)

#print(objFilm1.title, objFilm1.imdb_score)
objFilm2.nice_print()

listFilms = [objFilm1, objFilm2]
for element in listFilms:
    element.nice_print()