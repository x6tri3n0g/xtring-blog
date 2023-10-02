---
title: '아키텍처 특성 정의'
subtitle: '아키텍트는 개발팀과 함께 도메인 또는 비즈니스 요구사항을 정의할 수 있지만, 주로 소프트웨어로 처리할 일 중 도메인 기능과 직접적인 관련이 없는 모든 것들, 즉 `아키텍처 특성(Architectural Charateristic)`을 정의, 발견, 분석하는 일을 수행한다'
date: '2022-01-02'
---

> 스터디 진행: 2022.12.07


## 4. 아키텍처 특성 정의
> 아키텍트는 개발팀과 함께 도메인 또는 비즈니스 요구사항을 정의할 수 있지만, 주로 소프트웨어로 처리할 일 중 도메인 기능과 직접적인 관련이 없는 모든 것들, 즉 `아키텍처 특성(Architectural Charateristic)`을 정의, 발견, 분석하는 일을 수행한다


아키텍처 특성은 다음 세 가지 기준을 충족한다.

1.  비도메인(nondomain) 설계 고려 사항을 명시한다.
    -   어플리케이션 설계 시 어플리케이션으로 처리할 일은 구체적인 요구사항으로 정리한다.
    -   아키텍처 특성은 이 요구사항을 구현하는 방법, 어떤 선택을 하게 된 이유와 관련된 운영/설계 기준을 명시한다.
    -   **e.g. 일반적으로 어느 정도의 어플리케이션의 성능은 중요한 아키텍처 특성이지만, 요구사항 정의서에는 적혀있지 않는 경우가 허다하다.** => @성진님은 필터의 성능을 위한 캐싱을 이야기 하심
    -   e.g.2 어느 요구사항 정의서에도 ‘기술 부채를 방지한다'는 문구는 따로 없지만, 기술 부채 방지는 아키텍트와 개발자의 당연한 설계 고려사항이다.
2.  설계의 구조적 측면에 영향을 미친다.
    -   프로젝트 담당 아키텍트가 아키텍처 특성을 기술하는 주된 이유는, ‘이 아키텍처 특성은 어떤 특별한 구조적 요소를 고려해야 하는가?’하는 설계 고려 사항 때문이다.
    -   e.g. 보안은 사실상 모든 프로젝트의 주요 관심사이고 어느 시스템이건 설계, 코딩 단계부터 기본 보안 지침을 만들어 준수해야 하지만,
    -   아키텍트가 뭔가 특별한 것을 설계해야 한다면 보안은 아키텍처 특성 수준으로 격상된다. 결제 시스템을 만든다고 할 때, 서드파티 결제 프로세서를 사용할 때와 어플리케이션 내 내부 처리를 할 때 보안에 대한 아키텍처 처리를 다르게 해줘야 하는 것처럼 말이다.
3.  어플리케이션 성공에 절대적으로 중요하다.
    -   어플리케이션이 무수히 많은 아키텍처 특성을 전부 다 지원하면 참 좋겠으나, 그러면 안 된다.
    -   지원하는 아키텍처 특성을 한 가지만 늘려도 그만큼 설계 복잡도는 가중되기 때문이다.
    -   가급적 아키텍처 특성을 적게 선정하는 일도 아키텍트의 중요한 책무이다.
    => @승재님은 실행요소를 명시적으로 만들고 기능을 개발한다.

### 4.1 아키텍처 특성 (일부) 목록

아키텍처 특성은 모듈성 같은 저수준 코드의 특성부터 확장성, 탄력성 같은 복잡한 운영 문제까지 소프트웨어 시스템의 넓은 범위에 고루 존재한다.

#### 4.1.1 운영 아키텍처 특성
=> @효진님: 현재 우리는 문제가 있으면 너무 잘 보인다. 에러 바운더리가 제대로 되어 있지 않은 것 같다.
=> @승재님: 서비스를 운영하기 위해서 아키텍처에 대한 내용을 잘 알고 있어야 하는 것 아닌가... 처음에 왔을 때 매니저 단에서 너무 몰라서 놀랐다. 현재 개발자가 코드에 묶여있는 것 같다.

-   가용성(availability) : 시스템이 얼마나 오랫동안 사용 가능해야 하나?
-   연속성(continuity) : 재해 복구 능력
-   성능(performance) : 스트레스 테스트, 피크 분석, 기능의 사용 빈도 분석, 필요 용량, 응답 시간
-   복구성(recoverability) : 비즈니스 연속성 요구사항(e.g. 장애 발생 시 얼마나 신속하게 시스템을 재가동시켜야 하나?)
-   신뢰성(reliability)/안전(safety) : 시스템에 페일 세이프(fail-safe, 고장 났을 때 안전한 방향으로 흘러가도록 하는 설계 방식)가 필요한가?
-   견고성(robustness) : 프로그램 실행 중 인터넷 접속 끊김, 정전, 하드웨어 실패 등 에러 및 경계 조건을 감당하는 능력
-   확장성(scalability) : 유저 수, 요청 수가 늘어나도 시스템이 그에 맞는 성능을 발휘하는 능력

#### 4.1.2 구조 아키텍처 특성

-   설정성(configurability) : 최종 유저가 (쓰기 편한 인터페이스를 통해) 소프트웨어 설정을 쉽게 바꿀 수 있는가?
-   신장성(extensibility) : 새로운 기능을 삽입하는 일의 중요성
-   설치성(installability) : 필요한 모든 플랫폼에 시스템을 얼마나 손쉽게 설치할 수 있나?
-   활용성(leverageability)/재사용(reuse) : 공통 컴포넌트를 여러 제품에서 활용할 수 있나?
-   지역성(locality) : 데이터를 입력/조회하는 화면에서 다국어가 지원되는가? 등
-   유지보수성(maintainability) : 시스템을 얼마나 쉽게 변경/개선 할 수 있나?
-   이식성(portability) : 하나 이상의 플랫폼에서 시스템을 실행할 수 있나?
-   지원성(supportability) : 어플리케이션은 어느 정도의 기술 지원을 필요로 하나? 시스템에서 발생한 에러를 디버깅하려면 로깅 및 기타 기능이 어느 수준으로 뒷받침 되어야 하나?
-   업그레이드성(upgradeability) : 이 어플리케이션/솔루션의 구 버전을 새 버전으로 쉽고 빠르게 업그레이드를 할 수 있는가?

#### 4.1.3 아키텍처 공통 특성

-   접근성(accessability) : 색맹, 청각 장애인 등 모든 유저가 접근하는데 불편함이 없나?
-   보관성(archivability) : 데이터를 따로 아카이빙 해야 하나, 아니면 일정 시간 경과 후 삭제해야 하나?
-   인증(authentication) : 유저가 본인이 맞다는 것을 증명하기 위해 필요한 보안 요구사항
-   인가(authorization) : (유스 케이스, 서브 시스템, 웹 페이지, 비즈니스 규칙, 필드 레벨 등) 유저가 어플리케이션에서 정해진 기능만 사용할 수 있도록 강제하는 보안 요구사항
-   합법성(legal) : 시스템 운영상 법적 제약조건이 있는가? (데이터 보호, 사베인스 옥슬리법, GDPR 등) 회사는 어떤 권리를 유보 해야 하나?
-   프라이버시(privacy) : 회사 내부 임직원의 트랜잭션을 외부에 드러내지 않는 기능(e.g. 암호화 트랜잭션은 DBA나 네트워크 아키텍트도 해독이 불가)
-   보안(security) : 데이터를 암호화 한 후 DB에 보관해야 하나? 내부 시스템 간 네트워크 통신도 암호화 해야 하나? 원격 유저 액세스는 어떤 종류의 인증이 필요한가?
-   사용성(usability)/성취성(achievability) : 유저가 어플리케이션/솔루션을 이용하여 원하는 목적을 달성하기 위해 필요한 교육, 훈련 수준

다음은 국제 표준 기구(International Organization for Standardization, ISO)가 발표한 기능별 목록이다.

-   성능 효율(performance efficiency)
    -   알려진 조건에서 리소스 양에 비례하는 성능 측정값, 시간 측정, 리소스 사용, 능력 등이 포함된다.
-   호환성(compatibility)
    -   제품, 시스템, 컴포넌트가 다른 제품, 시스템, 컴포넌트와 정보를 교환하고(하거나) 동일한 HW/SW 환경을 공유하면서 필요한 기능을 수행할 수 있는 정도.
    -   공존(환경과 리소스를 다른 제품과 공유하면서 효율적으로 필요한 기능을 수행할 수 있음)
    -   상호운용성(둘 이상의 시스템에 정보를 교환, 활용 가능한 정도)이 포함된다.
-   사용성(usability)
    -   유저가 시스템을 원하는 목적에 맞게 효과적으로, 효율적으로, 만족스럽게 사용할 수 있는 정도
    -   적합성 인지도(유저가 자신의 사용 목적에 소프트웨어가 부합하는지 인식할 수 있음)
    -   학습성(유저가 얼마나 쉽게 소프트웨어 사용법을 익히는가)
    -   유저 에러 방지(유저가 실수하는 것을 방지)
    -   접근성(사람들이 소프트웨어의 가장 다양한 능력과 기능을 접할 수 있게 함)이 포함된다.
-   신뢰성(reliability)
    -   주어진 기간 동안 특정 조건에서 시스템이 기능하는 정도
    -   성숙도(정상 동작 시 소프트웨어가 원하는 신뢰성을 보장하는가)
    -   가용성(소프트웨어가 가동 중이고 엑세스 가능한가)
    -   내고장성(HW/SW가 고장나도 SW가 의도한 대로 작동되나)
    -   복구성(소프트웨어가 고장나도 영향 받은 데이터를 되살리고 원하는 시스템 상태로 돌아갈 수 있는가)이 포함된다.
-   보안(security)
    -   사람들, 다른 제품, 시스템이 자신의 인증 레벨에 맞게 데이터를 액세스 할 수 있게끔 소프트웨어가 정보를 보호하는 정도.
    -   기밀성(데이터는 인증된 사람만 액세스 할 수 있음)
    -   무결성(데이터를 함부로 변조하지 못하게 소프트웨어가 허가되지 않은 액세스를 차단함)
    -   부인 방지(어떤 액션이나 이벤트가 발생하였음을 증명함)
    -   책임 소재(유저가 수행한 액션을 추적)
    -   진위(유저 신원을 증명)가 포함된다.
-   유지보수성(maintainability)
    -   개발자가 얼마나 효율적으로 소프트웨어를 고쳐 개선/발전시키고 계속 변화하는 환경이나 요구사항에 맞게 적용할 수 있는가
    -   모듈성(소프트웨어를 독립된 컴포넌트로 구성할 수 있는 정도)
    -   재사용성(개발자가 어떤 자산을 여러 시스템에서, 다른 자산을 구축하는데 다시 사용할 수 있는 정도)
    -   분석성(개발자가 얼마나 쉽게 소프트웨어 메트릭을 취합할 수 있나)
    -   수정성(개발자가 기존 제품 품질을 떨어뜨리지 않고도 어렵지 않게 소프트웨어를 수정할 수 있나)
    -   시험성(개발자나 다른 사람들이 얼마나 쉽게 소프트웨어를 테스트 할 수 있나)이 포함된다.
-   이식성(portability)
    -   개발자가 HW/SW 또는 다른 운용 환경에 있는 시스템, 제품, 컴포넌트를 다른 곳에 옮길 수 있는 정도.
    -   적응성(개발자가 소프트웨어를 다른 HW, SW, 기타 운용 환경에 맞게 적용시킬 수 있나)
    -   설치성(소프트웨어를 주어진 환경에 설치/삭제 할 수 있나)
    -   교체성(개발자가 얼마나 쉽게 다른 소프트웨어로 기능을 교체할 수 있는가)이 포함된다.

### 4.2 트레이드 오프 및 나쁜 것 중에서 제일 나은 아키텍처

시스템을 설계하며 모든 아키텍처 특성을 빠짐없이 최상으로 반영하기란 불가능에 가깝다. **최고의 아키텍처를 고집하지 말고 나쁜 것 중에서 제일 나은 아키텍처를 선택하라.** 아키텍처 특성을 너무 욕심내면 모든 비즈니스 문제를 해결하려고 시도하는 일반적인 솔루션이 되어 버린다. 그러나 그런 아키텍처는 설계하기가 대단히 까다롭기 때문에 실현 가능성이 낮다.

아키텍트는 가능한 한 아키텍처 설계를 꾸준히 조금씩 반복해 보는 것이 좋다. 반복의 가치는 애자일 소프트웨어 개발에서도 가장 중요한 교훈 중 하나로, 아키텍처 뿐만 아니라 모든 레벨의 소프트웨어 개발에도 적용된다.

## 5. 아키텍처 특성 식별

### 5.1 도메인 관심사에서 아키텍처 특성 도출

아키텍트는 도메인 관심사를 올바르게 해석하여 정확한 아키텍처 특성을 식별해야 한다. 예를 들어, 확장성, 내고장성, 보안, 성능 중 어느 것이 가장 중요한 관심사일까? 네 가지 모두 시스템에 필요한 특성이지만, **아키텍트는 도메인의 핵심 목표와 현재 상황을 고려해서 도메인 관심사를 ‘~성'으로 해석한 후, 그에 따라 정확하고 합리적인 아키텍처 결정을 내려야 한다.**

도메인 이해관계자와 협력해서 주요 아키텍처 특성을 정의하는 한 가지 팁은,최종 목록을 가능한 한 짧게 하라는 것이다. 아키텍처에서 가장 흔한 안티패턴 중 하나가, 모든 아키텍처 특성을 지원하는 제네릭 아키텍처(generic architecture)를 설계하려는 것이다. 아키텍처 특성의 개수에 연연하지 말고 가급적 설계를 단순화하는게 좋다.

대부분의 아키텍처 특성은 핵심 도메인 이해관계자들의 의견을 듣고 도메인 관점에서 무엇이 중요한지 의견을 교환하면서 정리된다. **여기서 문제는 아키텍트와 도메인 이해관계자들이 서로 다른 언어로 말을 한다는 것이다.** 예를 들어, 아키텍트는 확장성, 상호운용성, 내고장성, 학습성, 가용성을 운운하는데, 도메인 이해관계자는 인수 병합, 고객 만족, 출시 시점, 경쟁 우위를 논하는 식이다. 서로 말이 안 통하기 때문에 각자 상대방을 이해하기가 어렵다.

예를 들어, 도메인 이해관계자가 ‘당일 펀드 종가는 무슨 일이 있어도 제시간에 마감돼야 한다’는 요구사항을 제시했다고 가정해보자. 만약 이 말을 들은 아키텍처가 오로지 성능이 중요한 것이라 착각하고 성능에만 집중한다면 다음과 같은 이유로 실패할 것이다.

1.  필요한 시점에서 시스템을 사용할 수 없다면 얼마나 빠른 지는 중요하지 않다.
2.  도메인이 더 커지고 펀드가 많이 유입되면 제시간에 종가 계산을 마칠 수 있도록 시스템 규모를 확장할 수 있어야 한다.
3.  시스템은 가용성과 더불어 펀드 종가 계산 도중 시스템이 멎는 불상사가 생기지 않도록 안정성도 보장되어야 한다.
4.  펀드 종가 계산이 약 85% 완료된 상태에서 시스템이 다운되면? 즉시 시스템을 복구해서 가장 마지막에 펀드 종가가 계산된 시점부터 다시 실행해야 한다.
5.  시스템은 빠른 것도 중요하지만 펀드 종가는 정확하게 계산되어야 한다.

### 5.2 요구사항에서 아키텍처 특성 도출

예상 유저수와 그에 따른 확장 문제는 보통 도메인 관심사에서 빠지지 않는 단골 손님이다. 아키텍트가 알고 있는 도메인 지식에서 도출되는 특성들도 있는데, 이것이 아키텍트가 도메인 지식을 갖고 있으면 이로운 이유이다.

예를 들어, 어느 아키텍트가 대학교 학사 관리 시스템에서 수강 등록을 처리하는 어플리케이션을 설계한다고 가정하자. 계산 편의상, 총 학생 수는 1,000명이고 학생 일인 당 10시간의 수강 신청을 한다고 보면, 등록 기간 중 학생들의 시스템 이용 시간이 고루 분산되리라는 전제 하에 시스템 규모를 일정하게 설계해야 하는가? 아니면, 보통 대학생들의 성향과 습관에 대한 지식을 바탕으로 마감 10분 전부터 1,000명의 학생 모두가 수강 신청을 하려고 달려들어도 문제없는 시스템을 설계해야 하는가? 학생들의 성향을 안다면 답은 너무 쉽다


## **6.1 아키텍처 특성 측정**

아키텍처 특성을 정의할 때 흔히 다음과 같은 문제들이 발생한다.

-   물리학이 아니다 : 아키텍처 특성은 대부분 의미가 모호하다.
-   정의가 너무 다양하다 : 부서마다 정의를 통일하기 전까지는 원활한 소통이 어렵다.
-   너무 복합적이다 : 바람직한 아키텍처 특성은 대부분 더 작은 다른 여러 특성들로 구성된다.

**이 세가지 문제들은 아키텍처 특성을 객관적으로 정의하면 모두 해결된다.**


### **6.1.1 운영적 특성**

아키텍처 특성은 성능, 확장성처럼 비교적 정확하게 측정할 수 있는 것도 많지만, 팀 목표에 따라 그에 따른 해석은 미묘하게 갈릴 때가 많다. 예를 들어 특정 요청에 대한 평균 응답 시간을 측정할 경우, 어떤 경계 조건 때문에 1%의 요청이 다른 요청보다 처리 시간이 10배 오래 걸리면 어떻게 해야 할까? 사내 네트워크 리소스가 충분하다면 특이점(outlier)은 나타나지 않을 수 있으니 최대 응답 시간도 함께 측정해야 특이점까지 잡아낼 수 있을 것이다.

> 🙂 성능의 여러 가지 맛(flavor)  
>   
> 대부분의 프로젝트는 (웹 어플리케이션의 요청/응답 시간을 재는 것처럼) 일반적인 성능을 살펴보지만, 아키텍트와 데브옵스 엔지니어는 성능 예산을 책정하는 데 많은 작업을 한다.  
>   
> 예를 들어, 유저 행동 패턴을 분석한 결과 첫 페이지의 (브라우저 또는 모바일 기기에서 웹페이지가 뜨기 시작하는 가시적인 결과가 처음 나타나는) 렌더링 시간은 500ms, 즉 0.5s가 최적이라는 결론을 얻었다. 어플리케이션은 대부분 이 시간이 두 자리수 밀리초 정도지만, 가능한 많은 유저를 확보하려는 요즘 사이트에서 최초 렌더링 시간은 중요한 메트릭이므로 운영팀은 매우 섬세한 측정 체계를 구축했다.  
>   
> 많은 선도적인 회사들은 페이지 다운로드에 K-가중치 예산(K-weight budget, 특정 페이지에 허용된 라이브러리와 프레임워크의 최대 바이트 수)을 설정한다. 이것은 물리학의 제약조건에서 파생된 사상, 즉 한 번에 네트워크를 통해 이동할 수 있는 바이트 수는 제한적이라는 생각에 기반한다. 특히, 레이턴시가 상대적으로 큰 모바일 기기라면 더욱 그렇다.  
>   

**수준 높은 팀은 달성하기 어려운 성능 수치를 정하는 대신, 통계 분석 결과로 얻은 나름대로의 정의에 기반**한다. 예를 들어, 확장성을 모니터링하는 비디오 스트리밍 서비스 업체가 있다고 하자. 엔지니어는 아무 수치나 대충 목표로 삼는 것이 아니라, 시간에 따라 어떤 추이를 보이는지 측정하고 통계 모델을 수립한다. 그리고 실시간 수집한 메트릭이 예측 모델에서 벗어난 경우에는 알림 메시지를 보낸다. 만약 이 과정이 수포로 돌아간다면 원인은 모델 자체가 부정확했거나(팀이 알고 싶어하는 것), 뭔가가 잘못되었거나(역시 팀이 알고 싶어하는 것) 두 가지 중 하나이다.

도구가 발전하고 이해도가 높아지면서 팀이 측정할 수 있는 아키텍처 특성은 빠르게 진화하고 있다. 예를 들어 요즘은 `최초 콘텐츠 렌더링(First Contentful Paint)`과 `최초 CPU 유휴(First CPU idle)`같은 메트릭에 성능 예산을 집중해서 모바일 기기로 접속한 유저의 성능 문제를 비중있게 다루는 경우도 많다.



### **6.1.2 구조적 특성**

성능처럼 목표치가 확실하지 않은 메트릭도 있다. 잘 정의된 모듈성처럼 내부 구조에 관한 특성도 그렇다. 아직 내부 코드 품질에 대한 종합적인 메트릭은 없지만, 아키텍트는 다른 메트릭과 공통 도구를 이용해서 코드 구조에 관한 중요한 부분을 들여다 볼 수 있다.

코드의 복잡도는 `순환 복잡도(cyclomatic complexity, CC)`라는 메트릭을 통해 명쾌하게 측정할 수 있다. 순환 복잡도는 함수/메서드, 클래스, 또는 어플리케이션 레벨에서 코드 복잡도를 객관적으로 나타내는 지표이다. CC는 코드에 그래프 이론을 적용하여 계산한다. 좀 더 구체적으로 말하면, 상이한 실행 경로(execution path)를 유발하는 결정점(decision path)을 이용한다.

예를 들어, 어떤 함수에 (if문 같은) 결정문(decision statement)이 하나도 없다면, CC = 1 이고, 조건 분기가 하나 있으면, 실행 경로는 두 갈래로 갈라지므로 CC = 2이다. 하나의 함수나 메서드에서 CC를 구하는 공식은 CC = E - N + 2 이다. 여기서 N은 노드(node, 코드 라인), E는 간선(edge, 가능한 결정)입니다. 예제 코드는 다음과 같다. 서울 강남구 테헤란로 133 한국타이어빌딩

```
public void decision(int c1, int c2) {
    if (c1 < 100)
        return 0;
    else if (c1 + c2 > 500)
        return -1;
    else
        return 1;
}
```

예제 코드의 순환 복잡도를 구하면 5 - 4 + 2 = 3 이다.

![](https://blog.kakaocdn.net/dn/b5aJdG/btrA1AkmdnK/fygQrivXKkodHVzAZTwso0/img.jpg)

순환 복잡도 공식 끝부분에 있는 2는 단일 함수/메서드를 단순화 한 값이다. 다른 메서드도 호출하는 경우(그래프 이론에서는 연결된 컴포넌트라고 함)까지 고려한 일반 공식은 CC = E - N + 2P(P는 연결된 컴포넌트 수) 이다.

누군가가 적당한 CC 값이 얼마나 되냐고 물었을 때, 물론 정답은 경우에 따라 다르다. 문제 영역의 복잡도에 따라 달라진다. 알고리즘이 복잡한 문제는 그 솔루션에도 복잡한 함수가 많이 등장할 것이다. 함수가 복잡한 이유가 문제 영역 때문인가, 코딩 품질이 낮아서 그런 건가? 아니면 코드 분할이 제대로 안 돼서? 만약 그렇다면, 큰 메서드를 더 작은 로직 덩어리로 나누어 더 짜임새 있는 여러 메서드에 작업을 분배할 수는 없는지 살펴보아야 한다.

도메인 자체의 복잡도를 고려하지 않을 경우, 일반적으로 10 이하의 CC는 괜찮다고 보는 것이 업계 기준이지만, 우리는 이 임계치가 너무 높고 5 이하로 나와야 응집도가 괜찮은 짜임새 있는 코드라고 생각한다.

테스트 주도 개발(TDD) 같은 엔지니어링 프랙티스는 주어진 문제 영역에서 대체로 더 작고 덜 복잡한 메서드를 생성하는, 부수적인(그러나 긍정적인) 효과를 가져온다. TDD를 실천하는 개발자는 먼저 간단한 테스트를 작성한 다음, 테스트를 통과시키는 가장 적은 양의 코드를 작성하려고 한다. 이처럼 **구체적인 동작과 명확한 테스트 경계에 집중하면 짜임새 있고 고도로 응집된 메서드를 개발할 수 있으며 그 결과 CC 값도 낮게 나온다.**



### **6.1.3 프로세스 측정**

시험성은 거의 모든 플랫폼에서 테스트의 완전성을 평가하는 코드 커버리지 도구로 측정할 수 있다. 물론, 소프트웨어 체크가 다 그렇듯이 시험성도 사고(thinking)와 의도(intent)를 대체할 수 없다. 가령, 코드 커버리지는 100%로 나오지만, 코드의 정확성에 신뢰감을 부여하는 어설션(assertion)이 형편없는 코드베이스도 있다.

마찬가지로, 배포성 역시 실패 대비 배포 성공률(%), 배포 소요 시간, 배포 시 발생한 이슈/버그 등 다양한 메트릭으로 측정된다. 양과 질 모든 면에서 조직에 유용한 데이터를 포착할 수 있는 측정 세트는 각 팀별로 준비를 해야 하며 이렇게 측정한 메트릭은 실제로 대부분 팀의 우선순위, 목표가 된다.

민첩성과 이와 관련된 부분은 분명히 소프트웨어 개발 프로세스와 연관이 있지만, 이 프로세스는 아키텍처 구조에 영향을 미칠 수 있다. 예를 들어, 배포 용이성과 시험성이 최우선 항목이라면 아키텍트는 아키텍처 수준에서 모듈성, 격리성을 높이는데 주력한다.


## **6.2 거버넌스와 피트니스 함수**


### **6.2.1 아키텍처 특성 관리**

**아키텍처 거버넌스(architecture governance)는 아키텍트가 영향력을 행사하려는 모든 소프트웨어 개발 프로세스를 포괄**한다.


### **6.2.2 피트니스 함수**

개발자가 유전자 알고리즘을 설계하여 유익한 결과를 얻으려면 결과의 품질을 객관적으로 측정하면서 이 알고리즘을 통제할 수 있어야 한다. 이처럼 **결과가 목표에 얼마나 근접했는지를 나타내는 목표 함수가 피트니스 함수(fitness function)**이다.

예를 들어, 머신 러닝의 기초인 외판원 문제를 풀려는 개발자가 있다고 가정했을 때, 이 문제를 유전자 알고리즘으로 풀면 그냥 이동 경로의 거리를 계산해서 그 거리가 가장 짧은 최적 경로를 표시하는 피트니스 함수를 생각해 볼 수 있다. 아니면, 이동 경로에 발생하는 전체 비용을 최소화하는 피트니스 함수도 가능하고, 외판원이 떠난 시간을 계산해 전체 여행 시간을 줄이는 방법으로 최적화 하는 피트니스 함수도 있을 것이다.

아키텍처 피트니스 함수 : 어떤 아키텍처 특성(또는 그런 특성들의 조합)의 객관적인 무결성을 평가하는 모든 메커니즘

아래에서는 모듈성의 다양한 측면을 테스트하는 피트니스 함수를 소개한다.

#### **순환 의존성**

모듈성은 대부분의 아키텍트가 관심을 기울이는 암묵적인 아키텍처 특성이다. 모듈성이 제대로 유지되지 못하면, 코드베이스 구조에 해를 끼치므로 우선 순위를 높게 두어 관리할 수밖에 없다.

예를 들어, 자바나 닷넷 IDE에서 자동으로 참조할 클래스를 임포트 하게 하는 기능이 있는데, 이걸 자주 익숙하게 쓰다 보면, 자동 임포터 관성에 빠지게 된다. 이는 모듈성 관점에서 바라볼 때 좋지 않다.

![](https://blog.kakaocdn.net/dn/qWGbY/btrAZdQJonw/pQIPjMW0KTFKDVm83yTAP0/img.jpg)

위의 그림에서 각 컴포넌트는 다른 컴포넌트에 있는 코드를 참조한다. 이런 식으로 컴포넌트 망이 형성되면 개발자가 함께 가져와야 하므로 모듈성이 떨어진다. 또한 컴포넌트 간의 커플링이 증가할 수록 아키텍처는 점점 안티패턴으로 가게 된다. 이 문제는 아래 예제 코드처럼 피트니스 함수로 순환 참조 여부를 발견함으로써 해결할 수 있다.

```
public class CycleTest {
    private JDepend jdepend;

    @BeforeEach
    void init() {
        jdepend = new JDepend();
        jdepend.addDirectory("/path/to/project/persistence/classes");
        jdepend.addDirectory("/path/to/project/web/classes");
        jdepend.addDirectory("/path/to/project/thirdpartyjars");
    }

    @Test
    void testAllPackages() {
        Collection packages = jdepend.analyze();
        assertEquals("Cycles exist", false, jdepend.containsCycles());
    }
}
```

아키텍트는 JDepend라는 메트릭 도구로 패키지 간 의존성을 체크한다. 이 도구는 자바 패키지 구조를 알고 있고 순환 참조가 하나라도 존재하면 테스트는 실패한다. 아키텍트는 이 테스트를 프로젝트의 지속적 빌드의 일부로 장치함으로써 개발자 때문에 순환 참조가 발생하지 않을까, 하는 염려를 덜 수 있다.

#### **‘메인 시퀀스로부터의 거리' 피트니스 함수**

이전 챕터 3에서 다루었던 ‘메인 시퀀스의 거리' 메트릭도 피트니스 함수를 이용해 확인할 수 있다.

```
@Test
void AllPackages() {
    double ideal = 0.0;
    double tolerance = 0.5; // 프로젝트마다 값이 다름
    Collection packages = jdepend.analyze();
    Iterator iter = packages.iterator();
    while (iter.hasNext()) {
        JavaPackage p = (JavaPackage)iter.next();
        assertEquals("Distance exceeded: " + p.getName(), ideal, p.distance(), tolerance);
    }
}
```

위의 코드는 JDepend로 수용 가능한 임계치를 설정하고 클래스가 이 범위를 넘어가면 테스트를 실패처리하는 코드이다.

최근 수년 간 피트니스 함수 도구는 점점 더 정교해졌고 목적에 따라 특화된 것도 있다. JUnit에 영향을 받아 탄생한 ArchUnit은 JUnit 체계의 일부를 활용한 자바 테스트 프레임워크이다. ArchUnit은 단위 테스트로 코드화한 사전 정의된 거버넌스 규칙을 풍성하게 제공하므로, 아키텍트는 모듈성에 특화된 테스트를 작성할 수 있다.

![](https://blog.kakaocdn.net/dn/3wNna/btrAZdXvDV7/fmZkLlvNyybknh8hma6UT1/img.jpg)

위와 같은 레이어드 아키텍처(layered architecture)를 생각해 보자.

이 그림처럼 레이어드 모놀리스를 설계할 때, 아키텍트는 정당한 사유를 내세워 레이어를 정의하지만 이렇게 정의한 레이어를 개발자들이 과연 잘 지킬 수 있을까? 패턴의 중요성을 모르거나, 간과하는 개발자도 분명히 있을 것이다. 만약 구현하는 사람들이 아키텍처 근본을 침해해도 아무런 조치도 취하지 않으면 장기적으로 아키텍처의 건전성을 해치게 될 수가 있다.

이 문제는 ArchUnit 피트니스 함수로 해결할 수 있다. 아래 예제 코드는 레이어 간의 올바른 관계를 정의하고 이를 실천하는 검증 피트니스 함수 코드이다.(레이어 의존성을 확인)