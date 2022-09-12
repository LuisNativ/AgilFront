export class ResponseObjeto {
  codigo?: string;
  descripcion?: string;
  mensaje?: string;
  object?: any;

  constructor(data: any = null) {
    if (data) {
      this.codigo = String(data.codigo);
      this.descripcion = String(data.descripcion);
      this.mensaje = String(data.mensaje);
      this.object = data.object;
    }
  }
}
