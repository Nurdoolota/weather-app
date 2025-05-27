# Weather App

## Сборка и запуск проекта

### 1. Клонирование репозитория

```bash
git clone https://github.com/Nurdoolota/weather-app.git
cd weather
```

### 2. Установка зависимостей

Для работы проекта необходимы [Node.js](https://nodejs.org/) и [Yarn](https://yarnpkg.com/) или NPM.

```bash
yarn install
# или
npm install
```

### 3. Запуск проекта

#### Если используется Expo:

```bash
yarn start
# или
npm start
```
- Откроется Expo DevTools в браузере.
- Отсканируйте QR-код с помощью приложения Expo Go на вашем смартфоне (доступно в App Store и Google Play).

#### Если используется React Native CLI (без Expo):

##### Android:
```bash
npx react-native run-android
```

##### iOS (только на MacOS):
```bash
npx react-native run-ios
```

### 4. Сборка релизных версий

#### Expo (EAS Build):
```bash
npx expo install eas-cli
eas build
```
- Следуйте инструкциям в терминале и [официальной документации Expo](https://docs.expo.dev/build/introduction/).

#### React Native CLI:
- [Android](https://reactnative.dev/docs/signed-apk-android):  
  1. Создайте релизный ключ.
  2. Соберите APK:
     ```bash
     cd android && ./gradlew assembleRelease
     ```
  3. APK появится в `android/app/build/outputs/apk/release/`

- [iOS](https://reactnative.dev/docs/publishing-to-app-store):  
  1. Откройте проект в Xcode.
  2. Архивируйте и экспортируйте приложение для App Store.

---

## Дополнительная информация

- Если у вас возникнут ошибки при сборке, убедитесь, что установлены все зависимости (например, Android Studio/Xcode для нативной сборки).
- Для управления переменными окружения создайте файл `.env` в корне проекта (если используется).

---

**Если вы используете Expo — это самый быстрый и удобный способ для старта и тестирования проекта на любом устройстве!**
