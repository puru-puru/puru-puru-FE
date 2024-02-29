// ModalContent.tsx
import React from 'react';

interface ModalContentProps {
    content: string;
}

const ModalContent: React.FC<ModalContentProps> = ({ content }) => {
    const ServiceText = `푸릇푸릇 서비스 이용약관 
제1조 (목적) 
    이 약관은 푸릇푸릇(이하 “회사”라합니다)가 제공하는 다이어리 어플리케이션 서비스(이하 “서비스”라 합니다)
이용과 관련하여 회사와 이용자간의 권리‧의무 및 기타 필요한 제반사항을 정함을목적으로 합니다.
제2조 (용어의 정의) 
이 약관에서 사용하는 용어의 정의는 다음 각호와 같으며, 정의하지 않은 용어의 해석은 관련 법령 및 상관례 에따릅니다.
1. “이용고객”이란 회사가 제공하는 서비스를 이용하기 위해 앱스토어사업자 또는 플랫폼사업자가 운영하는 앱스토어마켓에서 애플리케이션을 다운로드 받은 자를 말합니다. 
2. “이용자”란 이 약관 및 개인정보처리방침에 동의하고, 회사가 제공하는 서비스 이용자격을 부여 받은 이용 고객을 말합니다.
3. “서비스”란 회사가 제공하는 게임 서비스 일체를 의미합니다. 
4. “단말기”란 서비스를 이용할 수 있는 휴대폰, 스마트폰, PDA, 태블릿, 휴대용 게임기 등 유∙무선 기기를 말 합니다. 
5. “애플리케이션”이란 회사가 제공하는 서비스를이용할 수 있는 프로그램 일체를 의미합니다. 
6. “앱스토어사업자”란 회사가 제공하는 애플리케이션을 다운로드 받을 수 있고, In-App결제를 할 수 있도록 하는 오픈마켓 사업자를 말합니다. 
7. “플랫폼사업자”란 회사와 제휴하여 서비스를 제공하는 사업자 및 관련 서비스 일체를 말합니다. 
8. “이용자계정”이란 이용자의 식별과 서비스 이용을 위하여 이용자가 선정하고 앱스토어사업자 또는 플랫 폼사업자가 부여하는 문자, 숫자 또는 특수문자의 조합을 의미합니다. 
9. “임시계정(Guest ID)”이란 이용자 계정과 별도로 이용자의 식별과 서비스 이용을 위하여 플랫폼사업자가 임의적으로 부여한 이용자 식별번호를 의미합니다. 
10. “콘텐츠”란 회사가 서비스에서 이용할 수 있도록 제작한 아이템 등을 말합니다. 
11. “유료콘텐츠”란 이용자가 서비스를 이용함에 있어 특정한 효과 또는 효능을 향유하기 위하여 In-App결제 를 통해 구매하는 콘텐츠를 의미합니다. 
12. “무료콘텐츠”란 이용자가 In-App결제를 통해 구매하지 않고, 다른 이용자로부터 선물받거나 서비스를 이 용하면서 무료로 취득한 콘텐츠를 의미합니다.
13. “In-App결제”란 애플리케이션 내에서 유료콘텐츠를 구매하기 위한 결제 행위를 말합니다. 
제3조 (회사정보 등의 제공) 
회사는 다음 각호의 사항을 회사의 웹사이트에 게시하거나 애플리케이션내의 연결화면을 통해 이용자가 이 를 쉽게 알 수 있도록 합니다. 다만, 이 약관 및 개인정보처리방침은 이용자가 연결화면을 통하여 볼 수 있도 록 할 수 있습니다. 
1. 상호 및 대표자의 성명 
2. 영업소 소재지 주소(이용자의 불만을 처리할 수 있는 곳의 주소를포함한다) 및 전자우편주소 
3. 전화번호, FAX 번호 
4. 사업자등록번호, 통신판매업 신고번호 
5. 개인정보처리방침 
6. 서비스이용약관 제4조(약관의 효력및 변경) 
① 이 약관은 이용자가 알 수 있도록 회사의 웹사이트에 게시하거나애플리케이션 내의 연결화면 등을 통해 이용자에게 공지함으로써 효력이 발생합니다. 
② 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」,「약관의 규제에 관한 법률」, 「게임산업진흥 에 관한 법률」,「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등관련 법령 에 위배되지 않는 범위에서 이 약관을 변경할 수 있습니다. 변경되는약관은 적용일자, 변경내용 및 변경사유 등을 명시하여 그 적용일 7일 이전부터서비스 공식 블로그 또는 단말기 알림(Push 알림) 등을 통해 이용자에 게공지합니다. 다만, 이용자의 권리∙의무에 중대한 영향을 미치는 사항에 대해서는그 적용일 30일 이전부터 공지합니다. 
③ 이용자는 변경되는 약관에 대해 동의하지 않을 수 있으며, 변경되는 약관에 동의하지 않는 경우에는 서비스 이용을 중단하고 서비스에서 탈퇴를 할 수 있습니다. 다만, 제2항의 방법으로 변경되는 약관 공지 시 이용자가 별도의 의사표시를 하지 않으면 승낙한 것으로 본다고 공지하였음에도 불구하고, 변경되는 약관의 적용 일 전일까지 회사에 대해 명시적으로 의사표시를 하지 아니하는 경우 또는 이용자가 변경되는 약관 적용일 이후에도 계속하여 서비스를 이용하는 경우에는 변경된 약관에 동의한 것으로 봅니다.
제5조(약관 외 준칙) 이 약관에서 정하지 아니한 사항에 관하여는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「게임산업진흥에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등 관련 법령 및 상관례에 따릅니다.
제6조(이용 계약의 성립)
① 서비스 이용계약은 “이용고객”이 애플리케이션을 설치 및 구동하여 이 약관 및 개인정보처리방침에 동의 한 다음 서비스 이용신청을 하고, 회사가 그 이용신청에 대해 승낙함으로써 성립합니다. 이용고객의 서비스 이용신청 완료 후 단말기내에서 애플리케이션이 정상적으로 구동되는 경우에는 서비스 이용이 승낙된 것으 로 봅니다.
② 이용자는 서비스 이용과정에서 타인의 개인정보를 도용하는 경우 이 약관에 의한 이용자의 권리를 주장할 수 없으며, 회사는 이용계약을 취소하거나 해지할 수 있습니다. 이용자가 플랫폼사업자에게 개인정보를 제공 하고 플랫폼사업자를 통해 서비스를 이용하는 경우에도 동일하게 간주됩니다.
③ 회사는 청소년(18세 미만의 자로서 「초·중등교육법」제2조의 규정에 의한 고등학교에 재학 중인 학생을 포함하며. 이하 같습니다)이 이용신청을 한 경우 서비스 이용신청을 거절할 수 있습니다.
④ 회사는 다음 각호의 어느 하나에 해당하는 이용신청에 대해서는 승낙을 하지 않을 수 있습니다.
1. 서비스 운영정책에 따라 최근 3개월 내 이용제한을 받았거나,
    영구제한을 받은 이용자가 이용신청을 하는 경우 2. 회사가 체결한 계약에 따라
    또는 특정 국가에서 접속하는 이용자에게 서비스를 제공하는 것을 제한할 필요 가
    있는 경우 3. 「게임산업진흥에 관한 법률」, 「정보통신망 이용촉진 및 정보보호
    등에 관한 법률」 및 그 밖의 관련 법 령에서 금지하는 행위를 할 목적으로
    이용신청을 한 것으로 판단되는 경우 4. 그 밖에 제1호 내지 제3호에 준하는
    사유로서 승낙이 부적절하다고 판단되는 경우제7조(이용자 계정 관리) ① 회사는
    이용자 계정(임시 계정 포함. 이하 같습니다)을 통하여 이용자의 서비스 이용
    가능 여부 등 제반 이 용자 관리업무를 수행합니다. ② 이용자는 자신의 이용자
    계정을 선량한 관리자로서의 주의 의무를 다하여 관리하여야 합니다. 회사는 이
    용자가 자신의 이용자 계정을 소홀히 관리하거나 제3자에게 이용을 승낙함으로써
    발생하는 손해에 대해 어 떠한 책임도 부담하지 않습니다. 제8조(개인정보의 보호
    및 관리) ① 회사는 관련 법령이 정하는 바에 따라 이용자 계정을 포함한 이용자의
    개인정보를 보호하기 위해 노력합 니다. 이용자의 개인정보 보호 및 이용에
    대해서는 관련 법령 및 회사가 별도로 정하여 고지한 개인정보처리 방침에
    따릅니다. ② 회사의 웹사이트 또는 서비스에서 단순히 링크된 제3자 제공의
    서비스 또는 광고에 대하여는 회사의 개인 정보처리방침이 적용되지 않습니다. ③
    회사는 이용자의 귀책사유로 인하여 노출된 이용자 계정을 포함한 이용자의
    개인정보에 대해서는 일체의 책임을 지지 않습니다. 제9조(회사의 의무) ① 회사는
    관련 법령을 준수하고, 이 약관이 정하는 권리의 행사와 의무의 이행을 신의칙에
    따라 성실하게 이 행합니다. ② 회사는 이용자로부터 제기되는 의견이나 불만이
    정당하다고, 객관적으로 인정될 경우에는 합리적인 기간 내에 신속하게
    처리합니다. 다만, 처리에 장기간이 소요되는 경우에는 이용자에게 그 사유와
    처리일정을 별 도로 고지합니다. ③ 회사는 서비스에 장애가 발생하는 경우
    부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최 선의 노력을
    다합니다. ④ 회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 이용자와의
    계약관련 절차 및 내용 등에 있어 이용자 에게 편의를 제공하도록
    노력합니다.제10조(이용자의 의무) ① 이용자는 회사에서 제공하는 서비스를
    서비스 본래의 이용 목적 이외의 용도로 이용하거나 다음 각호 어 느 하나에
    해당하는 행위를 하여서는 안됩니다. 1. 이용자 문의, 유료콘텐츠 복구 및 환불
    요청, 이벤트 당첨 등으로 회사에 개인정보 제공 시 타인의 개인정 보를
    사용하거나 허위 사실을 기재하는 행위 2. 다른 이용자의 이용자 계정을 도용
    또는 부정하게 사용하거나 타인의 결제 수단 내지 정보를 도용하여 유 료콘텐츠를
    구매하는 행위 3. 유료콘텐츠 등 콘텐츠를 타인과 매매(증여 포함)하거나, 이를
    취득하여 이용하는 행위 4. 회사의 서비스 또는 애플리케이션을 이용하여 얻은
    정보를 상업적/비상업적으로 이용하거나, 알려지지 않 은 버그 등을 사용하여
    서비스를 이용하는 행위 5. 회사의 서비스 또는 애플리케이션을 이용하여 자기
    또는 타인에게 재산상의 이익을 발생시키는 행위 6. 타인의 명예를 훼손하거나
    손해를 가하는 행위 7. 회사 또는 제3자의 지적재산권, 초상권 등 기타 권리를
    침해하는 행위 8. 제3자를 기망하여 이익을 취하거나 또는 회사가 제공하는
    서비스를 불건전하게 이용하거나 이용하여 제3 자에게 피해를 주는 행위 9. 음란,
    저속한 정보를 교류, 게재 또는 음란 사이트를 연결(링크)하거나 승인되지 않은
    광고 또는 홍보물을 게재하는 행위 10. 재물을 걸고 도박하는 등 사행행위를
    유도하거나 참여하는 행위 11. 수치심, 혐오감 또는 공포심을 일으키는 문자,
    기호, 음향, 영상 등을 다른 이용자에게 전송, 유포하는 행 위 12. 관련 법령에서
    그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램) 또는 컴퓨터 소프트웨어,
    하드웨어, 전기 통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된
    소프트웨어 바이러스, 기타 다른 컴퓨터 코 드, 파일, 프로그램을 포함하고 있는
    자료를 전송, 게시, 유포, 사용하는 행위 13. 회사로부터 특별한 권리를 부여
    받지 않고 애플리케이션을 변경하거나 애플리케이션에 다른 프로그램을 추가 또는
    삽입하거나 서버를 해킹, 역설계하거나, 소스코드나 애플리케이션 데이터의 유출
    및 변경, 별도의 서버를 구축하거나 웹사이트의 일부분을 임의로 변경 또는
    도용하여 회사를 사칭하는 행위 14. 회사의 동의없이 영리, 영업, 광고,
    정치활동, 불법 선거운동 등을 목적으로 서비스를 사용하는 행위 15. 기타
    공공질서 및 미풍양속을 위반하거나 불법적, 부당한 행위 및 관련법령에 위배되는
    행위 ② 이용자는 회사의 서비스 공식 블로그 또는 애플리케이션내의 공지사항 및
    이 약관 개정사항 등을 수시로 확인하고 준수할 의무가 있으며, 기타 회사의
    업무에 방해되는 행위를 하여서는 안 됩니다. ③ 이용자는 이용자 계정 및
    서비스를 이용하는 단말기에 대한 관리 책임을 부담하며, 제3자에게 이를 이용하
    도록 하여서는 안 됩니다. 또한, 이용자의 과실 내지 관리 소홀 또는 단말기
    이용허락 등을 통해 발생하는 유 료콘텐츠의 구매∙이용 등에 대해서는 결제취소
    내지 환불 등을 청구할 수 없습니다. ④ 회사는 서비스 운영정책을 정하여 운영할
    수 있으며, 이용자는 회사에서 정한 서비스 운영정책을 준수하 여 서비스를
    이용하여야 합니다. ⑤ 회사는 서비스 운영정책을 수시로 변경할 수 있으며,
    서비스 운영정책을 변경하는 경우에는 제4조 제2항 의 절차에 따릅니다.
    제11조(서비스의 이용 및 중단 등) ① 회사는 이용자에게 서비스 이용을 승낙한
    때부터 서비스를 개시합니다. 다만, 일부 서비스의 경우 회사의 필요에 따라
    지정된 일자부터 서비스를 제공합니다. ② 이용자가 임시계정(Guest ID)를
    사용하여 서비스를 이용하는 경우에는 단말기에서 애플리케이션 삭제하 거나
    단말기를 교체(변경)할 경우 유료콘텐츠 및 서비스 이용기록이 삭제될 수
    있으므로 이용자 계정을 사용 하여 서비스를 이용하는 것을 권장합니다. 회사는
    이용자가 임시계정(Guest ID)으로 서비스를 이용하는 경우 최초 서비스
    이용시점에 이러한 내용을 사전에 고지하며, 애플리케이션 삭제 혹은 단말기
    교체로 인하여 발 생하는 이용자의 손해에 대해 어떠한 책임도 부담하지
    않습니다. ③ 네트워크를 통해 애플리케이션을 다운로드하거나 서비스를 이용하는
    경우에는 가입한 이동통신사에서 정 한 별도의 요금이 발생할 수 있습니다. 또한,
    단말기 변경, 해외 로밍 등의 경우에는 콘텐츠의 전부 또는 일부 이용이 불가능할
    수 있으며, 다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는
    서비스의 경 우에는 백그라운드 작업이 진행될 수 있습니다. 이 경우 단말기 또는
    이동통신사의 특성에 맞도록 추가요금 이 발생할 수 있으며 이와 관련하여 회사는
    책임을 지지 않습니다. ④ 회사는 업무상 또는 기술상 특별한 지장이 없는 한
    연중무휴 1일 24시간 서비스를 제공합니다. 다만, 시스 템 정기점검, 서버의 증설
    및 교체, 각종 버그 패치, 서비스 변경 등 운영상 필요한 경우 일정기간 동안
    서비스 이용을 일시 중단할 수 있습니다. 이러한 경우 회사는 그 내용 및 시간을
    서비스 공식 블로그 또는 애플리케이 션내의 공지사항 등을 통해 사전에
    공지합니다. 다만, 회사가 사전에 공지할 수 없는 부득이한 사유가 있는 경
    우에는 사후에 공지할 수 있습니다. ⑤ 회사는 영업양도, 분할∙합병 등에 따른
    서비스의 폐지, 서비스 제공 계약 만료, 해당 서비스의 수익 악화 등 경영상의
    중대한 사유로 인해 서비스를 지속하기 어려운 경우에는 서비스 전부를 중단할 수
    있습니다. 이 경 우 서비스 중단일 30일 이전에 중단사유 및 보상조건 등을 제4조
    제2항에서 정한 방법으로 공지하며, 기간의 정함이 없는 유료콘텐츠의 이용기간은
    서비스 중단 공지시 공지된 서비스 중단일까지로 합니다. 제12조(서비스 내용 및
    변경) ① 이용자는 이 약관 및 서비스 운영정책 또는 이용규칙에 따라 서비스를
    이용하여야 합니다. ② 회사는 서비스의 운영, 종료 등 서비스에 관한 포괄적인
    권한을 가집니다. ③ 회사는 다음 각호 어느 하나에 해당되는 경우 서비스의 전부
    또는 일부를 제한하거나 중지 또는 종료할 수 있습니다. 1. 전시, 사변, 천재지변
    또는 국가비상사태 등 불가항력적인 사유가 있는 경우 2. 정전, 제반 설비의 장애
    또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우 3. 서비스
    설비의 보수 등 공사로 인한 부득이한 경우 4. 기타 회사의 제반 사정으로
    서비스를 할 수 없는 경우 ④ 회사는 서비스가 변경되거나 중지된 원인이 회사의
    고의 또는 과실로 인한 경우를 제외하고 서비스의 변 경 및/또는 중지로 인하여
    발생하는 문제에 대해 책임을 지지 않습니다. 제13조(정보의 제공 및 게재) ①
    회사는 플랫폼사업자 및/또는 앱스토어사업자를 통해 제공받은 이용자 정보외에
    이용자에게 추가정보를 요청할 수 있으며, 수집 또는 제공받은 이용자 정보에
    대해서는 개인정보처리방침에서 정한 목적외로 이용하 지 않습니다. ② 회사는
    서비스에 광고를 게재할 수 있으며, 이용자는 서비스 이용시 광고가 노출되는
    것에 대하여 동의합 니다. ③ 회사는 이용자가 제2항의 광고에 접속∙참여∙거래
    등을 함으로 인하여 발생하는 손실 또는 손해에 대해 어 떠한 책임도 부담하지
    않습니다. ④ 회사는 단말기 알림(Push 알림)을 활용하여 이용자에게 광고를
    발송할 수 있으며, 이용자는 언제든지 애 플리케이션내의 수신거부 기능을
    이용하여 수신을 거부할 수 있습니다. 제14조(유료콘텐츠의 구매 및 사용기간 등)
    ① 이용자는 서비스를 이용하고 있는 단말기의 종류에 따른 앱스토어사업자의
    결제정책에 따라 유료콘텐츠 를 구매할 수 있으며, 해당 결제 정책의 차이로
    인하여 결제금액에 차이가 발생할 수 있습니다. 또한 유료콘텐 츠의 구매 대금은
    앱스토어사업자와 연계된 이동통신사나 플랫폼사업자 및/또는 앱스토어사업자가
    정하는 방법 및 정책에 따라 부과되며, 납부방식 역시 해당 사업자의 결제정책을
    따릅니다. ② 이용자가 서비스에서 구매한 유료콘텐츠는 해당 서비스
    애플리케이션을 다운로드 받아 설치한 단말기에 서만 이용할 수 있습니다. ③
    이용자가 유료콘텐츠를 서비스내의 콘텐츠로 전환한 경우 전환한 콘텐츠의
    사용기간은 전환일로부터 1년 이며, 이 기간이 경과한 경우 콘텐츠 사용권은
    소멸됩니다. 다만, 사용기간이 별도로 명시된 콘텐츠의 경우에 는 그 기간에
    따릅니다. 또한, 콘텐츠 사용기간 중 회사의 서비스 변경, 종료 등으로 인하여
    콘텐츠를 더 이상 사용할 수 없는 경우, 동일∙유사한 콘텐츠로 보상합니다. ④
    이용자는 유료콘텐츠를 이용자 계정에서만 이용할 수 있으며, 제3자에게 양도,
    대여, 매매 또는 환전 등을 할 수 없습니다. 다만, 회사가 별도로 정하여 공지한
    방법으로 이용인 경우에는 그러하지 않습니다. 제15조(In-App 결제) ①
    애플리케이션은 유료콘텐츠 구매를 위한 In-App결제 기능을 포함하고 있습니다. ②
    이용자는 단말기의 비밀번호 설정기능, 앱스토어사업자 및/또는 이동통신사가
    제공하는 비밀번호 설정기 능 등을 이용하여 제3자의 In-App결제를 방지하여야
    합니다. ③ 회사는 이용자가 In-App결제 방지기능 등을 이용하지 않거나 이용자의
    부주의로 비밀번호가 노출되어 발 생하는 제3자의 In-App결제에 대해 어떠한
    책임도 부담하지 않습니다. ④ 이용자가 이동통신사의 청소년 요금제에 가입한
    경우, 해당 단말기에서의 In-App결제를 하면 그 내용은 법정대리인의 동의가 있는
    것으로 간주합니다. ⑤ 이용자는 In-App결제 대금을 성실히 납부하여야 할 책임이
    있습니다. ⑥ 회사의 정책 및 결제업체(이동통신사, 앱스토어사업자 등)의 정책,
    방침 등에 따라 각 결제수단별로 결제 한도가 부여 또는 조정될 수 있습니다.
    제16조(청약 철회 및 환불 등) ① 이용자는 구매한 유료콘텐츠를 구매일 또는
    유료콘텐츠 이용가능일로부터 7일 이내에, 유료 콘텐츠의 내 용이 표시∙광고의
    내용과 다르거나 구매 내용과 다르게 이행된 경우에는 유료콘텐츠의 이용
    가능일부터 3개 월 이내 또는 그 사실을 안 날이나 알 수 있었던 날부터 30일
    이내에 별도의 수수료 없이 청약철회(구매 취소) 를 할 수 있습니다. 다만,
    청약철회 요청시 이미 사용하였거나 사용한 것으로 간주되는 유료콘텐츠 등 이에
    준 하는 특성을 가진 유료콘텐츠에 대하여는 청약철회(구매취소)가 제한될 수
    있습니다. ② 회사는 회사의 귀책사유로 인하여 이용자가 구매한 유료 콘텐츠를
    서비스에서 이용하지 못하는 경우, 동 일∙유사한 유료콘텐츠로 보상하거나 해당
    구매 금액을 구매일에 관계없이 전액 환불합니다. ③ 이용자가 구매한
    유료콘텐츠에 대한 환불은 이용자가 이용한 앱스토어사업자의 환불 정책에 따라
    진행되 며, 자세한 환불 신청절차는 앱스토어사업자의 운영정책에 따릅니다. 또한
    구매한 유료콘텐츠에 대한 환불이 완료된 경우에는 환불 금액만큼 유료콘텐츠가
    차감됩니다. 또한, 유료콘텐츠가 다르게 지급된 경우에는 본조 제2항에서 정한
    방법에 따릅니다. 다만, 이용자가 다르게 지급된 유료콘텐츠의 일부를 사용한
    경우에는 동일∙ 유사한 유료콘텐츠로만 보상합니다. ④ 유료콘텐츠를 콘텐츠로
    전환한 경우, 전부 또는 일부 사용으로 인하여 서비스내에서 구매할 수 있는 기본
    단위가 훼손된 경우, 메시지함 및/또는 선물함 등 유료콘텐츠의 송/수신과 관련된
    화면에서 수락 등의 동의 과 정을 거친 경우 등 이용자의 유료콘텐츠 이용으로
    간주될 수는 사유가 있는 때에는 이용자가 사용의사를 밝 힌 것으로 간주됩니다.
    ⑤ 이용자가 정상적인 구매내역이 기록되는 In-App결제를 통하지 않고 서비스
    이용행위로 취득하거나 다른 이용자로부터 선물 받은 유료콘텐츠, 회사의 이벤트
    등을 통하여 취득한 무료콘텐츠는 환불되지 않습니다. ⑥ 회사는 청약철회가
    제한되는 유료콘텐츠에 대해 In-App결제 전에 청약철회가 제한됨을 표시하는 등의
    방 법으로 청약철회 등의 권리행사가 방해 받지 아니하도록 조치 합니다. 만약
    회사가 이러한 조치를 하지 아니 한 경우에는 청약철회 제한 사유에도 불구하고
    이용자는 청약철회를 할 수 있습니다. 다만, 다음 각호의 경우 에는 청약철회가
    제한됩니다. 1. 구매 후 즉시 사용이 시작되거나 즉시 서비스에 적용되는
    유료콘텐츠의 경우 2. 추가적인 혜택이 제공된 유료콘텐츠 구매 후 해당 추가
    혜택이 사용된 경우 3. 묶음형(패키지형)으로 판매된 유료콘텐츠의 일부가 사용된
    경우 4. 개봉행위를 사용으로 볼 수 있거나 개봉 시 효용이 결정되는
    캡슐형/확률형 유료콘텐츠를 개봉한 경우 5. 유료콘텐츠의 일부를 사용하였거나
    이미 시간이 지나 다시 판매하기 곤란한 경우 ⑦ 미성년자가 법정대리인의
    동의없이 In-App 결제로 유료콘텐츠를 구매한 경우, 미성년자 또는 법정대리인 은
    In-App결제를 취소할 수 있습니다. 다만, 미성년자의 In-App결제가
    법정대리인으로부터 처분을 허락받은 재산의 범위 내인 경우 또는 미성년자가
    사술 등을 사용하여 성년자로 믿게 한 때에는 취소가 제한됩니다. 유 료콘텐츠
    구매자가 미성년자인지 여부는 In-App결제가 진행된 단말기 또는 신용카드 등
    결제수단의 명의자 를 기준으로 판단됩니다. 미성년자의 결제취소를 요청하시는
    경우 회사의 필요에 따라 미성년자 및 법정대리 인을 증명할 수 있는 서류를
    제출하여야 합니다. ⑧ In-App결제는 앱스토어사업자가 제공하는 결제방식에
    따르며. In-App결제 과정에서 과오납금이 발생하 는 경우 앱스토어사업자에게
    환불을 요청하여야 합니다. 만약, In-App 결제과정에서 과오납금이 발생하여 회
    사에 환불(결제취소 포함) 등을 요청하는 경우 회사는 앱스토어사업자의 정책,
    시스템에 따라 가능한 경우에 한하여 앱스토어사업자에게 과오납금 환불을
    요청하여 환불을 진행하며, 과오납금 환불 방식은 제17조 제3 항에 따릅니다.
    다만, 앱스토어사업자가 회사의 과오납금 환불 신청을 제한하고 있는 경우에는
    이용자가 직 접 앱스토어사업자에게 과오납금 환불을 요청하여야 합니다. ⑨
    선물하기 기능을 통하여 이루어진 In-App결제에 대해서는 구매한 유료콘텐츠에
    하자가 있는 경우를 제외 하고는 원칙적으로 결제 취소 또는 환불이 불가능하며,
    유료콘텐츠의 하자로 인한 환불은 선물을 보낸 이용 자에 한하여 가능합니다.
    제17조(청약 철회 등의 효과) ① 회사는 이용자가 제16조 제1항 본문에 따른
    청약철회를 한 경우 지체없이 해당 유료콘텐츠를 회수 또는 삭제하고,
    유료콘텐츠를 회수 또는 삭제한 날로부터 3영업일 이내에 지급받은 대금을
    환불하거나 결제취소 를 통해 환불 합니다. ② 제1항의 경우 회사가 이용자에게
    환불을 지연한 때에는 그 지연기간에 대하여 「전자상거래 등에서의 소
    비자보호에 관한 법률」 및 같은 법 시행령에서 정하는 이율을 곱하여 산정한
    지연이자를 지급합니다. ③ 회사는 환불을 함에 있어 이용자가 신용카드, 그 밖에
    「전자상거래 등에서의 소비자보호에 관한 법률 시 행령」에서 정한 결제수단으로
    대금을 지급한 때에는 지체없이 당해 결제수단을 제공한 사업자로 하여금 대 금의
    청구를 정지 또는 취소하도록 요청합니다. 다만, 회사가 결제업자로부터 이미
    대금을 지급받은 때에는 이를 결제업자에게 환불하고 이를 이용자에게
    통지합니다. ④ 이용자가 제16조 제1항 본문에 따른 청약철회를 한 경우
    유료콘텐츠 등의 반환에 필요한 비용은 이용자가 부담(표시∙광고의 내용과
    다르거나 구매 내용과 다르게 이행된 경우 제외)하고, 회사는 이용자에게
    청약철회 를 이유로 위약금 또는 손해배상을 청구하지 않습니다. 제18조(계약
    해지 및 서비스 이용 중지 등) ① 이용자는 언제든지 서비스의 이용을 원하지 않는
    경우, 애플리케이션내의 탈퇴를 이용하여 이용계약을 해 지할 수 있습니다. ②
    회사는 서비스 이용계약이 해지(탈퇴)되는 경우 서비스 이용기록, 유∙무료콘텐츠
    등을 지체없이 삭제합니 다. 따라서, 이용자는 서비스 이용계약 해지(탈퇴)되기
    전까지 유료콘텐츠의 환불을 요청하여야 합니다. 다 만, 회사는 이용자가 서비스
    이용계약의 해지(탈퇴)를 신청하는 경우, 조작 실수 등으로 인하여 발생하는 피
    해를 예방하기 위해 유예기간(신청일로부터 14일)이 만료된 후 서비스 이용기록
    등을 삭제(탈퇴 처리)하며, 이용자는 유예기간내에는 언제든지 서비스 이용계약의
    해지(탈퇴)신청을 철회할 수 있습니다. ③ 회사는 이용자가 제10조 또는 서비스
    운영정책에서 정한 사항을 위반하는 경우 이용계약을 해지하거나 기 간을 정하여
    서비스 이용을 제한할 수 있습니다. ④ 이용자는 제3항에 따른 서비스 이용제한에
    대해 회사가 정한 절차에 따라 이의신청을 할 수 있으며, 회사 는 이용자의
    이의신청이 정당하다고 판단되는 경우 즉시 서비스 이용을 재개합니다. ⑤ 회사는
    제3항에 따른 서비스 이용제한이 정당한 경우 서비스 이용제한으로 인하여
    이용자가 입은 손해를 배상할 책임을 부담하지 않습니다. ⑥ 회사는 이용자의
    서비스 과몰입 방지를 위해 이용방법, 이용시간, 이용횟수 등을 제한할 수
    있으며, 이용자 의 서비스 과몰입 정도에 따라 이용자 보호프로그램(UPP)을
    적용할 수 있습니다. 만약, 이용자가 이용자 보 호프로그램의 적용을 거부하는
    경우, 회사는 이용자의 의사와 관계없이 서비스 제공을 중단할 수 있습니다. ⑦
    회사는 이용자가 연속하여 1년 동안 서비스를 이용하지 않은 경우 이용자의
    개인정보를 보호하기 위해 이 용계약을 해지하고 이용자의 개인정보파기 또는
    분리보관 등의 조치를 취할 수 있습니다. 이 경우 조치일 30 일 전까지 조지 내용
    등을 이용자에게 통지합니다. 제19조(잠정조치로서의 이용제한) ① 회사는 다음
    각호 어느 하나에 해당하는 문제에 대한 조사가 완료될 때까지 이용자의 서비스
    이용을 잠정 적으로 중지할 수 있습니다. 1. 이용자 계정이 해킹 또는
    도용당하였다는 정당한 신고가 접수된 경우 2. 서비스 운영정책에서 정하고 있는
    제재대상 행위에 해당된다고 합리적으로 의심되는 경우 3. 그 밖에 제1호 및
    제2호에 준하는 행위에 해당된다고 판단되는 경우 ② 회사는 제1항 각호의 조사가
    완료된 후 서비스 이용기간에 비례하여 유료콘텐츠의 이용기간을 연장합니 다.
    다만, 제1항에 의한 위법행위자로 확인된 경우에는 연장되지 않습니다.
    제20조(손해배상) ① 이용자는 이 약관의 의무를 위반함으로 인하여 회사에 손해를
    입힌 경우 또는 서비스를 이용하는 과정에 서 회사에 손해를 입힌 경우 회사에
    대하여 그 손해를 배상하여야 합니다. ② 이용자는 서비스 이용과정에서 행한
    불법행위나 이 약관 위반행위로 인하여 회사가 이용자 이외의 제3자 로부터
    손해배상청구 또는 소송을 비롯한 각종 이의제기를 받는 경우, 자신의 책임과
    비용으로 회사를 면책 시켜야 하며, 회사가 면책되지 않음으로 인하여 회사에
    손해가 발생한 경우 그 손해를 배상하여야 합니다. 제21조(면책) ① 회사는
    천재지변, 국가비상사태, 해결이 곤란한 기술적 결함 기타 불가항력적 사유로
    서비스를 제공할 수 없는 경우에는 그 책임이 면제됩니다. ② 회사는 이용자의
    귀책사유로 인한 서비스의 중지∙이용장애 등에 대해 책임을 지지 않으며,
    기간통신사업 자가 전기통신서비스를 중지하거나 정상적으로 제공하지 못함으로
    인하여 이용자에게 손해가 발생한 경우에 대해서도 책임을 부담하지 않습니다. ③
    회사는 사전에 공지되거나 긴급하게 실시된 서비스 설비의 보수, 교체, 정기점검
    등 부득이한 사유로 서비 스가 중지되거나 장애가 발생한 경우에 대해서는 그
    책임이 면제됩니다. ④ 회사는 이용자가 서비스를 이용하여 기대하는 점수, 순위
    등을 얻지 못한 것에 대하여 책임을 지지 않으며, 서비스에 대한 취사 선택 또는
    이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다. ⑤ 회사는 이용자가
    본인의 개인정보 등(이용자 계정 포함)을 변경하여 얻는 불이익 및 정보상실에
    대해 일체 책임을 지지 않습니다. ⑥ 회사는 이용자의 단말기 환경, 회사의
    귀책사유 없는 네트워크 환경 등으로 인하여 서비스 이용과정에서 발생하는 제반
    문제에 대해서 책임을 지지 않습니다. ⑦ 회사는 이용자 상호간 또는 이용자와
    제3자 간에 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없으 며, 이로
    인한 손해를 배상할 책임도 없습니다. 제22조(재판권 및 준거법) ① 서비스 이용과
    관련하여 회사와 이용자간에 발생한 분쟁에 관한 소송은 민사소송법 등
    관련법령에서 정한 절차에 따른 법원을 관할법원으로 합니다. ② 회사와
    이용자간에 제기된 소송에는 대한민국 법을 적용합니다. [부칙] (시행일) 이
    약관은 2024년 02월 04일부터 적용됩니다.`;

const PrivacyText = `개인정보처리방침 
(푸릇푸릇)(Growiary APP'이하 '푸릇푸릇')는(은)
개인정보보호법에 따라 이용자의개인정보 보호 및 권익을 보호하고 개인정보와관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고있습니다. 
(푸릇푸릇) 는(은) 회사는 개인정보처리방침을 개정하는 경우 웹사이트, 블로그, 어플의 공지사항(또는 개별공지), e-mail 공지, 문자공지,문자를 통한 홈페이지 URL 공지 등을 통하여 공지할 것입니다. ○ 본 방침은2024년 02월 04일부터 시행됩니다. 
1. 개인정보의 처리 목적(푸릇푸릇)('Growiary APP'이하 '푸릇푸릇')는(은) 개인정보를 다음의 목적을위해 처리합니다.  처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다. 가. 회원가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다. 나. 민원사무 처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다. 다. 재화 또는 서비스 제공 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증, 채권추심 등을 목적으로 개인정보를 처리합니다. 라. 마케팅 및 광고에의 활용 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적특성에 따른 서비스 제공 및 광고 게재 , 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다. 마. 개인영상정보 범죄의 예방 및 수사 등을 목적으로 개인정보를 처리합니다. 
2. 개인정보 파일 현황 개인정보 파일명 : 고객개인정보 - 개인정보 항목 : 자택주소, 비밀번호, 생년월일, 자택전화번호, 성별, 로그인ID, 휴대전화번호, 이름, 이메일, 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그, 법정대리인 휴대전화번호, 법정대리인 자택 주소, 법정대리인 자택
전화번호, 법정대리인 이름, 단말기 시리얼 넘버, 위치정보, 동영상 정보,
음성정보 자료, 이용자 사진 등 신고시 필요한 자료 일체 - 수집방법 : APP,
서면양식, 전화/팩스, - 보유근거 : 푸릇푸릇 고객 서비스 이용을 위해 -
보유기간 : 5년 - 관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년,
신용정보의 수집/처리 및 이용 등 에 관한 기록 : 3년, 대금결제 및 재화 등의
공급에 관한 기록 : 5년, 계약 또는 청약철회 등에 관한 기록 : 5년, 표시/광고에
관한 기록 : 6개월 3. 개인정보의 처리 및 보유 기간 1 (푸릇푸릇)는(은) 법령에
따른 개인정보 보유·이용기간 또는 정보 주체로부터 개인정보를 수집시에 동의
받은 개인정보 보유,이용기간 내에서 개인정보를 처리, 보유합니다. 2 각각의
개인정보 처리 및 보유 기간은 다음과 같습니다. 3 (재화 또는 서비스 제공)
(재화 또는 서비스 제공)과 관련한 개인정보는 수집 이용에 관한
동의일로부터(5년)까지 위 이용목적을 위하여 보유 이용됩니다. -보유근거 :
고객서비스 이용을 위한 -관련법령 : 1)소비자의 불만 또는 분쟁처리에 관한 기록
: 3년 2) 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 3) 대금결제 및
재화 등의 공급에 관한 기록 : 5년 4) 계약 또는 청약철회 등에 관한 기록 : 5년
5) 표시/광고에 관한 기록 : 6개월 -예외사유 : 고객 또는 정부기관의 요청에
의해 기간이 연장 되어야 된다고 판단될 시 4. 개인정보의 제3자 제공에 관한
사항 1 (푸릇푸릇)(Growiary APP'이하 '푸릇푸릇')는(은) 정보주체의 동의,
법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만
개인정보를 제3자에게 제공합니다. 5. 정보주체의 권리,의무 및 그 행사방법
이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다. 1
정보주체는 주식회사 푸릇푸릇 에 대해 언제든지 다음 각 호의 개인정보 보호
관련 권리를 행사할 수 있습니다. 1. 개인정보 열람요구 2. 오류 등이 있을 경우
정정 요구 3. 삭제요구 4. 처리정지 요구 2 제1항에 따른 권리 행사는 주식회사
푸릇푸릇 에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면,
전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 주식회사푸릇푸릇 는(은)
이에 대해 지체 없이 조치하겠습니다. 3 정보주체가 개인정보의 오류 등에 대한
정정 또는 삭제를 요구한 경우에는 푸릇푸릇는(은) 정정 또는 삭제를 완료할
때까지 당해 개인정보를 이용하거나 제공하지 않습니다. 4 제1항에 따른 권리
행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수
있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을
제출하셔야 합니다. 6. 처리하는 개인정보의 항목 1 (푸릇푸릇)(Growiary
APP'이하 '푸릇푸릇')은(는) 다음의 개인정보 항목을 처리하고 있습니다. (앱
회원가입 및 관리) - 필수항목 : 비밀번호, 생년월일, 성별, 로그인ID, 이름,
이메일, 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속로그, 단말기 시리얼 넘버,
위치정보, 동영상정보, 이용자 사진, 음성정보 자료 등 신고시 필요한 자료 일체
7. 개인정보의 파기 (푸릇푸릇)(Growiary APP'이하 '푸릇푸릇')는(은) 원칙적으로
개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다.
파기의 절차, 기한 및 방법은 다음과 같습니다. -파기절차 이용자가 입력한
정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및
기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로
옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지
않습니다. -파기기한 이용자의 개인정보는 개인정보의 보유기간이 경과된
경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당
서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는
개인정보의 처리가 불필요한 것으로 인정되는 날로부터 14일 이내에 그
개인정보를 파기합니다 . -파기방법 전자적 파일 형태의 정보는 기록을 재생할 수
없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나
소각을 통하여 파기합니다. 8. 개인정보의 안전성 확보 조치 1
(푸릇푸릇)(Growiary APP'이하 '푸릇푸릇') 개인정보보호법 제29조에 따라 다음과
같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다. 1.
개인정보 취급 직원의 최소화 및 교육 개인정보를 취급하는 직원을 지정하고
담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.
2. 정기적인 자체 감사 실시 개인정보 취급 관련 안정성 확보를 위해 정기적(연
1회)으로 자체 감사를 실시하고 있습니다. 3. 내부관리계획의 수립 및 시행
개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
4. 개인정보에 대한 접근 제한 개인정보를 처리하는 데이터베이스시스템에 대한
접근 권한의 부여·변경·말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을
통제하고 있습니다. 5 접속 기록의 보관 및 위변조 방지 개인정보처리시스템에
접속한 기록을 최소 2개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및
도난, 분실되지 않도록 보안 기능을 사용하고 있습니다. 9. 개인정보 보호책임자
1 (푸릇푸릇)(Growiary APP'이하 '푸릇푸릇') 는(은) 개인정보 처리에 관한
업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및
피해구제 등을 위하여 아래와 같이 개인정보 보호책임자 를 지정하고 있습니다. ▶
개인정보 보호책임자 성명 :임효인 : 보호책임자 직급 : 연락처 : 010
-5060-1511, e201460178@gmail.com ※ 개인정보 보호 담당부서로 연결됩니다. 10.
개인정보 처리방침 변경 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및
방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행
7일 전부터 공지사항을 통하여 고지할 것입니다.`
    return (
        <div>
            {content === 'terms' ? (
                <>
                    <h2>서비스 이용약관</h2>
                    <p style={{ maxHeight: '336px', overflowY: 'scroll', whiteSpace: 'pre-wrap' }}>
                        {ServiceText}
                    </p>
                </>
            ) : content === 'privacy' ? (
                <>
                    <h2>개인정보 처리방침</h2>
                    <p style={{ maxHeight: '336px', overflowY: 'scroll', whiteSpace: 'pre-wrap' }}>
                        {PrivacyText}
                    </p>
                </>
            ) : (
                // 다른 내용이 추가될 경우에 대비하여 기본적으로 표시할 내용
                <p>내용이 없습니다.</p>
            )}
        </div>
    );
};

export default ModalContent;
