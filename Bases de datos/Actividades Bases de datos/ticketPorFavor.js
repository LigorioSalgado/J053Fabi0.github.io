class Usuarios {
  constructor() {
    this.usuarios = [];
  }

  addUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  filtrarColados() {
    var usuariosConTicket = [];
    for (var i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].ticket) {
        usuariosConTicket.push(this.usuarios[i]);
      }
    }
    return usuariosConTicket;
  }
}

var usuarios = new Usuarios();
[
  { user: "User1", ticket: true },
  { user: "User2", ticket: true },
  { user: "User3", ticket: false },
  { user: "User4", ticket: true },
  { user: "User5", ticket: false },
  { user: "User6", ticket: false },
  { user: "User7", ticket: true },
  { user: "User8", ticket: true },
  { user: "User9", ticket: true },
  { user: "User10", ticket: false },
  { user: "User11", ticket: true },
].forEach((usuario) => {
  usuarios.addUsuario(usuario);
});

console.log(usuarios.filtrarColados());
