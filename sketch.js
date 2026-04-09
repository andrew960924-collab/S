let isFlashing = true; // 修改為預設開啟，一進網頁就開始
let startTime = 0;
const FLASH_DURATION = 3000; // 閃爍持續 3000 毫秒 (3秒)

function setup() {
  // 設定為全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100); // 使用 HSB 模式讓顏色更亮、更飽和
  background(0);
  startTime = millis(); // 在 setup 時記錄開始時間
}

function draw() {
  if (isFlashing) {
    let elapsed = millis() - startTime;

    if (elapsed < FLASH_DURATION) {
      // 彩色爆閃：每一幀都產生隨機的高亮度顏色
      background(random(360), 100, 100);
    } else {
      // 時間到，停止閃爍並回歸黑色
      isFlashing = false;
      background(0, 0, 0); // 回歸黑色背景
      // 嘗試關閉視窗/分頁。請注意，這通常只適用於由腳本打開的視窗/分頁。
      // 如果此視窗不是由腳本打開的，瀏覽器可能會阻止此操作。
      window.close();
    }
  }
}

// 當視窗大小改變時，自動調整畫布以維持全螢幕
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
