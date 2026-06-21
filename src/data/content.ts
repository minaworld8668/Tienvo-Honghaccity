// Toàn bộ nội dung Hồng Hạc City — Zone F1-2 (phân khu Hồng Phát)
// Copy lấy từ "NOI DUNG WEBSITE - Hong Hac City F1-2.md". Không bịa nội dung BĐS.

export const SITE = {
  name: "Hồng Hạc City",
  zone: "Zone F1-2 · Phân khu Hồng Phát",
  developers: "Phú Mỹ Hưng × Nomura",
  hotline: "0976.777.683",
  hotlineTel: "0976777683",
  zalo: "0976777683",
  positioning: "Di sản để sống. Tài sản để truyền đời.",
  // CTA chính (lặp lại toàn trang) theo brief
  primaryCta: "Nhận Bảng giá · Chính sách & Quỹ căn còn lại",
};

export const NAV = [
  { id: "home", label: "Trang chủ", num: "01" },
  { id: "story", label: "Câu chuyện", num: "02" },
  { id: "location", label: "Vị trí", num: "03" },
  { id: "amenities", label: "Tiện ích", num: "04" },
  { id: "collection", label: "Thiết kế", num: "05" },
  { id: "investment", label: "Giá trị đầu tư", num: "06" },
  { id: "developers", label: "Chủ đầu tư", num: "07" },
  { id: "contact", label: "Liên hệ", num: "08" },
];

export const HERO = {
  overlineTop: "HONG HAC CITY · ZONE F1-2 · BY PHU MY HUNG & NOMURA",
  scroll: "Cuộn để khám phá",
  // Video nền slide 1: thả file vào public/video/hero-pool.mp4 (+ .webm nếu có).
  // Khi chưa có video, poster bên dưới sẽ hiển thị.
  video: "/video/hero-pool.mp4",
  videoWebm: "/video/hero-pool.webm",
  slides: [
    {
      kind: "video",
      poster: "/images/clubhouse.jpg",
      overline: "A FEELING, BEFORE A PLACE",
      title: "Có những nơi chốn không cần lời giới thiệu.",
      paragraphs: [
        "Giữa tâm điểm xanh của một đô thị văn minh, có một chốn được kiến tạo cho riêng những tâm hồn tinh hoa.",
        "Không phải chỉ là một ngôi nhà để sở hữu. Mà là một cảm giác để trở về, mỗi ngày.",
        "Một cơ hội đầu tư mà bạn sẽ chẳng bao giờ muốn bỏ lỡ lần nào trong cuộc đời.",
      ],
    },
    {
      kind: "image",
      image: "/images/aerial-zone-dusk.jpg",
      overline: "A LEGACY FOR GENERATIONS",
      title: "Di sản để sống. Tài sản để truyền đời.",
      paragraphs: [
        "Bạn nhận ra nó qua ánh sáng buổi sớm tràn vào hiên nhà. Qua tiếng lá trên con đường dạo bộ. Qua khoảnh khắc cánh cửa khép lại sau lưng và cả thế giới ồn ào bỗng trở nên rất xa.",
        "Một cơ hội đầu tư mà bạn sẽ chẳng bao giờ muốn bỏ lỡ lần nào trong cuộc đời.",
      ],
    },
  ],
};

export const STORY = {
  overline: "A LEGACY FOR GENERATIONS",
  title: "Di sản để sống.\nTài sản để truyền đời.",
  body:
    "Bạn nhận ra nó qua ánh sáng buổi sớm tràn vào hiên nhà. Qua tiếng lá trên con đường dạo bộ. Qua khoảnh khắc cánh cửa khép lại sau lưng và cả thế giới ồn ào bỗng trở nên rất xa.",
  body2:
    "Hồng Hạc City không bắt đầu bằng những con số — nó bắt đầu bằng cảm giác thuộc về.",
  cta: "Đọc câu chuyện của chúng tôi",
  image: "/images/hero-banner.jpg",
};

export const HERITAGE = {
  overline: "EAST MEETS WEST",
  title1: "Kiến trúc giao thoa.",
  title2: "Di sản truyền đời.",
  subtitle:
    "Tinh thần Indochine hòa cùng hơi thở Modern Classic và tinh hoa Kinh Bắc.",
  caption:
    "Mỗi ngôi nhà không chỉ là chốn an cư — mà là một tuyên ngôn thẩm mỹ, nơi kiến trúc, hình khối và không gian cùng kể câu chuyện về dòng chảy thời gian. Một di sản được dệt nên để truyền đời, vượt lên trên mọi xu hướng.",
  images: [
    "/images/villa-detached.jpg",
    "/images/villa-semi.jpg",
    "/images/townhouse.jpg",
  ],
};

export const AMENITIES = {
  overline: "LIFE, BEAUTIFULLY ARRANGED",
  title: "Mỗi ngày, một trải nghiệm.",
  subtitle: "Central Park không chỉ là một công viên — mà là một nhịp sống.",
  items: [
    {
      name: "Central Park",
      desc: "Lá phổi xanh giữa lòng đô thị — không gian sống xanh được kiến tạo như một biểu tượng trung tâm, nơi thiên nhiên và nhịp sống đô thị giao hòa hoàn hảo.",
      image: "/images/central-park-plan.jpg",
    },
    {
      name: "3 Clubhouse đặc quyền",
      desc: "Hồ bơi bốn mùa, phòng gym & yoga, khu xông hơi thư giãn và sảnh lounge — đặc quyền chỉ dành riêng cho cư dân Hồng Phát.",
      image: "/images/clubhouse.jpg",
    },
    {
      name: "Điểm đến cộng đồng",
      desc: "Đảo trái tim, vườn cây ăn quả, café Flower Island, café Lake Shore và không gian dạo bộ — nơi cả gia đình thuộc về mỗi buổi chiều.",
      image: "/images/central-sculpture.jpg",
    },
    {
      name: "Thể thao & Wellness",
      desc: "Sân Pickleball, khu vui chơi nước, trung tâm thể dục thể thao — năng lượng cho mỗi sớm mai.",
      image: "/images/sports-center.webp",
    },
  ],
  urbanTitle: "Một chuẩn sống Phú Mỹ Hưng, đang lớn lên từng ngày.",
  urban:
    "Trường mầm non, trường liên cấp, trường cấp 3, trung tâm y tế, trung tâm thể dục thể thao, bãi đỗ xe nhiều tầng — hệ tiện ích đang từng bước hình thành, kiến tạo chuẩn sống đã làm nên tên tuổi Phú Mỹ Hưng.",
  banner: "/images/masterplan.webp",
};

export const LOCATION = {
  overline: "THE GATEWAY TO PROSPERITY",
  title: "Cửa ngõ thịnh vượng.\nĐón đầu vận hội.",
  subtitle:
    "Nơi mọi con đường đều dẫn về phía bạn — và từ bạn, vươn ra thế giới.",
  body:
    "Tọa lạc tại vùng đất giàu tiềm lực bậc nhất phía Bắc, Hồng Hạc City đặt cư dân vào tâm điểm của một mạng lưới giao thương đang bừng nở — nơi mỗi phút di chuyển đều mở ra một cơ hội.",
  connections: [
    { place: "Đường Vành đai 4", time: 5, unit: "phút" },
    { place: "Các Khu công nghiệp lớn", time: 10, unit: "phút" },
    { place: "Sân bay Quốc tế Gia Bình", time: 15, unit: "phút" },
    { place: "Bắc Ninh · Từ Sơn", time: 20, unit: "phút" },
    { place: "Thủ đô Hà Nội", time: 35, unit: "phút" },
    { place: "Sân bay Quốc tế Nội Bài", time: 50, unit: "phút" },
  ],
  image: "/images/location-map.jpg",
};

export const COLLECTION = {
  overline: "THE COLLECTION",
  title: "Bộ sưu tập giới hạn — giữa tâm điểm xanh.",
  subtitle: "397 không gian sống. Không gian nào cũng là duy nhất.",
  intro:
    "Một bộ sưu tập có giới hạn những không gian sống, được đặt giữa trái tim xanh của phân khu Hồng Phát — dành cho những chủ nhân hiểu rằng sự khan hiếm chính là khởi nguồn của giá trị.",
  total: "397",
  products: [
    {
      tag: "LEGACY ESTATE",
      name: "Biệt thự đơn lập",
      en: "Detached Villa",
      headline: "Tuyên ngôn của một lối sống độc bản.",
      desc: "Hơn cả một chốn an cư độc bản, đây là một di sản trao truyền qua nhiều thế hệ — nơi từng đường nét đều phản chiếu cá tính, gu thẩm mỹ và vị thế của chủ nhân.",
      stats: [
        { v: "40", u: "căn giới hạn" },
        { v: "3", u: "tầng" },
        { v: "419,56 – 642,33", u: "m² sàn" },
      ],
      image: "/images/villa-detached.jpg",
    },
    {
      tag: "ELEGANCE IN EVERY BREATH",
      name: "Biệt thự song lập",
      en: "Semi-Detached Villa",
      headline: "Thanh lịch trong từng hơi thở.",
      desc: "Sự kết hợp tinh tế giữa ngôn ngữ kiến trúc Tân cổ điển uy nghi và hơi thở Indochine đầy cảm xúc, dệt nên một không gian sống thư thái — riêng tư, nhưng vẫn tràn đầy năng lượng kết nối.",
      stats: [
        { v: "110", u: "căn" },
        { v: "3", u: "tầng" },
        { v: "314,70 – 370,20", u: "m² sàn" },
      ],
      image: "/images/villa-semi.jpg",
    },
    {
      tag: "LIVE & PROSPER",
      name: "Shophouse",
      en: "Shophouse",
      headline: "An cư đẳng cấp. Sinh lời bền vững.",
      desc: "Sở hữu vị trí chiến lược đón trọn dòng chảy giao thương, Shophouse Hồng Hạc City mang thiết kế mặt tiền rộng mở cùng công năng linh hoạt — vừa là tổ ấm, vừa là cỗ máy tạo giá trị.",
      stats: [
        { v: "78", u: "căn" },
        { v: "5", u: "tầng" },
        { v: "247,20 – 297,90", u: "m² sàn" },
      ],
      image: "/images/shophouse.jpg",
    },
    {
      tag: "A QUIET REFINEMENT",
      name: "Nhà phố Townhouse",
      en: "Townhouse",
      headline: "Một khoảng lặng tinh tế giữa nhịp sống.",
      desc: "Khác biệt với nhịp giao thương hối hả, mỗi căn Townhouse là một khoảng lặng dành riêng cho gia đình — không gian sống riêng tư, kết nối thuận tiện, cân bằng hoàn hảo giữa giá trị ở và tiềm năng gia tăng tài sản.",
      stats: [
        { v: "169", u: "căn" },
        { v: "4", u: "tầng" },
        { v: "282,97 – 354,92", u: "m² sàn" },
      ],
      image: "/images/townhouse.jpg",
    },
  ],
  handoverTitle: "Hoàn thiện đến từng chi tiết bạn chạm vào.",
  handover:
    "Mặt tiền ốp đá tự nhiên, cửa nhôm kính cường lực an toàn, khóa điện tử thông minh, hệ thống chiếu sáng và hạ tầng kỹ thuật đồng bộ. Mỗi ngôi nhà là một nền tảng hoàn hảo để chủ nhân kiến tạo dấu ấn riêng.",
};

export const TOUR360 = {
  overline: "STEP INSIDE",
  title: "Bước vào không gian sống thật.",
  subtitle:
    "Dạo qua từng căn shophouse và biệt thự mẫu bằng công nghệ thực tế ảo 360° — ngay trên màn hình của bạn.",
  // Tour Marzipano chính thức của chủ đầu tư. Đổi sang "/tour360/index.html" nếu tự host.
  embed: "https://honghacphumyhung.vn/phankhuhongphat/360/",
  poster: "/images/villa-detached.jpg",
  cta: "Mở tour toàn màn hình",
};

export const INVESTMENT = {
  overline: "AN ENDURING ASSET",
  title: "Giá trị không đo bằng hôm nay.",
  subtitle: "Mà bằng những thế hệ sẽ tiếp nối.",
  pillars: [
    { num: "01", key: "Bảo chứng kép", desc: "Kiến tạo bởi hai nhà phát triển uy tín Phú Mỹ Hưng & Nomura." },
    { num: "02", key: "Hạ tầng đón đầu", desc: "Liền kề Vành đai 4, sân bay quốc tế Gia Bình, kề Thủ đô Hà Nội." },
    { num: "03", key: "Khan hiếm tạo giá trị", desc: "Bộ sưu tập giới hạn 397 căn giữa tâm điểm phân khu." },
    { num: "04", key: "Khai thác đa tầng", desc: "Vừa an cư, vừa cho thuê, vừa kinh doanh, vừa tích lũy." },
  ],
  growthTitle: "Đặt nền móng nơi tương lai đang hình thành.",
  growth:
    "Khi đại đô thị công nghiệp – dịch vụ phía Bắc bước vào chu kỳ tăng trưởng mạnh mẽ nhất, những vị trí kết nối tốt và quỹ đất thấp tầng giới hạn luôn là tài sản được săn đón. Sở hữu một căn nhà tại Hồng Hạc City hôm nay là đặt mình ở phía trước của dòng chảy thịnh vượng.",
  legacyTitle: "Một tài sản để trao tay, không chỉ để sở hữu.",
  legacy:
    "Bất động sản thấp tầng gắn liền quyền sử dụng đất lâu dài tại một đại đô thị có thương hiệu là một trong những hình thức bảo toàn tài sản bền vững nhất. Giá trị ấy không chỉ tăng theo thời gian — nó còn được trao truyền nguyên vẹn cho thế hệ sau.",
  stats: [
    { n: 397, suffix: "", label: "căn giới hạn toàn phân khu" },
    { n: 70, suffix: "%", label: "dành cho cây xanh, mặt nước & tiện ích" },
    { n: 40, suffix: "", label: "biệt thự đơn lập độc bản" },
  ],
  image: "/images/aerial-zone-dusk.jpg",
};

export const DEVELOPERS = {
  overline: "TRUST, EARNED",
  title: "Được kiến tạo bởi những cái tên\nkhông cần chứng minh.",
  subtitle:
    "Một trung tâm đô thị nên bởi hai nhà phát triển uy tín: Phú Mỹ Hưng & Nomura.",
  blocks: [
    {
      name: "Phú Mỹ Hưng",
      role: "Người định nghĩa chuẩn sống đô thị Việt Nam",
      body: "Hơn ba thập kỷ, Phú Mỹ Hưng là biểu tượng của quy hoạch đô thị kiểu mẫu — nơi hạ tầng, cảnh quan và cộng đồng được kiến tạo đồng bộ để nâng tầm chất lượng sống.",
      logo: "/logo/phumyhung.png",
    },
    {
      name: "Nomura",
      role: "Tinh thần kiến tạo Nhật Bản",
      body: "Mang theo triết lý phát triển tỉ mỉ, bền vững và lấy con người làm trung tâm của Nhật Bản, Nomura góp vào Hồng Hạc City sự chuẩn mực trong từng chi tiết — từ quy hoạch tổng thể đến trải nghiệm cư dân.",
      logo: "/logo/nomura.png",
    },
  ],
  partnershipTitle: "Hai triết lý. Một tầm nhìn.",
  partnership:
    "Sự kết hợp giữa kinh nghiệm bản địa của Phú Mỹ Hưng và chuẩn mực quốc tế của Nomura tạo nên một bảo chứng hiếm có: một đại đô thị được làm đúng, ngay từ đầu.",
  image: "/images/aerial-zone-dusk.jpg",
};

export const CTA = {
  overline: "YOUR HOME IS WAITING",
  title: "Hành trình đã dẫn bạn đến đây.\nChỉ còn một bước nữa.",
  subtitle:
    "Để lại thông tin, và hãy để chúng tôi mở cánh cửa về ngôi nhà của bạn.",
  body:
    "Bạn đã đi qua màu xanh của Central Park, ánh sáng của những không gian sống tinh hoa, và sự bảo chứng của những cái tên lớn. Tất cả những điều đó đang chờ bạn — không phải trên màn hình, mà trong đời thực.",
};

export const CONTACT = {
  overline: "YOUR HOME IS WAITING",
  title: "Trở về nơi thuộc về bạn.",
  formTitle: "Nhận Bảng giá · Chính sách & Quỹ căn còn lại",
  submit: "Nhận tư vấn riêng tư",
  commitment:
    "Thông tin của bạn được bảo mật tuyệt đối. Chuyên viên cấp cao sẽ liên hệ trong vòng 24 giờ.",
  success:
    "Cảm ơn quý khách. Đội ngũ tư vấn Hồng Hạc City sẽ liên hệ với quý khách trong thời gian sớm nhất.",
  productOptions: [
    "Biệt thự đơn lập",
    "Biệt thự song lập",
    "Shophouse",
    "Townhouse",
    "Tư vấn đầu tư",
  ],
  timeOptions: ["Trong giờ hành chính", "Buổi trưa", "Buổi tối"],
  vipLabel: "Đường dây ưu tiên dành cho khách hàng VIP",
  vipName: "Tiên Võ",
  vipRole: "Giám đốc Khách hàng",
  vipOrg: "Chủ đầu tư Phú Mỹ Hưng",
  vipEmail: "tien.vo@phumyhung.com.vn",
  vipPhoto: "/images/tien-vo.jpg", // lưu ảnh chân dung Tiên Võ vào đây
  offices: [
    { name: "Nhà mẫu / Sales Gallery", addr: "Trung tâm Nhà mẫu Phú Mỹ Hưng — Lô M3, Trần Văn Trà, P. Tân Mỹ, TP.HCM" },
    { name: "Văn phòng Hà Nội", addr: "677 Lạc Long Quân, P. Tây Hồ, TP. Hà Nội" },
    { name: "Văn phòng Hồ Chí Minh", addr: "801 Nguyễn Văn Linh, P. Tân Mỹ, TP.HCM" },
  ],
};

export const LEGAL =
  "Hình ảnh phối cảnh chỉ mang tính tham khảo. Thông tin chính thức căn cứ trên Hợp đồng ký với Công Ty Cổ Phần Đầu Tư Công Đoàn Ngân Hàng Công Thương. Nhà bàn giao thô.";

export const FOOTER_TAGLINE =
  "Hồng Hạc City — Đô thị văn minh, cộng đồng hạnh phúc.";
