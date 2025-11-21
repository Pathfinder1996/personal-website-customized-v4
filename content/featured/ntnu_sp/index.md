---
date: '2'
title: 'SIC/XE 組譯器'
cover: './sp.png'
github: 'https://github.com/Pathfinder1996/sic-xe-assembler'
external: 'https://hackmd.io/@Dylan-Dai/rJlpnliIye'
tech:
  - C
---

使用 C 語言實作的 SIC/XE 組譯器，將 SIC/XE 組合語言翻譯為對應的十六進制機器碼。組譯器分為兩段式處理：
第一階段掃描原始程式碼，計算各指令與 Symbol 的位址，並建立 Symbol Table；第二階段根據 OP Code 與運算元解析結果，查詢 OP Table 與 Symbol Table，生成對應指令格式的機器碼，並處理位址轉換與重定位。最終輸出標準格式的 object program，對應指定測資皆完整通過。