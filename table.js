const models = [
    {
        id: 1, 
        CarName: 'i7', 
        Price: 160 ,
        model: "Sedan"
    },
    { 
        id: 2, 
        CarName: 'M3', 
        Price: 120 ,
        model: "Sedan"
    },
    { 
        id: 3, 
        CarName: 'X1', 
        Price: 50 ,
        model: "Hatch-back"
    },
    { 
        id: 4, 
        CarName: 'Z4', 
        Price: 90 ,
        model: "Convertable"
    },
    { 
        id: 5, 
        CarName: 'XM',
        Price: 260 ,
        model: "SUV"
    },
    { 
        id: 6, 
        CarName: 'iX',
        Price: 230 ,
        model: "SUV"
    },{ 
        id: 7, 
        CarName: 'X8',
        Price: 200 ,
        model: "SUV"
    },{ 
        id: 8, 
        CarName: 'i4',
        Price: 150 ,
        model: "Sedan"
    },
    { 
        id: 9, 
        CarName: 'X7',
        Price: 110 ,
        model: "Family-wagan"
    },
  ];
  const renderTable = (data) => {
    const tableBody = document.getElementById('tableBody');
    
    tableBody.innerHTML = data.map(model => `
      <tr>
        <td class="data" >${model.id}</td>
        <td class="data" >${model.CarName}</td>
        <td class="data" >${model.Price}</td>
        <td class="data" >${model.model}</td>
        <td> <button onclick = "deleteFromTable('${model.id}','${model.CarName}','${model.Price}','${model.model}')"> Delete</button></td>
        
      </tr>
    `).join('');
  };
  function deleteFromTable(id,CarName,Price,model){
    console.log(id,CarName,Price,model)
    const index = models.findIndex(remove => remove.id == id && remove.CarName == CarName && remove.Price == Price && remove.model == model)
    if (index !== -1){
      models.splice(index,1);
      renderTable(models)
    }
  }
  
  const filterButton = document.querySelector('#filterButton');
  filterButton.addEventListener('click', () => {
    const filteritbyModel = document.getElementById('filteritbyModel').value;
    let filteredMovies = models;
    if (filteritbyModel) {
      filteredMovies = models.filter(model => model.model == filteritbyModel);
    }
    renderTable(filteredMovies);
  });
  
  const newCar = () => {
    const carName = document.getElementById('CARName').value;
    const price = document.getElementById('Price').value;
    const selectitbyModel = document.getElementById('selectitbyModel');
    const selectedValue = filteritbyModel.options[selectitbyModel.selectedIndex].value;
  
    models.push({
      id: models.length + 2,
      CarName: carName,
      Price: price,
      model: selectedValue,
    });
    renderTable(models);
  }
  
  renderTable(models);
  console.log(models)