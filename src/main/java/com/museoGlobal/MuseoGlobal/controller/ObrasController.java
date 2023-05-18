package com.museoGlobal.MuseoGlobal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.museoGlobal.MuseoGlobal.documentos.Obras;
import com.museoGlobal.MuseoGlobal.repository.ObraRepository;

@RestController
@RequestMapping("api/obras")
@CrossOrigin(origins = "http://localhost:3000")
public class ObrasController {

	@Autowired
	private ObraRepository obraRepo;
	
	//Traer lista de obras
	@GetMapping
	public ResponseEntity<?> getAllObras(){
		try {
			List<Obras> obras = obraRepo.findAll();
			return new ResponseEntity<List<Obras>>(obras, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Traer obra especifica
	@GetMapping("/{id}")
	public ResponseEntity<?> getObraById(@PathVariable("id") Integer id) {
		try {
			Optional<Obras> obra = obraRepo.findById(id);
			if (obra.isPresent()) {
				return new ResponseEntity<Obras>(obra.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("Obra no encontrada", HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Agregar obra
	@PostMapping
	public ResponseEntity<Obras> saveObra(@RequestBody Obras obra) {
		try {
			Obras obrasave = obraRepo.save(obra);
			return new ResponseEntity<>(obrasave, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Actualizar obra
	@PutMapping("/{id}")
	public ResponseEntity<?> updateObra(@PathVariable("id") Integer id, @RequestBody Obras obra) {
		try {
			Optional<Obras> obraOpt = obraRepo.findById(id);
			if (obraOpt.isPresent()) {
				Obras obraToUpdate = obraOpt.get();
				obraToUpdate.setNombre(obra.getNombre());
                obraToUpdate.setAutor(obra.getAutor());
				obraToUpdate.setFechaCreacion(obra.getFechaCreacion());
                obraToUpdate.setPaisProcedencia(obra.getPaisProcedencia());
                obraToUpdate.setCategoria(obra.getCategoria());
                obraToUpdate.setDescripcion(obra.getDescripcion());
				obraToUpdate.setFoto(obra.getFoto());
				obraRepo.save(obraToUpdate);
				return new ResponseEntity<Obras>(obraToUpdate, HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("Obra no encontrada", HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Borrar obra
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteObra (@PathVariable Integer id) {
		try {
			obraRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
