<template>
        <nav>
      <div v-if="logged" class="nav">
        <div class="logo-url">
          <img src="../../public/img/logo.png" class="logo" />
        </div>
        <p>Seja bem vindo(a), {{ user }}</p>
        <a class="out">Sair</a>
      </div>
      <div v-else class="nav">
        <div class="logo-url">
          <img src="../../public/img/logo.png" class="logo" />
        </div>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </div>
    </nav>
</template>
<script>


export default {
name: 'Navbar',
  data() {
    return {
    user:'Eduardo',
    logged: false,
    }
  },

}
</script>
<style>
    .nav {
  background-color: #222;
  border-bottom: 4px solid #0000;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 35px;
}

.nav .logo-url {
  margin: auto;
  margin-left: 0;
}

.logo {
  
  width: 250px;
  height: 50px;
  margin-top: -5px;
}

 nav input {
  height: 25px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 0 5px;
  background-color: #f5f2e9;
}
.nav button {  
    background: rgb(105, 185, 24);
    color: #f5f2e9;
    font-weight: 600;
    height: 25px;
    width: 85px;
    border-radius: 40px;
    cursor: pointer;
    text-transform: uppercase;
  }

.nav button:hover {
  border: rgb(105, 185, 24);
}

.nav p {
  color: #f5f2e9;
  font-size: 12px;
  padding: 0 15px;
}
.nav a {
  color: rgb(212, 67, 67);
}

</style>
