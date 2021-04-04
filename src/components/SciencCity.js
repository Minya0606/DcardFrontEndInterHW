import React, { useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Container, Table, Dropdown, DropdownButton} from 'react-bootstrap'
import { useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
const test = [
    {
      "ID": "C1_315081500H_000152",
      "Name": "大武崙砲台",
      "DescriptionDetail": "大武崙砲台位於基隆西北方，居外木山漁港後的大武崙山上，也就是情人湖的上方。因其地勢險要，而成為扼守基隆港西側的重要據點，在道光二十年，西元1840年的清英鴉片戰爭及光緒十年，西元1884年的清法戰爭時，清政府均曾派兵駐防。但據其構造及設計特色來看，應為日治時期所改建之結果。  大武崙砲台為國定古蹟，位於大武崙山巔，地形居高臨下，地勢非常險要，其標高為231公尺，可西瞰情人湖，北俯大武崙澳，東望基隆港及東海。在進入砲台區的入口處，是一條充滿林蔭落葉的碎石步道。而當抵達山頂的砲台區時，尚可看見以塊石丁順疊砌的砲台結構、砲盤、儲彈室及運輸砲台、機械坡道，雖然現今大砲已經不存在了，但地面仍有明顯的砲架痕跡。      大武崙砲台遺址保存良好，包括營區大門步道、洞窟營舍、東稜堡、北稜堡、南稜堡、避彈壕、蓄水池等。區內幽靜、林木翠綠，登上環道的短牆上眺覽四周，基隆嶼、外木山澳漁村、八斗子、北海岸一帶的秀麗風光盡收眼底，是一處觀景、談心的好地，也常為婚紗公司取景之選擇，增添它浪漫的風情。  資料來源於：基隆市政府",
      "Description": "大武崙砲台位於基隆西北方，居外木山漁港後的大武崙山上，也就是情人湖的上方。因其地勢險要，而成為扼守基隆港西側的重要據點，在道光二十年，西元1840年的清英鴉片戰爭及光緒十年，西元1884年的清法戰爭時，清政府均曾派兵駐防。但據其構造及設計特色來看，應為日治時期所改建之結果。  大武崙砲台為國定古蹟，位於大武崙山巔，地形居高臨下，地勢非常險要，其標高為231公尺，可西瞰情人湖，北俯大武崙澳，東望基隆港及東海。在進入砲台區的入口處，是一條充滿林蔭落葉的碎石步道。而當抵達山頂的砲台區時，尚可看見以塊石丁順疊砌的砲台結構、砲盤、儲彈室及運輸砲台、機械坡道，雖然現今大砲已經不存在了，但地面仍有明顯的砲架痕跡。      大武崙砲台遺址保存良好，包括營區大門步道、洞窟營舍、東稜堡、北稜堡、南稜堡、避彈壕、蓄水池等。區內幽靜、林木翠綠，登上環道的短牆上眺覽四周，基隆嶼、外木山澳漁村、八斗子、北海岸一帶的",
      "Phone": "886-2-24287664",
      "Address": "基隆市安樂區基金一路208巷19號(情人湖上方)",
      "OpenTime": "開放式空間 隨時開放",
      "Picture": {
        "PictureUrl1": "http://www.northguan-nsa.gov.tw/user/Article.aspx?Lang=1&SNo=04005325"
      },
      "Position": {
        "PositionLat": 25.15675926208496,
        "PositionLon": 121.70555877685547,
        "GeoHash": "wsqx17xk9"
      },
      "Class1": "古蹟類",
      "WebsiteUrl": "http://www.northguan-nsa.gov.tw/user/Article.aspx?Lang=1&SNo=04005325",
      "ParkingPosition": {},
      "Keyword": "北海岸及觀音山國家風景區入口網, 觀光資訊網, 魅力景點, 基隆市, 大武崙砲台",
      "City": "基隆市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_376570000A_000008",
      "Name": "情人湖濱海大道(外木山濱海大道)",
      "DescriptionDetail": "每到假日，基隆著名的外木山情人湖濱海大道總是吸引大批賞景人潮，除飽覽海天一色風光，遠眺基隆嶼，看大船入港外，沿線並有多家的海產餐廳及咖啡館，有名的龍蝦痲糬及假日漁市的鯊魚煙，更是不容錯過，是闔家大小一日遊的好去處。外木山海岸為基隆市轄區僅存最長的天然海岸，自外木山漁港至澳底通村全長5公里的海岸公路，原為安中產業道路，一側為開闊的海岸景觀，一側為高聳的單面懸崖，是富狀麗景色的海岸線；經基隆市府規劃設計為觀光休閒道路，並正式命名為情人湖濱海大道。完工後的情人湖濱海大道，由於沿線風光秀麗，除可飽覽海天一色風光外，遠眺基隆嶼，看大船入港外，也是休閒、健行的好去處；晚上更可欣賞海面上漁火點點，因此也吸引許多的遊客前來，基隆市政府也在此興建多座的觀景平台，坐在岸邊，聆聽濤聲，欣賞彩霞萬丈之景，令人心曠神怡，海岸礁岩長年經海水沖蝕，雕塑出奇特的造型，值得深入觀賞體會。此外，在外木山漁港附近，除有小型觀光假日漁市外，並有早泳會設置的游泳設施，提供泳技較佳者在此游泳或浮潛；澳底漁村的沙灘是僅存的沙岸地形，小而美麗；除有名的龍蝦痲糬及假日漁市的鯊魚煙，經常可看到門口大排長龍外，沿線並有多家的海產餐廳及咖啡館，是一個適合闔家大小及青年朋友、情侶等前來遊玩的好去處。",
      "Description": "全長5公里的海岸公路，一側為海岸景觀，一側為單面懸崖，澳底漁村的沙灘是僅存的沙岸地形，小而美麗。坐在岸邊，聆聽濤聲，欣賞彩霞萬丈，令人心曠神怡。海岸礁岩長年經海水沖蝕，雕塑出奇特造型，值得深入觀賞體會。",
      "Phone": "886-2-24287664",
      "Address": "基隆市中山區湖海路一、二段(協和街)",
      "ZipCode": "203",
      "TravelInfo": "搭乘基隆市公車302號公車於「中山高中站」下車，步行約20分鐘即可抵達。假日增開基隆市305號公車於「情人湖濱海大道紀念碑站」下車，沿線即為情人湖濱海大道。班車行駛時間為14:30-21:30，每整點開車，每年十二月至次年四月停駛。",
      "OpenTime": "開放式空間，無時間限制",
      "Picture": {},
      "MapUrl": "http://g.co/maps/9hc4h",
      "Position": {
        "PositionLat": 25.163110733032227,
        "PositionLon": 121.72789764404297,
        "GeoHash": "wsqx1uz99"
      },
      "Class1": "遊憩類",
      "Class2": "自然風景類",
      "Level": "非古蹟",
      "ParkingInfo": "沿途有多座停車場，可停大小汽車",
      "ParkingPosition": {},
      "TicketInfo": "免門票",
      "Keyword": "外木山",
      "City": "基隆市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_376570000A_000048",
      "Name": "和平島公園",
      "DescriptionDetail": "和平島原名社寮島，位於基隆東北一禹，是基隆港的門戶，同時也是北台灣最早有西方人足跡的地方，亦是基隆最早有漢人入墾的所在地之一。此地早期原為凱達格蘭族的聚落，之後被列為軍事管制區，目前在沿海部份地區已開放設為和平島公園。 和平島公園的遊憩重點，就是園區內重要的海蝕地形景觀，位在海岸線旁的奇岩巨石，因長期受迎風面海蝕及風蝕影響，造就了特殊的地形景觀，如海蝕崖、海蝕平台、海蝕溝、海蝕崖、風化窗、獅頭岩、熊頭岩等，最著名的則是「豆腐岩」和「萬人堆」(蕈狀石)地形景觀，各種不同的海蝕地形，是小朋友們戶外教學最喜歡來的地方，不僅可以真實看到課本上的圖片，也能實際的感受到自然的力量。除了瑰麗的地形外，露出地層的生物本體化石和生痕化石是和平島地質上的寶貝，腳下踩著幾十萬年的化石，都讓人感到相當興奮及新奇，另外，在海邊惡劣條件下生長的海濱植物，更是需要遊客停下腳步細細觀賞。 和平島公園內的海岸，有一處相當著名的歷史遺跡－「蕃字洞」，為基隆市少數僅存的西荷時期遺蹟，洞長20公尺，據說是荷蘭人於西元1668年撤離社寮島前，於洞內的所刻的文字。岩石屬於砂岩，緊鄰海邊，幾百年來受強勁的東北季風吹襲，洞內文字已風化剝落，需要仔細觀察才能看出端倪。退潮的海蝕平台可讓人們赤腳戲水，並觀察各種不同的潮間帶生物，而奇岩怪石則是要好好發揮想像力，可以從中得到不少樂趣，如果玩累了走累了，就駐足停坐在海濱的岩石上，聆聽海浪拍岸濤聲，仔細聽聽大自然的聲音，讓身心都可以得到釋放，這樣子的體驗絕對令您回味無窮。 和平島公園旅客服務中心(仿西班牙式薩爾瓦多城)，已完工落成正式啟用，和平島公園也委外管理，提醒遊客公園內遊玩也要注意安全，儘量勿於海蝕崖下停留嬉戲，因為此處為不穩定地形，隨時有崩落之危險。",
      "Description": "和平島是基隆港的門戶，目前在沿海部份地區設海濱公園，園區內有重要的海蝕地形景觀，有海蝕崖、海蝕平台、海蝕溝，最著名的為「豆腐岩」和「萬人堆」地形景觀，地層上的生物本體化石和生痕化石是本區地質特色。",
      "Phone": "886-2-24635452",
      "Address": "基隆市中正區平一路360號",
      "ZipCode": "202",
      "TravelInfo": "搭乘基隆市公車101號於「和平島公園站」下車，步行約5分鐘即可到達。",
      "OpenTime": "AM 08:00 ～ PM 17:00",
      "Picture": {},
      "MapUrl": "http://g.co/maps/x4w8s",
      "Position": {
        "PositionLat": 25.160839080810547,
        "PositionLon": 121.76380157470703,
        "GeoHash": "wsqx4u3sw"
      },
      "Class1": "自然風景類",
      "Class2": "遊憩類",
      "Level": "非古蹟",
      "ParkingInfo": "自備停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費",
      "Remarks": "和平島公園整建工程已大致完成，目前開放遊客進入，惟汽、機車尚未開放入園。請進入和平島公園之遊客注意近水區域之自身安全，並共同維護園區之環境清潔。",
      "Keyword": "和平島",
      "City": "基隆市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_376570000A_000069",
      "Name": "情人湖公園",
      "DescriptionDetail": "情人湖公園位於基隆市西郊外寮里的大武崙山山腰上，由六條小溪匯集流入而成，為基隆僅有的高地湖泊，湖面雖然沒有很寬闊，但景色精緻秀麗，頗有小家碧玉之美，附近林木茂密，湖水碧綠，山光水色，清新怡人，春夏時節到處蟲鳴鳥叫，彩蝶飛舞，候鳥遷徒，值得民眾共赴自然之約。情人湖原名「五叉碑」，後來因救國團基隆團委員會經常在此辦活動，予以命名為情人湖。湖區規劃有觀景亭、情人吊橋、觀景水岸平台、風車、環山和環湖步道等設施，步道兩旁林木蓊鬱，而各種植物則展現四季風貌，在享受芬多精森林浴的同時，沿途並可欣賞湖光山色，相當詩情畫意。往情人湖的北邊走去，有步道可登上面海的山嶺，從稜線的步道上觀看大海，不僅可以見到岸邊的澳底漁港，亦可遠眺基隆嶼及野柳海岬，令人心胸頓時開朗舒暢。情人湖名字的由來另一種說法，因為風景區內有一大一小兩個相連的湖泊，像是情人互相依偎陪伴，因此而得名，也因為這樣，情人湖有一個相當浪漫的傳說，聽說情人湖上的情人橋有某種特別魔力，情人到此遊玩時，只要攜手一起走過情人橋，就會有好的姻緣，因為這個美麗的傳說，也有許多新人特地前往此地拍攝婚紗照片，情人湖旁造型別緻的風車也為這個傳說增添了更多的美感。位於情人湖正東方的砲台山，不僅是附近地區的最高峰，同時也是相當有歷史的地區，山頂的大武崙砲台(國定古蹟)建於清道統年間，是清法戰爭當時留下的重要古蹟之一，圍牆及相關建築物被保存下來的相當多，而周圍的老榕樹盤結糾纏其間，也替此區更增添了不少古意。情人湖風景區是外地觀光客必定要遊覽的地區，風景秀麗、空氣清新，附近還有大武崙砲台等景點，不妨一同規劃至您的旅遊行程中。",
      "Description": "情人湖為基隆僅有的高地湖泊，附近林木茂密，湖水碧綠，規劃有觀景亭、吊橋、觀景水岸平台、風車等設施。步道兩旁林木蓊鬱，各種植物則展現四季風貌，在享受芬多精森林浴的同時，民眾不妨利用步道旁的觀景台，眺望基隆外海，令人心胸開懷舒暢。",
      "Phone": "886-2-24287664",
      "Address": "基隆市安樂區基金一路208巷附近",
      "ZipCode": "204",
      "TravelInfo": "搭乘基隆市公車505、509號(經安一路)於「情人湖路口站」下車，上山步行約30分鐘即可抵達，或搭乘基隆市公車509號(經麥金路)於「情人湖站」下車即達。",
      "OpenTime": "開放式空間，無時間限制",
      "Picture": {},
      "MapUrl": "http://g.co/maps/up995",
      "Position": {
        "PositionLat": 25.156959533691406,
        "PositionLon": 121.70590209960938,
        "GeoHash": "wsqx17xtc"
      },
      "Class1": "遊憩類",
      "Class2": "自然風景類",
      "Class3": "生態類",
      "Level": "非古蹟",
      "ParkingInfo": "備停車場",
      "ParkingPosition": {},
      "TicketInfo": "免門票",
      "Keyword": "情人湖",
      "City": "基隆市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_382000000A_403149",
      "Name": "外木山濱海風景區",
      "DescriptionDetail": "外木山濱海風景區橫跨萬里和基隆，從新北市與基隆市的交界處「獅子公園」出發，這裡有停車場停車方便，沿著步道走，風景非常優美，且可推推車，很適合親子或白髮族。一側為開闊的海岸景觀，另一側則是翠綠山脈，往左望野柳地質景觀，往右可遠眺基隆嶼，步道有規劃完善的自行車步道，且是基隆市第一條觀光自行車步道，全長只有1.2公里的封閉型自行車觀光步道，在此步道內遊客可以安心悠閒的散步、慢跑或騎自行車，享受著迎風吹來陣陣的海風，欣賞遼闊大海，釋放平日的壓力。",
      "Description": "外木山濱海風景區橫跨萬里和基隆，從新北市與基隆市的交界處「獅子公園」出發，這裡有停車場停車方便，沿著步道走，風景非常優美，且可推推車，很適合親子或白髮族。一側為開闊的海岸景觀，另一側則是翠綠山脈，往左望野柳地質景觀，往右可遠眺基隆嶼，步道有規劃完善的自行車步道，且是基隆市第一條觀光自行車步道，全長只有1.2公里的封閉型自行車觀光步道，在此步道內遊客可以安心悠閒的散步、慢跑或騎自行車，享受著迎風吹來陣陣的海風，欣賞遼闊大海，釋放平日的壓力。",
      "Phone": "886-2-24633341",
      "Address": "基隆市中山區文化路168號",
      "ZipCode": "228",
      "OpenTime": "N/A",
      "Picture": {},
      "Position": {
        "PositionLat": 25.16356086730957,
        "PositionLon": 121.7271499633789,
        "GeoHash": "wsqx1uzh2"
      },
      "Class1": "自然風景類",
      "Class2": "遊憩類",
      "ParkingPosition": {},
      "City": "基隆市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    }
  ]
const test2 = [
    {
      "ID": "C1_315081500H_000009",
      "Name": "福德水車公園生態園區",
      "DescriptionDetail": "2006年3月11日開幕的福德水車園區，是三芝水車文化景觀中最大的水車園區，座落於三芝區鬧區南側，三芝遊客中心對面，佔地近0.6公頃。沿著環園步道，除了有以高架引水道空中給水以帶動水車運行的大型引導式木造水車之外，還有一座用來維護水源乾淨的沉砂池，可以欣賞到多樣化的水車景觀及隨著四季舞弄風情的繽紛植物。穿越紅色景觀橋，即可一覽八連溪兩岸風光。  此處結合『觀光』、『生態』、『健康』三大主題，不僅可享受山林鳥野間純淨的氣息，周圍所視更是盈盈綠意、處處生機。  如藝術品般散落於三芝各地的水車造景，靜靜緩慢地一格一格順水轉動著，不僅訴說著早期農業發展的歷程與痕跡，也多了一份靜謐和知性的氛圍。",
      "Phone": "886-2-86353640",
      "Address": "新北市三芝區三芝遊客中心旁(三芝遊客中心地址:臺北縣三芝區埔坪里埔頭坑164-2號)",
      "OpenTime": "全年無休",
      "Picture": {},
      "Position": {
        "PositionLat": 25.24748992919922,
        "PositionLon": 121.50617218017578,
        "GeoHash": "wsqrsunj7"
      },
      "Class1": "遊憩類",
      "Class2": "國家風景區類",
      "WebsiteUrl": "https://www.northguan-nsa.gov.tw/user/Article.aspx?Lang=1&SNo=04002734",
      "ParkingPosition": {},
      "Keyword": "北海岸及觀音山國家風景區入口網, 觀光資訊網, 魅力景點, 三芝鄉, test",
      "City": "新北市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_315081500H_000013",
      "Name": "麟山鼻遊憩區",
      "DescriptionDetail": "與富貴角相對望，矗立白沙灣兩旁，由於八十萬年前大屯火山群的竹子火山爆發，而形成了向外海延伸的岬角，德茂里居民稱為「鼻尾鼻」或「鼻尾頭」，日治時期改名為「麟山鼻」，為大量火山遺跡「安山岩」所構成的區域，安山岩呈深黑色、質地堅硬，有稜有角的『風稜石』，則是麟山鼻步道上具代表性的地形景觀。  岩石節理發達的安山岩，在海浪經年累月的侵蝕及東北季風長年不斷的挾帶砂粒吹襲磨蝕之下，逐漸形成平坦的風蝕面，然後再隨著風向改變帶來不同角度的雕琢，擁有尖銳的稜角，因而稱為『風稜石』。佇足欣賞這些體積碩大且造形奇特的風稜石時，就彷彿聽見風與石的對話，令人驚訝於那份來自自然力量中，自始至終不曾改變的深刻與堅持。  另堪稱為麟山鼻的瑰寶--藻礁，是一個值得進行觀察的特殊地形景觀。有些藻類的生長條件需附著在穩固的岩石上，遍佈的安山岩理所當然的成為了最佳的選擇，隨著藻類的新生與死亡，一代代的交替生長，進而形成了岩石表面上，具有多層細薄石灰質的藻礁。此外，觀賞潮間帶的小生物也是遊憩麟山鼻的重點活動之一，透過事先查看潮汐及準備齊全的裝備，就能一享弄潮的樂趣，並可輕易在岩縫石塊中，發現難得的自然野趣。  目前規劃成的「麟山鼻遊憩區」，設有人行步道、木棧道設備等，除可欣賞海濱風景外，  更可觀察海中淺灘生態。  2007年8月上映的電影：「不能說的秘密」中有一幕男主角護送女主角回家的場景，即是在麟山鼻遊憩區自行車步道所拍攝。其中木棧道總長約600公尺；沿途海景秀麗，尤以微風吹拂木麻黃林、海風挑動銀浪時，最為動人，也因此吸引許多影迷探訪。",
      "Phone": "886-2-86355100",
      "Address": "新北市石門區德茂里下員坑(2號省道23公里處)",
      "OpenTime": "全年無休",
      "Picture": {},
      "Position": {
        "PositionLat": 25.284669876098633,
        "PositionLon": 121.51334381103516,
        "GeoHash": "wsqrv4gmf"
      },
      "Class1": "遊憩類",
      "Class2": "國家風景區類",
      "WebsiteUrl": "https://www.northguan-nsa.gov.tw/user/Article.aspx?Lang=1&SNo=04002490",
      "ParkingPosition": {},
      "Keyword": "麟山鼻觀海步道",
      "City": "新北市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_315081500H_000014",
      "Name": "白沙灣水域遊憩區",
      "DescriptionDetail": "白沙灣(台2線23公里處)是由麟山鼻與富貴角共同合抱而成的半月形天然海灣，綿延的白淨沙灘長約1公里，您可以邀三五好友漫步於景觀步道上，遠觀一望無際的絕美海景，渡過悠閒的午後時光；這裡也相當適合大小朋友親子共遊，一同逐浪、堆堡、享受海水的沁涼，讓心靈徹底放鬆，予人純淨自在的舒適感。  輕輕漫步在沙灘上，會為了眼前的蔚藍海色不捨離去，更因為能坐擁一灣細緻的貝殼沙而流連忘返，還有被白浪捲帶上岸的珊瑚礁和貝殼，在歷經長期不斷的沖刷擊碎之後，終成人們握在手中的浪漫與眷戀。一旦風起時，掌中的細沙就急著起舞，它們將依循著強勁海風的吹拂，堆疊出整齊美麗的波浪狀細紋，大自然獨特的藝術品讓人驚嘆不已。  如果與沙相約後，還有閒情，不妨拜訪同在這片沙地上的沙地植物，看看它們如何以自身絕技克服惡劣環境，尋求一線生機。多變的地貌及有趣的自然生態，豐富了這方海之角，靜待人們的到來與探索。如需獲知更詳盡的生態旅遊資訊，可就近前往白沙灣遊客中心諮詢，備有多樣化的旅遊資料供遊客索取，並提供多媒體放映解說服務。",
      "Phone": "886-2-86355100",
      "Address": "新北市石門區德茂里下員坑(2號省道23公里處)",
      "OpenTime": "五、六、十月AM9:00-PM17:00;七、八、九月AM9:00-PM18:00",
      "Picture": {},
      "Position": {
        "PositionLat": 25.28421974182129,
        "PositionLon": 121.51786804199219,
        "GeoHash": "wsqrv4ye7"
      },
      "Class1": "遊憩類",
      "Class2": "國家風景區類",
      "WebsiteUrl": "https://www.northguan-nsa.gov.tw/user/Article.aspx?Lang=1&SNo=04002491",
      "ParkingPosition": {},
      "Keyword": "白沙灣",
      "City": "新北市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_315081500H_000015",
      "Name": "白沙灣遊客中心",
      "DescriptionDetail": "位於白沙灣入口旁的北海岸及觀音山國家風景區管理處，設有白沙灣遊客中心，於2002年正式成立，為台灣第11處國家風景區。整體建築不同於一般的設計規劃，建築層次與緩和的斜坡串連，將停車場、廣場與沙灘的活動相互融合，減低建築高度視覺，提供屋頂草地與平台的活動空間，改善人與地景及建築的傳統二元關係，讓建築像大樹岩石一樣融入地景，造型極具生態理念。  一進遊客中心，馬上就有親切熱情的服務人員向您招呼諮詢，讓來訪的遊客備感溫馨。這裡提供許多相關旅遊資料、出版品及多媒體放映解說服務，除了讓您更深入了解北海岸及觀音山外，同時也讓您的遊程更加盡興自在。",
      "Phone": "886-2-86355100",
      "Address": "新北市石門區德茂里下員坑33-6號",
      "OpenTime": "十月至四月AM9:00-PM17:00;五月至九月AM9:00-PM18:00",
      "Picture": {},
      "Position": {
        "PositionLat": 25.28399085998535,
        "PositionLon": 121.52015686035156,
        "GeoHash": "wsqrv6b3b"
      },
      "Class1": "遊憩類",
      "Class2": "國家風景區類",
      "WebsiteUrl": "https://www.northguan-nsa.gov.tw/user/Article.aspx?Lang=1&SNo=04002740",
      "ParkingPosition": {},
      "Keyword": "北海岸及觀音山國家風景區入口網, 觀光資訊網, 魅力景點, 石門鄉, 北海岸及觀音山國家風景區管理處",
      "City": "新北市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    },
    {
      "ID": "C1_315081500H_000016",
      "Name": "富貴角遊憩區",
      "DescriptionDetail": "舊名為「打賓」或「打鞭」的富貴角，於清乾隆27年(西元1762年)，荷蘭人法倫泰在其著作《新舊印度誌》中，將富貴角記為「hoek」，意思為海岬，後人便採其譯音稱此地為「富基角」，直到日治時期才更名為「富貴角」。  富貴角公園內，規劃有海濱人行步道，順著步道迎風前行，除了欣賞風稜石外，還可以看到由石門礁岸所形成的老梅海灣地形及沙丘等，當然還有因強風雕塑而成的風剪樹，與固守在沙丘上的沙灘植物。  「風剪樹」顧名思義，乃是因為受到強風作用，迎風那一面無法抵擋強風日夜吹襲，因此只能順著風的方向生長，久而久之，就形成了迎風面樹枝葉少，背風面枝葉繁茂的不平均狀態，而樹冠頂部的枝葉根本無法生長，就像是被大剪刀剪過一般，因此才被稱為風剪樹。",
      "Phone": "886-2-86355100",
      "Address": "新北市石門區富基里（2號省道25公里處，往富基漁港內進入）",
      "OpenTime": "全年無休",
      "Picture": {},
      "Position": {
        "PositionLat": 25.292470932006836,
        "PositionLon": 121.53833770751953,
        "GeoHash": "wsqrvsme2"
      },
      "Class1": "遊憩類",
      "Class2": "國家風景區類",
      "WebsiteUrl": "https://www.northguan-nsa.gov.tw/user/Article.aspx?Lang=1&SNo=04002492",
      "ParkingPosition": {},
      "Keyword": "富貴角公園",
      "City": "新北市",
      "SrcUpdateTime": "2021-04-03T01:12:20+08:00",
      "UpdateTime": "2021-04-03T01:33:07+08:00"
    }
  ]
let flag = 30
// function City(){
//     let { path, url } = useRouteMatch()
//     console.log(path)
//     return(
//         <Router>
//             <Container>
//                 <Route exact path={path}><CityList/></Route>
//                 <Route path={`${path}/:city`}><City /></Route>
//             </Container>
//         </Router>
//     )
// }
// function Test({match}){
//     let {city} = useParams()
//     const [points, setPoints] = useState([])
//     useEffect(() => {
//         console.log(`Fetch ${city}`)
//         fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${flag}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//     }, [])
//     return (
//         <div>
//             {city}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th width="20%">名稱</th>
//                         <th width="80%">簡介</th>
//                     </tr>
//                 </thead>
//                 <tbody>
                        
//                 </tbody>
//             </Table>
//         </div>
//     )
// }
const CityNames = [
    {'enName':'Keelung', 'name':'基隆'},
    {'enName':'New Taipei', 'name':'新北'},
    {'enName':'Taipei', 'name':'台北'},
    {'enName':'Yilan', 'name':'宜蘭'},
    {'enName':'Taoyuan', 'name':'桃園'},
    {'enName':'Hsinchu', 'name':'新竹'},
    {'enName':'Miaoli', 'name':'苗栗'},
    {'enName':'Taichung', 'name':'台中'},
    {'enName':'Changhua', 'name':'彰化'},
    {'enName':'Nantou', 'name':'談頭'},
    {'enName':'Yunlin', 'name':'雲林'},
    {'enName':'Chiayi', 'name':'嘉義'}, 
    {'enName':'Tainan', 'name':'台南'},
    {'enName':'Kaohsiung', 'name':'高雄'},
    {'enName':'Pingtung', 'name':'屏東'},
    {'enName':'Taitung', 'name':'台東'},
    {'enName':'Hualien', 'name':'花蓮'},
    {'enName':'Penghu', 'name':'澎湖'},
    {'enName':'Kinmen', 'name':'金門'},
    {'enName':'Lienchiang', 'name':'連江'},
]
const CityList = null
class SciencCity extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            information:[],
            cityPoints:[]
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.isBottom)
        this.setState({
            information:test,
        })
        console.log('City', this.props)
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Keelung?$top=${flag}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    componentWillMount(){
        window.removeEventListener('scroll', this.isBottom)
    }
    
    isBottom = () =>{
        if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
            this.setState({
                information: test.concat(test2)
            })
        }
            
    }
    render_selections = 
        CityNames.map((data, index) =>{
            if(index == 0)
                return <Dropdown.Item key={index} eventKey={data.enName} name={data.enName}  default>{data.name}</Dropdown.Item>
            // return <Dropdown.Item><Link to={`/sciencCity/${data.enName}`} className="dropdown-item" role="button">{data.name}</Link></Dropdown.Item>
            return <Dropdown.Item key={index} eventKey={data.enName} name={data.enName}  selected>{data.name}</Dropdown.Item>
        })
    onCitySelected = e => {
        if(e != undefined){
            // fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${e}?$top=${flag}`)
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            //     if(data.length>2)
            //         this.setState({
            //             cityPoints:data
            //         })
            // })
            if (e == "Keelung")
                this.setState({
                    cityPoints:test
                })
            if (e == "New Taipei")
                this.setState({
                    cityPoints:test2
            })
        }
    }

    renderCityPoints(){
        const {cityPoints} = this.state
        console.log("Citys", cityPoints)
        if(cityPoints.length >1)
            return(
                cityPoints.map((data, index) =>{
                    return(
                    <tr key={index}>
                        <td>{data.Name}</td>
                    </tr>)
                    }
                )
            )
        else
            return <tr><td colSpan="2">請選擇城市</td></tr>
    }
   
    render() {
        console.log(this.state.cityPoints)
        const {path, url} = this.props.match.params
        return(
            <div className="container" id="header">
                <DropdownButton id="dropdown-basic-button" title="縣市名稱" onSelect={this.onCitySelected} focusFirstItemOnShow="true">
                    {this.render_selections}
                </DropdownButton>
                <Table>
                    <thead>
                        <tr>
                            <th align="center">景點</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCityPoints()}
                    </tbody>
                </Table>
                
            </div>
        )
    }
}


export default SciencCity;