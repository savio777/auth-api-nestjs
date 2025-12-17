FROM postgres:15-alpine

# Define database name, user and password (serão criados na primeira inicialização do container)
ENV POSTGRES_DB=test \
    POSTGRES_USER=teste \
    POSTGRES_PASSWORD=teste

EXPOSE 5432