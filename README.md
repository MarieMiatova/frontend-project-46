### Hexlet tests and linter status:
[![Actions Status](https://github.com/MarieMiatova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MarieMiatova/frontend-project-46/actions)

[![Test Coverage](https://api.codeclimate.com/v1/badges/84eaa40c07947cc372be/test_coverage)](https://codeclimate.com/github/MarieMiatova/frontend-project-46/test_coverage)


[![Maintainability](https://api.codeclimate.com/v1/badges/84eaa40c07947cc372be/maintainability)](https://codeclimate.com/github/MarieMiatova/frontend-project-46/maintainability)


[![Node CI](https://github.com/MarieMiatova/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/MarieMiatova/frontend-project-46/actions/workflows/main.yml)


Установка.

    make install

Проверка линтера.

	npx eslint .

Запуск тестов.

    NODE_OPTIONS=--experimental-vm-modules npx jest

https://asciinema.org/a/WeueP7abzJE9rU7cSth8PVZkW    

Вывод справки.

    gendiff -h

https://asciinema.org/a/HJViSUOQ0yEtTE4IH5Fadx4hT    

Расширение .json

    gendiff file1.json file2.json    

https://asciinema.org/a/30bNMLNiHujXs6WFVynlQfAXC

Расширение .yaml

    gendiff file1.yaml file2.yaml

 https://asciinema.org/a/Tc9KWj32JqvuP9WA8KbBueuoA    


Format plain.

    gendiff -f plain file1.json file2.yaml

    https://asciinema.org/a/8iSa88tpXaH3e8mwFvBRVJFjF

Format json.

    gendiff -f json file1.yaml file2.json

     https://asciinema.org/a/V2Jk1z9FsWNyrJh2n23xHITPz
