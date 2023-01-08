document.addEventListener("DOMContentLoaded", function () {
  GreenAudioPlayer.init({
    selector: ".gap-example",
    stopOthersOnPlay: true,
    showDownloadButton: true,
    enableKeystrokes: true,
  });
});

function button25() {
  var lesson25 =
    "<div class='col-12 p-3 shad border bg-light'>\
      <div class='card card-body'>\
        <table class='table table-hover'>\
        <tr>\
          <td>Який ваш номер соціальної страхівки?</td>\
        <td>Wéi ass äer Matriculsnummer?</td>\
        </tr>\
          <tr>\
            <td>Мені потрібен ваш номер соціальної страхівки.</td>\
            <td>Ech brauch äer Matriculsnummer.</td>\
          </tr>\
          <tr>\
            <td>Мій номер соціальної страхівки 1970130512340.</td>\
            <td>Meng Matriculsnummer ass 1970130512340.</td>\
          </tr>\
          <tr>\
            <td>Мені потрібен номер вашого телефону.</td>\
            <td>Ech brauch äer Telefonsnummer.</td>\
          </tr>\
          <tr>\
            <td>Мій номер телефону +352 456789.</td>\
            <td>Meng Telefonsnummer ass +352 456789.</td>\
          </tr>\
          <tr>\
            <td>Котра година?</td>\
            <td>Wéi vill Auer ass et?</td>\
          </tr>\
          <tr>\
            <td>Скажіть, будь-ласка, котра година?</td>\
            <td>Kënnt Dir mir w.e.g. soën, wéi vill Auer et ass?</td>\
          </tr>\
          <tr>\
            <td>Зараз 13:45.</td>\
            <td>\
              Et ass elo dräizéng Auer fënnefanvéierzeg (Véierel vir zwou).\
            </td>\
          </tr>\
          <tr>\
            <td>Зараз 8:25.</td>\
            <td>\
              Et ass elo aacht Auer fënnefanzwanzeg (fënnef vir Hallwer néng).\
            </td>\
          </tr>\
          <tr>\
            <td>Зараз 20:10.</td>\
            <td>Et ass elo zéng op aacht.</td>\
          </tr>\
          <tr>\
            <td>Зараз чверть на десяту.</td>\
            <td>Et ass elo Véierel op néng.</td>\
          </tr>\
          <tr>\
            <td>Зараз пів на десяту.</td>\
            <td>Et ass elo Hallwer zéng.</td>\
          </tr>\
          <tr>\
            <td>Зараз за 15 десята.</td>\
            <td>Et ass elo Véierel vir zéng.</td>\
          </tr>\
        </table>\
      </div>\
    </div>";
  if (document.documentElement.clientWidth > 992) {
    document.getElementById("lesson25_3").innerHTML = lesson25;
    $("#lesson25_3").slideToggle("slow");
  } else if (
    document.documentElement.clientWidth > 768 &&
    document.documentElement.clientWidth < 992
  ) {
    document.getElementById("lesson25_2").innerHTML = lesson25;
    $("#lesson25_2").slideToggle("slow");
  } else if (document.documentElement.clientWidth < 768) {
    document.getElementById("lesson25_1").innerHTML = lesson25;
    $("#lesson25_1").slideToggle("slow");
  }
}

function button26() {
  var lesson26 =
    "<div class='col-12 p-3 shad border bg-light'>\
      <div class='card card-body'>\
        <table class='table table-hover'>\
        <tr>\
        <td>О котрій годині ми зустрінемося?</td>\
        <td>Um wéi vill Auer treffen mir ons?</td>\
      </tr>\
      <tr>\
        <td>\
          Скажіть, будь-ласка, о котрій годині ми можемо зустрітися?\
        </td>\
        <td>\
          Kënnt Dir mir w.e.g. soën, um wéi vill Auer mir ons\
          treffen?\
        </td>\
      </tr>\
      <tr>\
        <td>В який день ми можемо зустрітися?</td>\
        <td>Watfireen Dag kënnen mir ons treffen?</td>\
      </tr>\
      <tr>\
        <td>Коли саме я можу до тебе підійти?</td>\
        <td>Wéini genau kann ech bei Dir laanscht kommen?</td>\
      </tr>\
      <tr>\
        <td>Ми зустрінемося у вівторок, 5 березня, о 17:25.</td>\
        <td>\
          Mir treffen ons den Dënschdeg, 5. Mäerz, ëm siwwinzéng\
          Auer fënnefanzwanzeg.\
        </td>\
      </tr>\
      <tr>\
        <td>Правильно?</td>\
        <td>Richteg?</td>\
      </tr>\
      <tr>\
        <td>\
          Вибач, я не впевнена, коли ми запланували зустрітися.\
        </td>\
        <td>\
          Et deet mer leed, ech sin mir nët secher, wéini mir ons\
          treffen wollten.\
        </td>\
      </tr>\
      <tr>\
        <td>Нагадай мені о котрій годині ми зустрічаємося.</td>\
        <td>\
          Erënner mech drun, em wéi vill Auer mir ons treffen\
          sollten.\
        </td>\
      </tr>\
      <tr>\
        <td>Я вільна починаючи з 17:00.</td>\
        <td>Ech hun vun fënnef Auer un fräi.</td>\
      </tr>\
      <tr>\
        <td>Коли ти вільний?</td>\
        <td>Wéini hues Du fräi?</td>\
      </tr>\
      <tr>\
        <td>Які дні в тебе вихідні?</td>\
        <td>Watfir Deeg hues Du fräi?</td>\
      </tr>\
      <tr>\
        <td>О котрій годині в тебе обідня перерва?</td>\
        <td>Em wéi vill Auer hues Du Mëttespaus?</td>\
        </table>\
      </div>\
    </div>";
  if (document.documentElement.clientWidth > 992) {
    document.getElementById("lesson26_3").innerHTML = lesson26;
    $("#lesson26_3").slideToggle("slow");
  } else {
    document.getElementById("lesson26_2").innerHTML = lesson26;
    $("#lesson26_2").slideToggle("slow");
  }
}

function button28() {
  var lesson28 =
    "<div class='col-12 p-3 shad border bg-light'>\
  <div class='card card-body'>\
    <table class='table table-hover'>\
    <tr><td>Мені потрібно зустрітися з Вами.</td>\
                    <td>Ech muss lech gesin.</td></tr>\
                  <tr><td>Коли у вас є можливість?</td>\
                    <td>Wéini geet et lech?</td></tr>\
                  <tr><td>В цей час я завжди зайнятий.</td>\
                    <td>Em des Zäit sin ech ëmmer beschäftegt.</td></tr>\
                  <tr><td>Можна пізніше?</td>\
                    <td>Geet et méi spéit?</td></tr>\
                  <tr>\
                    <td>\
                      Я повинен до вас підійти, щоб обговорити деякі деталі.\
                    </td>\
                    <td>\
                      Ech muss bei lech laanscht kommen fir e puer Detailer ze\
                      klären.\
                    </td>\
                  </tr>\
                  <tr>\
                    <td>\
                      Вибачте, у мене є декілька важливих питань щодо роботи.\
                    </td>\
                    <td>\
                      Entschëllegt, ech hun e puer wichteg Froen wat d'Aarbecht\
                      ugeet.\
                    </td>\
                  </tr>\
                  <tr>\
                    <td>О котрій годині відкривається ваш кабінет?</td>\
                    <td>Em wéi vill Auer mécht Aeren Büro op?</td>\
                  </tr>\
                  <tr>\
                    <td>Ви працюєтe до котрої години?</td>\
                    <td>Bis wéi vill Auer schafft Dir?</td>\
                  </tr>\
                  <tr>\
                    <td>Чи можу я просто прийти до вас без запису?</td>\
                    <td>Däerf ech ouni en RdV bei lech laanscht kommen?</td>\
                  </tr>\
                  <tr>\
                    <td>Можна прийти, коли мені зручно?</td>\
                    <td>Kann ech laanscht kommen wann et mit geet?</td>\
                  </tr>\
                  <tr>\
                    <td>Підходьте, коли вам зручно.</td>\
                    <td>Kommt, wann et lech am Beschten geet.</td>\
                  </tr>\
                  <tr>\
                    <td>Це не проблема.</td>\
                    <td>Et ass keen Problem.</td>\
                  </tr>\
                  <tr>\
                    <td>Вам підходить середа, 5 лютого о 15:10?</td>\
                    <td>\
                      Geet et lech den Mëttwoch, den Fënneften Februar em\
                      fofzéng Auer zéng?\
                    </td>\
                  </tr>\
                  <tr>\
                    <td>Підходить, я буду.</td>\
                    <td>Et geet, ech sin do.</td>\
                  </tr>\
                  <tr>\
                    <td>Вибачте, я повинен анулювати домовлену зустріч.</td>\
                    <td>\
                      Et deet mer leed, mais ech muss onsen RdV annuléieren.\
                    </td>\
                  </tr>\
                  <tr><td>В мене сталося щось непередбачуване.</td>\
                    <td>Mir ass eppes dotëschent komm.</td></tr>\
                  <tr><td>Давайте домовимося про нову зустріч.</td><td>Loost ons en neien RdV ausmaachen.</td>\
                  </tr> </table>\
      </div></div>";

  if (document.documentElement.clientWidth > 992) {
    document.getElementById("lesson28_3").innerHTML = lesson28;
    $("#lesson28_3").slideToggle("slow");
  } else {
    document.getElementById("lesson28_1").innerHTML = lesson28;
    $("#lesson28_1").slideToggle("slow");
  }
}
function button29() {
  var lesson29 =
    "<div class='col-12 p-3 shad border bg-light'>\
  <div class='card card-body'>\
    <table class='table table-hover'>\
    <tr>\
    <td>Я хочу записатись на прийом до лікаря Мюллера.</td>\
    <td>Ech hätt gären en RdV beim Dokter Müller.</td>\
  </tr>\
  <tr>\
    <td>Коли у лікаря наступний вільний прийом?</td>\
    <td>Wéini huet den Dokter den nächsten fräien RdV?</td>\
  </tr>\
  <tr>\
    <td>Коли вам найкраще підходить?</td>\
    <td>Wéini geet et lech am Beschten?</td>\
  </tr>\
  <tr>\
    <td>Мені підходить найкраще щосереди після обіду.</td>\
    <td>Mir geet et am Beschten mëttwochs am Nomëtteg.</td>\
  </tr>\
  <tr>\
    <td>Я вільний щодня після 16:00.</td>\
    <td>Ech sin all Daag no véier Auer disponibel.</td>\
  </tr>\
  <tr>\
    <td>Наступний вільний прийом у лікаря у січні.</td>\
    <td>Den nächsten fräien RdV beim Dokter ass am Januar.</td>\
  </tr>\
  <tr>\
    <td>Я повинен терміново прийти до лікаря.</td>\
    <td>Ech muss drengend bei den Dokter.</td>\
  </tr>\
  <tr>\
    <td>Це терміново.</td>\
    <td>Et ass drengend.</td>\
  </tr>\
  <tr>\
    <td>Це не терміново.</td>\
    <td>Et ass nët drengend.</td>\
  </tr>\
  <tr>\
    <td>Я можу почекати.</td>\
    <td>Ech kann waarden.</td>\
  </tr>\
  <tr>\
    <td>Вибачте, я не можу так довго чекати.</td>\
    <td>Entschëllegt, ech kann nët esou laang waarden.</td>\
  </tr>\
  <tr>\
    <td>Може є можливість підійти раніше?</td>\
    <td>\
      Get et eng Méiglechkeet fir méi fréi un d'Rei ze kommen?\
    </td>\
  </tr>\
  <tr>\
    <td>\
      Повторіть, будь-ласка, коли я записана на прийом до лікаря\
      Мюллера.\
    </td>\
    <td>\
      Widderhuelt w.e.g. wéini ech den RdV beim Dokter Müller hun.\
    </td>\
  </tr>\
  <tr>\
    <td>За якою адресою знаходиться кабінет лікаря Мюллера?</td>\
    <td>Wéi ass D'Adress vum Dokter Müller senger Praxis?</td>\
  </tr>\
  <tr>\
    <td>Адреса вашого кабінету вулиця Гранд 15?</td>\
    <td>Ass d'Praxis op 15, Grand rue?</td>\
  </tr>\
  <tr>\
    <td>Це правильно?</td>\
    <td>Ass daat richteg?</td>\
  </tr>\
  <tr>\
    <td>Продиктуйте вашу адресу.</td>\
    <td>Diktéiert Äer Adress.</td>\
  </tr>\
  <tr>\
    <td>Де ви живете?</td>\
    <td>Wou wunnt Dir?</td>\
  </tr>\
  <tr>\
    <td>Мені потрібна ваша адреса.</td>\
    <td>Ech brauch Äer Adress.</td>\
  </tr>\
  <tr>\
    <td>Моя адреса вулиця Мулін 5.</td>\
    <td>Meing Adress ass 5, rue du Moulin Bereldange.</td>\
  </tr>\
  <tr>\
    <td>Чи змінилась ваша адреса?</td>\
    <td>Huet Äer Adress sech geännert?</td>\
  </tr>\
  <tr>\
    <td>У мене та сама адреса.</td>\
    <td>Ech hun nach déi selwecht Adress.</td>\
  </tr>\
  <tr>\
    <td>Чи змінився ваш номер телефону?</td>\
    <td>Huet sech Äer Telefonsnummer geäennert?</td>\
  </tr>\
  <tr>\
    <td>В мене новий номер телефону 621 123 456.</td>\
    <td>Ech hun eng nei Telefonsnummer 621 123 456.</td>\
  </tr>\
    </table>\
      </div></div>";

  if (document.documentElement.clientWidth > 768) {
    document.getElementById("lesson29_3").innerHTML = lesson29;
    $("#lesson29_3").slideToggle("slow");
  } else {
    document.getElementById("lesson29_1").innerHTML = lesson29;
    $("#lesson29_1").slideToggle("slow");
  }
}

$(document).ready(function () {
  $("#button30").click(function () {
    $("#lesson30").slideToggle("slow");
  });
});
