function checkInputs() {
  const inputs = document.querySelectorAll('input[lencheck]');
  if (inputs.length === 0) {
    return 'OOps, algo errado!';
  }
  for (let i = 0; i < inputs.length; i += 1) {
    const { value } = inputs[i];
    const { minLength, maxLength } = inputs[i];
    if (value.length < minLength || value.length > maxLength) {
      return 'Dados inválidos!';
    }
  }
  return null;
}

window.onload = () => {
  const form = document.getElementById('trybetrip-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!document.getElementById('agreement').checked) {
      alert('Somente participarão aqueles que autorizarem o uso de suas fotos pela TrybeTrip');
      return;
    }
    const response = checkInputs();
    if (response) {
      alert(response);
      return;
    }
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  });
};
