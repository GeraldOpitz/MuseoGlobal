package com.museoGlobal.MuseoGlobal.documentos;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Obras")
public class Obras {
	@Id
	private int id; 
	private String nombre;
	private String autor;
	private Date fechaCreacion;
	private String paisProcedencia;
	private String categoria;
	private String descripcion;
	private String foto;
	
	public Obras() {}

	public Obras(int id, String nombre, String autor, Date fechaCreacion, String paisProcedencia, String categoria,
			String descripcion, String foto) {
		this.id = id;
		this.nombre = nombre;
		this.autor = autor;
		this.fechaCreacion = fechaCreacion;
		this.paisProcedencia = paisProcedencia;
		this.categoria = categoria;
		this.descripcion = descripcion;
		this.foto = foto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public String getPaisProcedencia() {
		return paisProcedencia;
	}

	public void setPaisProcedencia(String paisProcedencia) {
		this.paisProcedencia = paisProcedencia;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}
}
