function showAlertModal(alert) {
  const alertModal = document.getElementById('alertModal');
  const alertMsg = document.getElementById('alert-body');
  alertMsg.innerText = alert;
  new bootstrap.Modal(alertModal).show();
}

function checkAgreement() {
  const agreementCheck = document.getElementById('agreement').checked;
  if (!agreementCheck) {
    showAlertModal(
      'Somente participarão aqueles que autorizarem o uso de suas fotos pela TrybeTrip',
    );
    return false;
  }
  return true;
}

function checkInputs() {
  const inputs = document.querySelectorAll('input[lencheck]');
  if (inputs.length === 0) {
    showAlertModal('OOps, algo errado!');
    return false;
  }
  for (let i = 0; i < inputs.length; i += 1) {
    const { value } = inputs[i];
    const { minLength, maxLength } = inputs[i];
    if (value.length < minLength || value.length > maxLength) {
      showAlertModal('Dados inválidos!');
      return false;
    }
  }
  return true;
}

window.onload = () => {
  const successModal = document.getElementById('successModal');
  const verifyModal = new bootstrap.Modal(document.getElementById('verifyModal'))
  const sendBtn = document.getElementById('submitForm');
  const verifyBtn = document.getElementById('verifyButton');
  successModal.addEventListener('hidden.bs.modal', () => {
    document.getElementById('trybetrip-form').submit();
  });
  sendBtn.addEventListener('click', () => {
    verifyModal.hide();
    new bootstrap.Modal(successModal).show();
  });
  verifyBtn.addEventListener('click', () => {
    if (checkAgreement() && checkInputs()) {
      verifyModal.show();
    }
  });
};
