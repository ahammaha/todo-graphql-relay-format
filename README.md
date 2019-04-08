# todo-graphql

To set up Hasura
================
1. run the docker compose file
2. then start flask
3. then the login to the hasura http://localhost:8080/console using hasura secret key="maha"  
4. then go to the remote schema tab => http://localhost:8080/console/remote-schemas/manage/schemas => click add => give schema name => and give schema url as http://172.17.0.1:5000/graphql (ie: since hasura runs in docker we need to give docker0 ip to acccess to local flask) => select forward all headers

To start flask
==============
1. cd flask_todo 
2. python3 -m venv venv 
3. . venv/bin/activate 
4. flask db init 
5. flask db migrate 
6. flask db upgrade 
7. flask run --host="0.0.0.0"

To start react
=============
1. npm i
2. npm start
