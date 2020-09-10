<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Кофе-машина</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6 coffee-list d-flex flex-column justify-content-around">
          <div class="coffee-item" onclick="makeCoffee('Американо', 50)">
            <img src="img/americano.png" alt="Американо">
            <span>Американо - 50руб.</span>
          </div>
            <div class="coffee-item" onclick="makeCoffee('Капучино', 73)">
              <img src="img/cappuccino.png" alt="Капучино">
              <span>Капучино - 73руб.</span>
            </div>
            <div class="coffee-item" onclick="makeCoffee('Эспрессо', 61)">
              <img src="img/espresso.png" alt="Эспрессо">
              <span>Эспрессо - 61руб.</span>
            </div>
            <div class="coffee-item" onclick="makeCoffee('Латтэ', 112)">
              <img src="img/latte.jpg" alt="Латтэ">
              <span>Латтэ - 112руб.</span>
            </div>
          </div>
          <div class="col-6 coffee-oper">
            <div class="row">
                <div class="col-6">
                    <div class="display">
                      <p class="display-text">Выберите кофе</p> 
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
                            </div>
                        </div>
                    </div>
                  <div class="cup-container">
                    <img src="img/americano.png" alt="" class="cup">
                  </div>
                </div>
                <div class="col-6">
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Баланс">
                        <div class="input-group-append">
                          <span class="input-group-text">&#8381;</span>
                        </div>
                    </div>
                      <div class="atm-container">
                        <img src="img/bill_acc.png" alt="" class="atm">
                      </div>
                      <button class="btn btn-primary btn-block my-2">
                         Сдача
                      </button>
                    <div class="change-container">
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
   
    <!-- Optional JavaScript -->
    <script src="script.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>