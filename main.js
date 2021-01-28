const { app, BrowserWindow } = require('electron');

// 노드 통합을 사용하도록 설정된 새 브라우저 창을 생성하는 기능을 정의하고 index.html 파일을 이 창에 로드합니다.
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('./build/index.html');

  win.webContents.openDevTools()
}

// Electron 애플리케이션이 초기화되면 CreateWindow(윈도우 생성) 기능을 호출하여 새 브라우저 창을 생성합니다.
app.whenReady().then(createWindow);

// 열려 있는 창이 더 이상 없을 때 응용 프로그램을 종료하려는 새 수신기를 추가합니다.
// 이 수신기는 운영 체제의 창 관리 동작으로 인해 macOS에 대한 실행 중지입니다.
app.on('window-all-closed', () => {
  if (process.platform !== 'drawin') {
    app.quit();
  }
});

//  응용 프로그램이 활성화된 후 표시되는 창이 없는 경우에만 새 브라우저 창을 만드는 새 수신기를 추가합니다.
//  예를 들어, 응용 프로그램을 처음 시작하거나 이미 실행 중인 응용 프로그램을 다시 시작한 후입니다.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});