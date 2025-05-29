# Weather App

## Сборка и запуск проекта

### 1. Клонирование репозитория

```bash
git clone https://github.com/Nurdoolota/weather-app.git
cd weather
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск проекта

##### Android:
```bash
npm run android
```

### 4. Создание apk файла
Перейти в папку android:
```bash
cd android
```

выполнить команду
```bash
gradlew.bat assembleRelease
```
"
в директории "android\app\build\outputs\apk\release" создастся apk файл коротую можно запускать непосредственно в самом android устройстве
