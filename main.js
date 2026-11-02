function getApi() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText;
      var kareem = JSON.parse(result);

      var basket = "";

      for (var i = 0; i < kareem.length; i++) {
        var cartoona = `
                    <div class="col-md-4 text-center mb-4">
                        <div class="card p-3">
                            <img src="${kareem[i].url}" class="w-100">
                            <h4>${kareem[i].title}</h4>
                            <h6>${kareem[i].id}</h6>
                        </div>
                    </div>
                `;

        basket += cartoona;
      }

      document.querySelector(".test").innerHTML = basket;
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
  xhttp.send();
}

getApi();
