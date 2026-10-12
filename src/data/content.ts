export const chapters = [
 {id:'overview',num:'01',en:'Overview',title:'工作回顾',short:'工作回顾',summary:'从熟悉双端业务，到参与真实需求交付。',time:'2 MIN',desc:'建立业务认知，回看首月工作与阶段产出。'},
 {id:'practice',num:'02',en:'Design Practice',title:'业务设计实践',short:'业务设计实践',summary:'把业务规则，转译成清晰的体验。',time:'7 MIN',desc:'从订单展示策略到发票 H5，理解每一次设计判断。'},
 {id:'ai',num:'03',en:'AI Exploration',title:'AI 设计提效探索',short:'AI 设计提效探索',summary:'让 AI 理解已有设计，再讨论如何提效。',time:'4 MIN',desc:'基于真实订单卡片，验证组件封装的可行性与边界。'},
 {id:'reflection',num:'04',en:'Reflection',title:'成长反思与规划',short:'成长与规划',summary:'在具体问题里，建立自己的设计方法。',time:'2 MIN',desc:'诚实回看变化、不足，以及下一阶段的行动。'}
];
export const goals = ['理解司机端与乘客端的核心旅程','完成日常需求设计、交付与 UI 验收','探索已有设计资产下的 AI 辅助工作流'];
export const work = [
 ['双端业务理解','司机端 + 乘客端旅程梳理','已完成'],
 ['不感兴趣订单置底','三类大厅的展示优先级与状态检查','已完成'],
 ['发票 H5 交互优化','交互路径、业务状态与规则提示调整','已完成'],
 ['司机准入合并 UI 验收','一轮 / 二轮检查、研发沟通与验收记录','已完成'],
 ['下载司机 App 页面优化','已完成，方案待确认','进行中'],
 ['订单支付提醒优化','跟进确认支付消息中心页面细节','待推进'],
 ['AI 辅助组件库探索','Skill V2 与订单卡片 MVP，部分通过','阶段验证']
];
export const journeys = [
 {title:'司机端',label:'SUPPLY / 运力供给',steps:['抢单 / PK','接驾导航','等待上车','验证手机号','送驾','确认账单'],note:'首页 · 抢单大厅 · 订单管理 · 个人中心'},
 {title:'乘客端',label:'DEMAND / 出行需求',steps:['选址 / 估价','下单','应答配对','前往上车点','行程履约','支付 / 评价'],note:'下单 → 配对 → 履约 → 后置支付与评价'}
];
export const orderScenes = [
 {name:'普通单大厅',steps:['常规订单','预约单','不感兴趣订单'],note:'常规订单包含预约单；预约时间已到 / 未到需要分别检查。'},
 {name:'顺风车单大厅',steps:['常规订单','时间不匹配订单','不感兴趣订单'],note:'分别检查输入目的地前、后的展示情况。'},
 {name:'拼单大厅',steps:['常规订单','不感兴趣订单'],note:'保留订单可见性，通过置底区分展示优先级。'}
];
export const invoice = {
 before:{flow:['提交成功','查看电子发票 / 凭证','开具历史列表','详情'],back:'详情返回 → 填写提交页',state:'顺风车状态与业务规则不对应，已开具置灰不可选。',note:'规则入口缺失，金额说明不足。'},
 after:{flow:['提交','发票 / 收款凭证详情'],back:'详情返回 → 选择行程列表',state:'顺风车「已开具」橙色透传，收款凭证可重复开具、可勾选。',note:'选择行程页前置规则横幅，金额下方补充说明。'}
};
export const layers = [
 ['01','Foundation / Tokens','Color · Typography · Spacing · Radius'],
 ['02','Base Components','Button · Tag · Badge · Icon'],
 ['03','Composite Components','Route Info · Price Info'],
 ['04','Business Components','Order Card · Invoice Item'],
 ['05','Patterns / Pages','Order List · Filter · Order Hall']
];
export const aiFlow = ['读取 / 盘点','聚类 / 边界判断','搜索已有组件','属性分类 / 提案','设计师确认','执行前检查','封装','QA'];
export const aiProblems = [
 ['组件粒度偏大','增加 Boundary Analysis，判断整体封装或拆分，保留内部 Layout。'],
 ['可能重复创建组件','增加 Reuse Search，先决定 REUSE / EXTEND / CREATE。']
];
export const changes = [
 ['业务理解','关注单个页面是否清晰','结合双端旅程，理解等待时间与匹配成功率的取舍。'],
 ['设计方法','从页面修改开始','先厘清规则、状态与边界，再调整路径和视觉细节。'],
 ['工作协作','逐步学习需求范围的界定','先对齐需求范围，新增内容由产品与设计上级确认。']
];
export const plans = [
 ['业务交付','推进下载司机 App 页面方案确认；跟进确认支付消息中心细节。','下一阶段'],
 ['组件边界测试','额度恢复后 1–2 周，选择 5–10 个真实历史 UI 进行边界与复用判断。','待验证'],
 ['新路径尝试AI探索','尝试使用cursor，在规则范围内进一步探索ai提效的方向与路径，并进行实践','']
];
export const images:Record<string,{label:string;purpose:string;src:string;ratio:string}> = {
 journey:{label:'IMAGE 01',purpose:'双端核心旅程 / Journey Map',src:'',ratio:'16 / 7'},
 order:{label:'IMAGE 02',purpose:'订单展示策略 / UI Design',src:'/images/order-hall.png',ratio:'16 / 9'},
 invoiceBefore:{label:'IMAGE 03',purpose:'发票 H5 优化前 / Before',src:'/images/invoice-before.png',ratio:'16 / 9'},
 invoiceAfter:{label:'IMAGE 04',purpose:'发票 H5 优化后 / After',src:'/images/invoice-after.png',ratio:'16 / 9'},
 ai:{label:'IMAGE 06',purpose:'Order/Card · Component & Instances / Figma',src:'/images/ai-component.png',ratio:'16 / 9'},
 overview:{label:'IMAGE 07',purpose:'阶段交付概览 / Work Archive',src:'',ratio:'16 / 6'}
};
