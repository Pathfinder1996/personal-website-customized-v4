---
date: '1'
title: '邊緣裝置上的手腕靜脈辨識系統'
cover: './ms_paper.png'
github: 'https://github.com/Pathfinder1996/ntust-ib811-wrist-vein-verification-system'
# external: 'https://halcyon-theme.netlify.com/'
cta: "dummy"
tech:
  - Python
  - TensorFlow
  - Keras
  - scikit-learn
  - scikit-image
  - OpenCV
  - NumPy
  - SciPy
  - Matplotlib
  - Seaborn
  - PyQt5
  - Pandas
---

建立一套可於邊緣裝置實時運行的非接觸式手腕靜脈驗證系統。使用自製近紅外影像拍攝裝置收集 NTUST-IB811 手腕靜脈資料集，並設計結合幾何與向量運算的感興趣區域提取演算法，以取代過去需接觸式的定位方式。在特徵比對上，開發輕量化混合式孿生神經網路，無需依賴大型預訓練模型，即能兼具高效率與高準確率。實驗結果顯示，本系統於 NTUST-IB811 的平均 EER 為 0.46% ± 0.20%，且在 Raspberry Pi 4 上的總執行時間為 357.45 ± 11.56 ms，證明其部署在資源受限平台的可行性。
