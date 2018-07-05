# requirements

- docker

# development

initial command (install dependencies + compile website)
```
./run.sh docker npm install
./run.sh docker grunt
```

run to continuously recompile changed files

```
./run.sh docker grunt watch
```

do have a live reload server

```
./grunt_serve.sh
```

for deployment see

```
./deploy.sh
```


## tests

for tests
```
./run.sh tests
```

clean test run
```
./run.sh full-test
```