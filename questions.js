// AI 学习小助手 - 题库数据
// 每个科目至少 15 道选择题，4 选 1

const questions = {
  // ========== 英语基础 ==========
  english: [
    { q: "What is the past tense of \"go\"?", options: ["went", "goed", "gone", "going"], answer: 0, explain: "\"go\" 的过去式是不规则变化 \"went\"。" },
    { q: "Which word is a noun?", options: ["run", "beautiful", "happiness", "quickly"], answer: 2, explain: "\"happiness\"（幸福）是名词，其他分别是动词、形容词、副词。" },
    { q: "Choose the correct article: \"She is ___ honest girl.\"", options: ["a", "an", "the", "no article"], answer: 1, explain: "\"honest\" 发音以元音开头（h 不发音），所以用 \"an\"。" },
    { q: "What does \"library\" mean in Chinese?", options: ["实验室", "图书馆", "博物馆", "医院"], answer: 1, explain: "\"library\" 的意思是图书馆。" },
    { q: "Which sentence is correct?", options: ["He don't like apples.", "He doesn't like apples.", "He not like apples.", "He doesn't likes apples."], answer: 1, explain: "第三人称单数否定用 \"doesn't + 动词原形\"。" },
    { q: "What is the plural of \"child\"?", options: ["childs", "childes", "children", "child"], answer: 2, explain: "\"child\" 的复数是不规则变化 \"children\"。" },
    { q: "\"I have ___ (many/much) books.\" Which is correct?", options: ["many", "much", "a lot", "very"], answer: 0, explain: "\"books\" 是可数名词复数，用 \"many\" 修饰。" },
    { q: "What is the opposite of \"big\"?", options: ["tall", "small", "wide", "long"], answer: 1, explain: "\"big\"（大）的反义词是 \"small\"（小）。" },
    { q: "Fill in the blank: \"She ___ to school every day.\"", options: ["go", "goes", "going", "gone"], answer: 1, explain: "主语 \"She\" 是第三人称单数，动词加 \"-s\" 变成 \"goes\"。" },
    { q: "Which word is a verb?", options: ["table", "swim", "happy", "blue"], answer: 1, explain: "\"swim\"（游泳）是动词，其他分别是名词、形容词、形容词。" },
    { q: "What is the comparative form of \"good\"?", options: ["gooder", "more good", "better", "best"], answer: 2, explain: "\"good\" 的比较级是不规则变化 \"better\"。" },
    { q: "\"There are five ___ (apple/apples) on the table.\"", options: ["apple", "apples", "applees", "applis"], answer: 1, explain: "\"five\" 后面接可数名词复数 \"apples\"。" },
    { q: "What does \"usually\" mean?", options: ["从不", "偶尔", "通常", "总是"], answer: 2, explain: "\"usually\" 的意思是"通常"。" },
    { q: "Choose the correct spelling:", options: ["beautifull", "beautiful", "beatiful", "beautifuul"], answer: 1, explain: "正确拼写是 \"beautiful\"（美丽的）。" },
    { q: "\"I ___ my homework yesterday.\"", options: ["do", "did", "does", "doing"], answer: 1, explain: "\"yesterday\" 表示过去时，用 \"did\"（do 的过去式）。" },
    { q: "Which is a preposition?", options: ["and", "but", "under", "very"], answer: 2, explain: "\"under\"（在……下面）是介词。\"and/but\" 是连词，\"very\" 是副词。" },
    { q: "What is the superlative of \"tall\"?", options: ["taller", "tallest", "more tall", "most tall"], answer: 1, explain: "单音节形容词最高级加 \"-est\"，\"tall\" → \"tallest\"。" },
  ],

  // ========== 语文常识 ==========
  chinese: [
    { q: "\"床前明月光\"出自哪位诗人？", options: ["杜甫", "李白", "白居易", "王维"], answer: 1, explain: "这是李白的《静夜思》。" },
    { q: "\"四书五经\"中的\"四书\"不包括以下哪部？", options: ["《大学》", "《中庸》", "《诗经》", "《论语》"], answer: 2, explain: "四书是《大学》《中庸》《论语》《孟子》，《诗经》属于五经。" },
    { q: "\"桃李满天下\"中的\"桃李\"比喻什么？", options: ["水果", "学生", "花朵", "树木"], answer: 1, explain: "\"桃李\"比喻老师培养的学生。" },
    { q: "中国四大发明不包括以下哪项？", options: ["造纸术", "印刷术", "丝绸", "指南针"], answer: 2, explain: "四大发明是造纸术、印刷术、指南针、火药。丝绸不是四大发明。" },
    { q: "\"三人行，必有我师焉\"出自？", options: ["《孟子》", "《论语》", "《大学》", "《道德经》"], answer: 1, explain: "这句话出自《论语·述而》，是孔子的名言。" },
    { q: "\"但愿人长久，千里共婵娟\"的作者是？", options: ["苏轼", "李清照", "辛弃疾", "柳永"], answer: 0, explain: "这是苏轼《水调歌头》中的名句。" },
    { q: "\"岁寒三友\"指的是？", options: ["梅兰竹", "松竹梅", "桃李杏", "松梅兰"], answer: 1, explain: "岁寒三友是松、竹、梅，象征坚韧不拔。" },
    { q: "\"唐宋八大家\"不包括谁？", options: ["韩愈", "欧阳修", "杜甫", "苏轼"], answer: 2, explain: "杜甫是唐代大诗人，但不在唐宋八大家之列。八大家以散文著称。" },
    { q: "\"千里之行，始于足下\"出自哪部著作？", options: ["《论语》", "《道德经》", "《庄子》", "《孟子》"], answer: 1, explain: "这句话出自老子的《道德经》。" },
    { q: "\"画龙点睛\"这个成语与谁有关？", options: ["张僧繇", "顾恺之", "吴道子", "王羲之"], answer: 0, explain: "南朝画家张僧繇画龙点睛，龙飞走了。" },
    { q: "\"四面楚歌\"与哪个历史人物有关？", options: ["刘邦", "项羽", "韩信", "张良"], answer: 1, explain: "项羽被围垓下，四面楚歌，最终兵败。" },
    { q: "\"不以物喜，不以己悲\"出自？", options: ["《醉翁亭记》", "《岳阳楼记》", "《滕王阁序》", "《出师表》"], answer: 1, explain: "这是范仲淹《岳阳楼记》中的名句。" },
    { q: "\"三十六计\"的最后一计是？", options: ["走为上计", "苦肉计", "美人计", "空城计"], answer: 0, explain: "三十六计最后一计是\"走为上计\"。" },
    { q: "\"纸上谈兵\"说的是谁？", options: ["赵括", "白起", "廉颇", "李牧"], answer: 0, explain: "赵括只会纸上谈兵，长平之战大败。" },
    { q: "\"望梅止渴\"与谁有关？", options: ["刘备", "孙权", "曹操", "诸葛亮"], answer: 2, explain: "曹操行军途中用\"望梅止渴\"鼓舞士气。" },
    { q: "\"文房四宝\"指的是？", options: ["笔墨纸砚", "琴棋书画", "诗书礼乐", "风雅颂赋"], answer: 0, explain: "文房四宝是笔、墨、纸、砚。" },
    { q: "\"天行健，君子以自强不息\"出自？", options: ["《论语》", "《周易》", "《孟子》", "《中庸》"], answer: 1, explain: "这句话出自《周易》乾卦。" },
  ],

  // ========== 数学基础 ==========
  math: [
    { q: "15 × 8 = ?", options: ["100", "120", "130", "110"], answer: 1, explain: "15 × 8 = 120。可以拆成 10×8 + 5×8 = 80 + 40 = 120。" },
    { q: "一个三角形的内角和是多少度？", options: ["90°", "180°", "360°", "270°"], answer: 1, explain: "任何三角形的内角和都是 180°。" },
    { q: "1/2 + 1/3 = ?", options: ["2/5", "5/6", "1/5", "2/6"], answer: 1, explain: "通分：1/2 = 3/6，1/3 = 2/6，所以 3/6 + 2/6 = 5/6。" },
    { q: "圆的面积公式是？", options: ["2πr", "πr²", "πd", "2πr²"], answer: 1, explain: "圆的面积 = πr²，其中 r 是半径。" },
    { q: "下列哪个是质数？", options: ["9", "15", "17", "21"], answer: 2, explain: "17 只能被 1 和 17 整除，是质数。9=3×3，15=3×5，21=3×7。" },
    { q: "100 ÷ 4 × 2 = ?", options: ["50", "12.5", "200", "25"], answer: 0, explain: "从左到右计算：100 ÷ 4 = 25，25 × 2 = 50。" },
    { q: "正方形的周长公式是？", options: ["边长×4", "边长×边长", "边长×2", "(长+宽)×2"], answer: 0, explain: "正方形四条边相等，周长 = 边长 × 4。" },
    { q: "0.5 + 0.25 = ?", options: ["0.55", "0.75", "0.80", "0.70"], answer: 1, explain: "0.5 + 0.25 = 0.75，即 1/2 + 1/4 = 3/4。" },
    { q: "一个正方体有几个面？", options: ["4", "6", "8", "12"], answer: 1, explain: "正方体有 6 个面，每个面都是正方形。" },
    { q: "2⁴ = ?", options: ["8", "16", "32", "64"], answer: 1, explain: "2⁴ = 2 × 2 × 2 × 2 = 16。" },
    { q: "若 x + 7 = 15，则 x = ?", options: ["7", "8", "9", "22"], answer: 1, explain: "x = 15 - 7 = 8。" },
    { q: "1公里 = 几米？", options: ["100米", "500米", "1000米", "10000米"], answer: 2, explain: "1 公里 = 1 千米 = 1000 米。" },
    { q: "3/4 用小数表示是？", options: ["0.25", "0.50", "0.75", "0.80"], answer: 2, explain: "3 ÷ 4 = 0.75。" },
    { q: "直角是多少度？", options: ["45°", "60°", "90°", "180°"], answer: 2, explain: "直角 = 90°。" },
    { q: "2、4、6、8、___，下一个数是？", options: ["9", "10", "12", "11"], answer: 1, explain: "这是偶数列，每次加 2，所以下一个是 10。" },
    { q: "长方形面积公式是？", options: ["长+宽", "长×宽", "(长+宽)×2", "长×2"], answer: 1, explain: "长方形面积 = 长 × 宽。" },
    { q: "√144 = ?", options: ["11", "12", "13", "14"], answer: 1, explain: "12 × 12 = 144，所以 √144 = 12。" },
  ]
};
