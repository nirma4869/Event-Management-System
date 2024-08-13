# REE(N)VENT

## Project Description
The application is an Event planning and registration platform.
It allows users to create events with a specific setup of tables in the event location.
Users can then register for those events and choose a table.
The application also allows all users to see all events with the events details.
This application was developed by a group of three students

For more information, please see the README.md in the report folder.

## Starting the application
1. Clone the repository
2. Run `npm install` in the next folder
3. Run the Docker container:
   - For a development setup: Run `docker-compose up` in the root folder
   - For a production setup: Run `docker-compose -f docker-compose.prod.yml up` in the root folder
   - add `-d` to run the container in the background
4. Apply all database migrations (see below)
5. Open the application in your browser at `localhost:3000`
6. To stop the container, run `docker-compose down` in the root folder

## Using prisma and prisma migrate to setup / update the database
1. Have the docker container running
2. PLEASE MAKE SURE THAT YOU CHANGE OUT THE PASSWORD IN THE `docker-compose.yml` FILE TO SOMETHING SECURE AND ALSO CHANGE IT IN THE `next/.env` FILE (in both URLS)
3. Changeout the environment-variable `DATABASE_URL` in the `next/.env` file to point to the `localhost` database
4. Either:
   - Run `npx prisma migrate deploy` in the `next` folder to apply all missing migrations to the database
   - Run `npx prisma migrate dev` in the `next` folder to create a new migration and apply it to the database
5. Run `npx prisma generate` in the `next` folder to generate the prisma client
6. Changeout the environment-variable `DATABASE_URL` in the `next/.env` file to point to the `postgres` database (the internal docker URL)
7. Shut down the docker container, rebuild it and start it again
