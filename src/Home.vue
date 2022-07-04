<template>
  <body>
    <h1>teste</h1>
    <Navbar />
    <main class="container">
      <div v-if="logged" id="home">
        <div v-if='menu'
        class="menu">
          <p>Menu lateral irá abrir quando clicar no botão</p>
        </div>
        <div class="dashboard">
          <h1>Resumo da sua Vida Financeira</h1>
          <button>Menu</button>
          <div class="general-balance">
            <div class="account-balance">
              <p>Ficará o saldo somado das contas</p>
            </div>
            <div class="investment-balance">
              <p>Ficará o saldo somado dos investimentos</p>
            </div>
            <div class="general-extract">
              <p>
                Ficará a % das receitas e a % das despesas já utilizada no ano
              </p>
            </div>
          </div>
          <div class="graphics">
            <p>
              Ficará um gráfico mostrando a trajetória anual da vida financeira
            </p>
          </div>
        </div>
      </div>
      <div v-else class="register">
        <button class="btn-register" v-on:@click="achei" v-if="teste">
          CADASTRE-SE
        </button>
        <Register v-else />
      </div>
      <footer id="footer">
        <p>&copy; 2022 Minha Vida Financeira</p>
      </footer>
    </main>
  </body>
</template>

<script>
import Register from "./components/Register.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Register,
  },
  data() {
    return {
      menu:false,
      logged: true,
      teste: false,
    };
  },
  computed: {},
  methods: {
    achei() {
      this.teste = false;
    },
  },
};
</script>
<style>
/* Main área de login */
.register {
  /* Imagem */
  background-image: url(../public/img/login.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 530px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-register {
  background: rgba(0, 0, 0, 0.75);
  font-size: 1.3em;
  color: whitesmoke;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
}

/* Dasboard */
#home {
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem;
  height: 100%;
  
}

.dashboard {
  display: block;
}
.general-balance{
  display: flex;  
  justify-content: space-between;
  margin: 50px;
  padding: 10px;
}
.graphics {
  margin: auto 50px;
  padding: 10px;
}


/* Footer */
#footer {
  margin-left: 1em;
  align-items: baseline;
}
p {
  color: #222;
}
</style>