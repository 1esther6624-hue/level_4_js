// 상영예정 DB
// 벼랑 위의 포뇨, 귀멸의 칼날, 스즈메의 문단속, 하울, 체인소맨, 마루 밑 아리에티, 센과 치히로, 그대들은 어떻게 살것인가, 슬램덩크, 너의 이름은
    const moviescreen = [
    {
        id: 1,
        title: '벼랑 위의 포뇨',
        date: '2026-10-20',
        poster: 'poster_anime/poster_ponyo.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '모험', '가족'],
        rating: 4.8,
        cast: ['나라이 야시로 (포뇨)', '도이 히로키 (소스케)'],
        synopsis: '호기심 많은 물고기 공주 포뇨가 인간 소년 소스케를 만나 인간이 되고 싶어 하며 벌어지는 모험과 사랑의 이야기.'
    },
    {
        id: 2,
        title: '귀멸의 칼날: 무한성편',
        date: '2025-05-15',
        poster: 'poster_anime/poster_demon_slayer.jpg',
        director: '소토자키 하루오',
        genre: ['애니메이션', '액션', '판타지'],
        rating: 4.9,
        cast: ['하나에 나츠키 (카마도 탄지로)', '키토 아카리 (카마도 네즈코)'],
        synopsis: '혈귀들의 본거지인 무한성에 입성한 귀살대와 최종 악의 근원 키부츠지 무잔, 그리고 상현 혈귀들의 운명을 건 최후의 결전.'
    },
    {
        id: 3,
        title: '스즈메의 문단속',
        date: '2023-03-08',
        poster: 'poster_anime/poster_suzume.jpg',
        director: '신카이 마코토',
        genre: ['애니메이션', '모험', '판타지'],
        rating: 4.7,
        cast: ['하라마키 난카 (스즈메)', '마츠무라 호쿠토 (소타)'],
        synopsis: '재앙을 부르는 문을 닫기 위해 일본 전역을 누비며 여행을 떠나는 소녀 스즈메와 열쇠지기 청년 소타의 특별한 여정.'
    },
    {
        id: 4,
        title: '하울의 움직이는 성',
        date: '2004-12-23',
        poster: 'poster_anime/poster_howl.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '로맨스'],
        rating: 4.9,
        cast: ['바이쇼 치에코 (소피)', '기무라 타쿠야 (하울)'],
        synopsis: '마녀의 저주로 할머니가 된 소녀 소피가 마법사 하울의 움직이는 성에 들어가 살게 되면서 펼쳐지는 사랑과 전쟁의 이야기.'
    },
    {
        id: 5,
        title: '체인소 맨 극장판: 레제편',
        date: '2025-09-12',
        poster: 'poster_anime/poster_chainsawman.jpg',
        director: '나카소노 마사토',
        genre: ['애니메이션', '액션', '다크 판타지'],
        rating: 4.8,
        cast: ['토야 키쿠노스케 (덴지)', '우에다 레이나 (레제)'],
        synopsis: '악마와 융합한 데블 헌터 덴지가 신비로운 분위기의 소녀 레제를 만나며 마주하게 되는 위험천만하고 강렬한 이야기.'
    },
    {
        id: 6,
        title: '마루 밑 아리에티',
        date: '2010-09-09',
        poster: 'poster_anime/poster_arrietty.jpg',
        director: '요네바야시 히로마사',
        genre: ['애니메이션', '모험', '판타지'],
        rating: 4.6,
        cast: ['시다는 미라이 (아리에티)', '카미키 류노스케 (쇼)'],
        synopsis: '인간 몰래 마루 밑에서 살아가며 물건을 빌려 쓰는 14세 소인 소녀 아리에티와 요양 온 인간 소년 쇼의 비밀스러운 교감.'
    },
    {
        id: 7,
        title: '센과 치히로의 행방불명',
        date: '2002-06-28',
        poster: 'poster_anime/poster_spirited_away.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '모험'],
        rating: 5.0,
        cast: ['히라기 루미 (치히로)', '이리노 미유 (하쿠)'],
        synopsis: '신들의 세계로 들어간 소녀 치히로가 돼지로 변한 부모님을 구하고 자신이 살던 세계로 돌아가기 위해 유야에서 일하며 겪는 성장기.'
    },
    {
        id: 8,
        title: '그대들은 어떻게 살 것인가',
        date: '2023-10-25',
        poster: 'poster_anime/poster_boy_and_heron.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '드라마'],
        rating: 4.5,
        cast: ['산토키 소마 (마히토)', '스다 마사키 (왜가리)'],
        synopsis: '어머니를 잃은 정서적 혼란 속에서 시골 저택으로 이사 간 소년 마히토가 정체불명의 왜가리를 따라 이세계로 들어가며 펼쳐지는 자아 발견의 여정.'
    },
    {
        id: 9,
        title: '더 퍼스트 슬램덩크',
        date: '2023-01-04',
        poster: 'poster_anime/poster_slamdunk.jpg',
        director: '이노우에 타케히코',
        genre: ['애니메이션', '스포츠', '드라마'],
        rating: 4.9,
        cast: ['나카무라 슈고 (송태섭)', '카사마 준 (정대만)'],
        synopsis: '전국제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 그리고 최강 산왕공고와의 목숨을 건 마지막 경기.'
    },
    {
        id: 10,
        title: '너의 이름은.',
        date: '2017-01-04',
        poster: 'poster_anime/poster_your_name.jpg',
        director: '신카이 마코토',
        genre: ['애니메이션', '로맨스', '판타지'],
        rating: 4.9,
        cast: ['카미키 류노스케 (타키)', '카미시라이시 모네 (미츠하)'],
        synopsis: '도쿄에 사는 소년 타키와 시골에 사는 소녀 미츠하의 몸이 서로 뒤바뀌면서 혜성의 떨어짐과 얽힌 운명적 기적을 그려낸 작품.'
    }
    ];