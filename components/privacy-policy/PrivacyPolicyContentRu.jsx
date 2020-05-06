import React from 'react'
import translate from '../../utils/translate-wrapper'
import styled from '@emotion/styled'
import common_styles_for_policy_pages from './PrivacyPolicy.styles'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import Grid from '../ui-kit/core-design/Grid'

const PrivacyPolicyContentRu = ({ className, t }) => (
  <Grid className={className} as="article">
    <header className="header">
      <h1
        className="title font_h1-regular"
        dangerouslySetInnerHTML={{ __html: t('privacyPolicy:title') }}
      />
      <p className="date font_subhead-regular">{t('privacyPolicy:date')}</p>
    </header>

    <div className="content">
      <p className="description font_p24-strong">
        Настоящая Политика конфиденциальности персональных данных (далее&nbsp;&mdash; Политика
        конфиденциальности) действует в&nbsp;отношении всех персональных данных, которые Общество
        с&nbsp;ограниченной ответственностью &laquo;Компани Нейм&raquo; (ИНН 5056011973),
        расположенное по&nbsp;адресу: 140090, Московская область, г. Дзержинский, ул. Лесная,
        д.&nbsp;30&nbsp;стр.&nbsp;1, офис &#8470;&nbsp;303, именуемое в&nbsp;дальнейшем
        &laquo;CSSSR&raquo;, может получить о&nbsp;Пользователе во&nbsp;время использования
        им&nbsp;официального сайта CSSSR&nbsp;&mdash;{' '}
        <a href="https://csssr.com/" className="font_link-list_24">
          csssr.com
        </a>{' '}
        (далее&nbsp;&mdash; Сайт), в&nbsp;частности в&nbsp;результате отправки формы заявки
        на&nbsp;выполнение работ, отклика на&nbsp;вакансию, участия в&nbsp;рекламных
        и&nbsp;маркетинговых кампаниях или акциях и/или ином взаимодействии (далее&nbsp;&mdash;
        Услуги).
      </p>

      <section>
        <h3 className="font_h2-regular list-item list-item_level_1" data-counter="1.">
          Термины и&nbsp;определения
        </h3>

        <p className="font_p16-regular list-item list-item_level_2" data-counter="1.1.">
          В&nbsp;настоящей Политике конфиденциальности используются следующие термины:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="1.1.1.">
          &laquo;Персональные данные&raquo;&nbsp;&mdash; любая информация, относящаяся к&nbsp;прямо
          или косвенно определенному или определяемому физическому лицу (субъекту персональных
          данных), которую пользователь предоставляет о&nbsp;себе самостоятельно в&nbsp;процессе
          пользования Услугами.
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="1.1.2.">
          &laquo;Конфиденциальность персональных данных&raquo;&nbsp;&mdash; обязательное для
          соблюдения CSSSR или иным получившим доступ к&nbsp;персональным данным лицом требование
          не&nbsp;допускать их&nbsp;распространения без согласия субъекта персональных данных или
          наличия иного законного основания.
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="1.1.3.">
          &laquo;Обработка персональных данных&raquo;&nbsp;&mdash; любое действие (операция) или
          совокупность действий (операций), совершаемых с&nbsp;использованием средств автоматизации
          или без использования таких средств с&nbsp;персональными данными, включая сбор, запись,
          систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение,
          использование, передачу (распространение, предоставление, доступ), обезличивание,
          блокирование, удаление, уничтожение персональных данных.
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="1.1.4.">
          &laquo;Пользователь&raquo;&nbsp;&mdash; дееспособное физическое лицо, достигшее
          18&nbsp;лет, имеющее доступ к&nbsp;Сайту Сайт в&nbsp;собственных интересах, или
          в&nbsp;интересах представляемого юридического лица.
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="1.1.5.">
          &laquo;Файлы Cookies&raquo;&nbsp;&mdash; небольшой фрагмент данных, отправленный
          веб-сервером и&nbsp;хранимый на&nbsp;компьютере пользователя, который веб-клиент или
          веб-браузер каждый раз пересылает веб-серверу в&nbsp;НТТР-запросе при попытке открыть
          страницу соответствующего сайта.
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="1.1.6.">
          &laquo;IР-адрес&raquo;&nbsp;&mdash; уникальный сетевой адрес узла в&nbsp;компьютерной
          сети, построенной по&nbsp;протоколу IP.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="1.2.">
          В&nbsp;настоящей Политике конфиденциальности могут быть использованы термины
          и&nbsp;определения, не&nbsp;указанные в&nbsp;п.&nbsp;1.1. В&nbsp;случае отсутствия
          однозначного толкования термина или определения в&nbsp;тексте Политики конфиденциальности
          следует руководствоваться его толкованием, определенным: в&nbsp;первую
          очередь&nbsp;&mdash; законодательством Российской Федерации,
          и&nbsp;в&nbsp;последующем&nbsp;&mdash; обычаями делового оборота и&nbsp;научной доктриной.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular list-item list-item_level_1" data-counter="2.">
          Общие положения
        </h3>

        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.1.">
          Настоящая Политика конфиденциальности применяется только к&nbsp;информации, получаемой
          в&nbsp;ходе использования сайта с&nbsp;доменным именем{' '}
          <a href="https://csssr.com/" className="font_link-list_16">
            https://csssr.com/
          </a>
          .
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.2.">
          CSSSR не&nbsp;проверяет достоверность персональных данных, предоставляемых Пользователями
          Сайта.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.3.">
          Заполняя формы и&nbsp;отправляя любые формы, расположенные на&nbsp;страницах Сайта,
          а&nbsp;равно указывая свои персональные данные при использовании других сервисов Сайта,
          пользователь выражает согласие с&nbsp;настоящей Политикой конфиденциальности
          и&nbsp;указанными в&nbsp;ней условиями обработки и&nbsp;передачи его персональных данных.
          Согласие Пользователя на&nbsp;предоставление, обработку и&nbsp;передачу его Персональных
          данных CSSSR в&nbsp;соответствии с&nbsp;Политикой является полным и&nbsp;безусловным.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.4.">
          Согласие, даваемое Пользователем, включает в&nbsp;себя согласие на&nbsp;сбор,
          систематизацию, накопление, хранение, уточнение (обновление, изменение), использование,
          трансграничную передачу, блокирование, обезличивание, уничтожение, передачу персональных
          данных внутри CSSSR в&nbsp;целях возможного делового взаимодействия и&nbsp;сотрудничества
          с&nbsp;CSSSR и/или третьими лицами. CSSSR вправе по&nbsp;своему усмотрению передавать
          персональные данные Пользователя любым третьим лицам с&nbsp;целью возможного
          трудоустройства данного Пользователя.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.5.">
          Согласие, даваемое Пользователем, распространяется на&nbsp;следующие персональные данные:
          фамилия, имя и&nbsp;отчество, город проживания, контактный телефон, адрес электронной
          почты (e-mail), логин Skype, а&nbsp;также любая иная информация, предоставленная
          Пользователем на&nbsp;его усмотрение.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.6.">
          CSSSR не&nbsp;контролирует и&nbsp;не&nbsp;несет ответственность за&nbsp;сайты третьих лиц,
          на&nbsp;которые Пользователь может перейти по&nbsp;ссылкам, доступным на&nbsp;сайте CSSSR.
          На&nbsp;сайтах третьих лиц может быть собственная политика конфиденциальности
          и&nbsp;у&nbsp;Пользователя могут собираться или запрашиваться иные персональные данные.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.7.">
          Персональные данные Пользователя, предоставленные CSSSR, считаются неподтвержденными
          и&nbsp;могут быть блокированы до&nbsp;момента получения от&nbsp;пользователя или его
          законного представителя согласия на&nbsp;обработку персональных данных пользователя
          в&nbsp;любой не&nbsp;противоречащей закону форме, помимо той, которая предусмотрена
          на&nbsp;Сайте.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="2.8.">
          Посетителям Сайта следует воздержаться от&nbsp;пользования Услугами Сайта, в&nbsp;случае
          несогласия (полного или частичного) с&nbsp;Политикой конфиденциальности, а&nbsp;равно
          несогласия предоставить персональные данные.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular list-item list-item_level_1" data-counter="3.">
          Предмет Политики конфиденциальности
        </h3>

        <p className="font_p16-regular list-item list-item_level_2" data-counter="3.1.">
          Настоящая Политика конфиденциальности устанавливает обязанности Администрации сайта
          по&nbsp;обработке Персональных данных пользователей, их&nbsp;охране, в&nbsp;том числе
          обеспечению режима защиты конфиденциальности Персональных данных, которые Пользователь
          предоставляет Администрации сайта в&nbsp;следующих случаях:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.1.1.">
          при заполнении формы заявки на&nbsp;выполнение работ;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.1.2.">
          при заполнении формы отклика на&nbsp;вакансию.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="3.2.">
          CSSSR собирает два вида информации о&nbsp;Пользователе:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.2.1.">
          информацию, которую Пользователь сознательно предоставил CSSSR в&nbsp;процессе
          использования Сайта;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.2.2.">
          техническую информацию, автоматически собираемую программным обеспечением Сайта
          во&nbsp;время его посещения Пользователем.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="3.3.">
          Персональные данные предоставляются Пользователем при направлении в&nbsp;адрес CSSSR
          заявки на&nbsp;выполнение работ и&nbsp;включают в&nbsp;себя следующие сведения:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.3.1.">
          имя;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.3.2.">
          контактные данные для связи (адрес электронной почты, логин в&nbsp;коммуникационной
          программе Skype, телефон).
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="3.4.">
          Персональные данные предоставляются Пользователем при направлении в&nbsp;адрес CSSSR
          отклика на&nbsp;вакансию и&nbsp;включают в&nbsp;себя следующие сведения:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.4.1.">
          фамилия, имя;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.4.2.">
          возраст;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.4.3.">
          место проживания (город, населённый пункт);
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.4.4.">
          ссылки на&nbsp;страницы профиля на&nbsp;других сайтах и&nbsp;интернет-сервисах;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.4.5.">
          контактные данные для связи (адрес электронной почты, логин в&nbsp;коммуникационной
          программе Skype, логин Telegram, телефон)
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.4.6.">
          любая иная информация, предоставленная Пользователем по&nbsp;его желанию.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="3.5.">
          Техническая информация, автоматически собираемая программным обеспечением Сайта
          во&nbsp;время его посещения Пользователем, включает:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.5.1.">
          IP-адрес;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.5.2.">
          информацию из&nbsp;cookies;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.5.3.">
          информацию о&nbsp;браузере;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.5.4.">
          информация о&nbsp;типе устройства (мобильное или&nbsp;ПК);
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.5.5.">
          время доступа.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="3.6.">
          В&nbsp;отношении персональных данных Пользователя сохраняется конфиденциальность, кроме
          случаев обработки персональных данных, доступ неограниченного круга лиц к&nbsp;которым
          предоставлен Пользователем либо по&nbsp;его просьбе.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="3.7.">
          CSSSR гарантирует, что никогда не&nbsp;предоставляет Персональные данные третьим лицам,
          за&nbsp;исключением случаев, когда:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.7.1.">
          этого прямо требует законодательство (например, по&nbsp;письменному запросу суда,
          правоохранительных органов);
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.7.2.">
          пользователь дал согласие на&nbsp;передачу персональных данных;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="3.7.3.">
          передача персональных данных производится в&nbsp;целях возможного трудоустройства
          конкретного Пользователя.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular list-item list-item_level_1" data-counter="4.">
          Цели обработки персональных данных
        </h3>

        <p className="font_p16-regular list-item list-item_level_2" data-counter="4.1.">
          Персональные данные CSSSR может использовать в&nbsp;целях:
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="4.1.1.">
          установления с&nbsp;Пользователем обратной связи, включая направление уведомлений,
          запросов, касающихся выполнения работ, а&nbsp;также возможного делового сотрудничества
          и/или трудоустройства;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="4.1.2.">
          оценки способности Пользователя работать на&nbsp;заявленной им&nbsp;должности;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="4.1.3.">
          проведения статистических и&nbsp;иных исследований на&nbsp;основе обезличенных данных;
        </p>
        <p className="font_p16-regular list-item list-item_level_3" data-counter="4.1.4.">
          предоставления Пользователю эффективной клиентской и&nbsp;технической поддержки при
          возникновении проблем связанных с&nbsp;использованием Cайта.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular list-item list-item_level_1" data-counter="5.">
          Условия обработки персональных данных
        </h3>

        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.1.">
          Обработка персональных данных Пользователя осуществляется до&nbsp;достижения цели
          обработки Персональных данных, любым законным способом, в&nbsp;том числе
          в&nbsp;информационных системах персональных данных с&nbsp;использованием средств
          автоматизации или без использования таких средств.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.2.">
          Персональные данные Пользователя могут быть переданы уполномоченным органам
          государственной власти Российской Федерации только по&nbsp;основаниям
          и&nbsp;в&nbsp;порядке, установленным законодательством Российской Федерации.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.3.">
          CSSSR принимает необходимые организационные и&nbsp;технические меры для защиты
          персональной информации пользователя от&nbsp;неправомерного или случайного доступа,
          уничтожения, изменения, блокирования, копирования, распространения, а&nbsp;также
          от&nbsp;иных неправомерных действий третьих лиц.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.4.">
          CSSSR совместно с&nbsp;Пользователем принимает все необходимые меры по&nbsp;предотвращению
          убытков или иных отрицательных последствий, вызванных утратой или разглашением
          персональных данных пользователя.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.5.">
          Пользователь вправе в&nbsp;любой момент изменить (обновить, дополнить, блокировать,
          уничтожить) предоставленную им&nbsp;персональную информацию или её&nbsp;часть,
          а&nbsp;также параметры её&nbsp;конфиденциальности путем обращения в&nbsp;CSSSR.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.6.">
          Пользователь вправе в&nbsp;любой момент отозвать согласие на&nbsp;обработку Компанией
          персональных данных путём направления письменного уведомления на&nbsp;электронный адрес:{' '}
          <a href="mailto:privacy@csssr.com" className="font_link-list_16">
            privacy@csssr.com
          </a>{' '}
          с&nbsp;пометкой &laquo;отзыв согласия на&nbsp;обработку персональных данных&raquo;.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.7.">
          Пользователь имеет право на&nbsp;получение информации, касающейся обработки его
          персональных данных CSSSR.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="5.8.">
          Для исполнения положений в&nbsp;п.&nbsp;5.5., 5.6. и&nbsp;5.7. настоящей Политики CSSSR
          вправе потребовать подтвердить личность Пользователя, затребовав предоставления такого
          подтверждения в&nbsp;любой не&nbsp;противоречащей закону форме.
        </p>
      </section>

      <section>
        <h3 className="font_h2-regular list-item list-item_level_1" data-counter="6.">
          Дополнительные условия
        </h3>

        <p className="font_p16-regular list-item list-item_level_2" data-counter="6.1.">
          CSSSR вправе вносить изменения в&nbsp;настоящую Политику конфиденциальности без согласия
          Пользователя.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="6.2.">
          Новая Политики конфиденциальности вступает в&nbsp;силу с&nbsp;момента ее&nbsp;размещения
          на&nbsp;Сайте, если иное не&nbsp;предусмотрено новой редакцией Политики
          конфиденциальности.
        </p>
        <p className="font_p16-regular list-item list-item_level_2" data-counter="6.3.">
          Действующая Политика конфиденциальности размещена на&nbsp;Сайте по&nbsp;адресу{' '}
          <a href="https://csssr.com/ru/privacy-policy" className="font_link-list_16">
            https://csssr.com/ru/privacy-policy
          </a>
          .
        </p>
      </section>
    </div>
  </Grid>
)

export default translate(
  MsBrowserConsumer(styled(PrivacyPolicyContentRu)`
    ${common_styles_for_policy_pages}
  `),
)
