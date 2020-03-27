
var texts = ["마음을 활짝 열어라",
"생각을 지도처럼 그려보자", "불확실하다면 접어라", "마음을 가라앉혀라", "아무 생각 없이 처음으로 돌아가서 다시 시작하자","신념을 버리지 말고 믿어라",
"너 자신을 믿어라", "문제가 생길 수 있다", "힘내라 얼마 안남았다", "작은것 부터 시작해라", "처음부터 다시 시작하라", "포기하지마라", "아무리 힘들어도 포기하지마라",
"미래를 생각해라", "너는 세상에서 가장 소중한 사람이다", "좋은 생각이다", "집중해라", "익숙함에 속아 소중함을 잃지 마라", "생각을 바꿔라", "조금만 버텨라", "언젠가는 기회가 올것이다",
"기다림의 미학을 아는가? 계속 기다리고 기다려라 때가 올것이다", "꺼진 불도 다시보자", "행동으로 실천해라", "걱정 말아라", "하면 된다", "기적은 존재한다", "힘들게 노력을 하고 그런 소리를 해라",
"넌 할 수 있다 너는 세상에서 가장 강한 사람이다", "오늘 할 일을 내일로 미루지 마라", "계단의 처음과 끝을 다 보지 마라 그냥 발을 내딛어라", "그냥 해라", "행복은 의외로 가까이 있다",
"꿈을 가져라", "목표가 없는 사람은 목표가 있는 사람을 위해 평생 일해야 하는 종신형에 쳐해져있다", "내가 상대에게 하고 싶은 말 보다 상대방이 진정 듣고자 하는 말을 해라", "성공한 사람의 좋은 습관을 따라해라",
"죽을때 도 가난하면 당신의 잘못이다", "그 누구도 다른 사람의 슬픔이나 즐거움을 이해할 수 없다", "편견없는 솔직함이 위기를 넘어서게 하고 지속적인 성장을 낳는다", "휴식은 게으름도, 멈춤도 아니다",
"결점을 찾지 말고 대책을 찾자", "할 수 있다고 생각하면 할 수 있고, 할 수 없다고 생각하면 할 수 없다", "당신을 세상에서 가장 소중한 사람입니다", "실패가 끝이 아니고 포기하는 것이 끝이다", 
"행복하다고 믿어야 한다 그렇지 않으면 행복은 결코 오지 않는다", "높은 자리에 있을 수록 무언가를 놓치기 쉽다", "인간은 아무런 이유 없이 살아갈 수 없다", "실패는 잊어라 그러나 그것이 준 교훈은 절때 잊으면 안 된다",
"하고 싶은 걸 해야 행복하다", "비전은 다른 사람이 보지 못하는 것을 보는 것이다", "강하게 떨어질 수록 더 높이 튀어오른다", "징크스가 생기면 매번 극복하는 징크스가 생긴다", "무능한 사람들은 언제 어디서나 늘 핑계 찾기에 바쁘다",
"최선을 다하지 않으면서 최고를 바라지마라", "구겨진 종이가 더 멀리간다", "성공의 반댓말은 실패가 아닌 포기이다", "참을 인 세 번이면 호구"
];

function index(num) {
    var text = '';
    for(var i = 0; i < num; i++) {
        text += texts[Math.floor(Math.random()*texts.length)];
    }
    return text;
}


function RandomShowup(){
    document.getElementById('text_showup').innerHTML = index(1);
}