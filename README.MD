# Kotlin fullstack example

A sample project using Kotlin for backend code as well as front-end JavaScript code.

## Setup

Open IntelliJ IDEA and `File > Open` navigate to the directory of the project and select the `build.gradle` file of the root directory.

After the project is setup, `Build > Build Project`.

Right-click on `kotlinbackend/.../kotlin/Main.kt` and select `Run 'MainKt'`

Then, right-click on `out/production/kotlinfrontend/index.html` and select Open in browser. It eveything works, you should see a page with some output from the API call.

You can call the API's directly by openinng `http://localhost:8080/api/ping` in your browser. You can additionally call pass a path parameter `http://localhost:8080/api/ping/3`.

You can find more details on my Medium blog [Building a fullstack web-app in Kotlin](https://medium.com/@ali.muzaffar/building-a-full-stack-web-app-in-kotlin-af8e8fe1f5dc)
