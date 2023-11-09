document.addEventListener("DOMContentLoaded", function () {
  const webcamButton = document.querySelector("#webcamButton");
  webcamButton.click();

  const sideNavElements = document.querySelectorAll(".sideNav div");

  sideNavElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Remove 'active' class from all elements
      sideNavElements.forEach(function (el) {
        el = el.querySelector(".bar");
        el.classList.remove("active");
      });
      const elIn = element.querySelector(".bar");
      elIn.classList.add("active");
      if (elIn.id == "info") {
        infoDisplay();
      } else if (elIn.id == "prescription") {
        prescriptionInputDisplay();

        const add = document.querySelector("#add");

        add.addEventListener("click", function () {
          const medicineName = document.querySelector("#medicineName");
          const medicineDosage = document.querySelector("#medicineDosage");
          const medicineDuration = document.querySelector("#medicineDuration");
          const category = document.querySelector("#category");

          createPrescription(
            medicineName.value,
            medicineDosage.value,
            medicineDuration.value,
            category.value
          );

          medicineDosage.value = "";
          medicineDuration.value = "";
          medicineName.value = "";

          deleteRow();
        });
      } else if (elIn.id == "file") {
        fileDisplay();
      } else if (elIn.id == "report") {
        reportDisplay();
      }
    });
  });

  const sideNav = document.querySelectorAll(".sideNav div");
  sideNav.forEach(function (element) {
    element = element.querySelector(".bar");
    if (element.classList.contains("active")) {
      if (element.id == "info") {
        infoDisplay();
      } else if (element.id == "prescription") {
        prescriptionInputDisplay();
      } else if (element.id == "file") {
        fileDisplay();
      } else if (element.id == "report") {
        reportDisplay();
      }
    }
  });
});

const sideDetails = document.querySelector(".sideDetails");

function infoDisplay() {
  sideDetails.innerHTML = `<div class="info flex flex-col">
    <h3>General Info:</h3>
    <label>Patient Name: <span id="patientName">Mani</span></label>
    <label>DOB: <span id="patientDOB">25/05/1996</span></label>
    <label>Age: <span id="patientAge">25</span></label>
    <label>Blood Type: <span id="patientBlood">O+</span></label>
    <label
      >Height: <span id="patientHeight">5.6</span
      ><span>inches</span></label
    >
    <label
      >Weight: <span id="patientWeight">80</span><span>kgs</span></label
    >
  </div>
  <div class="complaints">
    <h3>Complaints:</h3>
    <ol>
      <li>Shortness of Breath</li>
      <li>Chest Tightness</li>
      <li>HeadAches</li>
      <li>Fatigue</li>
      <li>Shortness of Breath</li>
      <li>Chest Tightness</li>
      <li>HeadAches</li>
      <li>Fatigue</li>
      <li>Shortness of Breath</li>
      <li>Chest Tightness</li>
      <li>HeadAches</li>
      <li>Fatigue</li>
    </ol>
  </div>`;
}

function prescriptionDisplay() {
  sideDetails.innerHTML = `
  <div class="medicines">
    <div class="tabletHead mb-2">
      <h3>Tablets:</h3>
      <div class="tablet pl-2 pb-2 flex items-center justify-between">
        <div class="tabletOuter flex items-center">
          <div class="medicineName pr-2">
            <span class="pr-2">Paracetamol</span>
            <span></span>
          </div>
          <div class="medicineDosage pr-2">
            <span class="pr-2">10mg</span>
            <span></span>
          </div>
          <div class="medicineDuration pr-2">
            <span>3d</span>
          </div>
        </div>
        <div class="buy px-1 rounded-lg border border-gray-600">
          <button class="">
            Buy<i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <div class="tablet pl-2 pb-2 flex items-center justify-between">
        <div class="tabletOuter flex items-center">
          <div class="medicineName pr-2">
            <span class="pr-2">Maetron</span>
            <span></span>
          </div>
          <div class="medicineDosage pr-2">
            <span class="pr-2">8mg</span>
            <span></span>
          </div>
          <div class="medicineDuration pr-2">
            <span>3d</span>
          </div>
        </div>
        <div class="buy px-1 rounded-lg border border-gray-600">
          <button class="">
            Buy<i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <div class="tablet pl-2 pb-2 flex items-center justify-between">
        <div class="tabletOuter flex items-center">
          <div class="medicineName pr-2">
            <span class="pr-2">Dolo 650</span>
            <span></span>
          </div>
          <div class="medicineDosage pr-2">
            <span class="pr-2">6mg</span>
            <span></span>
          </div>
          <div class="medicineDuration pr-2">
            <span>3d</span>
          </div>
        </div>
        <div class="buy px-1 rounded-lg border border-gray-600">
          <button class="">
            Buy<i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="tonicHead mb-2">
      <h3>Tonic:</h3>
      <div class="tonic pl-2 pb-2 flex items-center justify-between">
        <div class="tabletOuter flex items-center">
          <div class="medicineName pr-2">
            <span class="pr-2">Vickso Liquid</span>
            <span></span>
          </div>
          <div class="medicineDosage pr-2">
            <span class="pr-2">100ml</span>
            <span></span>
          </div>
          <div class="medicineDuration pr-2">
            <span>3d</span>
          </div>
        </div>
        <div class="buy px-1 rounded-lg border border-gray-600">
          <button class="">
            Buy<i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <div class="tonic pl-2 pb-2 flex items-center justify-between">
        <div class="tabletOuter flex items-center">
          <div class="medicineName pr-2">
            <span class="pr-2">Cros</span>
            <span></span>
          </div>
          <div class="medicineDosage pr-2">
            <span class="pr-2">10ml</span>
            <span></span>
          </div>
          <div class="medicineDuration pr-2">
            <span>3d</span>
          </div>
        </div>
        <div class="buy px-1 rounded-lg border border-gray-600">
          <button class="">
            Buy<i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <div class="tonic pl-2 pb-2 flex items-center justify-between">
        <div class="tabletOuter flex items-center">
          <div class="medicineName pr-2">
            <span class="pr-2">Chors</span>
            <span></span>
          </div>
          <div class="medicineDosage pr-2">
            <span class="pr-2">30ml</span>
            <span></span>
          </div>
          <div class="medicineDuration pr-2">
            <span>3d</span>
          </div>
        </div>
        <div class="buy px-1 rounded-lg border border-gray-600">
          <button class="">
            Buy<i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}

function prescriptionInputDisplay() {
  sideDetails.innerHTML = ``;
  sideDetails.classList.add("relative");

  const newDiv = document.createElement("div");
  newDiv.className = "medicines";
  newDiv.innerHTML = `    
  <div class="tabletHead mb-2">
    <h3>Tablets:</h3>
  </div>
  <div class="tonicHead mb-2">
    <h3>Tonic:</h3>
  </div>
`;
  const secDiv = document.createElement("div");
  secDiv.className = "inputParent";

  secDiv.innerHTML = `
  <div class="relative mt-2 rounded-md shadow-sm">
    <label for="medicineName" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
    <input type="text" name="medicineName" id="medicineName" class="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Dolo 650">
  </div>
  <div class="relative mt-2 rounded-md shadow-sm">
    <label for="medicineDosage" class="block text-sm font-medium leading-6 text-gray-900">Dosage</label>
    <input type="text" name="medicineDosage" id="medicineDosage" class="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="10mg">
  </div>
  <div class="relative mt-2 rounded-md shadow-sm">
    <label for="medicineDuration" class="block text-sm font-medium leading-6 text-gray-900">Duration</label>
    <input type="text" name="medicineDuration" id="medicineDuration" class="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="3d">
  </div>
  <div class="relative mt-2 rounded-md shadow-sm">
    <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
    <select id="category" name="category" class="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      <option id='tablet'>Tablets</option>
      <option id='tonic'>Tonic</option>
    </select>
  </div>
  `;
  const thirdDiv = document.createElement("div");
  thirdDiv.className = "formSubmit";

  thirdDiv.innerHTML = `
  <div class="bg-white sm:flex sm:flex-row-reverse">
    <button type="button" id="add" class="w-full inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3">
      Add
    </button>
  </div>
  `;

  // const medicineName = document.createElement("input");
  // const medicineDosage = document.createElement("input");
  // const medicineDuration = document.createElement("input");

  // medicineName.className = "preInput";
  // medicineDosage.className = "preInput";
  // medicineDuration.className = "preInput";

  // secDiv.appendChild(medicineName);
  // secDiv.appendChild(medicineDosage);
  // secDiv.appendChild(medicineDuration);

  const finalDiv = document.createElement("div");
  finalDiv.className = "formParent";
  finalDiv.appendChild(secDiv);
  finalDiv.appendChild(thirdDiv);

  sideDetails.appendChild(newDiv);
  sideDetails.appendChild(finalDiv);

  // sideDetails.appendChild(secDiv);
  // sideDetails.appendChild(thirdDiv)
}

function fileDisplay() {
  sideDetails.innerHTML = `Files`;
}

function reportDisplay() {
  sideDetails.innerHTML = `Reports`;
}

function createPrescription(name, dosage, duration, category) {
  const tablet = sideDetails.querySelector(".tabletHead");
  const tonic = sideDetails.querySelector(".tonicHead ");
  if (category == "Tablets") {
    const element = document.createElement("div");
    element.className = "tablet";
    element.classList.add(
      "pl-2",
      "pb-2",
      "flex",
      "items-center",
      "justify-between"
    );
    element.innerHTML = `
    <div class="tabletOuter flex items-center">
      <div class="medicineName pr-2">
        <span class="pr-2">${name}</span>
        <span></span>
      </div>
      <div class="medicineDosage pr-2">
        <span class="pr-2">${dosage}</span>
        <span></span>
      </div>
      <div class="medicineDuration pr-2">
        <span>${duration}</span>
      </div>
    </div>
    <div class="leftEnd flex">
      <div class="del px-1 mr-1 rounded-lg border border-gray-600">
        <button class="">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div class="buy px-1 rounded-lg border border-gray-600">
        <button class="">
          Buy<i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  `;
    tablet.appendChild(element);
  } else if (category == "Tonic") {
    const element = document.createElement("div");
    element.className = "tonic";
    element.classList.add(
      "pl-2",
      "pb-2",
      "flex",
      "items-center",
      "justify-between"
    );
    element.innerHTML = `
    <div class="tabletOuter flex items-center">
          <div class="medicineName pr-2">
            <span class="pr-2">${name}</span>
            <span></span>
          </div>
          <div class="medicineDosage pr-2">
            <span class="pr-2">${dosage}</span>
            <span></span>
          </div>
          <div class="medicineDuration pr-2">
            <span>${duration}</span>
          </div>
        </div>
      <div class="leftEnd flex">
        <div class="del px-1 mr-1 rounded-lg border border-gray-600">
          <button class="">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <div class="buy px-1 rounded-lg border border-gray-600">
          <button class="">
            Buy<i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    `;
    tonic.appendChild(element);
  }
}

function deleteRow(){
  const element = document.querySelectorAll('.del')
  console.log(element)
}

