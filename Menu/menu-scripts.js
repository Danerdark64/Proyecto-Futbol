const alineacionSelect = document.getElementById('alineacion');



const playerSelect = document.querySelector('.players-select');
const ali_433 = document.querySelector('.ali433');
const ali_cancha = document.querySelector('#cancha');


function cambiarAlineacion() {
  playerSelect.style.display = 'block';
  console.log(alineacionSelect.value);

  if (alineacionSelect.value === '433') {
    ali_433.innerHTML = '';
    ali_cancha.innerHTML = '';
    alinear_433_cancha();
    alinear_433();
    console.log(ali_cancha.innerHTML);
  } else if (alineacionSelect.value === '442') {
    ali_433.innerHTML = '';
    ali_cancha.innerHTML = '';
    alinear_442_cancha();
    alinear_442();
  } else if (alineacionSelect.value === '451') {
    ali_433.innerHTML = '';
    ali_cancha.innerHTML = '';
    alinear_451_cancha();
    alinear_451();
  } else if (alineacionSelect.value === '343') {
    ali_433.innerHTML = '';
    ali_cancha.innerHTML = '';
    alinear_343_cancha();
    alinear_343();
  }
}

function alinear_433() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 po justify-content-end align-items-end text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<label for="portero">Portero:</label><br>' +
        '<select name="portero" id="po_433" onchange="addImg(this)">' +
        '<option value="" disabled selected> Seleccione</option>' +
        '<option value="icono_buffon"> BUFFON</option>' +
        '<option value="icono_martinez"> E. MARTINEZ</option>' +
        '<option value="icono_neuer"> M. NEUER</option>' +
        '<option value="icono_stegen"> M. TER STEGEN</option>' +
        '<option value="icono_gea"> DE GEA</option>' +
        '<option value="icono_vander"> E. VAN DER SAR </option>' +
        '<option value="icono_Yashin"> L. YASHIN </option>' +
        '<option value="icono_kahn"> O. KAHN </option>' +
        '</select>';

      ali_433.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '4') {
        for (var j = 1; j <= 4; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfd justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFD:</label><br>' +
              '<select name="portero" id="dfd_433" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_arnold"> T. ARNOLD</option>' +
              '<option value="icono_carvajal"> D. CARVAJAL</option>' +
              '<option value="icono_cancelo"> J. CANCELO</option>' +
              '<option value="icono_trippier"> K. TRIPPIER</option>' +
              '<option value="icono_hakimi"> A. HAKIMI</option>' +
              '<option value="icono_lahm"> P. LAHM </option>' +
              '<option value="icono_cafu"> CAFU </option>' +
              '<option value="icono_zanetti"> ZANETTI </option>' +
              '<option value="icono_alves"> D. ALVES </option>' +
              '<option value="icono_alberto"> C. ALBERTO </option>' +
              '</select>';

          } else if (j === 2 || j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfc justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFC:</label><br>' +
              '<select name="portero" id="dfc_433_'+j+'" onchange="addImg(this)">' +
              '<option value=""  disabled selected > Seleccione</option>' +
              '<option value="icono_ramos"> S. RAMOS</option>' +
              '<option value="icono_araujo"> R. ARAUJO</option>' +
              '<option value="icono_dijk"> V. DIJK</option>' +
              '<option value="icono_militao"> E. MILITAO</option>' +
              '<option value="icono_delight"> K. TRIPPIER</option>' +
              '<option value="icono_puyol"> C. PUYOL </option>' +
              '<option value="icono_baresi"> F. BARESI </option>' +
              '<option value="icono_beckenbauer"> F. BECKENBAUER </option>' +
              '<option value="icono_passarella"> D. PASSARELLA </option>' +
              '<option value="icono_figueroa"> E. FIGUEROA </option>' +
              '</select>';

          } else if (j === 4) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfi justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
               '<label for="dfd">DFI:</label><br>' +
              '<select name="portero" id="dfi_433" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_maldini"> P. MALDINI </option>' +
              '<option value="icono_alba"> J. ALBA </option>' +
              '<option value="icono_marcelo"> MARCELO </option>' +
              '<option value="icono_balde"> A. BALDÉ</option>' +
              '<option value="icono_pervis"> P. ESTUPIÑAN </option>' +
              '<option value="icono_roberto"> R. CARLOS </option>' +
              '<option value="icono_valencia"> A. VALENCIA </option>' +
              '<option value="icono_cabrini"> A. CABRINI </option>' +
              '<option value="icono_facchetti"> G. FACCHETTI </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }

    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '3') {
        for (var k = 1; k <= 1; k++) {
          div_boot = document.createElement("div");
          div_boot.setAttribute("class", 'col-md-12 mcd justify-content-end align-items-end text-center');
          div_row.append(div_boot);
          div_boot.innerHTML +=
            '<label for="portero">MCD:</label><br>' +
            '<select name="portero" id="mcd_433" onchange="addImg(this)">' +
            '<option value=""  disabled selected> Seleccione</option>' +
            '<option value="icono_casemiro"> CASEMIRO </option>' +
            '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
            '<option value="icono_kovacic"> M. KOVACIC </option>' +
            '<option value="icono_rijkaard"> F. RIJKAARD </option>' +
            '<option value="icono_xavi"> XAVI H. </option>' +
            '<option value="icono_pirlo"> A. PIRLO </option>' +
            '<option value="icono_busquets"> S. BUSQUETS </option>' +
            '<option value="icono_modric"> L. MODRIC </option>' +
            '</select>';
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '3') {
        for (var l = 1; l <= 2; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 md justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MD:</label><br>' +
              '<select name="portero" id="md_433" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_pedri"> PEDRI </option>' +
              '<option value="icono_reus"> M. REUS </option>' +
              '<option value="icono_muller"> T. MULLER </option>' +
              '<option value="icono_fernandez"> E. FERNANDEZ </option>' +
              '<option value="icono_gundogan"> I. GUNDOGAN </option>' +
              '<option value="icono_gullit"> R. GULLIT </option>' +
              '<option value="icono_iniesta"> A. INIESTA </option>' +
              '<option value="icono_zico"> ZICO </option>' +
              '<option value="icono_zinedine"> Z. ZIDANE </option>' +
              '<option value="icono_maradona"> D. MARADONA </option>' +
              '</select>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mi justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MI:</label><br>' +
              '<select name="portero" id="mi_433" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_pedri"> PEDRI </option>' +
              '<option value="icono_reus"> M. REUS </option>' +
              '<option value="icono_muller"> T. MULLER </option>' +
              '<option value="icono_fernandez"> E. FERNANDEZ </option>' +
              '<option value="icono_gundogan"> I. GUNDOGAN </option>' +
              '<option value="icono_gullit"> R. GULLIT </option>' +
              '<option value="icono_iniesta"> A. INIESTA </option>' +
              '<option value="icono_zico"> ZICO </option>' +
              '<option value="icono_zinedine"> Z. ZIDANE </option>' +
              '<option value="icono_maradona"> D. MARADONA </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '3') {
        for (var m = 1; m <= 3; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 dd justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">ED:</label><br>' +
              '<select name="portero" id="ed_433" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_messi"> L. MESSI </option>' +
              '<option value="icono_raphinha"> RAPHINHA </option>' +
              '<option value="icono_salah"> M. SALAH </option>' +
              '<option value="icono_jairzinho"> JAIRZINHO </option>' +
              '<option value="icono_best"> G. BEST </option>' +
              '<option value="icono_samuel"> S. ETOO </option>' +
              '<option value="icono_garrincha"> Z. ZIDANE </option>' +
              '<option value="icono_figo"> L. FIGO </option>' +
              '</select>';
          } else if (m === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 dc justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">DC:</label><br>' +
              '<select name="portero" id="dc_433" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_haaland"> E. HAALAND </option>' +
              '<option value="icono_ronaldo"> C. RONALDO </option>' +
              '<option value="icono_oshimen"> V. OSHIMEN </option>' +
              '<option value="icono_lewan"> R. LEWANDOWSKI </option>' +
              '<option value="icono_nazario"> R. NAZARIO </option>' +
              '<option value="icono_gerd"> G. MULLER </option>' +
              '<option value="icono_romario"> ROMARIO </option>' +
              '<option value="icono_puskas"> F. PUSKAS </option>' +
              '<option value="icono_pele"> PELE </option>' +
              '</select>';
          } else if (m === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 di justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">EI:</label><br>' +
              '<select name="portero" id="ei_433" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_kane"> H. KANE </option>' +
              '<option value="icono_benzema"> K. BENZEMA </option>' +
              '<option value="icono_vinicius"> VINICIUS JR </option>' +
              '<option value="icono_mbappe"> K. MBAPPE </option>' +
              '<option value="icono_henry"> T. HENRY </option>' +
              '<option value="icono_rivaldo"> RIVALDO </option>' +
              '<option value="icono_ronaldinho"> RONALDINHO </option>' +
              '<option value="icono_stoichkov"> H. STOICHKOV </option>' +
              '<option value="icono_giggs"> R. GIGGS </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    }
  }
}

function alinear_433_cancha() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 justify-content-end align-items-end text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<img id="po_433" class="icono" src="../img/icono_player.png" alt="">' +
        '<p> PO </p>';

      ali_cancha.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '4') {
        for (var j = 1; j <= 4; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3  justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfd_433" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFD </p>';

          } else if (j === 2 || j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 icono justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfc_433_'+j+'" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFC </p>';

          } else if (j === 4) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 icono justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfi_433" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFI </p>';

          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '3') {
        for (var k = 1; k <= 1; k++) {
          div_boot = document.createElement("div");
          div_boot.setAttribute("class", 'col-md-12 justify-content-end align-items-end text-center');
          div_row.append(div_boot);
          div_boot.innerHTML +=
            '<img id="mcd_433" class="icono" src="../img/icono_player.png" alt="">' +
            '<p> MCD </p>';
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '3') {
        for (var l = 1; l <= 2; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="md_433" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MD </p>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mi_433" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MI </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '3') {
        for (var m = 1; m <= 3; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="ed_433" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> ED </p>';
          } else if (m === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dc_433" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DC </p>';
          } else if (m === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="ei_433" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> EI </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    }

  }
}

function alinear_442() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 po justify-content-center align-items-center text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<label for="portero">Portero:</label><br>' +
        '<select name="portero" id="po_442" onchange="addImg(this)">' +
        '<option value=""  disabled selected> Seleccione</option>' +
        '<option value="icono_buffon"> BUFFON</option>' +
        '<option value="icono_martinez"> E. MARTINEZ</option>' +
        '<option value="icono_neuer"> M. NEUER</option>' +
        '<option value="icono_stegen"> M. TER STEGEN</option>' +
        '<option value="icono_gea"> DE GEA</option>' +
        '<option value="icono_vander"> E. VAN DER SAR </option>' +
        '<option value="icono_Yashin"> L. YASHIN </option>' +
        '<option value="icono_kahn"> O. KAHN </option>' +
        '</select>';

      ali_433.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '4') {
        for (var j = 1; j <= 4; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfd justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFD:</label><br>' +
              '<select name="portero" id="dfc_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_arnold"> T. ARNOLD</option>' +
              '<option value="icono_carvajal"> D. CARVAJAL</option>' +
              '<option value="icono_cancelo"> J. CANCELO</option>' +
              '<option value="icono_trippier"> K. TRIPPIER</option>' +
              '<option value="icono_hakimi"> A. HAKIMI</option>' +
              '<option value="icono_lahm"> P. LAHM </option>' +
              '<option value="icono_cafu"> CAFU </option>' +
              '<option value="icono_zanetti"> ZANETTI </option>' +
              '<option value="icono_alves"> D. ALVES </option>' +
              '<option value="icono_alberto"> C. ALBERTO </option>' +
              '</select>';

          } else if (j === 2 || j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfc justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFC:</label><br>' +
              '<select name="portero" id="dfc_442_'+j+'" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_ramos"> S. RAMOS</option>' +
              '<option value="icono_araujo"> R. ARAUJO</option>' +
              '<option value="icono_dijk"> V. DIJK</option>' +
              '<option value="icono_militao"> E. MILITAO</option>' +
              '<option value="icono_delight"> K. TRIPPIER</option>' +
              '<option value="icono_puyol"> C. PUYOL </option>' +
              '<option value="icono_baresi"> F. BARESI </option>' +
              '<option value="icono_beckenbauer"> F. BECKENBAUER </option>' +
              '<option value="icono_passarella"> D. PASSARELLA </option>' +
              '<option value="icono_figueroa"> E. FIGUEROA </option>' +
              '</select>';

          } else if (j === 4) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfi justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFI:</label><br>' +
              '<select name="portero" id="dfi_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_maldini"> P. MALDINI </option>' +
              '<option value="icono_alba"> J. ALBA </option>' +
              '<option value="icono_marcelo"> MARCELO </option>' +
              '<option value="icono_balde"> A. BALDÉ</option>' +
              '<option value="icono_pervis"> P. ESTUPIÑAN </option>' +
              '<option value="icono_roberto"> R. CARLOS </option>' +
              '<option value="icono_valencia"> A. VALENCIA </option>' +
              '<option value="icono_cabrini"> A. CABRINI </option>' +
              '<option value="icono_facchetti"> G. FACCHETTI </option>' +
              '</select>';

          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var k = 1; k <= 2; k++) {
          if (k === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mcdd justify-content-end align-items-end text-end');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDD:</label><br>' +
              '<select name="portero" id="mcdd_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_casemiro"> CASEMIRO </option>' +
              '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
              '<option value="icono_kovacic"> M. KOVACIC </option>' +
              '<option value="icono_rijkaard"> F. RIJKAARD </option>' +
              '<option value="icono_xavi"> XAVI H. </option>' +
              '<option value="icono_pirlo"> A. PIRLO </option>' +
              '<option value="icono_busquets"> S. BUSQUETS </option>' +
              '<option value="icono_modric"> L. MODRIC </option>' +
              '</select>';
          } else if (k === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mcdi justify-content-start align-items-start text-start');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDI:</label><br>' +
              '<select name="portero" id="mcdi_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_casemiro"> CASEMIRO </option>' +
              '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
              '<option value="icono_kovacic"> M. KOVACIC </option>' +
              '<option value="icono_rijkaard"> F. RIJKAARD </option>' +
              '<option value="icono_xavi"> XAVI H. </option>' +
              '<option value="icono_pirlo"> A. PIRLO </option>' +
              '<option value="icono_busquets"> S. BUSQUETS </option>' +
              '<option value="icono_modric"> L. MODRIC </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var l = 1; l <= 2; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mc_d justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDD:</label><br>' +
              '<select name="portero" id="mc_d_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_pedri"> PEDRI </option>' +
              '<option value="icono_reus"> M. REUS </option>' +
              '<option value="icono_muller"> T. MULLER </option>' +
              '<option value="icono_fernandez"> E. FERNANDEZ </option>' +
              '<option value="icono_gullit"> R. GULLIT </option>' +
              '<option value="icono_iniesta"> A. INIESTA </option>' +
              '<option value="icono_zico"> ZICO </option>' +
              '<option value="icono_zinedine"> Z. ZIDANE </option>' +
              '<option value="icono_maradona"> D. MARADONA </option>' +
              '</select>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mc_i justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDI:</label><br>' +
              '<select name="portero" id="mc_di_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_gundogan"> I. GUNDOGAN </option>' +
              '<option value="icono_casemiro"> CASEMIRO </option>' +
              '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
              '<option value="icono_kovacic"> M. KOVACIC </option>' +
              '<option value="icono_gullit"> R. GULLIT </option>' +
              '<option value="icono_iniesta"> A. INIESTA </option>' +
              '<option value="icono_zico"> ZICO </option>' +
              '<option value="icono_zinedine"> Z. ZIDANE </option>' +
              '<option value="icono_maradona"> D. MARADONA </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '2') {
        for (var m = 1; m <= 2; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 dd justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">DD:</label><br>' +
              '<select name="portero" id="dd_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_messi"> L. MESSI </option>' +
              '<option value="icono_raphinha"> RAPHINHA </option>' +
              '<option value="icono_salah"> M. SALAH </option>' +
              '<option value="icono_haaland"> E. HAALAND </option>' +
              '<option value="icono_ronaldo"> C. RONALDO </option>' +
              '<option value="icono_oshimen"> V. OSHIMEN </option>' +
              '<option value="icono_lewan"> R. LEWANDOWSKI </option>' +
              '<option value="icono_jairzinho"> JAIRZINHO </option>' +
              '<option value="icono_best"> G. BEST </option>' +
              '<option value="icono_samuel"> S. ETOO </option>' +
              '<option value="icono_garrincha"> Z. ZIDANE </option>' +
              '<option value="icono_figo"> L. FIGO </option>' +
              '<option value="icono_nazario"> R. NAZARIO </option>' +
              '<option value="icono_gerd"> G. MULLER </option>' +
              '<option value="icono_romario"> ROMARIO </option>' +
              '<option value="icono_puskas"> F. PUSKAS </option>' +
              '<option value="icono_pele"> PELE </option>' +
              '</select>';
          } else if (m === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 di justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">DI:</label><br>' +
              '<select name="portero" id="di_442" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_kane"> H. KANE </option>' +
              '<option value="icono_benzema"> K. BENZEMA </option>' +
              '<option value="icono_vinicius"> VINICIUS JR </option>' +
              '<option value="icono_mbappe"> K. MBAPPE </option>' +
              '<option value="icono_haaland"> E. HAALAND </option>' +
              '<option value="icono_ronaldo"> C. RONALDO </option>' +
              '<option value="icono_oshimen"> V. OSHIMEN </option>' +
              '<option value="icono_lewan"> R. LEWANDOWSKI </option>' +
              '<option value="icono_nazario"> R. NAZARIO </option>' +
              '<option value="icono_gerd"> G. MULLER </option>' +
              '<option value="icono_romario"> ROMARIO </option>' +
              '<option value="icono_puskas"> F. PUSKAS </option>' +
              '<option value="icono_pele"> PELE </option>' +
              '<option value="icono_henry"> T. HENRY </option>' +
              '<option value="icono_rivaldo"> RIVALDO </option>' +
              '<option value="icono_ronaldinho"> RONALDINHO </option>' +
              '<option value="icono_stoichkov"> H. STOICHKOV </option>' +
              '<option value="icono_giggs"> R. GIGGS </option>' +

              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    }
  }
}

function alinear_442_cancha() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 justify-content-center align-items-center text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<img id="po_442" class="icono" src="../img/icono_player.png" alt="">' +
        '<p> PO </p>';

      ali_cancha.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '4') {
        for (var j = 1; j <= 4; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfc_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFD </p>';

          } else if (j === 2 || j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfc_442_'+j+'" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFC </p>';

          } else if (j === 4) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfi_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFI </p>';

          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var k = 1; k <= 2; k++) {
          if (k === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-end align-items-end text-end');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mcdd_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MCD </p>';
          } else if (k === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-start align-items-start text-start');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mcdi_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MCD </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var l = 1; l <= 2; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mc_d_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MD </p>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mc_di_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MI </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '2') {
        for (var m = 1; m <= 2; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dd_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DD </p>';
          } else if (m === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="di_442" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DI </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    }
  }
}

function alinear_451() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 po justify-content-center align-items-center text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<label for="portero">Portero:</label><br>' +
        '<select name="portero" id="po_451" onchange="addImg(this)">' +
        '<option value=""  disabled selected> Seleccione</option>' +
        '<option value="icono_buffon"> BUFFON</option>' +
        '<option value="icono_martinez"> E. MARTINEZ</option>' +
        '<option value="icono_neuer"> M. NEUER</option>' +
        '<option value="icono_stegen"> M. TER STEGEN</option>' +
        '<option value="icono_gea"> DE GEA</option>' +
        '<option value="icono_vander"> E. VAN DER SAR </option>' +
        '<option value="icono_Yashin"> L. YASHIN </option>' +
        '<option value="icono_kahn"> O. KAHN </option>' +
        '</select>';

      ali_433.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '4') {
        for (var j = 1; j <= 4; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfd justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFD:</label><br>' +
              '<select name="portero" id="dfd_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_arnold"> T. ARNOLD</option>' +
              '<option value="icono_carvajal"> D. CARVAJAL</option>' +
              '<option value="icono_cancelo"> J. CANCELO</option>' +
              '<option value="icono_trippier"> K. TRIPPIER</option>' +
              '<option value="icono_hakimi"> A. HAKIMI</option>' +
              '<option value="icono_lahm"> P. LAHM </option>' +
              '<option value="icono_cafu"> CAFU </option>' +
              '<option value="icono_zanetti"> ZANETTI </option>' +
              '<option value="icono_alves"> D. ALVES </option>' +
              '<option value="icono_alberto"> C. ALBERTO </option>' +
              '</select>';

          } else if (j === 2 || j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfc justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFC:</label><br>' +
              '<select name="portero" id="dfc_451_'+j+'" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_ramos"> S. RAMOS</option>' +
              '<option value="icono_araujo"> R. ARAUJO</option>' +
              '<option value="icono_dijk"> V. DIJK</option>' +
              '<option value="icono_militao"> E. MILITAO</option>' +
              '<option value="icono_delight"> K. TRIPPIER</option>' +
              '<option value="icono_puyol"> C. PUYOL </option>' +
              '<option value="icono_baresi"> F. BARESI </option>' +
              '<option value="icono_beckenbauer"> F. BECKENBAUER </option>' +
              '<option value="icono_passarella"> D. PASSARELLA </option>' +
              '<option value="icono_figueroa"> E. FIGUEROA </option>' +
              '</select>';

          } else if (j === 4) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 dfi justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFI:</label><br>' +
              '<select name="portero" id="dfi_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_maldini"> P. MALDINI </option>' +
              '<option value="icono_alba"> J. ALBA </option>' +
              '<option value="icono_marcelo"> MARCELO </option>' +
              '<option value="icono_balde"> A. BALDÉ</option>' +
              '<option value="icono_pervis"> P. ESTUPIÑAN </option>' +
              '<option value="icono_roberto"> R. CARLOS </option>' +
              '<option value="icono_valencia"> A. VALENCIA </option>' +
              '<option value="icono_cabrini"> A. CABRINI </option>' +
              '<option value="icono_facchetti"> G. FACCHETTI </option>' +
              '</select>';

          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '5') {
        for (var k = 1; k <= 2; k++) {
          if (k === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mcdd justify-content-end align-items-end text-end');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDD:</label><br>' +
              '<select name="portero" id="mcdd_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_casemiro"> CASEMIRO </option>' +
              '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
              '<option value="icono_kovacic"> M. KOVACIC </option>' +
              '<option value="icono_rijkaard"> F. RIJKAARD </option>' +
              '<option value="icono_xavi"> XAVI H. </option>' +
              '<option value="icono_pirlo"> A. PIRLO </option>' +
              '<option value="icono_busquets"> S. BUSQUETS </option>' +
              '<option value="icono_modric"> L. MODRIC </option>' +
              '</select>';
          } else if (k === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mcdi justify-content-start align-items-start text-start');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDI:</label><br>' +
              '<select name="portero" id="mcdi_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_casemiro"> CASEMIRO </option>' +
              '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
              '<option value="icono_kovacic"> M. KOVACIC </option>' +
              '<option value="icono_rijkaard"> F. RIJKAARD </option>' +
              '<option value="icono_xavi"> XAVI H. </option>' +
              '<option value="icono_pirlo"> A. PIRLO </option>' +
              '<option value="icono_busquets"> S. BUSQUETS </option>' +
              '<option value="icono_modric"> L. MODRIC </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '5') {
        for (var l = 1; l <= 3; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 mc_d justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MD:</label><br>' +
              '<select name="portero" id="md_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_messi"> L. MESSI </option>' +
              '<option value="icono_raphinha"> RAPHINHA </option>' +
              '<option value="icono_salah"> M. SALAH </option>' +
              '<option value="icono_jairzinho"> JAIRZINHO </option>' +
              '<option value="icono_best"> G. BEST </option>' +
              '<option value="icono_samuel"> S. ETOO </option>' +
              '<option value="icono_garrincha"> Z. ZIDANE </option>' +
              '<option value="icono_figo"> L. FIGO </option>' +
              '</select>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 mco justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCO:</label><br>' +
              '<select name="portero" id="mco_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_pedri"> PEDRI </option>' +
              '<option value="icono_reus"> M. REUS </option>' +
              '<option value="icono_muller"> T. MULLER </option>' +
              '<option value="icono_fernandez"> E. FERNANDEZ </option>' +
              '<option value="icono_gundogan"> I. GUNDOGAN </option>' +
              '<option value="icono_gullit"> R. GULLIT </option>' +
              '<option value="icono_iniesta"> A. INIESTA </option>' +
              '<option value="icono_zico"> ZICO </option>' +
              '<option value="icono_zinedine"> Z. ZIDANE </option>' +
              '<option value="icono_maradona"> D. MARADONA </option>' +
              '</select>';
          } else if (l === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 mc_i justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MI:</label><br>' +
              '<select name="portero" id="mi_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_kane"> H. KANE </option>' +
              '<option value="icono_benzema"> K. BENZEMA </option>' +
              '<option value="icono_vinicius"> VINICIUS JR </option>' +
              '<option value="icono_mbappe"> K. MBAPPE </option>' +
              '<option value="icono_henry"> T. HENRY </option>' +
              '<option value="icono_rivaldo"> RIVALDO </option>' +
              '<option value="icono_ronaldinho"> RONALDINHO </option>' +
              '<option value="icono_stoichkov"> H. STOICHKOV </option>' +
              '<option value="icono_giggs"> R. GIGGS </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '1') {
        for (var m = 1; m <= 1; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-12 dl justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">DC:</label><br>' +
              '<select name="portero" id="dc_451" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_haaland"> E. HAALAND </option>' +
              '<option value="icono_ronaldo"> C. RONALDO </option>' +
              '<option value="icono_oshimen"> V. OSHIMEN </option>' +
              '<option value="icono_lewan"> R. LEWANDOWSKI </option>' +
              '<option value="icono_nazario"> R. NAZARIO </option>' +
              '<option value="icono_gerd"> G. MULLER </option>' +
              '<option value="icono_romario"> ROMARIO </option>' +
              '<option value="icono_puskas"> F. PUSKAS </option>' +
              '<option value="icono_pele"> PELE </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    }
  }
}

function alinear_451_cancha() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 justify-content-center align-items-center text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<img id="po_451" class="icono" src="../img/icono_player.png" alt="">' +
        '<p> PO </p>';

      ali_cancha.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '4') {
        for (var j = 1; j <= 4; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfd_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFC </p>';

          } else if (j === 2 || j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfc_451_'+j+'" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFC </p>';

          } else if (j === 4) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-3 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfi_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFI </p>';

          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '5') {
        for (var k = 1; k <= 2; k++) {
          if (k === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-end align-items-end text-end');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mcdd_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MCD </p>';
          } else if (k === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-start align-items-start text-start');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mcdi_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MCD </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '5') {
        for (var l = 1; l <= 3; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="md_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MD </p>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mco_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MCO </p>';
          } else if (l === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mi_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MI </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '1') {
        for (var m = 1; m <= 1; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-12 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dc_451" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DC </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    }
  }
}

function alinear_343() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 po justify-content-center align-items-center text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<label for="portero">Portero:</label><br>' +
        '<select name="portero" id="po_343" onchange="addImg(this)">' +
        '<option value=""  disabled selected> Seleccione</option>' +
        '<option value="icono_buffon"> BUFFON</option>' +
        '<option value="icono_martinez"> E. MARTINEZ</option>' +
        '<option value="icono_neuer"> M. NEUER</option>' +
        '<option value="icono_stegen"> M. TER STEGEN</option>' +
        '<option value="icono_gea"> DE GEA</option>' +
        '<option value="icono_vander"> E. VAN DER SAR </option>' +
        '<option value="icono_Yashin"> L. YASHIN </option>' +
        '<option value="icono_kahn"> O. KAHN </option>' +
        '</select>';

      ali_433.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '3') {
        for (var j = 1; j <= 3; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 dfd justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFD:</label><br>' +
              '<select name="portero" id="dfd_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_arnold"> T. ARNOLD</option>' +
              '<option value="icono_carvajal"> D. CARVAJAL</option>' +
              '<option value="icono_cancelo"> J. CANCELO</option>' +
              '<option value="icono_trippier"> K. TRIPPIER</option>' +
              '<option value="icono_hakimi"> A. HAKIMI</option>' +
              '<option value="icono_lahm"> P. LAHM </option>' +
              '<option value="icono_cafu"> CAFU </option>' +
              '<option value="icono_zanetti"> ZANETTI </option>' +
              '<option value="icono_alves"> D. ALVES </option>' +
              '<option value="icono_alberto"> C. ALBERTO </option>' +
              '</select>';

          } else if (j === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 dfc justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFC:</label><br>' +
              '<select name="portero" id="dfc_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_ramos"> S. RAMOS</option>' +
              '<option value="icono_araujo"> R. ARAUJO</option>' +
              '<option value="icono_dijk"> V. DIJK</option>' +
              '<option value="icono_militao"> E. MILITAO</option>' +
              '<option value="icono_delight"> K. TRIPPIER</option>' +
              '<option value="icono_puyol"> C. PUYOL </option>' +
              '<option value="icono_baresi"> F. BARESI </option>' +
              '<option value="icono_beckenbauer"> F. BECKENBAUER </option>' +
              '<option value="icono_passarella"> D. PASSARELLA </option>' +
              '<option value="icono_figueroa"> E. FIGUEROA </option>' +
              '</select>';

          } else if (j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 dfi justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="dfd">DFI:</label><br>' +
              '<select name="portero" id="dfi_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_maldini"> P. MALDINI </option>' +
              '<option value="icono_alba"> J. ALBA </option>' +
              '<option value="icono_marcelo"> MARCELO </option>' +
              '<option value="icono_balde"> A. BALDÉ</option>' +
              '<option value="icono_pervis"> P. ESTUPIÑAN </option>' +
              '<option value="icono_roberto"> R. CARLOS </option>' +
              '<option value="icono_valencia"> A. VALENCIA </option>' +
              '<option value="icono_cabrini"> A. CABRINI </option>' +
              '<option value="icono_facchetti"> G. FACCHETTI </option>' +
              '</select>';

          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var k = 1; k <= 2; k++) {
          if (k === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mcdd justify-content-end align-items-end text-end');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDD:</label><br>' +
              '<select name="portero" id="mcdd_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_casemiro"> CASEMIRO </option>' +
              '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
              '<option value="icono_kovacic"> M. KOVACIC </option>' +
              '<option value="icono_rijkaard"> F. RIJKAARD </option>' +
              '<option value="icono_xavi"> XAVI H. </option>' +
              '<option value="icono_pirlo"> A. PIRLO </option>' +
              '<option value="icono_busquets"> S. BUSQUETS </option>' +
              '<option value="icono_modric"> L. MODRIC </option>' +
              '</select>';
          } else if (k === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mcdi justify-content-start align-items-start text-start');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MCDI:</label><br>' +
              '<select name="portero" id="mcdi_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_casemiro"> CASEMIRO </option>' +
              '<option value="icono_tchouameni"> A. TCHOUAMENI </option>' +
              '<option value="icono_kovacic"> M. KOVACIC </option>' +
              '<option value="icono_rijkaard"> F. RIJKAARD </option>' +
              '<option value="icono_xavi"> XAVI H. </option>' +
              '<option value="icono_pirlo"> A. PIRLO </option>' +
              '<option value="icono_busquets"> S. BUSQUETS </option>' +
              '<option value="icono_modric"> L. MODRIC </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var l = 1; l <= 4; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mc_d justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MD:</label><br>' +
              '<select name="portero" id="md_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_pedri"> PEDRI </option>' +
              '<option value="icono_reus"> M. REUS </option>' +
              '<option value="icono_muller"> T. MULLER </option>' +
              '<option value="icono_fernandez"> E. FERNANDEZ </option>' +
              '<option value="icono_gundogan"> I. GUNDOGAN </option>' +
              '<option value="icono_salah"> M. SALAH </option>' +
              '<option value="icono_gullit"> R. GULLIT </option>' +
              '<option value="icono_iniesta"> A. INIESTA </option>' +
              '<option value="icono_zico"> ZICO </option>' +
              '<option value="icono_zinedine"> Z. ZIDANE </option>' +
              '<option value="icono_maradona"> D. MARADONA </option>' +
              '</select>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 mc_i justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">MI:</label><br>' +
              '<select name="portero" id="mi_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_pedri"> PEDRI </option>' +
              '<option value="icono_reus"> M. REUS </option>' +
              '<option value="icono_muller"> T. MULLER </option>' +
              '<option value="icono_fernandez"> E. FERNANDEZ </option>' +
              '<option value="icono_gundogan"> I. GUNDOGAN </option>' +
              '<option value="icono_kane"> H. KANE </option>' +
              '<option value="icono_gullit"> R. GULLIT </option>' +
              '<option value="icono_iniesta"> A. INIESTA </option>' +
              '<option value="icono_zico"> ZICO </option>' +
              '<option value="icono_zinedine"> Z. ZIDANE </option>' +
              '<option value="icono_maradona"> D. MARADONA </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '3') {
        for (var m = 1; m <= 3; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 dd justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">ED:</label><br>' +
              '<select name="portero" id="ed_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_messi"> L. MESSI </option>' +
              '<option value="icono_raphinha"> RAPHINHA </option>' +
              '<option value="icono_salah"> M. SALAH </option>' +
              '<option value="icono_jairzinho"> JAIRZINHO </option>' +
              '<option value="icono_best"> G. BEST </option>' +
              '<option value="icono_samuel"> S. ETOO </option>' +
              '<option value="icono_garrincha"> Z. ZIDANE </option>' +
              '<option value="icono_figo"> L. FIGO </option>' +
              '</select>';
          } else if (m === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 dc justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">DC:</label><br>' +
              '<select name="portero" id="dc_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_haaland"> E. HAALAND </option>' +
              '<option value="icono_ronaldo"> C. RONALDO </option>' +
              '<option value="icono_oshimen"> V. OSHIMEN </option>' +
              '<option value="icono_lewan"> R. LEWANDOWSKI </option>' +
              '<option value="icono_nazario"> R. NAZARIO </option>' +
              '<option value="icono_gerd"> G. MULLER </option>' +
              '<option value="icono_romario"> ROMARIO </option>' +
              '<option value="icono_puskas"> F. PUSKAS </option>' +
              '<option value="icono_pele"> PELE </option>' +
              '</select>';
          } else if (m === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 di justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<label for="portero">EI:</label><br>' +
              '<select name="portero" id="ei_343" onchange="addImg(this)">' +
              '<option value=""  disabled selected> Seleccione</option>' +
              '<option value="icono_kane"> H. KANE </option>' +
              '<option value="icono_benzema"> K. BENZEMA </option>' +
              '<option value="icono_vinicius"> VINICIUS JR </option>' +
              '<option value="icono_mbappe"> K. MBAPPE </option>' +
              '<option value="icono_henry"> T. HENRY </option>' +
              '<option value="icono_rivaldo"> RIVALDO </option>' +
              '<option value="icono_ronaldinho"> RONALDINHO </option>' +
              '<option value="icono_stoichkov"> H. STOICHKOV </option>' +
              '<option value="icono_giggs"> R. GIGGS </option>' +
              '</select>';
          }
          ali_433.appendChild(div_row);
        }
      }
    }
  }
}

function alinear_343_cancha() {
  for (var i = 1; i <= 5; i++) {
    let div_row = "";
    let div_boot = "";
    if (i === 1) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      div_boot = document.createElement("div");
      div_boot.setAttribute("class", 'col-md-12 justify-content-center align-items-center text-center');
      div_row.append(div_boot);
      div_boot.innerHTML +=
        '<img id="po_343" class="icono" src="../img/icono_player.png" alt="">' +
        '<p> PO </p>';

      ali_cancha.appendChild(div_row);
    } else if (i === 2) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      /* console.log("if === 2"); */
      if (alineacionSelect.value[0] === '3') {
        for (var j = 1; j <= 3; j++) {
          if (j === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfd_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFC </p>';

          } else if (j === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfc_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFC </p>';

          } else if (j === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4  justify-content-center align-items-center text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dfi_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DFC </p>';

          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 3) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var k = 1; k <= 2; k++) {
          if (k === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-end align-items-end text-end');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mcdd_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MCD </p>';
          } else if (k === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-start align-items-start text-start');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mcdi_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MCD </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 4) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[1] === '4') {
        for (var l = 1; l <= 4; l++) {
          if (l === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="md_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MD </p>';
          } else if (l === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-6 justify-content-end align-items-end text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="mi_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> MI </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    } else if (i === 5) {
      div_row = document.createElement("div");
      div_row.setAttribute("class", 'row division');
      if (alineacionSelect.value[2] === '3') {
        for (var m = 1; m <= 3; m++) {
          if (m === 1) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="ed_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> ED </p>';
          } else if (m === 2) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="dc_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> DC </p>';
          } else if (m === 3) {
            div_boot = document.createElement("div");
            div_boot.setAttribute("class", 'col-md-4 justify-content-start align-items-start text-center');
            div_row.append(div_boot);
            div_boot.innerHTML +=
              '<img id="ei_343" class="icono" src="../img/icono_player.png" alt="">' +
              '<p> EI </p>';
          }
          ali_cancha.appendChild(div_row);
        }
      }
    }
  }
}

function addImg(el){
  console.log(el.id);
  console.log(el.value);
  document.getElementById(el.id).setAttribute("src","../img/"+el.value+".png");
}

alineacionSelect.addEventListener('change', cambiarAlineacion);