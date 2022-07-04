<template>
  <card id="main-container">
    <h1>Cadastre-se para acessar o sistema</h1>
    <form id="register-form" action="" method="">
      <!-- action são os arquivos que eu quero acessar(utilizar qnd fazer o backend) e methods o método POST ou GET -->
      <div class="full-box">
        <label for="email">E-mail</label>
        <input
          class="input"
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
        />
      </div>
      <div class="half-box spacing">
        <label for="name">Nome</label>
        <input
          class="input"
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
        />
      </div>
      <div class="half-box">
        <label for="lastname">Sobrenome</label>
        <input
          class="input"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Digite seu sobrenome"
        />
      </div>
      <div class="half-box spacing">
        <label for="password">Senha</label>
        <input
          class="input"
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
        />
      </div>
      <div class="half-box">
        <label for="passconfirmation">Confirme sua senha</label>
        <input
          class="input"
          type="password"
          name="passconfirmation"
          id="passconfirmation"
          placeholder="Confirme sua senha"
        />
      </div>
      <div class="full-box">
        <input 
            class="input"
            type="submit" 
            id="btn-submit" 
            value="Registrar" 
            @click="sendSubmit"
        />
      </div>
      <p class="error-validation template"></p>
    </form>
  </card>
</template>
<script>
export default {
  name: "Register",
  data() {
  
  },
  methods: {
    sendSubmit(){   
        console.log('funcionou')
    },
   
  }
};
</script>
<style>
v-card {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-top: 5vh; /* view height -> 5% da tela  */
}
.input,
label {
  display: flex;
  width: 100%;
  border: none;
}
.input:focus,
label:focus {
  outline: none;
}
/* Form */
#main-container {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
}
#main-container h1 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.6rem; /* adaptada ao elemento root */
}
form {
  margin-right: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.full-box {
  flex: 1 1 100%;
  position: relative;
}
.half-box {
  flex: 1 1 45%;
  position: relative;
}
.spacing {
  margin-right: 5%;
}
label {
  font-weight: bold;
  font-size: 0.8rem;
}
.input {
  border-bottom: 2px solid #323232;
  padding: 10px;
  font-size: 0.9rem;
  margin-bottom: 40px;
}
.input:focus {
  border-color: rgb(105, 185, 24);
}
.input[type="submit"] {
    display: flex;
    justify-content: center;
  background-color: rgb(105, 185, 24);
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
}
/* Validações */
.error-validation {
  color: #ff1a1a;
  position: absolute;
  top: 57px;
  font-size: 0.8rem;
}
.template {
    display: none;
}

</style>
