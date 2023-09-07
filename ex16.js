class Usuario {
  usuarios = ["mario@luigi.com", "peach@apple.com"];
  
  constructor(email) {
    this.email = email;
  }
  
  esqueciSenha(email) {
    if (this.usuarios.includes(email)) {
      return EsqueciSenhaUtils.gerarToken(email);
    } else {
      return "E-mail não encontrado";
    }
  }
  
  validarToken(email, token) {
    return EsqueciSenhaUtils.validarToken(email, token);
  }
}

class EsqueciSenhaUtils {
  static gerarToken(email) {
    this.email = email
    this.token = parseInt(Math.random() * 9999)
    return this.token
  }
  static validarToken(email, token) {
    if(email === this.email && token === this.token) {
      return 'Validação confirmada.'
    } else {
      return 'Token incorreto.'
    }
  }
}