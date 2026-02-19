# AI 工具實戰 Prompts 完整版

**課程用途**：臣邑+創昱移民顧問 AI 實戦培訓（2026/02/26 + 2026/03/03）

本文件包含 Gemini Deep Research、NotebookLM、Nanobanana (Grok) 三大工具的實戰 Prompts，可直接複製使用。

---

## 📊 目錄

### 1. [Gemini Deep Research Prompts](#1-gemini-deep-research-prompts)
- 1.1 客戶背景調查（EB1A）
- 1.2 房產投資市場研究
- 1.3 移民政策追蹤
- 1.4 赴美生產醫院比較

### 2. [NotebookLM Prompts](#2-notebooklm-prompts)
- 2.1 EB1A 成功案例庫查詢
- 2.2 客戶資料庫查詢
- 2.3 移民政策知識庫查詢
- 2.4 房產投資知識庫查詢
- 2.5 孕產服務知識庫查詢

### 3. [Nanobanana (Grok) Prompts](#3-nanobanana-grok-prompts)
- 3.1 移民成功案例分享圖
- 3.2 赴美生產服務推廣圖
- 3.3 德州房產投資文案圖
- 3.4 EDM 電子報配圖
- 3.5 YouTube 影片縮圖
- 3.6 簡報封面設計

---

## 1. Gemini Deep Research Prompts

### 1.1 客戶背景調查（EB1A）

**情境**：新客戶 Dr. Chang（台大醫學院博士、生技公司研發總監）來諮詢 EB1A

**Prompt**：
```
【角色 Role】
你是專業的客戶研究分析師，擅長從公開資訊中挖掘客戶的成就與資格，
協助移民顧問評估 EB1A 申請可行性。

【情境 Context】
客戶基本資料：
- 姓名：Dr. Chang（張博士）
- 學歷：台灣大學醫學院博士
- 職位：某生技公司研發總監
- 專長領域：癌症免疫療法、幹細胞研究
- 客戶自述成就：
  - 發表過論文（約 15 篇）
  - 擔任期刊審稿人
  - 獲得專利（2-3 項）
  - 參與國際會議演講

【期望 Expectation】
請協助我進行深度背景調查，並產出結構化報告：

**1. 研究範圍**
- Google Scholar：搜尋論文發表、引用次數、h-index
- LinkedIn：職涯歷程、推薦人選
- 公司官網：職位描述、專案成就
- USPTO（美國專利局）：專利數量與內容
- 媒體報導：新聞報導、採訪記錄
- 學術會議：演講紀錄、主持經驗

**2. 報告結構**
請整理成以下格式：

**學術成就**
- 論文發表：總數、主要期刊、引用次數、h-index
- 代表性論文（列出 3-5 篇最重要的）

**專業貢獻**
- 專利：數量、專利號、專利內容摘要
- 產業影響：是否有商業化應用

**認可與獎項**
- 學術獎項（如有）
- 專業認證（如有）

**審查與評審經驗**
- 期刊審稿人：哪些期刊？審稿數量？
- 學術會議評審（如有）

**媒體曝光**
- 新聞報導（列出標題、來源、日期）
- 採訪記錄（如有）

**3. EB1A 資格分析**
對照 EB1A 十項標準，評估客戶是否符合至少 3 項：
1. 獲獎紀錄（國家級或國際級獎項）
2. 專業協會會員資格
3. 媒體報導
4. 擔任評審
5. 原創性貢獻
6. 學術文章發表
7. 藝術展覽或展示
8. 關鍵角色
9. 高薪資或報酬
10. 商業成功

**4. 補強建議**
如果資格不足，建議客戶補強哪些部分（例如：多發表論文、爭取媒體曝光、擔任更多審稿工作）

**5. 推薦人選**
根據合作研究者、論文共同作者，建議 5-8 位潛在推薦人（列出姓名、職位、合作關係）

**輸出格式**：
- 產出 20-30 頁的研究報告
- 附上所有來源連結
- 用表格整理，方便快速檢視
```

---

### 1.2 房產投資市場研究（德州）

**情境**：客戶想了解德州房產投資，需要最新市場數據

**Prompt**：
```
【角色 Role】
你是美國房地產市場研究專家，專門為台灣投資人分析德州房產市場，
提供數據導向的投資建議。

【情境 Context】
客戶需求：
- 投資目的：資產配置 + 未來移民使用
- 預算：USD $300,000 - $500,000
- 期望報酬：年報酬 5% 以上、穩定租金收入
- 偏好城市：德州（達拉斯、休士頓、奧斯汀）

【期望 Expectation】
請協助進行德州房產市場研究，並產出投資分析報告：

**1. 城市比較分析**
請比較達拉斯、休士頓、奧斯汀三個城市：

**達拉斯（Dallas）**
- 平均房價（2026 最新數據）
- 租金報酬率（年）
- 人口成長率（過去 5 年）
- 學區排名（Top 10 學區）
- 治安數據（犯罪率）
- 生活機能（購物、餐廳、醫療）
- 大型企業進駐（Tesla、Oracle、等）

**休士頓（Houston）**
（同上）

**奧斯汀（Austin）**
（同上）

**2. 投資報酬率試算**
請針對達拉斯地區，提供詳細試算：

**購買成本**
- 平均房價：USD $XXX,XXX
- 貸款利率：X.X%（30 年固定）
- 頭期款：20%（USD $XXX,XXX）
- 交易成本：約 2-3%（過戶費、律師費、檢查費）

**持有成本（每年）**
- 房產稅：約 1.8-2.2%
- HOA 費用（如有）：USD $XXX/月
- 房屋保險：USD $XXX/年
- 物業管理費：8-10%（租金的 8-10%）
- 維修費用：約 1% 房價

**租金收入**
- 平均租金：USD $XXX/月
- 空置率：約 5-8%
- 淨租金收入（扣除空置率）：USD $XXX/年

**ROI 計算**
- 租金報酬率（Gross Yield）：X.X%
- 淨報酬率（Net Yield）：X.X%
- 5 年預估 ROI：X.X%
- 10 年預估 ROI：X.X%

**3. 經濟發展趨勢**
- 哪些大型企業進駐德州？（Tesla、Oracle、Apple、HP）
- 就業市場成長率（過去 5 年、未來 5 年預測）
- 人口遷入趨勢（從哪些州移入？為什麼？）
- 房價預測（未來 5 年）

**4. 學區與房產**
- Top 10 學區排名（GreatSchools.org 評分）
- 學區房平均房價
- 學區房租金報酬率

**5. 稅務說明**
- 德州無州所得稅（優勢）
- 房產稅：約 1.8-2.2%（全美偏高）
- 租金所得稅：如何報稅？
- 賣房資本利得稅

**6. 風險分析**
- 房價波動風險
- 租客風險（如何篩選優質租客）
- 遠距離管理風險
- 天然災害風險（颶風、龍捲風）

**7. 推薦標的**
根據預算 USD $300K-$500K，推薦 3 個具體區域：
- 區域名稱
- 平均房價
- 租金報酬率
- 學區評分
- 生活機能

**輸出格式**：
- 投資分析報告（15-20 頁）
- 附上數據來源（Zillow, Redfin, Census Bureau, GreatSchools）
- 用圖表呈現（房價趨勢、ROI 試算、城市比較）
```

---

### 1.3 移民政策追蹤

**情境**：USCIS 發布新政策「EB1A 審查標準調整」

**Prompt**：
```
【角色 Role】
你是美國移民政策追蹤專家，每天監控 USCIS、國務院、移民律師協會（AILA）的最新公告，
並將複雜的政策變動轉化為易懂的摘要。

【情境 Context】
USCIS 剛發布新政策：
- 政策標題：EB1A 審查標準調整
- 發布日期：2026/02/15
- 生效日期：2026/03/01
- 主要變更：審查標準更嚴格，要求提供更多「持續性影響」的證據

【期望 Expectation】
請協助整理政策變動摘要，產出兩個版本：

**版本 1：內部版（詳細分析，給團隊看）**

**1. 政策標題與發布日期**
- 完整標題
- 發布機構：USCIS
- 發布日期：2026/02/15
- 生效日期：2026/03/01

**2. 主要變更內容**
- 詳細列出所有變更條款
- 與舊版政策對比（哪些條款變嚴格？哪些放寬？）

**3. EB1A 十項標準的變化**
對照十項標準，說明每一項的變化：
1. 獲獎紀錄：（有無變化？）
2. 專業協會會員：（有無變化？）
3. 媒體報導：（有無變化？）
... （逐項說明）

**4. 案例影響分析**
- 對現有客戶的影響（哪些客戶需要補件？）
- 對新客戶的影響（審查會更嚴格嗎？）
- 對不同產業的影響（科技業、學術界、藝術界）

**5. 應對策略**
- 現有客戶：如何補強申請材料？
- 新客戶：如何提前準備？
- 推薦信策略調整

**6. 業界反應**
- AILA（移民律師協會）的聲明
- 其他移民顧問的解讀
- 律師的建議

**7. 參考資料**
- USCIS 官方公告連結
- AILA 聲明連結
- 相關新聞報導連結

**字數**：800-1000 字

---

**版本 2：客戶版（簡化說明，給客戶看）**

**1. 開場**
用一句話說明政策變動：
「USCIS 於 2026/02/15 發布 EB1A 審查標準調整，將於 2026/03/01 生效。」

**2. 影響說明**
簡單說明對客戶的影響：
- 審查標準更嚴格，要求提供更多「持續性影響」的證據
- 建議提前準備更完整的申請材料

**3. 建議行動**
- 如果您已提交申請：我們會協助您補件
- 如果您準備申請：建議盡快準備推薦信與成就證明

**4. 我們的協助**
- 我們會持續追蹤政策變化
- 如有疑問，歡迎隨時聯絡我們

**語氣**：專業但易懂、不引起恐慌

**字數**：200-300 字

**格式**：適合發送 Email 或 LINE 訊息

**輸出格式**：
- 內部版：Word 文件或 Google Docs
- 客戶版：Email 或 LINE 訊息格式
```

---

### 1.4 赴美生產醫院比較

**情境**：孕媽咪想了解洛杉磯 3 家醫院的差異

**Prompt**：
```
【角色 Role】
你是赴美生產醫療諮詢專家，熟悉洛杉磯地區的醫院與產科醫生，
擅長為台灣孕媽咪提供詳細的醫院比較分析。

【情境 Context】
客戶資料：
- 孕媽咪：Linda，35 歲，第一胎
- 預產期：2026 年 10 月
- 預算：USD $30,000 - $50,000
- 偏好城市：洛杉磯（靠近月子中心）
- 需求：優質醫療、中文溝通、費用透明

【期望 Expectation】
請協助比較洛杉磯 3 家知名醫院，並產出比較報告：

**1. 醫院評比**

請比較以下 3 家醫院：
- Cedars-Sinai Medical Center
- UCLA Medical Center
- Hoag Memorial Hospital Presbyterian

**比較項目**：

**醫院基本資訊**
- 醫院名稱
- 地址
- 距離月子中心車程（假設月子中心在 Arcadia）
- Google 評價（幾顆星？）
- Yelp 評分

**產科團隊**
- 產科醫生數量
- 華人醫生（有無？姓名？）
- 醫生背景（畢業學校、專業認證）
- 護理師團隊（中文護理師？）

**生產費用**
- 自然產費用：USD $XXX
- 剖腹產費用：USD $XXX
- 無痛分娩費用：USD $XXX
- 其他費用（麻醉、新生兒照護）

**醫療設施**
- 產房設施（單人房？家庭式產房？）
- 新生兒加護病房（NICU）等級
- 產後恢復病房

**服務特色**
- 中文翻譯服務（有無？）
- 產前參觀（可否預約？）
- 產後照護（母嬰同室？）

**保險與付款**
- 是否接受台灣保險理賠？
- 付款方式（信用卡？分期？）
- 無保險情況下的費用估算

**2. 月子中心地理位置**
- 距離醫院車程
- 交通便利性（高速公路、停車）
- 周邊生活機能（超市、餐廳、公園）

**3. 客戶評價**
- Google 評價摘要（優點、缺點）
- Yelp 評價摘要
- 台灣孕媽咪的評價（如有）

**4. 推薦建議**
根據客戶預算與需求，推薦最適合的醫院，並說明理由。

**輸出格式**：
- 3 家醫院比較表（Excel 或 Google Sheets）
- 附上醫院官網連結、Google Maps 連結
- 用表格整理，方便快速比較
```

---

## 2. NotebookLM Prompts

### 2.1 EB1A 成功案例庫查詢

**情境**：公司累積了 50+ 個 EB1A 成功案例，需要快速查詢參考

**上傳檔案**：
- 50+ 個成功案例（PDF、Word、Google Docs）
- 推薦信範本庫
- EB1A 十項標準說明文件

**查詢 Prompts**：

**Prompt 1：找類似案例**
```
請幫我找出科技業 CTO 的 EB1A 成功案例，
列出客戶背景、申請策略、推薦人選、核准時間。
```

**Prompt 2：推薦信範本**
```
請整理出 EB1A 推薦信的常見結構與用詞，
並提供 3 個推薦信範例（不同產業）。
```

**Prompt 3：十項標準對照**
```
請對照 EB1A 十項標準，說明科技業申請人通常符合哪 3-5 項標準？
並提供具體證據範例。
```

**Prompt 4：產出提案**
```
新客戶背景：
- 姓名：Dr. Wang
- 學歷：台大電機博士
- 職位：某 AI 公司技術長
- 成就：發表論文 20 篇、專利 5 項、擔任 IEEE 審稿人

請根據類似案例，產出初步申請策略提案（800 字）。
```

---

### 2.2 客戶資料庫查詢（會議記錄整理）

**情境**：Bryan 每週有 10+ 場客戶會議，會議記錄很多，需要快速查詢

**上傳檔案**：
- 所有客戶會議記錄（Google Docs、PDF、音檔轉逐字稿）
- 客戶合約
- 客戶 Email 往來

**查詢 Prompts**：

**Prompt 1：查詢客戶進度**
```
請告訴我王先生的 EB1A 申請進度到哪裡了？
下一步需要做什麼？
```

**Prompt 2：查詢會議討論內容**
```
上次會議（2026/02/10）我們跟王先生討論了什麼？
有哪些決議事項？
```

**Prompt 3：追蹤待辦事項**
```
請列出所有客戶的「下一步行動」清單，
並標註緊急程度（高/中/低）。
```

**Prompt 4：產出客戶追蹤表**
```
請產出一個客戶追蹤表（表格格式），包含：
- 客戶姓名
- 申請類型（EB1A/NIW/EB5）
- 目前進度
- 下次會議時間
- 待辦事項
```

---

### 2.3 移民政策知識庫查詢

**情境**：USCIS 政策一直在變，需要建立「政策變動追蹤庫」

**上傳檔案**：
- USCIS 官方公告（PDF）
- AILA 解讀文章
- 內部整理的政策摘要

**查詢 Prompts**：

**Prompt 1：政策變化查詢**
```
2026 年 EB1A 審查標準有什麼變化？
對我們的客戶有什麼影響？
```

**Prompt 2：排期查詢**
```
NIW 的排期現在多久？
最近有沒有變化？
```

**Prompt 3：產出客戶通知**
```
USCIS 剛發布新政策，請幫我產出一封客戶通知信（200 字），
說明政策變化與建議行動。
```

---

### 2.4 房產投資知識庫查詢

**情境**：整理德州房產投資的所有資料

**上傳檔案**：
- 德州房產市場分析報告
- 客戶投資案例（成功經驗、投資報酬率）
- 稅務、貸款、管理相關文件

**查詢 Prompts**：

**Prompt 1：稅務查詢**
```
德州房產稅怎麼算？
租金所得稅如何報稅？
```

**Prompt 2：學區查詢**
```
達拉斯哪個學區最好？
學區房平均房價多少？
```

**Prompt 3：產出投資分析報告**
```
客戶預算 USD $400,000，想投資達拉斯學區房，
請幫我產出一份投資分析報告（包含 ROI 試算、推薦區域）。
```

---

### 2.5 孕產服務知識庫查詢

**情境**：整理所有赴美生產的 SOP、醫院資訊、客戶見證

**上傳檔案**：
- 赴美生產流程 SOP
- 洛杉磯 3 家醫院比較表
- 月子中心服務方案
- 客戶見證故事

**查詢 Prompts**：

**Prompt 1：文件準備**
```
赴美生產要準備什麼文件？
簽證辦理流程是什麼？
```

**Prompt 2：服務查詢**
```
月子中心有哪些服務？
費用怎麼算？
```

**Prompt 3：產出諮詢簡報**
```
請幫我準備一份赴美生產諮詢簡報（PPT 大綱），
包含流程、醫院選擇、月子中心、費用、證件辦理。
```

---

## 3. Nanobanana (Grok) Prompts

### 3.1 移民成功案例分享圖（IG/FB）

**情境**：客戶 Dr. Chen 成功取得 EB1A 綠卡，要分享到社群

**Prompt**：
```
Generate an Instagram post image with the following specifications:

Theme: "Congratulations on obtaining US Green Card (EB1A)"

Style: Professional, warm, trustworthy

Elements:
- US flag background (subtle, not overpowering)
- Green card icon (small, elegant)
- Celebration fireworks or confetti (subtle effect)
- Text overlay: "恭喜 Dr. Chen 成功取得 EB1A 綠卡！"

Color scheme:
- Primary: Blue (#0052A5, US flag blue)
- Secondary: Gold (#FFD700, celebration feel)
- Accent: White (#FFFFFF, clean and professional)

Size: 1080x1080 pixels (Instagram square format)

Text placement:
- Main text: Center, large, bold font
- Subtext (optional): "臣邑創昱移民顧問 - 您的美國夢實現者"

Mood: Celebratory yet professional, making viewers feel inspired
```

---

### 3.2 赴美生產服務推廣圖（FB）

**情境**：推廣赴美生產服務，吸引孕媽咪諮詢

**Prompt**：
```
Generate a Facebook post image with the following specifications:

Theme: "US Birth Services - Professional and Caring"

Style: Warm, maternal, professional, trustworthy

Elements:
- Cartoon-style pregnant woman (warm, friendly, not too realistic)
- US map with location pin (showing Los Angeles)
- Maternity center building icon (small, elegant)
- Heart icons (representing care and love)
- Baby footprint or baby bottle icon (maternal feel)
- Text overlay: "安心赴美生產，我們全程陪伴 👶"

Color scheme:
- Primary: Soft pink (#FFB6C1)
- Secondary: Baby blue (#ADD8E6)
- Accent: White (#FFFFFF)
- Text: Warm gray (#4A4A4A)

Size: 1200x630 pixels (Facebook recommended size)

Text placement:
- Main text: Upper center, medium-large font
- Subtext: "合法經營 · 專業團隊 · 溫暖服務"
- Call-to-action: "免費諮詢 → LINE: @melody"

Mood: Warm, caring, making expectant mothers feel safe and supported
```

---

### 3.3 德州房產投資文案圖（LinkedIn）

**情境**：推廣德州房產投資，吸引高淨值客戶

**Prompt**：
```
Generate a LinkedIn post image with the following specifications:

Theme: "Texas Real Estate Investment - High ROI, Smart Choice"

Style: Professional, business-oriented, data-driven

Elements:
- Dallas skyline silhouette (elegant, modern)
- House/property icon with upward arrow (showing growth)
- Dollar sign ($) with percentage symbol (showing returns)
- Rising curve graph (showing investment growth trend)
- Text overlay: "德州房產投資：年報酬 5-7%"

Color scheme:
- Primary: Navy blue (#003366, professional feel)
- Secondary: Gold (#D4AF37, premium feel)
- Accent: White (#FFFFFF, clean)
- Graph line: Green (#00A86B, growth)

Size: 1200x627 pixels (LinkedIn recommended size)

Text placement:
- Main text: Center-left, large, bold font
- Subtext: "低稅率 · 高報酬 · 穩定增長"
- Company name: Bottom-right corner

Mood: Professional, premium, data-driven, making investors feel confident
```

---

### 3.4 EDM 電子報配圖（封面圖）

**情境**：每週發送「移民週報」給 800+ 訂閱者

**Prompt**：
```
Generate an email newsletter header image with the following specifications:

Theme: "Weekly Immigration News Digest"

Style: Professional, informative, clean, modern

Elements:
- Newspaper icon with "WEEKLY" label
- US map outline (subtle background)
- Checkmark or highlight markers (showing featured news)
- Calendar icon with current week
- Text overlay: "本週移民新聞精選 📰"

Color scheme:
- Primary: Professional blue (#1E3A8A)
- Secondary: Accent orange (#F97316, for highlights)
- Background: Light gray (#F3F4F6)
- Text: Dark gray (#1F2937)

Size: 1200x400 pixels (email header format)

Text placement:
- Main title: Left side, large font
- Date: Right side, smaller font
- "By 臣邑創昱移民顧問" (bottom-left corner)

Mood: Professional, informative, making readers feel they're getting valuable insights
```

---

### 3.5 YouTube 影片縮圖

**情境**：公司開始做 YouTube 頻道（教育內容）

**Prompt**：
```
Generate a YouTube video thumbnail with the following specifications:

Theme: "EB1A vs NIW - Which is Right for You?"

Style: Eye-catching, clear, easy to read, clickable

Elements:
- Two sections divided by a "VS" symbol in the middle
- Left section: "EB1A" with icon (trophy or star)
- Right section: "NIW" with icon (briefcase or document)
- Large question mark (?) above the VS symbol
- Excited or thoughtful face emoji (optional)
- Text overlay: "EB1A vs NIW 哪個適合你？"

Color scheme:
- Left section (EB1A): Gold/yellow background (#FFD700)
- Right section (NIW): Blue background (#4A90E2)
- VS symbol: Bold red (#FF0000)
- Text: White with black outline (high contrast for readability)

Size: 1280x720 pixels (YouTube standard thumbnail size)

Text placement:
- Main text: Top third, large, bold font
- Subtext (optional): "5 分鐘搞懂差異"
- Channel logo: Bottom-right corner

Mood: Eye-catching, making viewers curious and want to click
```

---

### 3.6 簡報封面設計（客戶提案用）

**情境**：客戶諮詢時需要用簡報介紹 EB1A 服務

**Prompt**：
```
Generate a PowerPoint presentation cover slide image with the following specifications:

Theme: "EB1A Immigration Services - Your Path to the American Dream"

Style: Professional, premium, inspiring

Elements:
- US Capitol building or Statue of Liberty silhouette (subtle, elegant)
- Golden gate or open door symbol (representing opportunity)
- Stars (representing excellence and achievement)
- Company logo placement area (top-right corner)
- Text overlay: "EB1A 傑出人才移民申請服務"

Color scheme:
- Primary: Deep blue (#002147, professional)
- Secondary: Gold (#C5B358, premium)
- Accent: White (#FFFFFF, clean)
- Background: Gradient from deep blue to lighter blue

Size: 1920x1080 pixels (16:9 presentation format)

Text placement:
- Main title: Center, large, elegant serif font
- Subtitle: Below title, smaller font: "臣邑創昱移民顧問"
- Tagline (optional): "實現您的美國夢"

Mood: Professional, inspiring, premium, making clients feel confident and excited
```

---

## 📊 使用建議

### 如何使用這些 Prompts？

1. **Gemini Deep Research**：
   - 複製 prompt
   - 開啟 Gemini，選擇「Deep Research」模式
   - 貼上 prompt，調整客戶資料
   - 等待 3-5 分鐘（系統自動搜尋）
   - 檢視報告，匯出成 PDF 或 Google Docs

2. **NotebookLM**：
   - 先建立專案，上傳檔案
   - 複製查詢 prompt
   - 在對話框貼上 prompt
   - AI 立刻從知識庫中找答案

3. **Nanobanana (Grok)**：
   - 開啟 X (Twitter)，找到 Grok
   - 或直接在 Grok 聊天介面
   - 複製 prompt（英文效果較好）
   - 調整參數（顏色、尺寸、元素）
   - 下載圖片，用 Canva 加上 Logo 與文字

---

## 更新紀錄

| 日期 | 更新內容 |
|------|---------|
| 2026/02/19 | 建立 AI 工具實戰 Prompts 完整版 |
