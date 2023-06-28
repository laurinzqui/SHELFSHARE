function addInputSection() {
    const libroInput = document.getElementById('numeroCapitulo');
    const previousInputs = document.querySelectorAll('#inputSections input');
    let isPreviousFilled = true;

    for (let i = 0; i < previousInputs.length; i++) {
        if (previousInputs[i].value.trim() === '') {
            isPreviousFilled = false;
            break;
        }
    }

    if (libroInput.value.trim() !== '' && isPreviousFilled) {
        const inputSectionsContainer = document.getElementById('inputSections');

        const newRow = document.createElement('div');
        newRow.classList.add('row');

        const col1 = document.createElement('div');
        col1.classList.add('col-md-6');
        const formOutline1 = document.createElement('div');
        formOutline1.classList.add('form-outline');
        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.classList.add('form-control', 'form-control-lg');
        const label1 = document.createElement('label');
        label1.classList.add('form-label');
        label1.textContent = 'Numero de Capitulo';

        formOutline1.appendChild(input1);
        formOutline1.appendChild(label1);
        col1.appendChild(formOutline1);

        const col2 = document.createElement('div');
        col2.classList.add('col-md-6');
        const formOutline2 = document.createElement('div');
        formOutline2.classList.add('form-outline');
        const input2 = document.createElement('input');
        input2.type = 'file';
        input2.classList.add('form-control', 'form-control-lg');
        const label2 = document.createElement('label');
        label2.classList.add('form-label');
        label2.textContent = 'Adjunta Capitulo';

        formOutline2.appendChild(input2);
        formOutline2.appendChild(label2);
        col2.appendChild(formOutline2);

        newRow.appendChild(col1);
        newRow.appendChild(col2);

        const hr = document.createElement('hr');
        hr.classList.add('mx-n3');

        inputSectionsContainer.appendChild(newRow);
        inputSectionsContainer.appendChild(hr);
    }
}