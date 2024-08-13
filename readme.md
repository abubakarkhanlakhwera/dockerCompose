In this repository, I have implemented Docker Compose for managing and orchestrating multi-container Docker applications
+-----------+       +-----------+
|   Service |       |   Service |
|     A     |       |     B     |
|   (app)   |       |   (db)    |
+-----------+       +-----------+
      |                   |
      |                   |
      +-------+   +-------+
              |   |
        +-----------+
        | Docker    |
        | Compose   |
        |   File    |
        +-----------+
